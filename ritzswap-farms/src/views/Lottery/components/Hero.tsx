import React from 'react'
import styled from 'styled-components'
import { Heading, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import useTheme from 'hooks/useTheme'
import Container from 'components/layout/Container'
import LotteryProgress from './LotteryProgress'

const Title = styled(Heading).attrs({ as: 'h1', size: 'xl' })`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 5px;
  text-align:center !important;
`

const Blurb = styled(Text)`
  text-align:center !important;
  font-size: 20px;
  font-weight: 600;
`

// background-image: linear-gradient(180deg, #53dee9 0%, #1fc7d4 100%);
const StyledHero = styled.div`

  background-image: url('/images/nfts/banner-bg.png');
  padding-bottom: 40px;
  padding-top: 40px;
`

const StyledContainer = styled(Container)`
  display: flex;

  flex-direction: column;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
  }
`

const LeftWrapper = styled.div`
  flex: 1;
  padding-right: 0;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-right: 24px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-right: 32px;
  }
`

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-left: 0;
  margin-top: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 0;
    padding-left: 24px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 32px;
  }
`

const Hero = () => {
  const TranslateString = useI18n()
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="LotteryCustomWrapper">
      <div className={ isDark ? "menu-theme-dark" :  "menu-theme-dark" }>

      {/* <div className={ isDark ? "menu-theme-dark" :  "menu-theme" }> */}
      <StyledHero>
        <StyledContainer>
          <LeftWrapper>
            <Title>{TranslateString(708, 'The CAKE Lottery')}</Title>
            <Blurb>{TranslateString(710, 'Buy tickets with CAKE')}</Blurb>
            <Blurb>{TranslateString(712, 'Win if 2, 3, or 4 of your ticket numbers match!')}</Blurb>
          </LeftWrapper>
          <RightWrapper>
            <LotteryProgress />
          </RightWrapper>
        </StyledContainer>
      </StyledHero>
      </div>
    </div>
  )
}

export default Hero
