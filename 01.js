const posts = [
    {
        id: 1,
        nombre: "Mi primer post",
        image: "blablablabla",
        tags: ['javascript', 'python']
    },
    {
        id: 2,
        nombre: "Mi segundo post",
        image: "blablablabla",
        tags: ['javascript', 'python', 'java']
    },
    {
        id: 3,
        nombre: "Mi tercer post",
        image: "blablablabla",
        tags: ['rust', 'python']
    }
]

//FIND METHOD === Sirve para encontrar bajo un parametro
const resultado = posts.find( post => post.nombre == 'Mi tercer post')
// console.log(resultado)

// METODO SOME = devuelve TRUE o FALSE dependiendo de si lo que bsca esta o no esta
const resultado2 = posts.some( post => post.id == 5)
// console.log(resultado2)

// METODO INCLUDES === Devuelve TRUE o FALSE si 
const resultado3 = posts.some(post => post.tags.includes('rust'))
console.log(resultado3)
