let ano = document.querySelector(".ano")

ano.addEventListener('keypress', ()=>{
    if(ano.value > 2023){
       ano.value = "inválido"
    }
})