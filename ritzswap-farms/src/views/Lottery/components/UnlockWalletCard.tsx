import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Ticket, } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import UnlockButton from 'components/UnlockButton'

const CardWrapper = styled(Card)`
.changeCardColor
{
  border:3px solid #A28BD4 !important;
}
:hover{
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
`
const StyledCardBody = styled(CardBody)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height:300px !important;
  box-shadow: 0 5px 20px rgb(0 0 0 / 10%) !important;

`

const StyledHeading = styled(Heading)`
  margin: 24px 0;
`

const IconWrapper = styled.div`
  svg {
    width: 80px;
    height: 80px;
  }
`

const UnlockWalletCard = () => {
  const TranslateString = useI18n()

  return (
    <CardWrapper>
    <Card className="changeCardColor">
      <StyledCardBody>
        <IconWrapper>
        <img src="/images/ticket-lottery.svg" alt="BigCo Inc. logo" style={{width:'100px',height:'100px'}} />
          {/* <Ticket /> */}
        </IconWrapper>
        <StyledHeading size="md">{TranslateString(1080, 'Unlock wallet to access lottery')}</StyledHeading>
        <div className="mb-5">
            <UnlockButton />
        </div>
      </StyledCardBody>
    </Card>
    </CardWrapper>
  )
}

export default UnlockWalletCard
