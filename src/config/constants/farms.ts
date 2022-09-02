import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'ODENA-BNB',
    lpAddresses: {
      97: '',
      56: '0x8b8cF279e5436E0465b055EfD11c25dEC408792E',
    },
    token: tokens.odena,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'ODENA-BUSD',
    lpAddresses: {
      97: '',
      56: '0x4A8EeB08ac1128df575E42e80fF29faA95CbAE96',
    },
    token: tokens.odena,
    quoteToken: tokens.busd,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'ODENA-USDC',
    lpAddresses: {
      97: '',
      56: '0x859CA1c3Ec72D276BD86a6a63808a11354D0D894',
    },
    token: tokens.odena,
    quoteToken: tokens.usdc,
  },
  {
    pid: 4,
    lpSymbol: 'ODENA-USDT',
    lpAddresses: {
      97: '',
      56: '0x71ad30bC9C5B5d3f735D6B1D9224C771Ba2f492c',
    },
    token: tokens.odena,
    quoteToken: tokens.usdt,
  },
  {
    pid: 5,
    lpSymbol: 'ODENA-BTC',
    lpAddresses: {
      97: '',
      56: '0xd3788A0A13A1545e1c5b2AB018E3d2b101Ae66Cc',
    },
    token: tokens.odena,
    quoteToken: tokens.btcb,
  },
  {
    pid: 6,
    lpSymbol: 'ODENA-ETH',
    lpAddresses: {
      97: '',
      56: '0x31cF2837352151dc611DEdD9551D4C3E8995018b',
    },
    token: tokens.odena,
    quoteToken: tokens.eth,
  },
]

export default farms
