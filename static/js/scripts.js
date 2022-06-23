// console.log("Hola");

function getPassword(){
    let password = "asdxd"
    const value = document.querySelector('input').value;
    let link = document.querySelector('.button')
    link.addEventListener("click",()=>{
        if(value != password){
            alert("Password incorrecta, vuelva a intentarlo.")
            link.href="index.html"
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
    if(points == 10){
        alert('¡Felicitaciones! Obtuvo el máximo puntaje')
    }else if(points <= 9 && points >= 7){
        alert('Tus puntos son: '+points+'. Casi alcanzaste el maximo puntaje')
    }else if(points == 6 || points == 5){
        alert('Tus puntos son: '+points+'. Aprobaste?.')
    }else if(points == 4 || points == 3){
        alert('Tus puntos son: '+points+'. Sigue faltando lectura pero yo se que puedes conseguirlo :).')
    }else if(points >= 0 && points <= 2){
        alert('Tomate un tiempo para ver nuestro blog y conocernos mejor. Hasta pronto')
    }
})
