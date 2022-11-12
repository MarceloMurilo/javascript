function leiaMais(){

    var pontos = document.getElementById("pontos");
    var maisTexto = document.getElementById("mais");
    var btnLeiaMais = document.getElementById("btnLeiaMais");
    
    if(pontos.style.display === "none") {
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnLeiaMais.innerHTML="Lido &#x2611 	";
    }else {
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnLeiaMais.innerHTML="Ler menos";
    }
}

function leiaMaisv(){

    var pontosv = document.getElementById("pontosv");
    var maisTextov = document.getElementById("maisv");
    var btnLeiaMaisv = document.getElementById("btnLeiaMaisv");
    
    if(pontosv.style.display === "none") {
        pontosv.style.display="inline";
        maisTextov.style.display="none";
        btnLeiaMaisv.innerHTML="Lido &#x2611 	";
    }else {
        pontosv.style.display="none";
        maisTextov.style.display="inline";
        btnLeiaMaisv.innerHTML="Ler menos";
    }
}
function leiaMaisAjuda(){

    var pontosAjuda = document.getElementById("pontosAjuda");
    var maisTextoAjuda = document.getElementById("maisAjuda");
    var btnLeiaMaisAjuda = document.getElementById("btnLeiaMaisAjuda");
    
    if(pontosAjuda.style.display === "none") {
        pontosAjuda.style.display="inline";
        maisTextoAjuda.style.display="none";
        btnLeiaMaisAjuda.innerHTML="Lido &#x2611 	";
    }else {
        pontosAjuda.style.display="none";
        maisTextoAjuda.style.display="inline";
        btnLeiaMaisAjuda.innerHTML="Ler menos";
    }
}
function leiaMaisme(){

    var pontosme = document.getElementById("pontosme");
    var maisTextome = document.getElementById("maisme");
    var btnLeiaMaisme = document.getElementById("btnLeiaMaisme");
    
    if(pontosme.style.display === "none") {
        pontosme.style.display="inline";
        maisTextome.style.display="none";
        btnLeiaMaisme.innerHTML="Lido &#x2611 	";
    }else {
        pontosme.style.display="none";
        maisTextome.style.display="inline";
        btnLeiaMaisme.innerHTML="Ler menos ";
    }
}

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

function scrollToSection(event) {
    event.preventDefault();
    /*const element = event.target;
    const id = element.getAttribute("href");
    const section = document.querySelector(id);
    console.log(section.offsetTop);*/
    const distanceFromTheTop = getDistanceFromTheTop(event.target) -90;
    smoothScrollTo(0,distanceFromTheTop, 500)
}
function getDistanceFromTheTop(element){
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;

}
//function nativeScroll(distanceFromTheTop) {
//    window.scroll({
//        top: distanceFromTheTop, 
//        behavior: "smooth",
//    });
//}
menuLinks.forEach((link) => {
     link.addEventListener("click", scrollToSection);
});

menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
  
  function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== "undefined" ? duration : 400;
  
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1)
        return (distance / 2) * time * time * time * time + from;
      return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60);
  }
  
  document.querySelectorAll(".copy-link").forEach(copyLinkContainer => {
    const inputField = copyLinkContainer.querySelector(".copy-link-input");
    const copyButton = copyLinkContainer.querySelector(".copy-link-button");
    const text = inputField.value;

    inputField.addEventListener("focus", () => inputField.select());
   
    copyButton.addEventListener("click", () => {
       
        inputField.select();
        navigator.clipboard.writeText(text);
    })

    document.querySelectorAll(".copy-link").forEach(copyLinkContainer => {
        const inputField = copyLinkContainer.querySelector(".copy-link-input");
        const copyButton = copyLinkContainer.querySelector(".copy-link-button");
        const text = inputField.value;

        inputField.addEventListener("focus", () => inputField.select());
        copyButton.addEventListener("click", () => {
            const text = inputField.value;

            inputField.select();
            navigator.clipboard.writeText(text);
            inputField.value = "Copiado!";
            setTimeout(() => inputField.value = text, 2000);
        })  
            
            })});
