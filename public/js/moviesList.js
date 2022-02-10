window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');
    const a = document.querySelector('.botonAgregar')

   /*  let modo = confirm('Desea modo oscuro'); */
   a.addEventListener("mouseover", () => {
    a.style.backgroundColor = "#63188b"
})

a.addEventListener("mouseout", () => {
    a.style.backgroundColor = "green"
})

    const logo = document.querySelector('figure')

    logo.addEventListener("click", () => {
/*         body.style.backgroundColor = '#7f7f7f'
 */       body.classList.toggle('fondoMoviesList');
    })

  /*   if(modo){
       
    } */
    
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

}