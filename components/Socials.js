// import links from next/link
import Link from "next/link";
import { RiTwitterXLine, RiTwitterXFill } from 'react-icons/ri';
import { FaStackOverflow, FaDiscord } from 'react-icons/fa';

// import icons
import {
  RiWhatsappLine,
  RiLinkedinLine,
  RiGithubLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-xl">
      <Link href={'https://x.com/Wonder80485309'} className='hover:text-accent transition-all duration-300'>
        <RiTwitterXLine />
      </Link>
      <Link href={'https://wa.me/2349069942948'} className='hover:text-accent transition-all duration-300'>
        <RiWhatsappLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/chinecherem-onovo-349427250/'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
      
      <Link href={'https://github.com/NecheHephzibah'} className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>

      <Link 
        href={'https://stackoverflow.com/users/edit/19970963'} 
        className='hover:text-accent transition-all duration-300'
      >
        <FaStackOverflow />
      </Link>

      {/* <Link 
        href={'https://discord.com/users/1154016772329054310'} 
        className='hover:text-accent transition-all duration-300'
      >
        <FaDiscord />
      </Link> */}
    </div>
  )
};

export default Socials;
