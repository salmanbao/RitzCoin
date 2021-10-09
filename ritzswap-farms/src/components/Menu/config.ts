import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
    // calloutClass: 'customMenuClassHome'
    calloutClass: 'customMenuClass',
  },
  {
    label: 'Trade',
    calloutClass: 'customMenuClassDrop',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        // href: 'https://exchange.pancakeswap.finance',
        href: 'https://nightmare-exchange.arhamsoft.org/#/swap',

      },
      {
        label: 'Liquidity',
        // href: 'https://exchange.pancakeswap.finance/#/pool',
        href: 'https://nightmare-exchange.arhamsoft.org/#/pool',

      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    calloutClass: 'customMenuClass',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    calloutClass: 'customMenuClass',
    href: '/pools',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    calloutClass: 'customMenuClass',
    href: '/lottery',
  },
  // {
  //   label: 'Collectibles',
  //   icon: 'NftIcon',
  //   calloutClass: 'customMenuClass',
  //   href: '/collectibles',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'customMenuClassDrop',
  //   // calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: '/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: '/profile',
  //     },
  //   ],
  // },
  // {
  //   label: 'Info',
  //   calloutClass: 'customMenuClassDrop',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: 'https://pancakeswap.info',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: 'https://pancakeswap.info/tokens',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: 'https://pancakeswap.info/pairs',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: 'https://pancakeswap.info/accounts',
  //     },
  //   ],
  // },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   calloutClass: 'customMenuClass',
  //   href: '/ifo',
  // },
  // {
  //   label: 'More',
  //   calloutClass: 'customMenuClassDrop',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: 'Voting',
  //       href: 'https://voting.pancakeswap.finance',
  //     },
  //     {
  //       label: 'Github',
  //       href: 'https://github.com/pancakeswap',
  //     },
  //     {
  //       label: 'Docs',
  //       href: 'https://docs.pancakeswap.finance',
  //     },
  //     {
  //       label: 'Blog',
  //       href: 'https://pancakeswap.medium.com',
  //     },
  //   ],
  // },
]

export default config
