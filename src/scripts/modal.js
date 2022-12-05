
function openModal(content){

    const body = document.querySelector('body')

    let backgroundContainer = document.createElement('section')
    let mainContainer = document.createElement('section')
    let closeButton = document.createElement('button')

    backgroundContainer.classList = 'modal-background'
    mainContainer.classList = 'modal-container'
    closeButton.classList = 'modal-close'

    closeButton.innerText = 'X'

    closeButton.addEventListener('click', ()=>{

        backgroundContainer.remove()
    })

    mainContainer.append(closeButton, content)
    backgroundContainer.appendChild(mainContainer)
    body.appendChild(backgroundContainer)


}


function viewPost(post, user){



    
}
