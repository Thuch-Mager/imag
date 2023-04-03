import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'


export default function Appbar() {
  return (
    <div className="flex items-center justify-between md:px-[5%] px-3 bg-blue-400">
        <div className="md:h-[5rem] h-[3rem] md:w-[11rem] w-[6rem] bg-white px-3">
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
            <button className="px-4 py-2 bg-emerald-4000 border text-white">Login</button>
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