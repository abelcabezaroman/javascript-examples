function handleClick(event) {
    console.log(event);
    console.log(event.target.innerHTML);
}

document.querySelector("#btn").addEventListener("click", handleClick);
// document.getElementById("btn").removeEventListener("click", handleClick);