import facebook from './img/icon-facebook.svg'
import twitter from './img/icon-twitter.svg'
import instagram from './img/icon-instagram.svg'
import youtube from './img/icon-youtube.svg'
import up from './img/icon-up.svg'
import down from './img/icon-down.svg'

export const data = [
  {
    name: 'facebook',
    nameChanel: '@nathanf',
    count: '1987',
    subscribers: 'FOLLOWERS',
    countToday: '12',
    growth: up,
    color: 'card__line-fb',
    imgSrc: facebook
  },
  {
    name: 'twitter',
    nameChanel: '@nathanf',
    count: '1044',
    subscribers: 'FOLLOWERS',
    countToday: '99',
    growth: up,
    color: 'card__line-tw',
    imgSrc: twitter
  },
  {
    name: 'instagram',
    nameChanel: '@realnathanf',
    count: '11k',
    subscribers: 'FOLLOWERS',
    countToday: '1099',
    growth: up,
    color: 'card__line-ig',
    imgSrc: instagram
  },
  {
    name: 'youtube',
    nameChanel: 'Nathan F.',
    count: '8239',
    subscribers: 'SUBSCRIBERS',
    countToday: '144',
    growth: down,
    color: 'card__line-yt',
    imgSrc: youtube
  }
]

export const overwiew = [
  {
    params: 'Page Views',
    imgSrc: facebook,
    counter: '87',
    growthCounter: '3',
    growth: up
  },
  {
    params: 'Likes',
    imgSrc: facebook,
    counter: '52',
    growthCounter: '2',
    growth: down
  },
  {
    params: 'Likes',
    imgSrc: instagram,
    counter: '5462',
    growthCounter: '2257',
    growth: up
  },
  {
    params: 'Profile Views',
    imgSrc: instagram,
    counter: '52k',
    growthCounter: '1375',
    growth: up
  },
  {
    params: 'Retweets',
    imgSrc: twitter,
    counter: '117',
    growthCounter: '303',
    growth: up
  },
  {
    params: 'Likes',
    imgSrc: twitter,
    counter: '507',
    growthCounter: '553',
    growth: up
  },
  {
    params: 'Likes',
    imgSrc: youtube,
    counter: '107',
    growthCounter: '19',
    growth: down
  },
  {
    params: 'Total Views',
    imgSrc: youtube,
    counter: '1407',
    growthCounter: '12',
    growth: down
  },
]