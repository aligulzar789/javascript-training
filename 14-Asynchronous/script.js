'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function(data,className=""){
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(data.population/1000000).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend',html);
  countriesContainer.style.opacity = 1;
}

const renderError = function(msg){
  countriesContainer.insertAdjacentText('beforeend',msg); 
  countriesContainer.style.opacity = 1;
}


// const getCountryData = function(country){
//   const request = new XMLHttpRequest();
//   request.open('GET',`https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load',function(){
//     const [data] = JSON.parse(request.responseText);
//     console.log(data);
//     renderCountry(data);

//     const neighbour = data.borders[1];
//     const request2 = new XMLHttpRequest();
//     request2.open('GET',`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load',function(){
//       const data2 = JSON.parse(request2.responseText);
//       console.log(data2);
//       renderCountry(data2,'neighbour');
//     });

//   });
// }

// getCountryData('pakistan');


// const getCountryData = function(country){
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//   .then(response => response.json())
//   .then(data => {
//     renderCountry(data[0]);
//     const neighbour = data[0].borders[1];
//     console.log(neighbour);
//     return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`)
//   })
//   .then(response => response.json())
//   .then(data => renderCountry(data,'neighbour'))
//   .catch(err => renderError(err.message))
//   .finally(()=> countriesContainer.style.opacity = 1);
// }

// btn.addEventListener('click',function(){
//   getCountryData('pakistan')
// });




// const getJSON = function(url,errorMsg = 'Somthing went Wrong'){
//   return fetch(url).then(response => {
//     if(!response.ok) throw new Error(`${errorMsg}`);
//     return response.json();
//   })
// }

// const getCountryData = function(country){
//   getJSON(`https://restcountries.eu/rest/v2/name/${country}`,'country not Found')
//   .then(data => {
//     renderCountry(data[0]);
//     const neighbour = data[0].borders[1];
//     if(!neighbour) throw new Error('Not Neighbour');
//     return getJSON(`https://restcountries.eu/rest/v2/alpha/${neighbour}`,'country not found')
//   })
//   .then(data => renderCountry(data,'neighbour'))
//   .catch(err => renderError(err.message))
//   .finally(()=> countriesContainer.style.opacity = 1);
// }

// btn.addEventListener('click',function(){
//   getCountryData('pakistan')
// });

// const getCountryData = function(country){
//   console.log(country);
//   return fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//   .then(response => {
//     return response.json()
//   })
// }

// const whereAmI = function(lat,lng){
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//   .then(response => {
//     if (!response.ok) throw new Error('Limit Exceed Wait 2 minute')
//     return response.json()
//   })
//   .then(data => {
//     console.log(`you are in ${data.region}, ${data.country}`)
//     return getCountryData(`${data.country}`)
//   })
//   .then(data => renderCountry(data[0]))
//   .catch(err => renderError(err.message))
//   .finally(()=>{
//     countriesContainer.style.opacity = 1
//   })
// }

// whereAmI(52.508,13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// const wait = function(sec){
//   return new Promise(function(resolve){
//     setTimeout(resolve,sec*1000);
//   })
// }

// const imgContainer =  document.querySelector('.images');

// const removeImage = function(img){
//   return new Promise(function(resolve){
//     setTimeout(()=>{
//       imgContainer.removeChild(img);
//       resolve();
//     },2000)
//   })
// }

// let currentImg;

// const setImage = function(url){
//   return new Promise(function(resolve,reject){
//     const img = document.createElement('img');
//     img.src = url;
//     img.addEventListener('load',function(){
//       imgContainer.append(img);
//       resolve(img);
//     })
//     img.addEventListener('error',function(){
//       reject(new Error('img not found'))
//     })
//   })
// }  
// setImage('./img/img-1.jpg')
// .then(img => {
//   currentImg = img;
//   return wait(2);
// })
// .then(()=>{
//   currentImg.style.display = 'none';
//   return setImage('./img/img-2.jpg')
// })
// .then((img)=>{
//   currentImg = img;
//   return wait(2);
// })
// .then(() => {
//   currentImg.style.display = 'none';
// })
// .catch((err)=>{
//   console.error(err);
// })


// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function(){
//   try{
//   const pos = await getPosition();
//   console.log(pos);
//   const {latitude:lat,longitude:lng} = pos.coords;

//   const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//   if(!resGeo.ok) throw new Error('Problem Loading GeoLocation');
//   const dataGeo = await resGeo.json();
//   console.log(dataGeo);

//   const res = await fetch(`https://restcountries.eu/rest/v2/name/${dataGeo.country}`);
//   if(!res.ok) throw new Error('Problem Loading Country');
//   const data = await res.json();
//   renderCountry(data[0]);
//   return 'succes';
//   }catch(err){
//     console.error(err);
//     throw err;
//   }
// }


// whereAmI().then(res => console.log(res)).catch(err => console.log(err,'aa'));

// const a = async function(){
  
//   try{
//     const res = await whereAmI();
//     console.log(res);
//   }catch(err){
//     console.log(err,'77');
//   }
// };
// a();

const wait = function(sec){
  return new Promise(function(resolve){
    setTimeout(resolve,sec*1000);
  })
}
const imgContainer =  document.querySelector('.images');

const createImage = function(url){
  return new Promise(function(resolve,reject){
   const img = document.createElement('img');
   img.src = url;
   img.addEventListener('load',function(){
     imgContainer.append(img);
     resolve(img);
   });
   img.addEventListener('error',function(){
          reject(new Error('img not found'))
    });
  })
}

// const loadNPause = async function(){
//   try{
//     const img1 = await createImage('./img/img-1.jpg');
//     await wait(2);
//     img1.style.display = 'none';
//     const img2 = await createImage('./img/img-2.jpg');
//     await wait(2);
//     img2.style.display = 'none';
    
//   }catch(err){
//     console.error(err);
//   }
// }

// loadNPause();

// createImage('./img/img-1.jpg')
// .then(()=>{
//   return createImage('./img/img-2.jpg');
// })
// .then(()=>{
//   return createImage('./img/img-3.jpg');
// })
// ;


const loadAll = async function(imgArr){
  const imgs = imgArr.map(async (img) => {
    return await createImage(img)
  } );
  console.log(imgs);
  const a = await Promise.all(imgs);
  a.forEach((img)=> {
    img.classList.add('parallel');
  })
}

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
// const a = async function(){
//   const data = await Promise.allSettled([createImage('./img/img-1.jpg'),createImage('./img/img-2.zjpg'),createImage('./img/img-3.jpg')]);
//   console.log(data);
// }


// a();