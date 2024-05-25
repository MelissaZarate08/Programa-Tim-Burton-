const guardar = () => {
    let listaUsuarios = JSON.parse(localStorage.getItem("lista"));

    let valorUsuario = document.getElementById("RUser").value;
    let valorPassword = document.getElementById("RPass").value;
    let valorConfirmPass = document.getElementById("CPass").value;
    let mensaje = "";

    if (valorPassword === valorConfirmPass) {
        let usuario = {usuario: valorUsuario, pass: valorPassword};
        listaUsuarios.push(usuario);
        mensaje = "Éxito al guardar";
        localStorage.setItem("lista", JSON.stringify(listaUsuarios));
        alert(mensaje);
        window.location.href = "inicioSesion.html";
    } else {
        mensaje = "ERROR: Las contraseñas no coinciden";
        alert(mensaje);
    }
}
