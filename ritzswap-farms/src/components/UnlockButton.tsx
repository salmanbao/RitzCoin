import React from 'react'
import styled from 'styled-components'
import { Button, useWalletModal } from '@pancakeswap-libs/uikit'
import useAuth from 'hooks/useAuth'
import useI18n from 'hooks/useI18n'

const UnlockButton = (props) => {
  const TranslateString = useI18n()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)
  
  const UnlockButtonWallet = styled.div`{
    .unlock-btn{
      color: #fff;
      background: #A28BD4 !important;
      border-color: #fff !important];
    }
  }`
  return (
    <UnlockButtonWallet>
      <Button variant="subtle" className="unlock-btn" onClick={onPresentConnectModal} {...props}>
        {TranslateString(292, 'Unlock Wallet')}
      </Button>
    </UnlockButtonWallet>
  )
}

export default UnlockButton
