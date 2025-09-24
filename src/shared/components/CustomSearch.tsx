interface PropsCustomSearch {
  placeholder: string;
  button: string;
}


export const CustomSearch = ({ placeholder='Buscar ...', button }: PropsCustomSearch) => {
  return (
    <div className="search-container">
      <input type="text" placeholder={placeholder} />
      <button>{button}</button>
    </div>
  )
}
