import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faXTwitter,
  faPinterestP
} from '@fortawesome/free-brands-svg-icons'
import { faClone } from '@fortawesome/free-regular-svg-icons'

const SocialShare = () => {
  return(
    <>
      <div className='flex items-center gap-x-4'>
        <span>Share product:</span>
        <ul className='flex justify-start items-center gap-x-3 [&_li_svg]:w-4 '>
          <li>
            <FontAwesomeIcon icon={faClone} />
          </li>
          <li>
            <FontAwesomeIcon icon={faFacebook} />
          </li>
          <li>
            <FontAwesomeIcon icon={faXTwitter} />
          </li>
          <li>
            <FontAwesomeIcon icon={faPinterestP} />
          </li>
        </ul>
      </div>
    </>
  )
}

export default SocialShare