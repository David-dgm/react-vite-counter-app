import  { getUser , getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => {

    test('get user debe devolver un objeto', () => { 

        const testUser= {
            uid: 'ABC123',
            username:'David',
        };

        const user = getUser();

        expect( testUser).toStrictEqual(user);
     })


     test('get usuario activo debe de retornar un objeto', () => { 

        const name = `David`;
        const usuario = getUsuarioActivo(name);
        
        expect(usuario).toStrictEqual({
            uid: 'ABC567',
            username: name
        });
      })
})