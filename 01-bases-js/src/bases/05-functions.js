/*  function saludar( xyz ) {
    return 'Hola ${ xyz }'
}  */ 
/* const saludar = ( xyz ) =>{
    return `Hola ${ xyz }`
} */

/* saludar = true
 */
/* const nombre = 'Tony'


const getUser = () => ({ 
        uid: 'ABC123',
        username: 'Tony001'
    })


console.log( getUser() )

 */
/* const heroes = [{
    id: 1,
    name : 'Batman'
},{
    id: 2,
    name : 'Superman'

}]

const existe = heroes.some( ( heroe ) => heroe.id === 1 )

console.log(existe) */

const perros = [{
    id: 1,
    name: 'Border Collie'
},{
    id:2,
    name: 'bulldog'
},{ 
    id: 3,
    name: 'perro salchicha'
}]

// const perro = perros.some( ( perro ) => perro.id ===1 )
const perro = perros.find( ( perro ) => perro.id ===1 )
console.log(perro.name);
