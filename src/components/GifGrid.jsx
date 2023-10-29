import { useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "./hooks/useFetchGifs";



export const GifGrid = ({ category }) => {
    const { gifs, isLoading } = useFetchGifs(category, 10);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading &&
                (<h2>Cargando...</h2>)

            }
            <div className="card-grid">
                {gifs.map(({ id, title, url }) => (
                    // <div className="card" key={x.id}>
                    //     <p>{x.title}</p>
                    //     <img src={x.url} />
                    // </div>
                    <GifItem key={id} title={title} url={url}></GifItem>
                ))}
            </div>
        </>
    )
}
