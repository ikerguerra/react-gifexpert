import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink, FiHeart } from 'react-icons/fi';
import { RelatedGifs } from './RelatedGifs';

export const GifModal = ({ selectedGif, onClose, onGifClick }) => {

    useEffect(() => {
        if (selectedGif) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [selectedGif]);

    if (!selectedGif) return null;

    return (
        <AnimatePresence>
            {selectedGif && (
                <motion.div
                    className="modal-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    style={{
                        position: 'fixed',
                        top: 0, left: 0, right: 0, bottom: 0,
                        background: 'rgba(0,0,0,0.85)',
                        backdropFilter: 'blur(10px)',
                        zIndex: 100,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '2rem'
                    }}
                >
                    <motion.div
                        layoutId={`card-${selectedGif.id}`}
                        className="modal-content custom-scroll"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            background: 'var(--bg-secondary)',
                            borderRadius: '24px',
                            overflowY: 'auto',
                            maxHeight: '90vh',
                            maxWidth: '800px',
                            width: '100%',
                            position: 'relative',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                        }}
                    >
                        <div style={{ position: 'relative' }}>
                            <img
                                src={selectedGif.url}
                                alt={selectedGif.title}
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                            <button
                                onClick={onClose}
                                style={{
                                    position: 'absolute', top: 20, right: 20,
                                    background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white',
                                    borderRadius: '50%', width: 40, height: 40, cursor: 'pointer',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}
                            >
                                <FiX size={24} />
                            </button>
                        </div>

                        <div style={{ padding: '2rem' }}>
                            <h2 style={{ margin: '0 0 1rem', fontSize: '2rem', color: 'white' }}>{selectedGif.title}</h2>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <button
                                    className="action-btn-primary"
                                    onClick={() => window.open(selectedGif.url, '_blank')}
                                >
                                    <FiExternalLink /> Ver Original
                                </button>
                            </div>

                            <RelatedGifs
                                category={selectedGif.title}
                                currentId={selectedGif.id}
                                onGifClick={onGifClick}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
