import { Link } from "react-router-dom"
import CustomButton from "./CustomButton"

const Header = () => {
  return (
    <header className="absolute w-full z-10 bg-indigo-300">
        <nav className="flex justify-between items-center px-6 sm:px-16 ">
            <Link to={'/'}>
            <img className="w-[80px] rounded-full" src="public/carrent.avif" alt="" />
            </Link>
            <CustomButton title="Sign Up" designs="rounded-full bg-indigo-600 text-white hover:bg-indigo-400"/>
        </nav>
      
    </header>
  )
}

export default Header
