function generateRandomString(){
    let random_string ='';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWQXYZabcdefghijklmnopqrstuvwxyz1234567890'
    for(let i = 0; i<characters.length;i++){
        random_string +=characters.charAt(Math.floor(Math.random()*characters.length))
    }
console.log(random_string);
}
generateRandomString();