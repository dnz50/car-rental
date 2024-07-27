import { useSearchParams } from "react-router-dom";
import CustomButton from "../CustomButton";

interface IShowMore {
    limit : number | string;
    isNext : boolean;
}
const ShowMore = ({limit,isNext}:IShowMore) => {
// arama parametrelerine ulaşırız
    const [params, setParams]=useSearchParams()

    const handleNavigate = ()=>{
        const newLimit= Number(limit)+5;
//eklenecek parametreyi belirledik
        params.set('limit', String(newLimit))
        //url e parametreyi gönderiyoruz
        setParams(params)
    }

  return (
    <div className="w-full flex-center gap-5 mt-5">
      {isNext && (
        <CustomButton
        title="More"
        designs="w-[200px] py-[14px] rounded-full bg-indigo-600 text-white hover:bg-indigo-400"
        handleClick={handleNavigate}
        />
      )}
    </div>
  )
}

export default ShowMore
