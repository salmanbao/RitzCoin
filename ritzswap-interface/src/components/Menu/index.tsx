import React, { useContext } from 'react'
import { Menu as UikitMenu } from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'constants/localisation/languageCodes'
import { LanguageContext } from 'hooks/LanguageContext'
import useTheme from 'hooks/useTheme'
import useGetPriceData from 'hooks/useGetPriceData'
import useGetLocalProfile from 'hooks/useGetLocalProfile'
import useAuth from 'hooks/useAuth'
import links from './config'
import { NGT } from '../../constants/index'

const Menu: React.FC = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const priceData = useGetPriceData()
  const ngtPriceUsd = priceData != null ? Number(priceData.data[NGT.address].price) : 0
  console.log(priceData)
  const profile = useGetLocalProfile()

  return (
    // <div className={isDark ? 'menu-theme-dark' : 'menu-theme'}>
    <div className={isDark ? 'menu-theme-dark' : 'menu-theme-dark'}>
      <UikitMenu
        links={links}
        account={account as string}
        login={login}
        logout={logout}
        // isDark={isDark}
        isDark={false}
        toggleTheme={toggleTheme}
        currentLang={selectedLanguage?.code || ''}
        langs={allLanguages}
        setLang={setSelectedLanguage}
        cakePriceUsd={ngtPriceUsd}
        profile={profile}
        {...props}
      />
    </div>
  )
}

export default Menu
