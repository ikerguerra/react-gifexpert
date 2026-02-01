import { getGifs } from "../../src/helpers/getGifs"

describe('Prueba la función getGifs()', () => { 
    
    test('debe retornar un array de gifs', async() => { 
        
        const gifs = await getGifs('One Punch');

        expect( gifs[0] ).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
     })
 })