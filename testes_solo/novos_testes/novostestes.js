function verificar() {
    let nome = document.getElementById("name").value;

        if (nome == "" || nome == null) {
            let p =  document.getElementById("teste");
            p.innerHTML = ("o campo está vazio");
            p.style.color = "red";
            }
         else {
            let p =  document.getElementById("teste");
            p.innerHTML = ("Correto meu nobre, seu nome é " +`${ nome}`);
            p.style.color = "green";
            }
}