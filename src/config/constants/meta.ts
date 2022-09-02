import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Odon Finance',
  description:
    'The most popular AMM on BSC by user count! Earn ODENA through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens on a platform you can trust.',
  image: 'https://Odon Finance.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Odon Finance')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Odon Finance')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Odon Finance')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Odon Finance')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Odon Finance')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Odon Finance')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('Odon Finance')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Odon Finance')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Odon Finance')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('Odon Finance')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('Odon Finance')}`,
      }
    default:
      return null
  }
}
