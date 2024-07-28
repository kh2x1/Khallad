var side = document.getElementById("side");
var page = document.getElementById('page');
var page1 = document.getElementById('page1')
var page2 = document.getElementById('page2');
var header = document.getElementById("head");
// var im = document.getElementById("im");
// var Html_img = document.getElementById("Html_img");
// var Css_img = document.getElementById("Css_img");
// var Js_img = document.getElementById("Js_img");
// var Figma_img = document.getElementById("Figma_img");



document.getElementById('btn').addEventListener("click",function(){
    if(side.style.top=="-1000px") {
        side.style.top="0px";
        header.style.opacity="0.3";
        page.style.opacity="0.3";
        page1.style.opacity="0.3";
        page2.style.opacity="0.3";
    }
})

document.getElementById('btn2').addEventListener("click",function(){
    if(side.style.top=="-1000px") {
        side.style.top="0px";
        header.style.opacity="0.3";
        page.style.opacity="0.3";
        page1.style.opacity="0.3";
        page2.style.opacity="0.3";
    }
})

document.getElementById('Hide').addEventListener("click",function(){
    if(side.style.top=="0px"){
        side.style.top="-1000px";
        header.style.opacity="1";
        page.style.opacity="1";
        page1.style.opacity="1";
        page2.style.opacity="1";

    }
})



// function MouseOver(event) {
//     event.target.style.width="240px"
//     event.target.style.height="230px"
//     event.target.style.transition= "width 0.2s linear , height 0.2s linear";
//     event.target.style.cursor="pointer"
// }

// function MouseOut(event) {
//     event.target.style.width="150px"
//     event.target.style.height="140px"
//     event.target.style.transition= "width 0.2s linear , height 0.2s linear";
// }


// im.addEventListener("mouseover",MouseOver);
// im.addEventListener("mouseout",MouseOut);



// function Mover(event) {
//     event.target.style.width="215px";
//     event.target.style.height="215px";
//     event.target.style.transition= "width 0.2s linear , height 0.2s linear";

// }

// function Mout(event) {
//     event.target.style.width="200px"
//     event.target.style.height="200px"
//     event.target.style.transition= "width 0.2s linear , height 0.2s linear";
// }

// Html_img.addEventListener("mouseover",Mover);
// Html_img.addEventListener("mouseout",Mout);

// Css_img.addEventListener("mouseover",Mover);
// Css_img.addEventListener("mouseout",Mout);

// Js_img.addEventListener("mouseover",Mover);
// Js_img.addEventListener("mouseout",Mout);

// Figma_img.addEventListener("mouseover",Mover);
// Figma_img.addEventListener("mouseout",Mout);



// var light = document.getElementById("light");
// var dark = document.getElementById("dark");
// var btn = document.getElementById("btn");
// var btn2 = document.getElementById("btn2");


// document.getElementById("light").addEventListener("click",function(){
//     btn.style.display="none"
//     btn2.style.display="block"
//     light.style.display="none"
//     dark.style.display="block"
//     var element = document.body;
//     element.classList.toggle("dark")

//     var nav = document.getElementById("nav")
//     nav.style.backgroundColor="white"
//     nav.style.boxShadow="0px 0px 7px black"
//     nav.style.color="black"

//     var a = document.querySelector(".a")
//     a.style.color="black"

//     var a2 = document.querySelector(".a2")
//     a2.style.color="black"

//     var a3 = document.querySelector(".a3")
//     a3.style.color="black"

//     var a4 = document.querySelector(".a4")
//     a4.style.color="black"

//     var a5 = document.querySelector(".a5")
//     a5.style.color="black"


//     var elem2 = document.getElementById("h1-black")
//     elem2.style.color="black"

//     var elem3 = document.getElementById("h1-black2")
//     elem3.style.color="black"

//     var elem4 = document.getElementById("h2-black")
//     elem4.style.color="black"

//     var ca = document.getElementById("ca");
//     ca.style.boxShadow="0px 0px 7px black"

//     var elem5 = document.getElementById("h1-title")
//     elem5.style.color="black"

//     var elem6 = document.getElementById("h1-title2")
//     elem6.style.color="black"

//     var elem7 = document.getElementById("h3-black1")
//     elem7.style.color="black"

//     var elem8 = document.getElementById("h3-black2")
//     elem8.style.color="black"

//     var elem9 = document.getElementById("h3-black3")
//     elem9.style.color="black"

//     var elem10 = document.getElementById("h3-black4")
//     elem10.style.color="black"

//     var Hcard = document.querySelector(".H_card")
//     Hcard.style.boxShadow="0px 0px 5px black"

//     var Ccard = document.querySelector(".CSS_card")
//     Ccard.style.boxShadow="0px 0px 5px black"

//     var Jcard = document.querySelector(".JS_card")
//     Jcard.style.boxShadow="0px 0px 5px black"

//     var Fcard = document.querySelector(".FIGMA_card")
//     Fcard.style.boxShadow="0px 0px 5px black"


//     var btnBlack = document.getElementById("btn-black")
//     btnBlack.style.boxShadow="0px 0px 7px black"

//     var footer = document.getElementById("h2-footer")
//     footer.style.color="black"

//     var div = document.getElementById("div")
//     div.style.color="black"
// })

// document.getElementById("dark").addEventListener("click",function(){
//     btn.style.display="block"
//     btn2.style.display="none"
//     dark.style.display="none"
//     light.style.display="block"
//     var element = document.body;
//     element.classList.remove("dark")

//     var nav = document.getElementById("nav")
//     nav.style.backgroundColor="black"
//     nav.style.boxShadow="0px 0px 7px white"

//     var a = document.querySelector(".a")
//     a.style.color="white"

//     var a2 = document.querySelector(".a2")
//     a2.style.color="white"

//     var a3 = document.querySelector(".a3")
//     a3.style.color="white"

//     var a4 = document.querySelector(".a4")
//     a4.style.color="white"

//     var a5 = document.querySelector(".a5")
//     a5.style.color="white"


//     var elem2 = document.getElementById("h1-black")
//     elem2.style.color="white"

//     var elem3 = document.getElementById("h1-black2")
//     elem3.style.color="white"

//     var elem4 = document.getElementById("h2-black")
//     elem4.style.color="white"

//     var Hcard = document.querySelector(".HTML_card")
//     Hcard.style.boxShadow="0px 0px 5px white"

//     var Ccard = document.querySelector(".CSS_card")
//     Ccard.style.boxShadow="0px 0px 5px white"

//     var Jcard = document.querySelector(".JS_card")
//     Jcard.style.boxShadow="0px 0px 5px white"

//     var Fcard = document.querySelector(".FIGMA_card")
//     Fcard.style.boxShadow="0px 0px 5px white"

//     var elem5 = document.getElementById("h1-title")
//     elem5.style.color="white"

//     var elem6 = document.getElementById("h1-title2")
//     elem6.style.color="white"

//     var elem7 = document.getElementById("h3-black1")
//     elem7.style.color="white"

//     var elem8 = document.getElementById("h3-black2")
//     elem8.style.color="white"

//     var elem9 = document.getElementById("h3-black3")
//     elem9.style.color="white"

//     var elem10 = document.getElementById("h3-black4")
//     elem10.style.color="white"


//     var ca = document.getElementById("ca");
//     ca.style.backgroundColor="white"

//     var footer = document.getElementById("h2-footer")
//     footer.style.color="white"

//     var div = document.getElementById("div")
//     div.style.color="white"
// })