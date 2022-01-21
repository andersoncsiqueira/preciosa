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

            let value = Math.round(circle.value()*60)

            circle.setText(value)
        }
    })

    
    circleA.animate(1.0)

    let containerB = document.querySelector('#circleB')
    let circleB = new ProgressBar.Circle(containerB, {
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1600,
        from: { color: '#AAA'},
        to:{ color: '#e167f1'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color)

            let value = Math.round(circle.value()*60)

            circle.setText(value)
        }
    })
    circleB.animate(1.0)

    let containerC = document.querySelector('#circleC')
    let circleC = new ProgressBar.Circle(containerC, {
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1800,
        from: { color: '#AAA'},
        to:{ color: '#e167f1'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color)

            let value = Math.round(circle.value()*60)

            circle.setText(value)
        }
    })
    circleC.animate(1.0)

    let containerD = document.querySelector('#circleD')
    let circleD = new ProgressBar.Circle(containerD, {
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 2000,
        from: { color: '#AAA'},
        to:{ color: '#e167f1'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color)

            let value = Math.round(circle.value()*60)

            circle.setText(value)
        }
    })
    circleD.animate(1.0)
})



