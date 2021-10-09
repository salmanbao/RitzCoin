import React, { useState, useMemo } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core'
import { Heading, Text, RowType } from '@pancakeswap-libs/uikit'
import orderBy from 'lodash/orderBy'
import partition from 'lodash/partition'
import useI18n from 'hooks/useI18n'
import { usePools, useBlock } from 'state/hooks'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import Coming from './components/Coming'
import PoolCard from './components/PoolCard'
import PoolTabButtons from './components/PoolTabButtons'
import Divider from './components/Divider'
import Select, { OptionProps } from './components/Select/Select'
import SearchInput from './components/SearchInput'
import ToggleView from './components/ToggleView/ToggleView'
import { DesktopColumnSchema, ViewMode } from './components/types'
import { RowProps } from './components/FarmTable/Row'
import Table from './components/FarmTable/FarmTable'





// import Select, { OptionProps } from './components/Select/Select'

// import { Image, Heading, RowType, Toggle, Text, Menu as UikitMenu } from '@pancakeswap-libs/uikit'

const Farm: React.FC = () => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const { account } = useWeb3React()
  const pools = usePools(account)
  const { blockNumber } = useBlock()
  const [stackedOnly, setStackedOnly] = useState(false)
  const [sortOption, setSortOption] = useState('hot')
  const [query, setQuery] = useState('')
  const [viewMode, setViewMode] = useState(ViewMode.TABLE)


  const [finishedPools, openPools] = useMemo(
    () => partition(pools, (pool) => pool.isFinished || blockNumber > pool.endBlock),
    [blockNumber, pools],
   )
  const stackedOnlyPools = useMemo(
    () => openPools.filter((pool) => pool.userData && new BigNumber(pool.userData.stakedBalance).isGreaterThan(0)),
    [openPools],
  )


//   const ControlContainer = styled.div`
//   display: flex;
//   width: 100%;
//   align-items: center;
//   position: relative;
//   justify-content: space-between;
//   flex-direction: column;

