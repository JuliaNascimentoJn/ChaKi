let ano = document.querySelector(".ano")

ano.addEventListener('keypress', ()=>{
    if(ano.value > 2023){
       ano.value = "inválido"
    }
})
function clique() {
    let circulo = document.querySelector('.circulo')
    let preenchimento = document.querySelector('.preenchimento')
    if (circulo.style.left != "30px") {
        circulo.style.left = "30px"
        preenchimento.style.width = "60px"
        preenchimento.style.background="#868a8d"
    } else {
        circulo.style.left = "0px"
        preenchimento.style.width = "0px"
        preenchimento.style.background="white"
    }
}
