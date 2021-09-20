

let roundIcon = document.querySelector('.roundIcon');  //make variable 'roundIcon' associate with .btn elements
let slideLeftCol = document.querySelector('.leftCol'); //variable for left coulmn
let slideRightCol = document.querySelector('.rightCol');//variable for right coulmn
let test = "test";
// console.log(test)
let rotate = 10; //rotation value for round icons
let move = 5;
const body = document.querySelector('body');




// window.addEventListener('load', (event) => {
// // This prevents the page from scrolling down to where it was previously.
//     if ('scrollRestoration' in history) {
//         history.scrollRestoration = 'manual';  //https://stackoverflow.com/questions/4210798/how-to-scroll-to-top-of-page-with-javascript-jquery
//     }
//     // This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded. This has Cross-browser support.
//     window.scrollTo(0,0);
//     console.log('page is fully loaded');
//   });


// body.addEventListener('wheel', (e) => { //looking for mouse wheel turn
//     let y = e.deltaY; 
//     rotate = rotate + (y/8);
//     move = move  - (y/20);
//     roundIcon.style.transform = `rotate(${rotate}deg)`;
//     if (move < 0)
//     {move = 0;}
//     if (move > 70)
//     {move = 70;}
//     if (move >0 && move <150 )
//         {
//             // slideLeftCol.style.transform = `translateY(${move}px)`; //slides columns up and down
//             // slideRightCol.style.transform = `translateY(${move}px)`; //slides columns up and down
//             // // console.log(move);
//         }
//         // console.log(rightImage.top, rightImage.right, rightImage.bottom, rightImage.left);
// });

let menu = document.querySelector('.header');


document.addEventListener("scroll", event => {
    let y = window.scrollY
    // console.log(y)
    if (y>10)
    {
        menu.classList.add("headerFade") //add class to menu
    }
    else{
        menu.classList.remove("headerFade")
    }
  });


const faders = document.querySelectorAll('h2, h1, h3, .leftCol, .rightCol, .midCol, .logo, .bannerVid, .boxText, .navigation, .contactGrid div, .textBlock'); //target item of fade

const appearOptions = {
    root: null,
    threshold: 0.2
};

//ITEMS APPEAR FOR FIRST TIME WHEN USER
const appearOnScroll = new IntersectionObserver
(function(entries, appearOnScroll) {
    entries.forEach(entry =>{
        if (!entry.isIntersecting){ //if item is not intersecting do nothing
            return;
        }
        else{
            setTimeout(() => {entry.target.classList.add('appear')}, 000);
            // console.log("works");
            ; //adds class appear to target element
            appearOnScroll.unobserve(entry.target);  //stops watching target
        }
})
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


var lastScrollTop = 0;
let boxMove = 50;
let circleRotate = 0;
let scrollPage = document.querySelector(".scroll")

//CHECKING DIRECTION OF SCROLL
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
//    scrollPage.style.transform = `translateY(${-st}px)`;
//    console.log(scrollPage.style.transform)
//    console.log(boxMove)
   
   if (st > lastScrollTop){
    boxMove -= 2;
    circleRotate += 5;
    slideLeftCol.style.transform = `translateY(${boxMove}px)`; //slides columns up and down
    slideRightCol.style.transform = `translateY(${boxMove}px)`; //slides columns up and down
    roundIcon.style.transform = `rotate(${circleRotate}deg)`;
   } else {
    // console.log("up")
    boxMove += 2;
    circleRotate -= 5;
    console.log(boxMove + " up")
    slideLeftCol.style.transform = `translateY(${boxMove}px)`; //slides columns up and down
    slideRightCol.style.transform = `translateY(${boxMove}px)`; //slides columns up and down
    roundIcon.style.transform = `rotate(${circleRotate}deg)`;
   }
   lastScrollTop = st <= 0 ? 0 : st;  //Not sure how this works

   //if (st <= 0){
//        lastScrollTop = 0;
//    } 
// else{
    // lastScrollTop = 0;
// }

   if(boxMove > 152)
    {boxMove = 152}
   if(boxMove < -100)
   {boxMove = -100}

}, false);

let weatherScroll = document.querySelector(".weather");


//WEATHER SCROLL

