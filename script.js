document.querySelector("#nombre").addEventListener("input", e => {
    if(document.querySelector("#nombre").value.length < 3){
        document.querySelector("#nombrecorto").classList.remove("d-none");
    } else {
        document.querySelector("#nombrecorto").classList.add("d-none");
    }
});

document.querySelector("#p1").addEventListener("input", e => {
    if(document.querySelector("#p1").value.length < 3 || !document.querySelector("#p1").value.includes("")){
        document.querySelector("#contracorta").classList.remove("d-none");
    } else {
        document.querySelector("#contracorta").classList.add("d-none");
    }
});

document.querySelector("#p2").addEventListener("input", e => {
    if(document.querySelector("#p1").value !== document.querySelector("#p2").value){
        document.querySelector("#contranocoincide").classList.remove("d-none");
    } else {
        document.querySelector("#contranocoincide").classList.add("d-none");
    }
});

document.querySelector("#enviar").onclick = e => {

};

function cambiarTema() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }