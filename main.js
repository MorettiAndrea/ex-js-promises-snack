// 🏆 Snack 1
// Ottieni il titolo di un post con una Promise.

// Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}
// 🎯 Bonus: Ottieni l'intero post con l'autore

// const dumbLinkPost = "https://dummyjson.com/posts/"
// const dumbLinkUser = "https://dummyjson.com/users/"

// function getPostTitle(id){
//     return new Promise((resolve,reject)=> {
//         fetch(`${dumbLinkPost}${id}`)
//         .then(res=>res.json())
//         .then(post=>{fetch(`${dumbLinkUser}${post.userId}`)
//         .then(res=>res.json())
//         .then(user=>resolve({...post,user}))
//         .catch(reject)})
//     })
// }



// getPostTitle(2)
//   .then(title => console.log("Titolo post: ",title))
//   .catch(err => console.error(err));


// // Crea una funzione getPost(id) che recupera l'intero post. Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore, recuperati dalla chiamata https://dummyjson.com/users/{post.userId}.
// function getPost(id){
//     return new Promise((resolve,reject)=>{
//         fetch(`${dumbLinkPost}${id}`)
//         .then(res=>res.json())
//         .then(post=>{fetch(`${dumbLinkUser}${post.userId}`)
//     .then(res=>res.json())
// .then(user=>resolve({...post,
//     author:user.firstName + (" ")+ user.lastName}))
// .catch(reject)})
//     })
// }





// getPost(1)
// .then(post=>console.log("post completo: ",post))
// .catch(err=>console.error(err))




// 🏆 Snack 2
// Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.
// 🎯 Bonus: HOF con closure per memorizzare l'ultimo lancio
// Modifica la funzione in creaLanciaDado(), che restituisce una closure che memorizza l'ultimo risultato. Se il numero esce due volte di fila, stampa "Incredibile!".

function lanciaDado(){
   return new Promise((resolve,reject)=>{
   setTimeout(()=>{
       const rng = Math.floor(Math.random()*6)+1;
       const errorHappened = Math.floor(Math.random()*5)+1;
       console.log(rng);
       errorHappened !== 5? resolve(rng) : reject("Oh no! il dado si è incastrato!" )
       
    },3000)
   })
}

lanciaDado()
.then(rng=>console.log("è uscito il numero: ",rng))
.catch(err=>console.log(err))