import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    calloutClass: 'customMenuClass',
    icon: 'HomeIcon',
    href: 'https://nightmare.arhamsoft.org/',
  },
  {
    label: 'Trade',
    calloutClass: 'customMenuClassDrop',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
        calloutClass: 'customMenuClassDrop1',
      },
      {
        label: 'Liquidity',
        calloutClass: 'customMenuClassDrop2',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    calloutClass: 'customMenuClass',
    icon: 'FarmIcon',
    href: 'https://nightmare.arhamsoft.org/farms',
    // href: 'https://pancake.arhamsoft.org/farms',

  },
  {
    label: 'Pools',
    calloutClass: 'customMenuClass',
    icon: 'PoolIcon',
    href: 'https://nightmare.arhamsoft.org/pools',
    // href: 'https://pancake.arhamsoft.org/pools',

  },
  {
    label: 'Lottery',
    calloutClass: 'customMenuClass',
    icon: 'TicketIcon',
    href: 'https://nightmare.arhamsoft.org/lottery',
    // href: 'https://pancake.arhamsoft.org/lottery',
    status: {
      text: 'WIN',
      color: 'warning',
    },
  },
  // {
  //   label: 'Collectibles',
  //   icon: 'NftIcon',
  //   href: 'https://pancakeswap.finance/nft',
  // },
  // {
  //   label: 'Team Battle',
  //   icon: 'TeamBattleIcon',
  //   href: 'https://pancakeswap.finance/competition',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: 'https://pancakeswap.finance/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: 'https://pancakeswap.finance/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: 'https://pancakeswap.finance/profile',
  //     },
  //   ],
  // },
  // {
  //   label: 'Info',
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
  //   href: 'https://pancakeswap.finance/ifo',
  // },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: 'Contact',
  //       href: 'https://docs.pancakeswap.finance/contact-us',
  //     },
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
  //     {
  //       label: 'Merch',
  //       href: 'https://pancakeswap.creator-spring.com/',
  //     },
  //   ],
  // },
]

export default config