var weatherSlider = (async () => {    //USE THIS METHOD FOR HIGHER MARKS MARKS
        let res = await fetch("http://api.openweathermap.org/data/2.5/group?id=4176559,7839413,7839579,2073124,4971068,1854345,3171654,3390760,5329830,6359472&units=metric&appid=c5b06d2187f47581abc4627906708ad5");
        let data = await res.json();
        let weather = data;

        for (let i = 0; i < 4; i++) {
            weather.list.forEach(element => {
                let city = document.createElement('div');
                city.innerHTML = element.name;
                let temperature = document.createElement('div');
                temperature.innerHTML = element.main.temp + "°";
                weatherScroll.appendChild(city.cloneNode(true))
                weatherScroll.appendChild(temperature.cloneNode(true))
                });
            }
      
        let widths = weatherScroll.childNodes;
        let totalWidth = 0;

        widths.forEach(e => {
            let w = e.clientWidth
            totalWidth += w;
        })

    console.log(totalWidth)
      
    return totalWidth;
});

// let weatherWidth = 0;

let totalWeatherWidth = weatherSlider();


let totalWeatherWidth2 = weatherSlider();


// total.then(function(result) {
//     return result;// "Some User token"
//  })
//--------------------------IMAGE SCROLLER------------------------------------//


// let imgScroll = document.querySelectorAll(".imageScroll");

// for(let j=0; j < 2; j++) {
//     for (let i=0; i < 3; i++) {
//         let imageDiv = document.createElement("div");
//         let image = document.createElement("img");
//         image.src = `assets/img/sliderImages/${i}.jpg`;
//         imageDiv.append(image);
//         imgScroll[j].appendChild(imageDiv);
//     }
// }


// console.log(imgScroll[0].firstChild) //checks position of first child to move to end of array


let ScrollContainer = document.querySelector("#imageScrollContainer");

let moveImgs = function (){
    imgScrollDist-=1;
    if (imgScrollDist <= -((imgScrollWidth/2)+1)){
        imgScrollDist = -0
    };
    ScrollContainer.style.transform = `translatex(${imgScrollDist}px)`;
    // console.log(imgScrollDist);
}




let imagesScroll = document.querySelectorAll(".imageScroll")

let imgScrollWidth = 0;

imagesScroll.forEach(e => {
    let w = e.clientWidth
    imgScrollWidth += w;
})

ScrollContainer.style.width = `${imgScrollWidth}px`;


let imgScrollDist = -(imgScrollWidth/4);
console.log(imagesScroll[4].clientWidth)

let scrollWhite = document.querySelector('.imageScroll .whiteBack');

let imageGallery = document.querySelector(".imageScroll");

console.log(imgScrollWidth)

let scrollCount = 0;

let imageScroller = function (){
    // var co = ScrollContainer.firstChild.getBoundingClientRect();
    // console.log(co.left);

    let test = document.createElement('div');
    test.innerHTML="test"
    ScrollContainer.appendChild(test);

    if (scrollCount > 50){
        ScrollContainer.appendChild(test);
        // ScrollContainer.removeChild(ScrollContainer[0]);
    }
    scrollCount += 1;
    
}
console.log(ScrollContainer)


// var co = imgScroll.firstChild.getBoundingClientRect();
// console.log(co.top, co.right, co.bottom, co.left);

// if (imgScroll.firstChild.offsetLeft){

// }

// let w = imgScroll.getBoundingClientRect()

// console.log(w.width)

var interval;
let weatherWidth = 7890;
let weatherDist = -(weatherWidth/4);






// weatherScroll.style.transform = `translatex(${weatherWidth / 3}vw)`;

// weatherScroll.style.transform = `translatex(${dist}px)`;




let timer = function (target){
    interval = setInterval(target, 50); //to create delays before repeatedly executing function
}

let moveWeather = function (){
    weatherDist-=2;
    if (weatherDist <= -(weatherWidth/2)){
    weatherDist = -(weatherWidth/4)
    };
    weatherScroll.style.transform = `translatex(${weatherDist}px)`;
    
}


var children = document.querySelector(".imageScroll").childNodes;
var totalWidth = 0;

// for (var i = ; i < children.length; i++) {
//     totalWidth += children[i].clientWidth;
    
// }

// console.log(children[4].clientHeight)

console.log(children);


// // console.log(totalWidth);

timer(imageScroller);
timer(moveWeather);
timer(moveImgs);

