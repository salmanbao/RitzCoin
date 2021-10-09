// import React from 'react'
// import styled from 'styled-components'
// import { Text, Heading, BaseLayout, Button, LinkExternal, Flex, Image } from '@pancakeswap-libs/uikit'
// import { ifosConfig } from 'config/constants'
// import useI18n from 'hooks/useI18n'
// import useTheme from 'hooks/useTheme'
// import IfoCard from './components/IfoCard'
// import Title from './components/Title'
// import IfoCards from './components/IfoCards'

// const LaunchIfoCallout = styled(BaseLayout)`
//   border-top: 2px solid ${({ theme }) => theme.colors.textSubtle};
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-gap: 32px;
//   margin: 0 auto;
//   padding: 32px 10px;
//   .cardBox{border-radius:14px;box-shadow: 0 5px 20px rgb(0 0 0 / 10%); background-color: #fff !important;}
//   .cardBox:hover{
//     box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
//     transition: all 0.3s cubic-bezier(.25,.8,.25,1);
//   }
//   .textCenter{text-align: center !important;}
//   .contentCenter{justify-content: center;}
//   .ReadMorebtn{
//        color:#5AB2FF;
//       // background: linear-gradient(to bottom right,#9853af,#623AA2)
//       background:transparent !important;
//       border: 3px solid #5AB2FF;
//       border-radius:24px !important;
//       width: 241px !important;
//   }
//   .menu-theme-dark{ 
//     background: linear-gradient( 139.73deg, rgb(49, 61, 92) 0%, rgb(61, 42, 84) 100%) !important;
//   }
//   cardBox.menu-theme{ 
//     background-color: #fff !important;
//   }
//   ${({ theme }) => theme.mediaQueries.sm} {
//     grid-template-columns: 1fr 1fr;
//   }
  
// `

// const List = styled.ul`
//   color: ${({ theme }) => theme.colors.text};
//   margin-bottom: 16px;

//   & > li {
//     line-height: 1.4;
//     margin-bottom: 8px;
//   }
// `
// // const MenuCustomWrapper = styled.div`
// // div { 
// //   &:nth-child(1) {
// //   background: linear-gradient(139.73deg, rgb(49, 61, 92) 0%, rgb(61, 42, 84) 100%) !important;
// //   }
// // }`
// /**
//  * Note: currently there should be only 1 active IFO at a time
//  */
// const activeIfo = ifosConfig.find((ifo) => ifo.isActive)

// const Ifo = () => {
//   const TranslateString = useI18n()
//   const { isDark, toggleTheme } = useTheme()

//   return (
//     <div>
//       <IfoCards isSingle>
//         <IfoCard ifo={activeIfo} />
//       </IfoCards>
//       <LaunchIfoCallout>
//         <div className={ isDark ? "cardBox menu-theme-dark" :  "cardBox menu-theme" }>
//           <div>
//             <Title as="h2" mt={5} className="textCenter">{TranslateString(592, 'How to take part')}</Title>
//             <Heading mb="16px" className="textCenter">{TranslateString(594, 'Before Sale')}:</Heading>
//             <List>
//               <li className="textCenter" >{TranslateString(596, 'Buy CAKE and BNB tokens')}</li>
//               <li className="textCenter">{TranslateString(598, 'Get CAKE-BNB LP tokens by adding CAKE and BNB liquidity')}</li>
//             </List>
//             <Flex mb="16px" className="contentCenter">
//               <LinkExternal href="https://exchange.pancakeswap.finance/#/swap" mr="16px">
//                     {TranslateString(1060, 'Buy CAKE')}
//               </LinkExternal>
//               <LinkExternal href="https://exchange.pancakeswap.finance/#/add/BNB/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82">
//                 {TranslateString(1062, 'Get LP tokens')}
//               </LinkExternal>
//             </Flex>
//             <Heading mb="16px"className="textCenter">{TranslateString(600, 'During Sale')}:</Heading>
//             <List>
//               <li className="textCenter">{TranslateString(602, 'While the sale is live, commit your CAKE-LP tokens to buy the IFO tokens')}</li>
//             </List>
//             <Heading mb="16px"className="textCenter">{TranslateString(604, 'After Sale')}:</Heading>
//             <List>
//               <li className="textCenter">{TranslateString(606, 'Claim the tokens you bought, along with any unspent funds.')}</li>
//               <li className="textCenter">{TranslateString(608, 'Done!')}</li>
//             </List>
//             <Text as="div" pt="10px"className="textCenter">
//               <Button className="ReadMorebtn"
//                 as="a"
//                 variant="subtle"
//                 href="https://docs.pancakeswap.finance/core-products/ifo-initial-farm-offering"
//               >
//                 {TranslateString(610, 'Read more')}
//               </Button>
//             </Text>
//           </div>
//         </div>
//         <div className={ isDark ? "cardBox menu-theme-dark" :  "cardBox menu-theme" }>
//           <div>
//               <Image src="/images/ifo-bunny.svg" alt="ifo bunny" width={436} height={280} responsive />
//                 <div >
//                   <Title as="h2" className="textCenter">{TranslateString(512, 'Want to launch your own IFO?')}</Title>
//                   <Text mb={3} className="textCenter">
//                     {TranslateString(
//                       514,
//                       'Launch your project with PancakeSwap, Binance Smart Chain’s most-used AMM project and liquidity provider, to bring your token directly to the most active and rapidly growing community on BSC.',
//                     )}
//                   </Text>
//                   <div className="textCenter">
//                   <Button className="ReadMorebtn"
//                     as="a"
//                     mb={5}
//                     href="https://docs.google.com/forms/d/e/1FAIpQLScGdT5rrVMr4WOWr08pvcroSeuIOtEJf1sVdQGVdcAOqryigQ/viewform"
//                     external
//                   >
//                     {TranslateString(516, 'Apply to launch')}
//                   </Button>
//                   </div>
//                </div>
//             </div>
//         </div>
//        </LaunchIfoCallout>
//   </div> 
//   )
// }

// export default Ifo

export default []

