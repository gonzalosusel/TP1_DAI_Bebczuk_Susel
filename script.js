const verificarNombre = () => {
    if(document.querySelector("#nombre").value.length < 3){
        document.querySelector("#nombrecorto").classList.remove("d-none");
        document.querySelector("#nombre").classList.remove("campotrue");
        document.querySelector("#nombre").classList.add("campofalse");
        return false;
    }
    
    document.querySelector("#nombrecorto").classList.add("d-none");
    document.querySelector("#nombre").classList.add("campotrue");
        document.querySelector("#nombre").classList.remove("campofalse");
    return true;
};

const verificarContraseñasCumplen = () => {
    if(document.querySelector("#p1").value.length < 3 || !document.querySelector("#p1").value.match(/[a-zA-Z]+/) || !document.querySelector("#p1").value.match(/[0-9]+/)){
        document.querySelector("#contracorta").classList.remove("d-none");
        document.querySelector("#p1").classList.remove("campotrue");
        document.querySelector("#p1").classList.add("campofalse");
        return false;
    }

    document.querySelector("#p1").classList.add("campotrue");
    document.querySelector("#p1").classList.remove("campofalse");
    document.querySelector("#contracorta").classList.add("d-none");
    return true;
};

const verificarContraseñasCoinciden = () => {
    if(document.querySelector("#p1").value !== document.querySelector("#p2").value){
        document.querySelector("#contranocoincide").classList.remove("d-none");
        document.querySelector("#p2").classList.remove("campotrue");
        document.querySelector("#p2").classList.add("campofalse");
        return false;
    }
    
    document.querySelector("#p2").classList.add("campotrue");
    document.querySelector("#p2").classList.remove("campofalse");
    document.querySelector("#contranocoincide").classList.add("d-none");
    return true;
};

const verificarEmail = () => {
    if(!document.querySelector("#email").value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
        document.querySelector("#emailinvalido").classList.remove("d-none");
        document.querySelector("#email").classList.remove("campotrue");
        document.querySelector("#email").classList.add("campofalse");
        return false;
    }

    document.querySelector("#email").classList.add("campotrue");
    document.querySelector("#email").classList.remove("campofalse");
    document.querySelector("#emailinvalido").classList.add("d-none");
    return true;
};

const verificarTodo = () => {
    let a = verificarNombre();
    let b = verificarContraseñasCoinciden();
    let c = verificarContraseñasCumplen();
    let d = verificarEmail();
    return a && b && c && d;
};

document.querySelector("#nombre").addEventListener("input", e => {
    verificarNombre();
});

document.querySelector("#email").addEventListener("input", e => {
    verificarEmail();
});

document.querySelector("#p1").addEventListener("input", e => {
    verificarContraseñasCumplen();
    verificarContraseñasCoinciden();
});

document.querySelector("#p2").addEventListener("input", e => {
    verificarContraseñasCumplen();
    verificarContraseñasCoinciden();
});

document.querySelector("#mostrarPw").onclick = e => {
    if(document.querySelector("#p1").getAttribute("type") == "password"){
        document.querySelector("#p1").setAttribute("type", "text");
        document.querySelector("#mostrarPw").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
        <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
      </svg>`;
    } else {
        document.querySelector("#p1").setAttribute("type", "password");
        document.querySelector("#mostrarPw").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
      </svg>`;
    }

    if(document.querySelector("#p2").getAttribute("type") == "password"){
        document.querySelector("#p2").setAttribute("type", "text");
    } else {
        document.querySelector("#p2").setAttribute("type", "password");
    }
};

document.querySelector("#enviar").onclick = e => {
    if(!verificarTodo()) return;
    document.querySelector("#registrocorrecto").classList.remove("d-none");
};

const cambiarTema = () => document.body.classList.toggle("cambiarTema");