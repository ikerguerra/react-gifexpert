import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from "prop-types";

export const GifGrid = ({ category, onGifClick }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <div style={{ marginBottom: '3rem' }}>
            <h3>{category}</h3>

            <div className="card-grid">
                {isLoading
                    ? [...Array(8)].map((_, i) => (
                        <div key={i} className="card" style={{
                            height: i % 2 === 0 ? '250px' : '350px', // Asymmetric heights for bento feel
                            backgroundColor: 'var(--bg-tertiary)',
                            animation: 'pulse 1.5s infinite ease-in-out'
                        }}></div>
                    ))
                    : images.map(image => (
                        <GifItem
                            key={image.id}
                            {...image}
                            onClick={onGifClick}
                        />
                    ))
                }
            </div>

        </div>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
    onGifClick: PropTypes.func
}