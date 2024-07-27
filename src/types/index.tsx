import { MouseEventHandler } from "react";


export interface IButtonProps {
    title: string;
    designs?: string;//isteğe bağlı göndermek için ? kullandık. ister string ister undefined demek
    btnType?: "button" | "submit";//burada iki özelliğe union ile sınırladık
    handleClick?: MouseEventHandler<HTMLButtonElement>;//önceden hazırlanmış jenerik tipi kullandık mausla gerçekleşen olaylardan birisi ve bu html buton üzerinde gerçekleşiyor.
}

export interface ICarProps {
    city_mpg: number
    class: string
    combination_mpg: number
    cylinders: number
    displacement: number
    drive: string
    fuel_type: string
    highway_mpg: number
    make: string
    model: string
    transmission: string
    year: number
}

export interface IOption{
    label:string
    value:string
}