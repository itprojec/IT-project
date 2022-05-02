function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

function clickSingleA(a)
{
    items = document.querySelectorAll('.single.active');

    if(items.length)
    {
        items[0].className = 'single';
    }

    a.className = 'single active';
}
