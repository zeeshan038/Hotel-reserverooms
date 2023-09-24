// "use  strict";

// // const countriesContainer = document.querySelector(".countries ");

// // // const getData = function(country){
// // // const request = new XMLHttpRequest();
// // // request.open( 'GET',`https://restcountries.com/v3.1/name/${country}` );
// // //  request.send();

// // // // always use regular function
// // //  request.addEventListener('load', function(){

// // //    const [   data] = JSON.parse(this.responseText);
// // //     console.log(data);


// // // getData('pakistan');
// // // getData('usa')

// // const renderCountry=function(data){

// //     const html=
// //     ` <article class="country">
// //     <img src="${data.flag}" alt="flag" class="country__img">
// //     <div class="country__data">
// //       <h3 class="country__name">${data.name}</h3>

// //     <h2 class="country__region">
// //         ${data.region}
// //     </h2>
// //     <p class="country__row">
// //         <span> 😃 </span> ${(+data.population/1000000).toFixed(1)} people
// //     </p>
// //     <p class="country__row">
// //         <span> 😃 </span> ${data.languages} lang
// //     </p>
// //     <p class="country__row">
// //         <span> 😃 </span> ${data.currencies} cur
// //     </p>
// // </div>
// // </article>  `;
// // countriesContainer.insertAdjacentHTML('beforeend', html);
// // countriesContainer.style.opacity=1;



// // }

    

// // const getData = function (country) {
// //   fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (
// //     response
// //   ) {
  
// //     return response.json();
// //   }).then(function(data){
// // renderCountry(data[0]);
// // const neighbour = data[0].borders[0];
// // if (!neighbour)  return;
// //  return fetch(`https://restcountries.com/v3.1/name/alpha/${neighbour}`);
// //   }).then(response=> response.json()).then(data => renderCountry(data , 'neighbour'))
// // };

// // getData("portugal");


// // aysnc js from technical suneja 

// const data = [
//   {name : "zeeshan" , profession:"web Developer"},
//   {
//     name :" khan" , profession : "web developer"
//   }
// ]

// function getData (){
//   setTimeout(()=>{
//     let outPut = " ";
//     data.map(( data)=>{
//       outPut+=  `<li> ${data.name}</li>`
    
//     })
//     document.body.innerHTML = outPut;
//   },1000)
// }


// function createData(newdata){
//   return new Promise((reslove, reject)=>{

//     setTimeout(()=>{
//       data.push(newdata);
//       let error = false ;
//       if(!error){
//         reslove();

//       }
//       else
//       {
//         reject();
//       }
//       },2000)
//   })

// }




//  async function asyncFunction(){
//  await createData({name:"bacha", profession:"app dev"});
//   getData();
// }

// asyncFunction();


'use strict';

//call backs in asynchronous js

let Stocks = {
  Fruits : ['strawberry', 'grapes','bannana'],
  liquid : ['water ' , 'ice'],
  holder : ['cone ' , 'cup', 'stick'],
  toppings : ['choclate', 'peanuts']
}

//  to get rid of call back hell we use promises
// let order  = ( Fruit_name , call_production)=>{

//   setTimeout(()=>{
//     console.log(`${Stocks.Fruits[Fruit_name]} was selected`);
//     call_production();
//   },2000)

// }

// let production = ()=>{
//    setTimeout(()=>{
//     console.log('the production has started')
//     setTimeout(()=>{
//     console.log('fruits had been chopped');
//     setTimeout(()=>{
//    console.log(`${Stocks.liquid[0] } and ${Stocks.liquid[1]} added`)
 
//    setTimeout(()=>{

//     console.log(`${Stocks.holder[0]} was picked`);

//     setTimeout(()=>{
//       console.log(` ${Stocks.toppings[0]} is added`);
//     },1000)

//    },2000)

//     },1000)
//     },1000)
//    },1000)
// }


// order(0,production);

let is_shop_open = true;

// let order=(time , work)=>{

//   return new Promise ((resolve , reject)=>{
//      if (is_shop_open){
//       setTimeout(()=>{

//         resolve( work () );
//       }, time);
//      }
//      else{
//       reject("sorry we are closed");
//      };

//   });
    
//   };


//   order (2000 ,  ()=> console.log(`${Stocks.Fruits[1]} is selected`))
//   .then (()=>{
//    return order(3000, ()=> console.log(`${Stocks.liquid[0]} and ${Stocks.liquid[1]} is selected`))
//   })
//     .then(()=>{
//   return order(3000 , ()=> console.log(`${Stocks.holder[1]} is picked`))
//     })
//     .then (()=>{
//       return order (4000 , ()=> console.log(`${Stocks.toppings[1]} is added`))
//     })
//     .then (()=>{
//       return order (4000 , console.log(`ice cream is ready`))
//     }) .catch (()=>{
//       console.log(`customer left`)
//     })
//      .finally(()=>{
//       console.log('dat ended shop is closed ')
//      })



// async await

 async function topping_choice (){
    return new Promise  (( reslove , reject)=>{

    })
 }