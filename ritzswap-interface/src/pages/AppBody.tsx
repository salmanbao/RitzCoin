import React from 'react'
import styled from 'styled-components'
import { Card } from '@pancakeswap-libs/uikit'

export const BodyWrapper = styled(Card)`
  position: relative;
  width: 100%;
  max-width: 400px;
  z-index: 5;
  box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
  background-color:rgba(0,0,0,0.7) !important;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
