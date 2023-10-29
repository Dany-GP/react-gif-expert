import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch'])

    const onAddCategory = (ev) => {
        if (categories.includes(ev))
            return;
        setCategories([ev, ...categories]);
    }

    return (
        <div>
            <h1>GIF ExpertApp</h1>
            <hr />

            <AddCategory onNewCategory={onAddCategory}></AddCategory>

            {categories.map(x => {
                return <GifGrid key={x} category={x}></GifGrid>
            })}
        </div>
    )
}
