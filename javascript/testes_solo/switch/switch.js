function mudarCor() {
    let cor = document.getElementById("cor").value;

    switch (cor) {
        case "azul":
            document.body.style.backgroundColor = "blue";
            break
        case "vermelho":
            document.body.style.backgroundColor = "red";
            break
        case "amarelo":
            document.body.style.backgroundColor = "yellow";
            break
        case "roxo":
            document.body.style.backgroundColor = "purple";
            break
        default:
        document.getElementById("teste").innerHTML = "nem uma cor"
    }
}