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
  #wallet-connect-metamask > div{
     color:#fff !important;
    }
    button[id="wallet-connect-binance chain wallet"] > div{
      color:#EAE2FC !important;
    }
    #root > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > a {
      fill: #EAE2FC !important;
      color: #fff;
  }
  #root > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > a > svg {
    fill: #EAE2FC !important;
    color: #fff;
  }
  body button[id="wallet-connect-binance chain wallet"] > div {
    color: #EAE2FC !important;
  }
  #root > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button > svg {
    fill: #EAE2FC !important;
  }
  #token-search-input:focus{
    border: 1px solid #EAE2FC !important;
  }
   #swap-button{
      box-shadow:unset !important;
      box-shadow:unset !important;
      border-radius:7px !important;
      border: 2px solid #afabc9 !important; 
      // padding: 7px 30px !important;
      color: #afabc9 !important;
      height:44px !important;
      padding: 0 13px !important;
      background:#fff !important;
      transition:2s;
      opicity:2.5!important;
    }
    #swap-button:hover{
      color:#9A6AFF !important;
      transition:2s;
      border:2px solid #9A6AFF;
      background-color:#fff !important;
      opicity:none !important;
    }
    #swap-currency-input button{
      color:#EAE2FC important;
    }
    #root > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div > a {
      color: #EAE2FC !important;
  }
  #root > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div > a > svg {
    fill: #EAE2FC !important;
  }
  #root > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div > div {
    color: #fff;
  }
  #root > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div > div > svg {
    fill: #fff;
  }
  #root > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div + div > button {
    background-color: #483F5A !important;
    border: 1px solid #afabc9 !important;
    box-shadow: 0 5px 20px rgb(0 0 0 / 10%) !important;
    color: #fff;
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
      background-color: #5ab2ff !important;
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
            box-shadow: unset !important;
          }
        }
      }
    }
    .customMenuClassHome {
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
    }
    .customMenuClass {
       border-bottom: 1px solid #eaeaea !important;
    }
    .customMenuClass a div {
       color: #5ab2ff !important;
       margin-left: 7px !important;

    }
    .customMenuClass a.active div {
        color: white !important;
    }
    .customMenuClassDrop {
      border-bottom: 1px solid #eaeaea !important;
      background: #5ab2ff !important;
      svg {
        fill:#fff !important;
        margin-left:7px !important;
      }
      div {
        color:#fff !important;
        margin-left: 7px !important;
      }
    }
    .customMenuClassDrop + div {
      div {
        box-shadow: none !important;
        color:#5ab2ff !important;
      }
      a.active {
        background-color:#F2EDF3;
        margin: 0 -32px;
        padding: 0 32px;
        width: 150%;
      }
    }
    .AddButton{
      box-shadow:unset !important;
      border-radius:7px !important;
      border: 2px solid #9A6AFF !important; 
      // padding: 7px 30px !important;
      color: #9A6AFF !important;
      height:44px !important;
      padding: 0 13px !important;
    }
    .AddButton:hover{
      color:##AFABC9 !important;
      border:2px solid ##AFABC9;
      background-color:transparent;
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
      &:nth-child(1) {}
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
      background-color: #afabc9 !important;
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
    #root{
      background-image: url('images/background.svg');
      background-repeat: no-repeat !important;
      background-size: cover !important;
      height:100vh !important;
    }                                                                                                               
    .customMenuClassHome 
     {
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
      border-bottom: 1px solid #eaeaea !important;
      background:#afabc9 !important;
      box-shadow: unset !important;
      div {
        color: #fff !important;
        margin-left:7px !important;
      }
      svg {
        fill: #fff !important;
        margin-left:7px !important;
      }
    }
    .customMenuClassDrop + div {
      div {
        box-shadow:none !important;
        color:#afabc9 !important;
      }
      a.active {
        background-color:#F2EDF3;
        margin: 0 -32px;
        padding: 0 32px;
        width: 150%;
        color:#fff !important;
      }
    }
    .customMenuClass {
       border-bottom: 1px solid #34395a !important;
    }
    .customMenuClass a div {
      color: #afabc9 !important;
      margin-left: 7px !important;
    }
    .customMenuClass a.active div {
      color: white !important;
    }
    .AddButton{
        color:#483F5A !important;
        transition:2s;
        border:2px solid #483F5A;
        background-color:#fff !important;
        opicity:none !important;
    }
    .AddButton:hover{
      background-color: #483F5A !important;
      border: 1px solid #afabc9 !important;
      box-shadow: 0 5px 20px rgb(0 0 0 / 10%) !important;
      color:#fff !important;
      opicity:none !important;
    }
    .AddButton:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
      opacity: unset !important;
  }
  }
 
  .menu-theme{ 
    width:100% !important;
  }     
  .menu-theme-dark {
    width:100% !important;
  }
  ::-webkit-scrollbar-thumb
  {
    background:#afabc9 !important;
    border-radius: 8px;
  } 
  .menu-theme-dark > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)  {  
    background-color: rgba(0,0,0,0.7) !important;
  } 
  .menu-theme-dark > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)  {  
    background-color: rgba(0,0,0,0.7) !important;
  }
    
  
`

export default GlobalStyle
