import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas FirstApp', () => {
    
    // test('Debe hacer match', () => {
    
    //    const titulo = 'Soy David';
    //    const { container } =  render( <FirstApp title= {titulo }/> )    
    
    //     expect( container ).toMatchSnapshot();
    // })
    test('debe mostrar el mismo titulo', () => { 

        const titulo = 'Hola soy David';
       const { getByText,getByTestId } =  render( <FirstApp title= {titulo }/> )    

       expect(getByText(titulo)).toBeTruthy;

        expect(getByTestId('h1-title').innerHTML).toContain(titulo);
     })

test('debe mostrar el mismo titulo', () => { 

        const titulo = 'Hola soy David';
        const subTitulo = 'Hola soy Subtitulo';


       const { getByText } =  render( <FirstApp 
        title= { titulo }
        subTitle={ subTitulo }
        /> )    

       expect(getByText(subTitulo)).toBeTruthy;

    
     })


})