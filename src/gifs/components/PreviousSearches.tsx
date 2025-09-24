import type { FC } from "react";

interface PropsGifPreviousSearches {
    searches?: string[];
    onLabelClicked: (term:string) => void;
}


export const PreviousSearches: FC<PropsGifPreviousSearches> = ({ searches, onLabelClicked }) => {
    return (
        <div className="previous-searches">
            <h2>Búsquedas previas</h2>
            <ul className="previous-searches-list">
                {
                    searches && searches.map((term) => (
                        <li key={term}
                        onClick={ ()=> onLabelClicked(term) }>{term}</li>
                    ))
                }
            </ul>
        </div>
    )
}
