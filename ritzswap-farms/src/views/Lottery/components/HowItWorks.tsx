import React from 'react'
import styled from 'styled-components'
import { Text, Heading, Link, Image } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'

const LayoutWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto 40px;
  display: flex;
  flex-direction: column;
  .pancakeinfo{
    text-align:center !important;
  }
  .loteryreadmore{
    border:2px solid #9A6AFF;
    padding:7px 30px;
    color:#9A6AFF;
    // border-radius:32px;
  }
  .loteryreadmore:hover{
    border:2px solid #fff;
    background:#fff;
    transition:2s;
    padding:7px 30px;
    color:#9A6AFF;
    text-decoration:none !important;
  }
`

const StyledHeading = styled(Heading)`
  margin: 16px 0;
`

const StyledImage = styled(Image)`
  align-self: center;
`

const StyledLink = styled(Link)`
  align-self: center;
  margin-top: 16px;
`

const HowItWorks = () => {
  const TranslateString = useI18n()

  return (
    <LayoutWrapper>
      <StyledImage src="/images/Image-lottery 6@2x.png" alt="lottery bunny" width={190} height={190} />
      <StyledHeading size="xl" as="h3" color="secondary"  className="pancakeinfo">
        {TranslateString(632, 'How it works')}
      </StyledHeading>
      <Text fontSize="16px"className="pancakeinfo">
        {TranslateString(
          426,
          'Spend CAKE to buy tickets, contributing to the lottery pot. Win prizes if 2, 3, or 4 of your ticket numbers match the winning numbers and their exact order!',
        )}
      </Text>
      <StyledLink href="https://docs.pancakeswap.finance/lottery-1" className="loteryreadmore">{TranslateString(610, 'Read more')}</StyledLink>
    </LayoutWrapper>
  )
}

export default HowItWorks
