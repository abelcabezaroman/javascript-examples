fetch('https://api.genderize.io?name=peter')
    .then(res => res.json())
    .then(resParsedToJSON => {
        console.log(resParsedToJSON);
    }).catch((err) => {
        console.log(err)
    });


// ASYNC AWAIT

async function getGender() {
    try {
        const res = await fetch('https://api.genderize.io?name=peter');
        const resParsedToJSON = await res.json();
        console.log(resParsedToJSON);
    } catch (err) {
        console.log(err)
    }
}


// const getGender = async () =>{
//     const res = await fetch('https://api.genderize.io?name=peter');
//     const resParsedToJSON = await res.json();
//     console.log(resParsedToJSON);
// }

getGender();