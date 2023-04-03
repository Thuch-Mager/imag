import { useState } from 'react';
import { FiBell, FiChevronDown, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { useGlobalContext } from '../contexts/GlobalContextProvider'


export default function Appbar() {

    const { profile, setOpenModal } = useGlobalContext();
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex items-center justify-between md:px-[5%] px-3 bg-blue-400">
        <div className="md:h-[5rem] h-[3.5rem] md:w-[11rem] w-[6rem] bg-white px-3 md:py-0 py-1">
            <img className='h-full w-full' src={logo} alt="" />
        </div>
        <div className="flex items-center">
            <ul className="lg:flex hidden items-center">
                {navigationLinks.map(link => (
                    <li>
                        <Link className="px-5" to={link.path}>{link.text}</Link>
                    </li>
                ))}
            </ul>
            {profile ? 
                <div className="flex items-center text-white">
                    <span className="ml-4">
                        <FiBell className='text-2xl' />
                    </span>
                    <span className="ml-4">
                        <FiMail className='text-2xl' />
                    </span>
                    <div className="flex items-center relative cursor-pointer ml-4" onClick={() => setIsOpen(!isOpen)}>
                        <img className='h-[35px]  w-[35px] rounded-full md:mr-2' src={process.env.PUBLIC_URL+'/images/product.jpg'} alt='' />
                        <span className="md:block hidden">Konson</span>
                        <FiChevronDown className={`text-xl md:ml-1 duration-200 ${isOpen ? 'rotatate-[180deg]':''}`} />
                        {isOpen &&
                            <div className="w-[150px] absolute top-full right-0 bg-gray-50 text-gray-600 border shadow-md py-3 rounded">
                                <div className="px-3 py-1">Profile</div>
                                <div className="px-3 py-1">My Products</div>
                                <div className="px-3 py-1">Logout</div>
                            </div>
                        }
                    </div>
                </div>:
                <button className="px-4 py-1 rounded bg-emerald-400 border text-white" onClick={() => setOpenModal('login')}>Login</button>
            }
        </div>
    </div>
  )
}


const navigationLinks = [
    {text:'Home', path:'/'},
    {text:'Categories', path:'/categories'},
    {text:'Products', path:'/products'},
    {text:'My Account', path:'/account'},
]