//   ${({ theme }) => theme.mediaQueries.sm} {
//     flex-direction: row;
//     flex-wrap: wrap;
//     padding: 16px 32px;
//   }
// `

  // const FilterContainer = styled.div`
  //   display: flex;
  //   align-items: center;
  //   width: 100%;
  //   padding: 8px 0px;
  //   ${({ theme }) => theme.mediaQueries.sm} {
  //     width: auto;
  //     padding: 0;
  //   }
  // `

  // const LabelWrapper = styled.div`
  //   > ${Text} {
  //     font-size: 12px;
  //   }
  // `

  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }
  
  const handleSortOptionChange = (option: OptionProps): void => {
    setSortOption(option.value)
  }


  // const rowData = stackedOnlyPools.map((farm) => {
    // const { quoteTokenAdresses, quoteTokenSymbol, tokenAddresses } = farm
    // const lpLabel = farm.lpSymbol && farm.lpSymbol.split(' ')[0].toUpperCase().replace('PANCAKE', '')

    // const row = farm
    // : RowProps = {
    //   apr: {
    //     value:
    //       farm.apy &&
    //       farm.apy.times(new BigNumber(100)).toNumber().toLocaleString('en-US', { maximumFractionDigits: 2 }),
    //     multiplier: farm.multiplier,
    //     lpLabel,
    //     quoteTokenAdresses,
    //     quoteTokenSymbol,
    //     tokenAddresses,
    //     cakePrice,
    //     originalValue: farm.apy,
    //   },
    //   farm: {
    //     image: farm.lpSymbol.split(' ')[0].toLocaleLowerCase(),
    //     label: lpLabel,
    //     pid: farm.pid,
    //   },
    //   earned: {
    //     earnings: farm.userData ? getBalanceNumber(new BigNumber(farm.userData.earnings)) : null,
    //     pid: farm.pid,
    //   },
    //   liquidity: {
    //     liquidity: farm.liquidity,
    //   },
    //   multiplier: {
    //     multiplier: farm.multiplier,
    //   },
    //   details: farm,
    // }

    // return row
  // })



  // const renderContent = (): JSX.Element => {
    // if (viewMode === ViewMode.TABLE) { // && rowData.length) {
    //   const columnSchema = DesktopColumnSchema

    //   const columns = columnSchema.map((column) => ({
    //     id: column.id,
    //     name: column.name,
    //     label: column.label,
    //     sort: (a: RowType<RowProps>, b: RowType<RowProps>) => {
    //       switch (column.name) {
    //         case 'farm':
    //           return b.id - a.id
    //         case 'apr':
    //           if (a.original.apr.value && b.original.apr.value) {
    //             return Number(a.original.apr.value) - Number(b.original.apr.value)
    //           }

    //           return 0
    //         case 'earned':
    //           return a.original.earned.earnings - b.original.earned.earnings
    //         default:
    //           return 1
    //       }
    //     },
    //     sortable: column.sortable,
    //   }))

    //   return <Table data={rowData} columns={columns} />
    // }

    // return (
    //   <div>
    //     <FlexLayout>
    //       <Route exact path={`${path}`}>
    //         {farmsStaked.map((farm) => (
    //           <FarmCard
    //             key={farm.pid}
    //             farm={farm}
    //             bnbPrice={bnbPrice}
    //             cakePrice={cakePrice}
    //             ethPrice={ethPriceUsd}
    //             account={account}
    //             removed={false}
    //           />
    //         ))}
    //       </Route>
    //       <Route exact path={`${path}/history`}>
    //         {farmsStaked.map((farm) => (
    //           <FarmCard
    //             key={farm.pid}
    //             farm={farm}
    //             bnbPrice={bnbPrice}
    //             cakePrice={cakePrice}
    //             ethPrice={ethPriceUsd}
    //             account={account}
    //             removed
    //           />
    //         ))}
    //       </Route>
    //     </FlexLayout>
    //   </div>
    // )
  // }
  return (
    <Page>
      <Hero>
        <div>
          <Heading as="h1" size="xxl" mb="16px" className="">
            {TranslateString(738, 'Syrup Pool')}
          </Heading>
          <ul style={{color:'#EAE2FC'}} >
            <li>{TranslateString(580, 'Stake CAKE to earn new tokens.')}</li>
            <li>{TranslateString(486, 'You can unstake at any time.')}</li>
            <li>{TranslateString(406, 'Rewards are calculated per block.')}</li>
          </ul>
        </div>
        <img src="/images/Image-syrup 4@2x.png" alt="SYRUP POOL icon" width={410} height={191} />
      </Hero>
      {/* <ControlContainer> */}
      {/* <ToggleView viewMode={viewMode} onToggle={(mode: ViewMode) => setViewMode(mode)} /> */}
    
      <PoolTabButtons stackedOnly={stackedOnly} setStackedOnly={setStackedOnly} />
      {/* <FilterContainer>
        <LabelWrapper>
          <Text>SORT BY</Text>
          <Select
            options={[
              {
                label: 'Hot',
                value: 'hot',
              },
              {
                label: 'APR',
                value: 'apr',
              },
              {
                label: 'Multiplier',
                value: 'multiplier',
              },
              {
                label: 'Earned',
                value: 'earned',
              },
              {
                label: 'Liquidity',
                value: 'liquidity',
              },
            ]}
            onChange={handleSortOptionChange}
          />
        </LabelWrapper>
        <LabelWrapper style={{ marginLeft: 16 }}>
          <Text>SEARCH</Text>
          <SearchInput onChange={handleChangeQuery} value={query} />
        </LabelWrapper>
      </FilterContainer> */}
      {/* </ControlContainer> */}
      
      <Divider />
      <FlexLayout>
        <Route exact path={`${path}`}>
          <>
            {stackedOnly
              ? orderBy(stackedOnlyPools, ['sortOrder']).map((pool) => <PoolCard key={pool.sousId} pool={pool} />)
              : orderBy(openPools, ['sortOrder']).map((pool) => <PoolCard key={pool.sousId} pool={pool} />)}
            <Coming />
          </>
        </Route>
        <Route path={`${path}/history`}>
          {orderBy(finishedPools, ['sortOrder']).map((pool) => (
            <PoolCard key={pool.sousId} pool={pool} />
          ))}
        </Route>
      </FlexLayout>
    </Page>
  )
}

const Hero = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr;
  margin-left: auto;
  margin-right: auto;
  max-width: 250px;
  padding: 48px 0;
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    font-size: 16px;
    li {
      margin-bottom: 4px;
    }
  }
  img {
    height: auto;
    max-width: 100%;
  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    margin: 0;
    max-width: none;
  }
`




export default Farm
