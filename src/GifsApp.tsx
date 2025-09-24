import { ContainerGifs } from "./gifs/components/ContainerGifs"
import { GifPreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gif.mocks"
import { CustomHeader } from "./shared/components/CustomHeader"
import { CustomSearch } from "./shared/components/CustomSearch"

export const GifsApp = () => {
    return (
        <>
            {/* Header */}
            <CustomHeader title="Buscador de Gifs" description="Descubre los mejores Gifs para compartir" />

            {/* Search */}
            <CustomSearch placeholder="Buscar ..." button="Search" />

            {/* Búsquedas previas */}
           <GifPreviousSearches searches={['Yuyutsu Kaisen', 'Demong Salayer','Dan da Dan']} />


            {/* Gifs */}
            <ContainerGifs gifs={mockGifs} />

        </>

    )
}
