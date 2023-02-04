import { Socials } from '@/store/formStore'
import { FaFacebookF } from 'react-icons/fa'
import { IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5'
import { SlSocialVkontakte } from 'react-icons/sl'

type SharedLinkType = {
  id: number
  icon: JSX.Element
  link: string
  bgcolor: string
  value: Socials
}

export const SHARELINKS: SharedLinkType[] = [
  {
    id: 3,
    icon: <FaFacebookF size='1.2vw' color='white' />,
    link: 'https://www.facebook.com/sharer/sharer.php?u=https://github.com/KosyanMedia/test-tasks/tree/master/marketing',
    bgcolor: 'from-[#70ADFF] via-[#1977F3] to-[#064BA6]',
    value: 'facebook',
  },
  {
    id: 4,
    icon: <SlSocialVkontakte size='1.2vw' color='white' />,
    link: 'http://vk.com/share.php?url=https://github.com/KosyanMedia/test-tasks/tree/master/marketing',
    bgcolor: 'from-[#60AAFF] via-[#2787F5] to-[#005CC6]',
    value: 'vkontakte',
  },
  {
    id: 2,
    icon: <IoLogoTwitter size='1.2vw' color='white' />,
    link: 'https://twitter.com/intent/tweet?url=https://github.com/KosyanMedia/test-tasks/tree/master/marketing&text=Aviasales&hashtags=JS,REACT',
    bgcolor: 'from-[#73CAFF] via-[#1DA1F2] to-[#007CC8]',
    value: 'twitter',
  },
  {
    id: 1,
    icon: <IoLogoInstagram size='1.2vw' color='white' />,
    link: 'https://www.instagram.com/',
    bgcolor: 'from-[#D82D7E] via-[#DF406C] to-[#FA8F21]',
    value: 'instagram',
  },
]
