import { useState } from "react";
import { ICarProps } from "../../types"
import CustomButton from "../CustomButton";
import CarInfo from "./CarInfo";
import DetailModal from "./DetailModal";
import { generateImage } from "../../utils/utils";
import {motion} from "framer-motion"

//burada card propsun tipini tanımlıyoruz
type CardProps = {
    car: ICarProps;
};
const Card = ({ car }: CardProps) => {
    const [isOpen, setIsOpen]=useState<boolean>(false)
    return (
        <motion.div
        initial={{scale:0.5}}
        whileInView={{scale:1}}
        className="car-car group border border-slate-600 rounded-xl p-8">
            <h2 className="car-card__content-title">
                {car.make} {car.model}</h2>

            <p className="flex mt-6 text-[32px]">
                <span className="self-start text-[14px] font-semibold">$</span>
                {Math.round(Math.random() * (41 - 29)) + 30}
                <span className="self-end text-[14px]">/day</span>
            </p>

            <div className="w-full h-40 my-3 object-contain">
                <img className="w-full h-full object-contain" src={generateImage(car)} alt="" />
            </div>
            {/* bilgiler kısmı */}
            <div className="relative w-full">
                <div className="group-hover:invisible flex justify-around my-4">
                    <CarInfo
                        title={car.transmission === 'a' ? "Automatic" : "Manuel"}
                        icon="/steering-wheel.svg"
                    />
                    <CarInfo
                        title={car.drive?.toUpperCase()}
                        icon="/steering-wheel.svg"
                    />
                    <CarInfo
                        title={car.combination_mpg + " MPG"}
                        icon="/steering-wheel.svg"
                    />


                </div>
                <div className="car-card__btn-container">
                    <CustomButton
                    handleClick={()=>setIsOpen(true)}
                        title="Discover"
                        designs="w-full py-[14px] rounded-full bg-indigo-600 text-white hover:bg-indigo-400"
                    />
                </div>
            </div>


            <DetailModal isOpen={isOpen}
             closeModal={()=>setIsOpen(false)}
             car={car}
             />
        </motion.div>
    )
}

export default Card
