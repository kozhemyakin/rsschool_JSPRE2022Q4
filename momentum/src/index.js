import playList from "./playList.js";

/* VARS */
let randomNum;

/* SHOW DATA ON LOAD PAGE */
window.addEventListener("load", () => {
    getQuotes();
    showGreeting(getTimeOfDay(), greetingTranslation);
    showDate();
});

/* DATA AND TIME */
function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    const timeOutput = document.querySelector('.time').textContent = currentTime;
    setTimeout(showTime, 1000);
    setTimeout(showDate, 36000);
}

showTime();

function showDate() {
    const date = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    const currentDate = date.toLocaleDateString('en-En', options);
    const dateOutput = document.querySelector('.date').textContent = currentDate;
}

const getTimeOfDay = () => {
    const date = new Date();
    const hours = date.getHours();

    return hours < 12 ? 'morning' : hours < 17 ? 'afternoon' : hours < 20 ? 'evening' : 'night';
}

// function showGreeting(daytime, lang = greetingTranslation.en) {
//     return document.querySelector('.greeting').textContent = `Good ${daytime}`;
// }
function showGreeting(daytime, lang) {
    for (const [key, value] of Object.entries(lang.en)) {
        if (key === daytime) {
            return document.querySelector('.greeting').textContent = lang.en[`${daytime}`];
        }
      }
}

/* NAME */
const userName = document.querySelector('.name');

userName.value = localStorage.getItem('name');

function setName () {
  localStorage.setItem('name', userName.value.trim())
}

document.querySelector('.name').addEventListener('input', setName);

/* BACKGROUND */
const getRandomNum = (max) => {
    randomNum = 1 + Math.floor(Math.random() * max);
    return randomNum < 10 ? '0' + randomNum : randomNum
}

// async function getLinkToImage(daytime) {
//     const url = `https://api.unsplash.com/photos/random?query=${daytime}&client_id=Ckwi3S0ON1FIFV2KeS_bEJENseWbltq6Jc4d1Dhok3o`;
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data.urls.regular)

//     const img = new Image();
//     img.src = data.urls.regular;
//     img.onload = () => {      
//         document.body.style.backgroundImage = `url(${img.src})`
//     }; 
// }

// getLinkToImage(getTimeOfDay())


const setBg = (daytime, number) => {
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${daytime}/${number}.jpg`;
    
    
    img.onload = () => {      
        document.body.style.backgroundImage = `url(${img.src})`
    }; 
}

setBg(getTimeOfDay(), getRandomNum(20))

/* SLIDER */
function getSlidePrev () {
    randomNum = Number(randomNum) - 1;

    if (randomNum === 0) {
        randomNum = 20;
    }   else if (randomNum < 10) {
        randomNum = '0' + randomNum;
    }

    setBg(getTimeOfDay(), randomNum)

    // getLinkToImage(getTimeOfDay());
}

function getSlideNext () {
    randomNum = Number(randomNum) + 1;

    if (randomNum === 21) {
        randomNum = '01';
    }   else if (randomNum < 10) {
        randomNum = '0' + randomNum;
    }

    setBg(getTimeOfDay(), randomNum)

    // getLinkToImage(getTimeOfDay());
}

const prevButton = document.querySelector('.slide-prev').addEventListener('click', getSlidePrev);
const nextButton = document.querySelector('.slide-next').addEventListener('click', getSlideNext);

/* WEATHER WIDGET */
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const weatherWindSpeed = document.querySelector('.wind');
const weatherHumidity = document.querySelector('.humidity');
let url = `https://api.openweathermap.org/data/2.5/weather?q=Minsk,BY&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;

async function getWeather(url) {
    const res = await fetch(url);
    const data = await res.json();
    weatherIcon.className = 'weather-icon owf';

    try{
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math. round(data.main.temp)}°C`;
        weatherDescription.textContent = data.weather[0].description;    
        weatherWindSpeed.textContent = data.wind.speed + ' m/s';
        weatherHumidity.textContent = data.main.humidity + ' %';
    } catch(err) {
        temperature.classList.add('weather-error');
        temperature.textContent = 'City name is incorrect!!';
        weatherDescription.textContent = '';  
        weatherWindSpeed.textContent = '';
        weatherHumidity.textContent = '';
    }
}

getWeather(url);

document.querySelector('.city').addEventListener('change', () => {
    let city = document.querySelector('.city');

    if (city.value === '') {
        url = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
    } else {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
    }
    
    getWeather(url);
});

/* QUOTES */
const getQuotes = async () => {  
    const quotes = './assets/quotesOfTheDay/data.json';
    const res = await fetch(quotes);
    const data = await res.json();
    const randomQuoteNumber = 1 + Math.floor(Math.random() * data.quotes.length - 1);
    const quoteOutput = document.querySelector('.quote').textContent = data.quotes[`${randomQuoteNumber}`].text;
    const authorOutput = document.querySelector('.author').textContent = data.quotes[`${randomQuoteNumber}`].author;

    return;
}

const changeQuote = document.querySelector('.change-quote').addEventListener('click', getQuotes);

/* AUDIO */
let playNum = 0;
const audioButton = document.querySelector('.play')
const audioPrevButton = document.querySelector('.play-prev')
const audioNextButton = document.querySelector('.play-next')

function toggleBtn() {
    audioButton.classList.toggle('pause');
}

function playPrev() {
    playNum--;
    if (playNum < 0) {
        playNum = playList.length - 1;
    }

    if (!audioButton.classList.contains('pause')) {
        toggleBtn()
    }

    audio.src = playList[playNum].src;
    audio.play();

    toggleCurrentSong()
}

function playNext() {
    playNum++;

    if (playNum > playList.length - 1) {
        playNum = 0;
    }

    if (!audioButton.classList.contains('pause')) {
        toggleBtn()
    }

    audio.src = playList[playNum].src;
    audio.play();

    toggleCurrentSong()
}

audioPrevButton.addEventListener('click', playPrev);
audioNextButton.addEventListener('click', playNext);
const playListContainer = document.querySelector('.play-list')

playList.forEach(el => {
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.textContent = `${el.title} ${el.duration}`;
    playListContainer.append(li);
})

const firstSongMarker = document.querySelector('ul > li:nth-child(1)');
const secondSongMarker = document.querySelector('ul > li:nth-child(2)');
firstSongMarker.classList.add('item-active');

function toggleCurrentSong() {
    firstSongMarker.classList.toggle('item-active');
    secondSongMarker.classList.toggle('item-active');
}

const audio = new Audio();

function playAudio() {
    if (!audioButton.classList.contains('pause')) {
        audio.src = playList[playNum].src;
        audio.currentTime = 0;
        audio.play();
    } else {
        audio.pause();
    }

    toggleBtn();
}

audioButton.addEventListener('click', playAudio);

/* internationalization */
const greetingTranslation = {
    en: {
        morning: 'Good morning',
        afternoon: 'Good afternoon',
        evening: 'Good evening',
        night: 'Good night',
        placeholder: '[Enter name]',
    },
    ru: {
        morning: 'Доброе утро',
        afternoon: 'Добрый день',
        evening: 'Добрый вечер',
        night: 'Доброй ночи',
        placeholder: '[Введите имя]',
    },
}