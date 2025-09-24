import { useEffect, useState, type KeyboardEvent } from "react";

interface PropsCustomSearch {
  placeholder: string;
  button: string;
  onQuery: (query: string) => void;
}


export const SearchBar = ({ placeholder = 'Buscar ...', button, onQuery }: PropsCustomSearch) => {
  const [query, setQuery] = useState('');

  //Se dispara en cuanto el componente es montado
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // onQuery(query);
      handleSearch();
    }, 700);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, onQuery]); //Dependencias del efecto



  const handleSearch = () => {
    // console.log(query);
    // console.log('SearchBar - handleSearch()');
    onQuery(query);
  }


  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter')
      handleSearch();
  }

  return (
    <div className="search-container">
      <input type="text"
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown} />
      <button onClick={handleSearch}>{button}</button>
    </div>
  )
}
