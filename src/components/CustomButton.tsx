import { IButtonProps } from "../types"
//tanımladığımız tipleri import ediyoruz

const CustomButton = ({title,designs,handleClick}:IButtonProps) => {
  return (
    <button
    onClick={handleClick} 
    disabled={false}
     type="submit"
    className={`custom-btn ${designs}`}>
      {title}
    </button>
  )
}

export default CustomButton
