import React from 'react'
import styled from 'styled-components'
import orderBy from 'lodash/orderBy'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon } from '@pancakeswap-libs/uikit'
import { NavLink } from 'react-router-dom'
import pools from 'config/constants/pools'
import { Pool } from 'state/types'

const StyledFarmStakingCard = styled(Card)`
  background: linear-gradient(#A28BD4, #7645d9);
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  :hover{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
   
  }
  .card-color{
  // background: linear-gradient(to bottom right ,#9853af,#623AA2) !important;}
  .heading-size{fontsize:18px !important}
  .Arowcircle{
    height:29px;
    width:29px;
    border-radius:50%;
    border:2px solid #fff;
  }
`
const CardMidContent = styled(Heading).attrs({ size: 'lg' })`
  line-height: 44px;
`
const EarnAssetCard = () => {
  const activeNonCakePools = pools.filter((pool) => !pool.isFinished && !pool.earningToken.symbol.includes('CAKE'))
  const latestPools: Pool[] = orderBy(activeNonCakePools, ['sortOrder', 'pid'], ['desc', 'desc']).slice(0, 3)
  // Always include CAKE
  const assets = ['CAKE', ...latestPools.map((pool) => pool.earningToken.symbol)].join(', ')

  return (
    <StyledFarmStakingCard>
      <CardBody className="card-color">
        <Heading color="contrast" size="lg" className="heading-size">
          Earn
        </Heading>
        <CardMidContent color="invertedContrast">{assets}</CardMidContent>
        <Flex justifyContent="space-between">
          <Heading color="contrast" size="lg" className="heading-size">
            in Pools
          </Heading>
          <NavLink exact activeClassName="active" to="/syrup" id="pool-cta">
            <ArrowForwardIcon mt={30} color="secondry" className="Arowcircle"/>
          </NavLink>
        </Flex>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default EarnAssetCard
