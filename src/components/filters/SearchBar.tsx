import Select from 'react-select'
import { makes } from '../../constants'
import { useMemo, useState } from 'react'
import { IOption } from '../../types'
import SearchButton from './SearchButton'
import { useSearchParams } from 'react-router-dom'

const SearchBar = () => {
    const [make, setMake] = useState("")
    const [model, setModel] = useState("")
    const [params, setParams]= useSearchParams()

    //useMemo hesapladığını ön bellekte saklıyor tekrar eden işlemi azaltıp 
    //preformans artırıyor
    //string dizisini option dizisine çevirdik
    const newMakes = useMemo(() =>
        makes.map((item) => ({
            value: item,
            label: item,
        }))
        , [makes])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        //marka var model yok
        if (make !== "" && model === "") {
            setParams({make:make.toLowerCase()})
            //ikiside var
        } else if (make !== "" && model !== "") {
            setParams({//url ye seçtiğimiz marka ve modeli yazdırdık
                make:make.toLowerCase(),
                model:model.toLowerCase(),
            })
            //ikiside yok
        } else {
            alert("please select a car model")
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='searchbar gap-3'>

            <div className='searchbar__item'>
                <Select
                    className='w-full'
                    options={newMakes} //event varsa event değerini state gönder
                    onChange={(e: IOption | null) => e && setMake(e.value)} />
                <SearchButton styling='sm:hidden' />

            </div>
            <div className='searchbar__item'>
                <img
                    className='absolute ml-4 w-6'
                    src="/model-icon.png" alt="" />
                <input
                    className='searchbar__input'
                    placeholder="car model" type="text"
                    onChange={(e) => setModel(e.target.value)} />
                <SearchButton styling={'sm:hidden'} />

            </div>
            <SearchButton styling='max-sm:hidden' />
        </form>
    )
}

export default SearchBar
