import { useState } from "react"
import { AddCategory, GifGrid, GifModal } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    const [selectedGif, setSelectedGif] = useState(null);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <main>
            <header className="app-header">
                <h1>GifExpertApp</h1>
                <p className="app-description">
                    Explora y encuentra los mejores GIFs al instante. <br />
                    Tu buscador visual favorito.
                </p>
            </header>

            <AddCategory
                onNewCategory={value => onAddCategory(value)}
            />

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                        onGifClick={setSelectedGif}
                    />
                ))
            }

            <GifModal
                selectedGif={selectedGif}
                onClose={() => setSelectedGif(null)}
                onGifClick={setSelectedGif}
            />
        </main>

    )
}