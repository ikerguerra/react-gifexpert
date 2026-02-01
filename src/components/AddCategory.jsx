import PropTypes from "prop-types";
import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length <= 1) return;

        // setCategories( categories => [...categories, inputValue]);
        onNewCategory(inputValue.trim());

        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit} aria-label="form" className="search-container">
            <div style={{ position: 'relative' }}>
                <input
                    type="text"
                    placeholder="Buscar GIFs..."
                    className="search-input"
                    value={inputValue}
                    onChange={onInputChange}
                />
                <span className="search-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </span>
            </div>
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}