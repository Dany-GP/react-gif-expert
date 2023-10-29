import { useEffect, useState } from "react";
import { getGifs } from "../../helpers/getGifs";

export const useFetchGifs = (category, counter) => {

    const [isLoading, setIsLoading] = useState(true)
    const [gifs, setgifs] = useState([]);

    const loadGifs = () => {
        getGifs(category, counter).then(resp => setgifs(resp));
        setIsLoading(false);
    }

    useEffect(() => {
        loadGifs();
    }, []);


    return {
        gifs: gifs,
        isLoading: isLoading
    }
}
