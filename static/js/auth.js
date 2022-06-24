function getPassword() {
    let password = "asdxd"
    const value = document.getElementById('input-password').value;
    let link = document.querySelector('.button-index')

    if (value == "") {
        alert("Password vacio.")
        link.href = "index.html"
        
    } else if (value != password) {
        alert("Error de password, vuelva a intentarlo.")
        href = "index.html"
        document.getElementById('input-password').value="" 
    }
    else {
        alert("Verificado correctamente")
        link.href = "home.html"
    }
}