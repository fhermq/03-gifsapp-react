import { useState } from "react"
import { ContainerGifs } from "./gifs/components/ContainerGifs"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action"
import type { Gif } from "./gifs/interfaces/gif.interface"

export const GifsApp = () => {
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);
    const [gifs, setGifs] = useState<Gif[]>([]);

    const handleTermClicked = (term: string) => {
        console.log(term);
    };

    const handleSearch = async(query: string = '') => {
        // console.log('GifsApp - handleSearch()')
        if (query && query.length > 0)
            // a minusculas y elimina los espacios en blanco
            query = query.toLowerCase().trim();
        else return;
        //Validar si ya existe la busqueda
        if (previousTerms.includes(query)) return;

        //Permitir maximo 8 registros
        if (previousTerms.length === 8)
        //     previousTerms.pop();
        // previousTerms.unshift(query);
        // console.log({ previousTerms });
        setPreviousTerms([query, ...previousTerms].splice(0,8));

        const gifs =  await getGifsByQuery(query);
        setGifs(gifs);
        // console.log({gifs});
    };


    return (
        <>
            {/* Header */}
            <CustomHeader title="Buscador de Gifs" description="Descubre los mejores Gifs para compartir" />

            {/* Search */}
            <SearchBar placeholder="Buscar ..."
                button="Buscar"
                // handleSearch = {(query:string) =>handleSearch(query) } />
                onQuery={handleSearch} />

            {/* Búsquedas previas */}
            {/* <GifPreviousSearches searches={['Yuyutsu Kaisen', 'Demong Salayer','Dan da Dan']} /> */}
            {/* <PreviousSearches searches={previousTerms}
                onLabelClicked={handleTermClicked} /> */}
            <PreviousSearches searches={previousTerms}
                onLabelClicked={(term: string) => handleTermClicked(term)} />


            {/* Gifs */}
            {/* <ContainerGifs gifs={mockGifs} /> */}
            <ContainerGifs gifs={gifs} />

        </>

    )
}
