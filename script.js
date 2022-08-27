

let btnVerificar = document.querySelector('#btnVerificar')

btnVerificar.addEventListener('click', ()=> {
    verificarUsuario()
    
})

function verificarUsuario(){
    let inputUser = document.querySelector('#name').value

    return new Promise(function(resolve,reject){
        
        let req = fetch (`https://api.github.com/users/${inputUser}`)
            .then((response)=>{
                if(response.status == 200){
                    return response.json()
                }                
            })
            .then((json)=>{
                
                let div = document.querySelector('#res')
                let nome = json.login
                let dataCriacao = json.created_at
                let id = json.id
               
                let img = json.avatar_url                

                div.innerHTML = `
                <input type="text" id="" disabled value="${nome}"><br>
                <input type="text" id="" disabled value="${id}"><br>
                <input type="text" id="" disabled value="${dataCriacao}"><br>
               
                <img src="${img}">
                `
            })
    })
}
