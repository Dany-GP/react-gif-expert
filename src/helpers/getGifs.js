import { API_URL } from "../environment/environment";

export const getGifs = async (category, counter) => {
    const URL = `${API_URL}&q=${category}&limit=${counter}`;
    const resp = await fetch(URL);
    const { data } = await resp.json();
    const gifs = data.map(x => ({
        id: x.id,
        url: x.images.downsized_medium.url,
        title: x.title

    }))
    return gifs;
}