import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { getBalanceNumber, formatLocalisedCompactNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { getCakeAddress } from 'utils/addressHelpers'
import { useTranslation } from 'contexts/Localization'
import CardValue from './CardValue'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0
  const chyPriceBusd = usePriceCakeBusd()
  const mcap = chyPriceBusd.times(cakeSupply)
  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {t('Odena Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{t('Total Supply')}</Text>
          {cakeSupply && <CardValue color="#e23816 "  fontSize="14px" value={cakeSupply} />}
        </Row>
        <Row>
          <Text fontSize="14px">{t('Total Burned')}</Text>
          <CardValue color="#e23816 "  fontSize="14px" decimals={0} value={burnedBalance} />
        </Row>
        <Row>
          <Text fontSize="14px">{t('Odena Price')}</Text>
          <CardValue color="#e23816 "  fontSize="14px" decimals={6} value={chyPriceBusd.toNumber()} />
        </Row>
        <Row>
          <Text fontSize="14px">{t('Market Cap')}</Text>
          <CardValue color="#e23816 "  fontSize="14px" decimals={6} value={mcap.toNumber()} />
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
