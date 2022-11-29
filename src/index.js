
//Extarer los datos de un json
// fetch( jokeUrl ).then ( resp => {
//     resp.json().then (({id, value}) =>{
//         console.log( id )
//         console.log( value )
//     })
// })
// Lo mismo que el de arriba pero resumido

// import { init } from "./js/usuarios-page";
// import { obtenerChiste, obtenerUsusarios } from "./js/http-provider";



// fetch ( jokeUrl )
//     .then( resp => resp.json())
//     .then(({id,value})=> {
//         console.log( id, value)
//     })


//  init()

// obtenerUsusarios().then( console.log)
import  {init} from './js/archivos-page'

// import * as CRUD from './js/crud-provider'

// CRUD.getUsusario( 1 ) .then (console.log)


// CRUD.crearUsuario({
//     name: 'Carlos',
//     job: 'Programador'
// }).then( console.log )


// CRUD.actualizarUsuario(1, {
//     name: 'Melisaa',
//     job: 'carpintero'
// }).then (console.log)


// CRUD.borrarUsuario( 1 ).then(console.log)


init()