import React, { useContext } from 'react'
import { Menu as UikitMenu } from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'config/localisation/languageCodes'
import { LanguageContext } from 'contexts/Localisation/languageContext'
import useTheme from 'hooks/useTheme'
import useAuth from 'hooks/useAuth'
import { usePriceCakeBusd, useProfile } from 'state/hooks'
import styled from 'styled-components'
import config from './config'

const Menu = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const cakePriceUsd = usePriceCakeBusd()
  const { profile } = useProfile()

  
  return (
    <div className={isDark ? 'menu-theme-dark' : 'menu-theme-dark'}>
    
      {/* <div className={isDark ? 'menu-theme-dark' : 'menu-theme'}> */}
        <UikitMenu
          account={account}
          login={login}
          logout={logout}
          isDark={isDark}
          // isDark={true}

          toggleTheme={toggleTheme}
          currentLang={selectedLanguage && selectedLanguage.code}
          langs={allLanguages}
          setLang={setSelectedLanguage}
          cakePriceUsd={cakePriceUsd.toNumber()}
          links={config}
          profile={{
            username: profile?.username,
            image: profile?.nft ? `/images/nfts/${profile.nft?.images.sm}` : undefined,
            profileLink: '/profile',
            noProfileLink: '/profile',
            showPip: !profile?.username,
          }}
          {...props}
          className="custom-menu"
        />
      </div>
    
  )
}

export default Menu
