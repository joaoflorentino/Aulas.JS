function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22
    msg.innerHTML = `Agora são ${hora} horas`
    //Logica sobre o horario certo
    if  (hora >= 0 && hora <12){
        // bom dia !!
        img.src = "manha2.jpg"
        document.body.style.background = '#d08e2e'
    } else if(hora >=12 && hora < 18){
        //Boa tarde
        img.src = "entardecer2.jpg"
        document.body.style.background = '#b3746b'
    } else {
        //Boa noite
        img.src = "noite2.jpg"
        document.body.style.background = '#4e5e5d'
    }
}

