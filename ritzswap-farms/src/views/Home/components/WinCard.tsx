import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon } from '@pancakeswap-libs/uikit'
import { NavLink } from 'react-router-dom'
import useLotteryTotalPrizesUsd from 'hooks/useLotteryTotalPrizesUsd'

const StyledFarmStakingCard = styled(Card)`
  background-color : rgba(0,0,0,0.7);
  margin-left: auto;
  margin-right: auto;
  width: 100%;
//  box-shadow: 0 5px 20px rgb(0 0 0 / 10%);
//  border:1px solid #8F4FA0 !important;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }
  .Arowcircle{
    height:29px;
    width:29px;
    border-radius:50%;
    border:2px solid #A28BD4 !important;
    fill:#afabca !important;
  }
`
const CardMidContent = styled(Heading).attrs({ size: 'lg' })`
  line-height: 44px;
`
const WinCard = () => {
  const lotteryPrize = Math.round(useLotteryTotalPrizesUsd()).toLocaleString()

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading color="contrast" size="lg">
          Lottery with
        </Heading>
        <CardMidContent color="#7645d9">${lotteryPrize}</CardMidContent>
        <Flex justifyContent="space-between">
          <Heading color="contrast" size="lg">
            up for grabs
          </Heading>
          <NavLink exact activeClassName="active" to="/lottery" id="lottery-pot-cta">
            <ArrowForwardIcon mt={30} color="sublte" className="Arowcircle" />
          </NavLink>
        </Flex>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default WinCard
