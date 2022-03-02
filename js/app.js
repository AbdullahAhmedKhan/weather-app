const API_KEY=`eac0bb9f6d551597ef14ba9e7505ab93`;
const searchTemp = () => {
    const city = document.getElementById('city-name').value;
    const url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemp(data))
}
const block=document.getElementById('bg');
const setInnerText = (id,text) => {
    document.getElementById(id).innerText = text;
}
const displayTemp = temp => {
    setInnerText('city',temp.name);
    setInnerText('temp',temp.main.temp);
    setInnerText('condition',temp.weather[0].main);
    // set weather icon 
    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    const img=document.getElementById('weather');
    img.setAttribute('src',url)
    block.style.display="block";
}