// $("aside ul li").next(".data__list").slideUp(500)
$("img").attr("draggable","false")
$("aside ul li").click(e=>{
    $(".data__list").slideUp(200)
    $("aside ul li").removeClass("active")
    e.currentTarget.classList.add("active")
    $("aside ul li").next(".data__list").slideDown(200)
})

$(".toggile").click(_=>{
    $(".toggile").toggleClass("active")
    let tog = document.querySelector(".toggile")
    let root = document.querySelector(".root")
    if (tog.classList.contains("active")) {
        console.log(1);
        root.classList.add("aside_toggle")
    }else{
        root.classList.remove("aside_toggle")

    }
})
let squre = document.querySelector("main .container .taps ul:last-of-type li:first-of-type")
setInterval(() => {
    new Promise((resolve,reject)=>{
        squre.style.cssText =`
        animation: polits_catch  1s 1s infinite  linear !important;
        `
        setTimeout(_=>{
    
            resolve()
        },2000)
    }).then(_=>{
        squre.style.cssText =`
            animation: none`
    })
}, 2500);


//************* start taps content 


$(".taps__li li").click(e=>{
    $(`main .container .content[data-type`).removeClass("show__content")
    $(".taps__li li").removeClass("active");
    e.target.classList.add("active")
    
    // console.log();
    show__content(e.target.innerText)
})
function show__content(value = "Recommended"){
    $(`main .container .content[data-type="${value}"]`).addClass("show__content")
}
show__content()
//************* end taps content 


$("main .container .taps ul:last-of-type li").click(_=>{
    $("main .container .content .row-1 .cards").addClass("content__showLins")
    $("main .container .content .row-2 .cards").addClass("content__showLins")
    $("aside").css({
        position: "sticky",
        top:0,
        height:"100vh"
    
    })
})
let row_2_list_isClick = false
$("main .container .taps ul:last-of-type li:first-of-type").click(_=>{
    $("main .container .content .row-1 .cards").removeClass("content__showLins")
    $("main .container .content .row-2 .cards").removeClass("content__showLins")
    $("aside").css({
        position: "",
        top:0,
        height:""
    
    })
})

$("main").click(e => {
    console.log();
    if (e.target.id.startsWith("icon")) {
        $(`[data-target_list=${e.target.id[e.target.id.length - 1]}]`).toggleClass("show__content")
    }
     else {
        $(`[data-target_list]`).removeClass("show__content")
    }
})
$("img").attr("loading","lazy")