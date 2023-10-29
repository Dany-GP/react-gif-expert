import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [category, setcategory] = useState('');

    const onSetCategory = (ev) => {
        setcategory(ev.target.value);
    }

    const onSubmit = (ev) => {
        console.log(ev);
        ev.preventDefault();
        if (category.trim().length < 1)
            return;
        onNewCategory(category);
        setcategory('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Buscar gifs" value={category} onChange={(ev) => onSetCategory(ev)} />
        </form>

    )
}
