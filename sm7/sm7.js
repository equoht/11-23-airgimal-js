const p1 = document.querySelector('.p1');
p1.addEventListener('click', function(){
    p1.style.fontWeight = "900"
})

const p2 = document.querySelector('.p2');
p2.addEventListener('mousemove',function(){

    let r = Math.floor(Math.random() * (255 - 0)) + 0;
    let g = Math.floor(Math.random() * (255 - 0)) + 0;
    let b = Math.floor(Math.random() * (255 - 0)) + 0;

    p2.style.background = 'rgb('+r+', '+g+', '+b+')'
    // console.log(r)
})


document.addEventListener('keydown', function(event){
    if(event.keyCode == '82'){
        document.body.style.background = "red"
    }
    if(event.keyCode == '71'){
        document.body.style.background = "green"
    }
    if(event.keyCode == '66'){
        document.body.style.background = "blue"
    }


})

document.addEventListener('keyup', function(event){
    document.body.style.background = "white"
})

const box3 = document.querySelector('.box3');

document.addEventListener('keydown', function(event){


    if (event.keyCode == 87){
        const box3Styles = window.getComputedStyle(box3);
        console.log(box3Styles.marginTop)
    }


})