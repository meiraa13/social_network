


function renderPost (posts, users ){

    let section3 = document.querySelector('.section-3')

    posts.forEach((dado) =>{
        users.forEach((usuario)=>{
            if(dado.user == usuario.id){

                let template = createPost(dado, usuario)
                section3.append(template)

            }

        })

    })

}

renderPost(posts, users)

function createPost(post, user){

    let divMain = document.createElement('div')
    divMain.classList = 'flex column gap-m'

    let div1 = document.createElement('div')
    let div2 = document.createElement('div')
    div2.classList = 'flex gap-p align-center'
    let img = document.createElement('img')
    img.src = user.img
    let div3 = document.createElement('div')
    div3.classList = 'flex column gap-p'
    let h4 = document.createElement('h4')
    h4.innerText = user.user
    let p = document.createElement('p')
    p.innerText = user.stack

    let div4 = document.createElement('div')
    let h2 = document.createElement('h2')
    h2.innerText = post.title

    let div5 = document.createElement('div')
    let p2 = document.createElement('p')
    p2.innerText = post.text

    let div6 = document.createElement('div')
    div6.classList = 'flex gap-m align-center'
    let button = document.createElement('button')
    button.classList = 'abrir-post'
    button.innerText = 'Abrir Post'

    button.addEventListener('click', ()=>{

        let modal = viewPost(post, user)
        openModal(modal)
    })

    
    let img2 = document.createElement('img')
    img2.classList = 'heart'
    img2.src = './src/assets/img/heart-grey.png'
    let like = document.createElement('p')
    like.classList = 'like'

    let contador = 0

    img2.addEventListener('click', ()=>{
    

        img2.src = './src/assets/img/heart-red.png'
        img2.classList = 'heart-red'
        like.innerText = contador+1
    })

    div3.append(h4, p)
    div2.append(img, div3)
    div1.appendChild(div2)

    div4.appendChild(h2)
    div5.appendChild(p2)
    div6.append(button, img2, like)

   
    divMain.append(div1, div4, div5, div6)

    

    return divMain

}

function renderSide (sugest, users){

    let divAside = document.querySelector('.div-aside')
  

    sugest.forEach((sugerido)=>{
        users.forEach((usuario) =>{

            if(sugerido == usuario.id){

                let template = createSide(usuario)
                divAside.appendChild(template)

            }

        })

    })

}

renderSide(sugestUsers, users)

function createSide(user){

    let divSection2 = document.createElement('div')
    divSection2.classList = 'section-2'

    let div1 = document.createElement('div')
    div1.classList = 'flex gap-p align-center'
    let img = document.createElement('img')
    img.src = user.img
    let div2 = document.createElement('div')
    div2.classList = 'flex column gap-p'
    let h4 = document.createElement('h4')
    h4.classList = 'min-width'
    h4.innerText = user.user
    let p = document.createElement('p')
    p.classList = 'min-width'
    p.innerText = user.stack
    let div3 = document.createElement('div')
    let button = document.createElement('button')
    button.classList = 'seguir'
    button.innerText = 'Seguir'

    button.addEventListener('click', ()=>{
        
        if(button.innerText == 'Seguir'){
            button.innerText = 'Seguindo'
            
        }else {
            button.innerText = 'Seguir'
        }

        button.classList.toggle('seguindo')
       
    })

    div2.append(h4, p)
    div1.append(img, div2)
    div3.appendChild(button)

    divSection2.append(div1, div3)

    return divSection2

}


function viewPost(post,user){

    let divMain = document.createElement('div')
    divMain.classList = 'div-modal flex column gap-m'

    let div1 = document.createElement('div')
    let div2 = document.createElement('div')
    div2.classList = 'flex gap-p align-center'
    let img = document.createElement('img')
    img.src = user.img
    let div3 = document.createElement('div')
    div3.classList = 'flex column gap-p'
    let h4 = document.createElement('h4')
    h4.innerText = user.user
    let p = document.createElement('p')
    p.innerText = user.stack

    let div4 = document.createElement('div')
    let h2 = document.createElement('h2')
    h2.innerText = post.title

    let div5 = document.createElement('div')
    let p2 = document.createElement('p')
    p2.innerText = post.text


    div3.append(h4, p)
    div2.append(img, div3)
    div1.appendChild(div2)

    div4.appendChild(h2)
    div5.appendChild(p2)
    
    divMain.append(div1, div4, div5)

    

    return divMain

}

function newPost(){

    let button = document.querySelector('.postar')
    button.addEventListener('click', ()=>{

        let tituloPost = document.getElementById('titulo').value 
        let textoPost = document.getElementById('texto').value
        let divPost = document.querySelector('.section-3')

        let divMain = document.createElement('div')
        divMain.classList = 'flex column gap-m'
        divMain.innerHTML = ` <div1>
        <div2 class="flex gap-p align-center">
            <img src="./src/assets/img/user1.svg">
            <div3 class="flex column gap-p">
                <h4>Samuel Leão</h4>
                <p>Front End</p>
            </div3>
        </div2>
    </div1>
    <div4>
        <h2> ${tituloPost}  </h2>
    </div4>
    <div5>
        <p> ${textoPost} </p>
    </div5>
    <div6 class="flex gap-m align-center">
        <button class="abrir-post">Abrir Post</button>
        <img class="heart" src="./src/assets/img/heart-grey.png">
    </div6>`

    divPost.prepend(divMain)



    })


}
newPost()