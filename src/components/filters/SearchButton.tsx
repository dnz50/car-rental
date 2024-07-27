 
 interface ButtonProps{
    styling: string
 }
const SearchButton = ({styling}:ButtonProps) => {
  return (
    <button className={`ml-3 z-10 ${styling}`}>
        <img
        className="w-9" src="/magnifying-glass.svg" alt="" />
      
    </button>
  )
}

export default SearchButton
