import { ContainerGifs } from "./gifs/components/ContainerGifs"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { useGifs } from "./gifs/hooks/useGifs"

export const GifsApp = () => {

    const {
        previousTerms,
        gifs,
        handleSearch,
        handleTermClicked } = useGifs();


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
