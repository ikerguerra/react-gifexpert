import { useFetchGifs } from "../hooks/useFetchGifs"
import { GifItem } from "./GifItem";
import PropTypes from 'prop-types';

export const RelatedGifs = ({ category, currentId, onGifClick }) => {

    // Fetch generic related content, limit to 4-5 items in UI
    const { images, isLoading } = useFetchGifs(category);

    const relatedImages = images.filter(img => img.id !== currentId).slice(0, 4);

    if (isLoading) return <p style={{ color: 'var(--text-secondary)' }}>Cargando relacionados...</p>;
    if (relatedImages.length === 0) return null;

    return (
        <div style={{ marginTop: '2rem', borderTop: '1px solid var(--bg-tertiary)', paddingTop: '1rem' }}>
            <h4 style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Más como esto</h4>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                gap: '1rem'
            }}>
                {relatedImages.map(img => (
                    <GifItem
                        key={img.id}
                        {...img}
                        onClick={onGifClick} // Allow switching to this GIF in the modal
                    // Force smaller size for related items overrides if needed, 
                    // but GifItem is responsive.
                    />
                ))}
            </div>
        </div>
    )
}

RelatedGifs.propTypes = {
    category: PropTypes.string.isRequired,
    currentId: PropTypes.string.isRequired,
    onGifClick: PropTypes.func
}
