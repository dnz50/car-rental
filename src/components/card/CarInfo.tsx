//burası card alt kısmı
//ikon ve başlıkları props olarak gönderdik tipini belirledik
type carInfoProps ={
    icon: string,
    title: string
}

const CarInfo = ({icon, title}:carInfoProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
        <img src={icon} width={20} alt="" />
        <p className="text-gray-500">{title}</p>
      
    </div>
  )
}

export default CarInfo
