import { VercelRequest, VercelResponse } from "@vercel/node";
import { getAddress } from "@ethersproject/address";
import { getTopPairs } from "../../utils";
import { return200, return500 } from "../../utils/response";

interface ReturnShape {
  [tokenAddress: string]: {
    name: string;
    symbol: string;
    price: string; // remove this
    price_ETH: string;
  };
}

export default async function (req: VercelRequest, res: VercelResponse): Promise<void> {
  try {
    const topPairs = await getTopPairs();
    console.log(topPairs)
    const tokens = topPairs.reduce<ReturnShape>((accumulator, pair): ReturnShape => {
      for (const token of [pair.token0, pair.token1]) {
        const tId = getAddress(token.id);

        accumulator[tId] = {
          name: token.name,
          symbol: token.symbol,
          price: pair.price, // remove this
          price_ETH: token.derivedETH,
        };
      }

      return accumulator;
    }, {});

    return200(res, { updated_at: new Date().getTime(), data: tokens });
  } catch (error) {
    return500(res, error);
  }
}
