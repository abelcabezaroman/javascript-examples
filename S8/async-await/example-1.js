fetch('https://api.genderize.io?name=peter')
.then(res => res.json())
.then(resParsedToJSON => {
    console.log(resParsedToJSON);
});



// ASYNC AWAIT

async function getGender(){
    const res = await fetch('https://api.genderize.io?name=peter');
    const resParsedToJSON = await res.json();
    console.log(resParsedToJSON);
}

// const getGender = async () =>{
//     const res = await fetch('https://api.genderize.io?name=peter');
//     const resParsedToJSON = await res.json();
//     console.log(resParsedToJSON);
// }

getGender();