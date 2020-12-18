fetch('https://api.genderize.io?name=peter').then(res => res.json()).then(resParsedToJSON => {
    // console.log(JSON.stringify(resParsedToJSON));
    console.log(resParsedToJSON);
});