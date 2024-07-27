import { Link } from "react-router-dom"
import CustomButton from "./CustomButton"
import {motion} from "framer-motion"
const Hero = () => {
const flyTo = () =>{
  <Link to="#flyto"></Link>
}
  return (
    <div className="hero">
      <div className="pt-36 flex-1 px-5">
        <h1 className="hero__title">Feel the Freedom Start a new <span className=" text-indigo-800 font-extrabold">Journey</span></h1>
        <p className="hero__subtitle">Have the best car rental experience and make every moment special</p>
        <p className="hero__subtitle">Are you ready for a new journey? <span className=" text-indigo-800 font-extrabold">Lets start</span> </p>
        <CustomButton
        handleClick={flyTo}
         title="Discover" 
         designs="rounded-full bg-indigo-600 text-white hover:bg-indigo-400"/>
      </div>
      <div className="w-100 flex justify-center">
        <motion.img
        initial={{translateX:200}}
        whileInView={{translateX:0}}
        transition={{duration:1}}
        className=" object-contain" src="public/hero.png" alt="" />
      </div>
    </div>
  )
}

export default Hero
