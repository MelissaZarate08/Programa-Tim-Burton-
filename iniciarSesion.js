const iniciar = () => {
    let listaUsuarios = JSON.parse(localStorage.getItem("lista"));
    let valorUsuario = document.getElementById("RUser").value;
    let valorPassword = document.getElementById("RPass").value;
    let mensaje = "";

    for (let i = 0; i < listaUsuarios.length; i++) {
        if (listaUsuarios[i].usuario === valorUsuario.trim() && listaUsuarios[i].pass === valorPassword.trim()) {
            mensaje = "Bienvenido";
            alert(mensaje);
            window.location.href = "peliculas.html";
            return;
        }
    }
    mensaje = "Usuario o password incorrecto";
    alert(mensaje);
}
