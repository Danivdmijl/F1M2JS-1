const myTitle = document.getElementById('myTitel');
const myImage = document.getElementById('myImage');

let seizoenen = [
    {
        "titel":"Seizoen",
        "image":"img/seasons.jpg",
        "background":"gray"
    },
    {
        "titel":"Lente",
        "image":"img/spring.jpg",
        "background":"green"
    },
    {
        "titel":"Zomer",
        "image":"img/summer.jpg",
        "background":"yellow"
    },
    {
        "titel":"Herfst",
        "image":"img/autumn.jpg",
        "background":"brown"
    },
    {
        "titel":"Winter",
        "image":"img/winter.jpg",
        "background":"white"
    }
];

//let seizoen = {
//    "titel":"lente",
//    "image":"img/spring.jpg"
//};


function show(index){
    myTitle.innerHTML = seizoenen[index].titel;
    myImage.src = seizoenen[index].image;
    document.body.style.backgroundColor = seizoenen[index].background;
}
