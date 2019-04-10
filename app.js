
/**
**
**
**/

const myKey = 'a3057e1dee4e8bc1c4dc4fc2ab018e03';
const proxy = `https://cors-anywhere.herokuapp.com/`;

const getPosition = () => {
    if (navigator.geolocation) {
    	navigator.geolocation.getCurrentPosition(pos =>{
    		lat = pos.coords.latitude;
    		lon = pos.coords.longitude;
    		getData()
    	})
	}else{
		alert('Please turn on the Navigation');
	}
	
}

//window.addEventListener('load' , getweather);
getPosition();
const getData = async() =>{

	const data = await fetch(`${proxy}https://api.darksky.net/forecast/${myKey}/${lat},${lon}`);
	const cn = await data.json();
	

}


/*

const getweather = async () => {
		navigator.geolocation.getCurrentPosition(el =>{
			long = el.coords.longitude;
			lat  = el.coords.latitude;
    const res = await fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/a3057e1dee4e8bc1c4dc4fc2ab018e03/${position.long},${position.lat}`);
    const fs = await res.json();
    console.log(fs);
});
*/




