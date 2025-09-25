import type { FC } from "react";
import type { Gif } from "../interfaces/gif.interface";

interface PropsContainerGifs {
    gifs: Gif[];
}

export const ContainerGifs: FC<PropsContainerGifs> = ({ gifs }) => {
    return (
        <div className="gifs-container">
            {
                gifs.map((gif) => (
                    <div key={gif.id} className="gif-card">
                        <img src={gif.url} alt={gif.title} />
                        <h3>{gif.title}</h3>
                        <p>
                            {gif.width}x{gif.height} (1.5 mb)
                        </p>
                    </div>

                ))
            }
        </div>
    )
}
