import Select from "react-select";
import { IOption } from "../../types";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface IFilterProps{
    title:string;
    options:IOption[]
}

const CustomFilter = ({title,options}:IFilterProps) => {

    const [selected, setSelected] = useState< IOption  >(options[0]);
    const  [params,setParams]= useSearchParams()

    useEffect(()=>{
        //url ye anahtar kelime ekledik
        const key= title==="Fuel Type" ? "fuel type" : "year"
        if (selected.value){
        //parametreleri hazırladık
        params.set(key,selected.value.toLowerCase())

        }else{
            //url deki gereksiz olarak siliyoruz
            params.delete(key)
        }
        //url'i güncelledik
        setParams(params)

    },[selected])
  return (
    <div>
      <Select
      className="min-w-[100px]"
      placeholder={title}
      options={options}
      onChange={(e:IOption|null)=>e && setSelected(e)}
      />
    </div>
  )
}

export default CustomFilter
