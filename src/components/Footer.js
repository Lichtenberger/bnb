import { FaTwitter, FaFacebook } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    const icons = [
    <FaTwitter />,
    <FaXTwitter />,
    <FaFacebook />,
    <FaSquareInstagram />,
]
  return (
    <div className='sticky bottom-0 h-14 w-full bg-[#7d70f7] border-t-1 gap-6 flex items-center justify-center'>
        {icons.map((icon) => (
            <div className='text-[30px] text-gray hover:text-black duration-200 ease-out'>
                {icon}
            </div>
        ))}
    </div>
  )
}

export default Footer
