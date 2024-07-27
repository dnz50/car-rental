import { useEffect, useState } from "react";
import Hero from "../components/Hero"
import { fetchCars } from "../utils/utils";
import { ICarProps } from "../types";
import Card from "../components/card";
import ShowMore from "../components/card/ShowMore";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/filters/SearchBar";
import CustomFilter from "../components/filters/CustomFilter";
import { fuels, years } from "../constants";

const MainPage = () => {

  const [params,] = useSearchParams()
//url den limiti çektik yoksa 5 den başladı
  const limit = Number(params.get("limit")) || 5




  const [cars, setCars] = useState<ICarProps[]>([]); // burada Icarpropsu generik olarak verdik [] ile dizi olacak dedik

useEffect(() => {
//urldeki bütün parametreleri alıp bir objeye aktar
//yukarıda da get metodunu kullanmıştık
const paramsObj = Object.fromEntries(params.entries())


    fetchCars(paramsObj)
    .then((data: ICarProps[])=> setCars(data))
    
    .catch(()=>alert("Sorry an Error"))
}, [params]);
//veri geliyormu isArray= dizi dışındaki bütün değerler false olur || dizi var içi 1den küçük ise false 
const IsDataEmpty:boolean= !Array.isArray(cars) || cars.length < 1 || !cars // cars tanımlımı
  return (
    <div >
      <Hero/>

      <div className="mt-12 padding-x padding-y max-width">
        <section className="flex flex-col items-start justify-start gap-y-2.5">
            <h1 className="text-4xl font-extrabold">Car models</h1>
            <p>discover the car models</p>
        </section>
        {/* filter area */}
        <section className="home__filters">
          <SearchBar/>
          <div className="home__filter-container">
            <CustomFilter title="fuel type" options={fuels}/>
            <CustomFilter title="year" options={years}/>
          </div>

        </section>
        <section>

        </section>
        <section>
          {IsDataEmpty ? (
            <div className="home__error-container">
            <h2>Sorry something go wrong</h2>
          </div>) : (
            <>
            <section id="flyto">
              <div className="home__cars-wrapper">
                {cars.map((car,i)=>(
                <Card key={i} car={car}/>))}
              </div>
            </section>
            </>)}

            <ShowMore limit={limit}
            isNext={limit < 30}
             />
        </section>
            
        </div>
      </div>
    
    
  )
}

export default MainPage
