const button = document.querySelectorAll('.button')
const body = document.querySelector('body')

button.forEach( function(button){
    console.log(button)
    button.addEventListener('click', function(click){
        console.log(click)
        console.log(click.target)
        if(click.target.id === 'pink'){
            body.style.backgroundColor  = 'pink'
        }
         if(click.target.id === 'green'){
            body.style.backgroundColor  = 'green'
        }
         if(click.target.id === 'yellow'){
            body.style.backgroundColor  = 'yellow'
        }
         if(click.target.id === 'blue'){
            body.style.backgroundColor  = 'blue'
        }
         if(click.target.id === 'orange'){
            body.style.backgroundColor  = 'orange'
        }
    })
} )