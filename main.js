var swiper = new Swiper(".container", {
    spaceBetween: 20,
    effect: "fade",
    loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    
});

var swiper = new Swiper(".containers", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints:{
        450:{
            slidesPerView: 2,
        },
        768:{
            slidesPerView: 3,
        },
        991:{
            slidesPerView: 4,
        },
        1200:{
            slidesPerView: 5,
        },
    },
});
// -----------------audio-------------------------------
let audio = document.getElementById("audio")
        let play = document.getElementById("play")
        let loopCount = 0

        function playsound(){
            if(loopCount == 0){
                loopCount = 1
                audio.play()
                play.innerHTML= "&#x2225"
            }else{
                loopCount = 0
                audio.pause()
                play.innerHTML= "&#9658"
            }
        }

// --------------------counter--------------code in script of html file-------------

// let numbers = document.querySelectorAll(".numbers .only-number")
// let sections = document.getElementById("counter")
// let begain = false

// window.onscroll = function () {
//     if (window.scrollY >= 2000 ){
//         if(!begain){
//             numbers.forEach((e)=>startCounter(e))
//         }
//         begain = true
//     }
// };

// function startCounter (ele){
//     let goal = ele.dataset.goal
//     let count = setInterval(()=>{
//         ele.textContent++;
//         if(ele.textContent == goal){
//             clearInterval(count)
//         }
//     },6000/goal)
// }
// -------------------arrow to top------------------

window.onscroll = () =>{
    if(window.scrollY > 60){
        document.querySelector('#to-top').classList.add('active');
    }else{
        document.querySelector('#to-top').classList.remove('active');
    }
}
// -------------------------------------------------
let btnSearch =document.querySelector(".btn-search")
let searchForm = document.querySelector(".search-form")
let closeSearch = document.querySelector(".close-search")
let btnCart = document.querySelector(".btn-cart")
let cart = document.getElementById("carts")
let lx = document.querySelector(".lx")
let closed = document.querySelector(".closed")
btnSearch.addEventListener("click", ()=>{
    searchForm.classList.add("down")
})
closeSearch.addEventListener("click", ()=>{
    searchForm.classList.remove("down")
})
btnCart.addEventListener("click", ()=>{
    cart.classList.toggle("remove")
})
closed.addEventListener("click" , ()=>{
    lx.classList.add("item")
})
// --------------------------------------------------
let logins = document.getElementById("logins")
let register = document.getElementById("register")
let bttn = document.getElementById("bttn")
let one = document.getElementById("one")
let two = document.getElementById("two")
let btnLogin = document.querySelector(".btn-login")
let formLogin = document.getElementById("form-login")

two.addEventListener("click" , ()=>{
    register.style.left="5rem"
    register.style.opacity="1"
    logins.style.left="-45rem"
})

one.addEventListener("click" , ()=>{
    register.style.opacity="0"
    logins.style.left="5rem"
})
two.addEventListener("click", ()=>{
    bttn.style.left="120px"
})
one.addEventListener("click", ()=>{
    bttn.style.left="0px"
})
btnLogin.addEventListener("click", ()=>{
    formLogin.classList.toggle("opne")
})

// -------------------toggle--------------------------
let toggle = document.getElementById("toggle")
let close =document.getElementById("close")
let link = document.getElementById("manu-list")

if(toggle){
    toggle.addEventListener("click",()=>{
        link.classList.add("show-menu")
    })
}

if(close){
    close.addEventListener("click",()=>{
        link.classList.remove("show-menu")
    })
}
// -------------------panel about-----------------------
const panels = document.querySelectorAll(".panel")
panels.forEach((p)=>{
    p.addEventListener("click", () =>{
        re();
        p.classList.add("active")
    })
})

const re = () =>{
    panels.forEach((p) =>{
        p.classList.remove("active")
    })
}
// --------------------Shop product details--------------
let big = document.getElementById("big")
let small = document.getElementsByClassName("small")


let producted = document.getElementById("producted") 
producted.addEventListener("click",()=>{
    cart.classList.toggle("remove")
})

small[0].onclick = function(){
    big.src = small[0].src
}
small[1].onclick = function(){
    big.src = small[1].src
}
small[2].onclick = function(){
    big.src = small[2].src
}
small[3].onclick = function(){
    big.src = small[3].src
}
// ---------------------Contact toggle------------code in script of html file--------
// let plus = document.getElementById("plus")
// let large = document.getElementById("large")
// plus.addEventListener("click",()=>{
//     large.classList.toggle("should")
// })
// let plusOne = document.getElementById("plus-one")
// let largeOne = document.getElementById("large-one")
// plusOne.addEventListener("click",()=>{
//     largeOne.classList.toggle("should")
// })
// let plusTwo = document.getElementById("plus-two")
// let largeTwo = document.getElementById("large-two")
// plusTwo.addEventListener("click",()=>{
//     largeTwo.classList.toggle("should")
// })
// let plusFour = document.getElementById("plus-four")
// let largeFour = document.getElementById("large-four")
// plusFour.addEventListener("click",()=>{
//     largeFour.classList.toggle("should")
// })

// let arrow = document.querySelector(".arrow")
// arrow.addEventListener("click",()=>{
//     arrow.classList.toggle("rotate")
// })
// let arrowOne = document.querySelector(".arrow-one")
// arrowOne.addEventListener("click",()=>{
//     arrowOne.classList.toggle("rotate")
// })
// let arrowTwo = document.querySelector(".arrow-two")
// arrowTwo.addEventListener("click",()=>{
//     arrowTwo.classList.toggle("rotate")
// })
// let arrowThree = document.querySelector(".arrow-three")
// arrowThree.addEventListener("click",()=>{
//     arrowThree.classList.toggle("rotate")
// })


// ----------------------About Counter----------------code in script of html file--------

// function showTime(){
//     let date = new Date()
//     let h = date.getHours()
//     let m = date.getMinutes()
//     let s = date.getSeconds()

//     if(h == 0){
//         h = 12
//     }
//     if(h > 12){
//         h = h - 12
//     }
//     h = (h < 10) ? "0" + h : h
//     m = (m < 10) ? "0" + m : m
//     s = (s < 10) ? "0" + s : s

//     let time = `<span style="border-radius: 50% ; padding : 20px ; border : 8px solid #ff8503">${h}</span> : 
//     <span style="border-radius: 50% ; padding : 20px; border : 8px solid #ff8503">${m}</span> :
//     <span style="border-radius: 50% ; padding : 20px ; border : 8px solid #ff8503">${s}</span>`
//     document.getElementById("clock").innerHTML = time
//     setTimeout(showTime , 1000)
// }
// showTime();