function carregar(){

    
    
    var img = window.document.getElementById('imagem')
    var msg = window.document.getElementById ('msg')
    var data = new Date()
    var hora = data.getHours()
         msg.innerHTML = 'Bom - Dia'
        if (hora >= 4 && hora < 12) {
            msg.innerHTML = 'Bom Dia &#x1F33C'
            img.src = 'imgs/bomdia.jpg'
            document.body.style.background = 'linear-gradient(368deg,#c2d1d2,#94c5df'
        } else if (hora >=12 && hora < 17) {
            msg.innerHTML = 'Boa Tarde&#x1F342'
            img.src = 'imgs/tarde16.jpg'
            document.body.style.background = '#00325a'
        }
         else if (hora >=17 && hora < 18) {
            msg.innerHTML = 'Boa Tarde&#x1F342'
            img.src = 'imgs/finaltarde.jpg'
            document.body.style.background = '#00325a'
        }
         else if (hora >=18 && hora <19) {
            msg.innerHTML = 'Boa Noite &#x1F319'
            img.src = 'imgs/bomdiboatardf.jpg'
            document.body.style.background = 'linear-gradient(368deg ,#ad6d45,#387aa0'
        }
         else if (hora >=19 && hora < 24) {
            msg.innerHTML = 'Boa Noite &#x1F319 	'
            img.src = 'imgs/boanoite.jpg'
            
            document.body.style.background = '#1c1d1f'
        }
        else { (hora >=00 && hora < 4)
            msg.innerHTML = 'Boa Noite &#x1F319'
            img.src = 'imgs/boanoite.jpg'
            
            document.body.style.background = '#1c1d1f'
        }

}
