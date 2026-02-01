import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp"

describe('Prueba del <GifExpertApp />', () => { 

    const inputValue = 'Dragon Ball';
    
    test('debe recibir un valor del input', () => {
        
        render( <GifExpertApp />);
        const input = screen.getByRole('textbox')

        fireEvent.input(input, { target: { value: inputValue }});

        screen.debug();

        expect( input.value ).toEqual( inputValue );
    })
})