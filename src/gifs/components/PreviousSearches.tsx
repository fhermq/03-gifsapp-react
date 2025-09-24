import type { FC } from "react";

interface PropsGifPreviousSearches {
    searches?: string[];
}


export const GifPreviousSearches: FC<PropsGifPreviousSearches> = ({ searches }) => {
    return (
        <div className="previous-searches">
            <h2>Búsquedas previas</h2>
            <ul className="previous-searches-list">
                {
                    searches && searches.map((item) => (
                        <li key={item}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}
