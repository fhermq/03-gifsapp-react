import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";

// const gifsCache: Record<string, Gif[]> = {};


export const useGifs = () => {

    const [previousTerms, setPreviousTerms] = useState<string[]>([]);
    const [gifs, setGifs] = useState<Gif[]>([]);

    const gifsCache = useRef<Record<string, Gif[]>>({});


    const handleTermClicked = async (term: string) => {
        if (gifsCache.current[term]) {
            setGifs(gifsCache.current[term]);
            return;
        }
        console.log('No estaba el valor en cache')
        const gifs = await getGifsByQuery(term);
        setGifs(gifs);
        gifsCache.current[term] = gifs;
        // console.log(term);
    };

    const handleSearch = async (query: string = '') => {
        // console.log('GifsApp - handleSearch()')
        if (query && query.length > 0)
            // a minusculas y elimina los espacios en blanco
            query = query.toLowerCase().trim();
        else return;
        //Validar si ya existe la busqueda
        if (previousTerms.includes(query)) return;

        //Permitir maximo 8 registros
        // if (previousTerms.length === 8){
        //     previousTerms.pop();
        // previousTerms.unshift(query);
        // console.log({ previousTerms });
        // }
        setPreviousTerms([query, ...previousTerms].splice(0, 8));

        const gifs = await getGifsByQuery(query);
        gifsCache.current[query] = gifs;
        setGifs(gifs);
        // console.log({gifs});
    };

    return {
        // properties or values
        gifs,

        //Methods or functions.
        previousTerms,
        handleSearch,
        handleTermClicked,
    }


}
