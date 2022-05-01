let slideIndex = [1, 1];
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
}



function clickSingleA(a) {
    items = document.querySelectorAll('.single.active');

    if (items.length) {
        items[0].className = 'single';
    }

    a.className = 'single active';
}




let x = document.cookie("username = mazen");
let y = document.cookie("password = 12345");

alert("this website take cookies ");