import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

const titulo = 'Hola soy David';
const subTitulo = 'Hola soy Subtitulo';

describe('Pruebas FirstApp', () => {
    
    test('debe mostrar el mismo titulo', () => { 

       
       const { getByText,getByTestId } =  render( <FirstApp title= {titulo }/> )    

      expect(getByText(titulo)).toBeTruthy;
      expect(getByTestId('h1-title').innerHTML).toContain(titulo);
     })

test('debe mostrar el mismo subtitulo', () => { 

  
        render( <FirstApp 
        title= { titulo }
        subTitle={ subTitulo }
         /> )    

        expect(screen.getByText(subTitulo)).toBeTruthy;
    // screen.debug();
     })

     test('debe mostrar el h1', () => { 

  
        render( <FirstApp 
        title= { titulo }
        subTitle={ subTitulo }
         /> )    

        expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(titulo);
    // screen.debug();
     })


})