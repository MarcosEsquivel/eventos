window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');


    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    const input = document.querySelector('#titulo')

    const estadoSecreto = 0

    const key = (key) => {
        switch (true) {
            case estadoSecreto === 0 && key.toLowerCase() === 's':
                estadoSecreto++
                break;
            
            case estadoSecreto === 0 && key.toLowerCase() === 'e':
                estadoSecreto++
                break;
            
            case estadoSecreto === 0 && key.toLowerCase() === 'c':
                estadoSecreto++
                break;
                
            case estadoSecreto === 0 && key.toLowerCase() === 'r':
                estadoSecreto++
                break;    

            case estadoSecreto === 0 && key.toLowerCase() === 'e':
                estadoSecreto++
                break;

            case estadoSecreto === 0 && key.toLowerCase() === 't':
                estadoSecreto++
                break;
            
            case estadoSecreto === 0 && key.toLowerCase() === 'o':
                alert("SECRETO MAGICO")
            estadoSecreto = 0
                break;
                
            default:
                estadoSecreto = 0
                break;
        }
    }

    input.addEventListener("keypress", (e) => {
        key(e.key)
    })
}