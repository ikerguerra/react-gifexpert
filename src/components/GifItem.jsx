import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FiCopy, FiHeart } from "react-icons/fi";

export const GifItem = ({ title, url, id, onClick }) => {
  return (
    <motion.div
      className="card"
      layoutId={`card-${id}`}
      onClick={() => onClick && onClick({ title, url, id })}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, cursor: 'pointer' }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      layout
      style={{ borderRadius: '12px', overflow: 'hidden' }} // Persist through layout animation
    >
      <img src={url} alt={title} loading="lazy" />

      <div className="card-overlay">
        <p className="card-title">{title || "Untitled GIF"}</p>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="action-btn" aria-label="Like" onClick={(e) => e.stopPropagation()}>
            <FiHeart />
          </button>
          <button className="action-btn" aria-label="Copy Link" onClick={(e) => {
            e.stopPropagation();
            navigator.clipboard.writeText(url);
          }}>
            <FiCopy />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func
}