import { ICarProps } from "../types";
import { colors } from "../constants";

const urlcar = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?';
const options = {
   method: 'GET',
   headers: {
      'x-rapidapi-key': '33f1824fcbmshe3b2ed551811912p12dcdbjsnb71ee34ef258',
      'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
   }
};

interface fetchParams {
   make?: string;
   model?: string;
   limit?: string;
   year?: string;
   fuel?: string;
}
export async function fetchCars(filters: fetchParams) {
   //urlden alınan verilere erişip defaultlarını değiştirdik
   const {
      make ="bmw",
      model ="",
      limit ="5",
      year ="",
      fuel ="",

   } =filters
   const res = await fetch(`${urlcar}&limit=${limit}&make=${make}&model=${model}&year=${year}&fuel_type=${fuel}`, options);
   const data = await res.json()

   return data
}
//soru işareti = undefined de olabilir
export const generateImage = (car: ICarProps, angle?: string): string => {

   //url objesi oluşturma
   const url = new URL("https://cdn.imagin.studio/getimage")
   //url e gerekli arama parametreleri ekle
   url.searchParams.append("customer", "hrjavascript-mastery")
   url.searchParams.append("make", car.make)
   url.searchParams.append("modelFamily",
       car.model.split(" ")[0].split("/")[0])//bazı modellerin apiden gelmesi için split ile bölme yaptık ilk elemanı aldık
   url.searchParams.append("zoomTYpe", "fullscreen")
   //diziden rastgele resim id si seçiyoruz
   const i = Math.round(Math.random() * colors.length)
   url.searchParams.append("paintId", colors[i])

   if (angle) { //eğer angle varsa ekle undefined olamaz 
      url.searchParams.append("angle", angle)
   }
   //foto urlini döndür
   return url.href
}


