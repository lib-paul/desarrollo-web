// console.log("Hola");

function getPassword(){
    let password = "asdxd"
    const value = document.querySelector('input').value;
    let link = document.querySelector('.button')
    link.addEventListener("click",()=>{
        if(value != password){
            alert("Password incorrecta, vuelva a intentarlo.")
            link.href="auth.html"
        }else{
            alert("Verificado correctamente")
        }
    })
}

function getAnswer(){
    let points = 0;
    let a_one = document.getElementById('1').value;
    let a_two = document.getElementById('2').value;
    let a_three = document.getElementById('3').value;
    let a_four = document.getElementById('4').value;
    let a_five = document.getElementById('5').value;
    if(a_one == 'son goku'){
        points += 2;
    }
    if(a_two == '44'){
        points += 2;
    }
    if(a_three == '2'){
        points += 2;
    }
    if(a_four == 'milk'){
        points += 2;
    }
    if(a_five == 'entrenar'){
        points += 2;
    }
    return points
}

const link = document.getElementById('finish')
link.addEventListener('click',() => {
    let points = getAnswer()
    if(points == 5){
        alert('Tus puntos son: '+points+'. Bien leiste algo.')
    }else{
        alert('Tus puntos son: '+points+'. Deberias leer mejor el blog.')
    }
})
