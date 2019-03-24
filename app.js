
/**
**
**
**/

const myKey = 'a3057e1dee4e8bc1c4dc4fc2ab018e03';
const proxy = `https://cors-anywhere.herokuapp.com/`;

const getweather = async () => {
    
    const res = await fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/a3057e1dee4e8bc1c4dc4fc2ab018e03/37.8267,-122.4233`);
    const fs = await res.json();
    console.log('@@@@')
    console.log(fs);
}
window.addEventListener('load' , getweather);










