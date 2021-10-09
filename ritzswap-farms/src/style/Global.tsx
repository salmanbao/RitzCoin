import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
    #wallet-connect-trustwallet, 
    #wallet-connect-mathwallet, 
    #wallet-connect-tokenpocket,
    #wallet-connect-walletconnect{
      display:none;
    }
    button[id="wallet-connect-safepal wallet"] {
      display: none;
    }
  }



  .menu-theme {
    div{
      &:nth-child(1) {}
    }
    div{
      &:nth-child(1) {}
    }
    div{
      &:nth-child(1) {}
    }
    div{
      &:nth-child(1) {}
    }
    div{
      &:nth-child(1) {}
    }
    div{
      &:nth-child(2) {
         button{
          > div
          {
            svg
            {
                display:none;
            }
            div{
                display:none;
            }
          }
         }
      }
    }
    nav {
      background-color: #5ab2ff !important;
      position:fixed;
      div {
        &:nth-child(1) {
          button {
            background: transparent !important;
          }
          svg {
            fill: #fff !important;
          }
         a svg {
            display: none;
        }
         a{
          width: 182px;
          background-image: url('/images/image-logo.png') !important;
          display:block !important;
          height:48px;
          background-size:cover;
      }
        }
        &:nth-child(2) {
          button {
            background: transparent !important;
            border: 2px solid #fff !important;
            color: #fff !important;
            // box-shadow: unset !important;
          }
        }
      }
    }
   
    .customMenuClassDrop div {
        color: #5ab2ff !important;
        margin-left:7px;
    }
    .customMenuClassDrop svg {
        fill: #5ab2ff !important;
    }
    .customMenuClassHome a.active {
        background: #5ab2ff !important;
        color: #fff !important;
        margin: 0px -16px !important;
        width: 120% !important;
        padding: 0px 20px !important;
      div {
        color: white !important;
      }
      svg {
        fill: #fff !important;
      }
    }
    a svg {
      fill: #5ab2ff !important;
    }
    .customMenuClass a.active svg {
      fill: white !important;
      margin-right:12px !important;
    }
    .customMenuClassDrop {
       border-bottom: 1px solid #eaeaea !important;
    }
    .customMenuClass {
       border-bottom: 1px solid #eaeaea !important;
    }
    .customMenuClass a div {
       color: #5ab2ff !important;
       margin-left:7px;
    }
    .customMenuClass a.active div {
        color: white !important;
    }
    .customMenuClass a.active {
        background: #5ab2ff !important;
        color: #fff !important;
        margin: 0px -16px !important;
        width: 120% !important;
        padding: 0px 27px !important;
    }
    .customMenuClassDrop + div {
      div {
        // box-shadow: none !important;
        color:#5ab2ff !important;
      }
      a.active {
        background-color:#F2EDF3;
        margin: 0 -32px;
        padding: 0 32px;
        width: 150%;
      }
    }

  }
  .menu-theme-dark {
    div{
      &:nth-child(1) {}
    }
    div{
      &:nth-child(1) {}
    }
    div{
      &:nth-child(1) {}
    }
    div{
      &:nth-child(1) {}
    }
    div{
    }
    div{
      &:nth-child(2) {
         button{
           div
          {
            svg
            {
                display:none;
            }
            div{
                display:none;
            }
          }
         }
      }
    }
    nav {
      background-color:#afabc9!important;
      position:fixed !important;
      div {
        &:nth-child(1) {
          button {
            // background: #fff !important;
          }
          svg {
            fill: #FFF !important;
          }
          a svg {
            display: none;
        }
         a{
          width: 182px;
          background-image: url('/images/image-logo.png') !important;
          display:block !important;
          height:48px;
          background-size:cover;
      }
        }
        &:nth-child(2) {
          button {
            color: #afabc9 !important;
            background: #fff !important;
            margin-top:10px;
          }
            a svg {
              display: none;
          }
          a{
            background-image: url('/images/newbunny.svg') !important;
            display:block !important;
            height:50px;
            width:50px;
            background-size:cover;
        } 
            a + div{
              display: none !important;
            }
        }
      }
    }

    .customMenuClassDrop + div {
      div {
        // box-shadow: none !important;
        color:#afabc9 !important;
      }
      a.active {
        background-color:#afabc9;
        margin: 0 -32px;
        padding: 0 32px;
        width: 150%;
        color:#fff !important;
      }
    }
    .customMenuClassDrop div {
          color: #afabc9 !important;
          margin-left:7px;
    }
    .customMenuClassDrop svg {
       fill: #afabc9 !important;
       margin-left:7px !important;
    }
    .customMenuClassHome a.active {
        background-color: #afabc9 !important;
        color: #fff !important;
        margin: 0px -16px !important;
        width: 120% !important;
        padding: 0px 20px !important;
      div {
          color: white !important;
      }
      svg {
         fill: #fff !important;
      }
    }
    .customMenuClass a svg {
       fill: #afabc9 !important;
    }
    .customMenuClass a.active svg {
       fill: white !important;
    }
    .customMenuClassDrop {
      background-color : rgba(0,0,0,0.7);

        border-bottom: 1px solid #afabc9 !important;
    }
    .customMenuClass {
      background-color : rgba(0,0,0,0.7);
       border-bottom: 1px solid #afabc9 !important;
    }
    .customMenuClass a div {
      
       color: #afabc9 !important;
       margin-left:7px;
    }
    .customMenuClass a.active div {
       color: white !important;
    }
    .customMenuClass a.active {
      
        background: #afabc9 !important;
        color: #fff !important;
        margin: 0px -16px !important;
        width: 120% !important;
        padding: 0px 27px !important;
    }
  }
  #changemodel-butn{
    background-color: #AFABCA !important;
  }
  .changeCardColor
  {
      background-color: rgba(0, 0, 0, 0.7) !important;
      border:3px solid #afabc9 !important;
      box-shadow: 0 5px 20px rgb(0 0 0 / 10%) !important; 
  }
  .changeCardColor:hover{
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }
  .search-btn{
    background-color: #AFABCA !important;
  }
  .model-inner button svg{
    fill:#DFD7F0 !important;
  }
  #wallet-connect-metamask > div{
    color:#EAE2FC !important;
  }
  #wallet-connect-mathwallet > div{
    color:#EAE2FC !important;
  }
  #wallet-connect-trustwallet > div{
    color:#EAE2FC !important;
  }
  #wallet-connect-tokenpocket > div{
    color:#EAE2FC !important;
  }
  #wallet-connect-binance > div{
    color:#EAE2FC !important;
  }
  body button[id="wallet-connect-binance chain wallet"] > div{
    color:#EAE2FC !important;
  }
  body button[id="wallet-connect-safepal wallet"] + a {
    color:#EAE2FC !important;
  }
  body button[id="wallet-connect-safepal wallet"] + a > svg {
    fill:#EAE2FC !important;
  }
  #root > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button > svg  {  
    fill:#EAE2FC !important
  } 
  .MenuCustomWrapper > div {
    background-color:tranparent !important;
  }
  .LotteryCustomWrapper {
    .menu-theme-dark{ 
      background: linear-gradient(139.73deg, rgb(49, 61, 92) 0%, rgb(61, 42, 84) 100%) !important;
    }
    .menu-theme{ 
        background-color: #E2ECFF !important;
    }
  }
    .menu-theme-dark > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)  {  
      background-color: rgba(0,0,0,0.7) !important;
    } 
    .menu-theme-dark > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)  {  
      background-color: rgba(0,0,0,0.7) !important;
    }
  ::-webkit-scrollbar-thumb{
      background:#afabc9 !important;
      border-radius: 8px;
  }
  .SyruptextColor{
      color:#A28BD4 !important;
  }
  .rewardstextColor{
      color:#A28BD4 !important; 
  }
  #root{
    background-image: url('images/background.svg');
    background-repeat: no-repeat !important;
    background-size: cover;
  }

  
`

export default GlobalStyle
