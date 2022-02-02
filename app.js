$(document).ready(function() {
    let containerA = document.querySelector('#circleA')

    let circleA = new ProgressBar.Circle(containerA, {
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#AAA'},
        to:{ color: '#e167f1'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color)

            let value = Math.round(circle.value()*100)

            circle.setText(value)
        }
    })

    
    

    let containerB = document.querySelector('#circleB')
    let circleB = new ProgressBar.Circle(containerB, {
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1600,
        from: { color: '#AAA'},
        to:{ color: '#e167f1'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color)

            let value = Math.round(circle.value()*50)

            circle.setText(value)
        }
    })
    

    let containerC = document.querySelector('#circleC')
    let circleC = new ProgressBar.Circle(containerC, {
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1800,
        from: { color: '#AAA'},
        to:{ color: '#e167f1'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color)

            let value = Math.round(circle.value()*3)

            circle.setText(value)
        }
    })
    

    let containerD = document.querySelector('#circleD')
    let circleD = new ProgressBar.Circle(containerD, {
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 2000,
        from: { color: '#AAA'},
        to:{ color: '#e167f1'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color)

            let value = Math.round(circle.value()*3)

            circle.setText(value)
        }
    })

    // Iniciando o loader quando usuario chega no elemento

    let dataAreaOffSet = $('#data-area').offset()
    let stop = 0

    $(window).scroll(function(e) {

        let scroll = $(window).scrollTop()

        if(scroll > (dataAreaOffSet.top - 750 ) && stop === 0) {

            circleA.animate(1.0)
            circleB.animate(1.0)
            circleC.animate(1.0)
            circleD.animate(1.0)

            stop = 1
        }
        
    })

    // parallax

    setTimeout(function(){
        $('#data-area').parallax({imageSrc:'paralax.jpg'})

    }, 250)

})

const btnMobile = document.querySelector('#btn-mobile')
const nav = document.querySelector('#nav')

const toggleMenu = event => {
    if(event.type==="touchstart") event.preventDefault()
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)



