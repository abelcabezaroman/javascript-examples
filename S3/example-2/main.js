function handleClick(event) {
    console.log(event);
    console.log(event.target.innerHTML);


    const div$$ = document.createElement("div");

    div$$.innerHTML = "<img width='300' src='https://orgulloradio.com/wp-content/uploads/2022/06/Los-distritos-de-Madrid-se-llenan-de-conciertos-para-celebrar-el-Dia-Europeo-de-la-Musica.jpg'/><h1>Que pasa peña</h1>"

    document.body.appendChild(div$$)
}

document.querySelector("#btn").addEventListener("click", handleClick);
// document.getElementById("btn").removeEventListener("click", handleClick);