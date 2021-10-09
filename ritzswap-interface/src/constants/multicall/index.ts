import { ChainId } from 'nightmare-sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MUMBAI]: '0xb8e5B623C17B8b14B6B16E855786C60f7f78E310', //  TODO: CHANGE THIS
  [ChainId.MATIC]: '0xc7efb32470dEE601959B15f1f923e017C6A918cA',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
