let pageviews = document.getElementById("pageviews"),
price = document.getElementById("price"),
plano = document.getElementById("plano"),
range = document.getElementById("range"),
toggle = document.getElementById("toggle");
priceText = price.textContent;
let value;
let checked;

range.oninput = function(){
    changeValues(range.value, checked)
}

let init = () => {
    checked = false;
    price.innerHTML = "R$16,00";
    value = 50;
}

toggle.addEventListener('change', (e) => {
    checked = e.target.checked;
    changeValues(range.value, checked)
})

let changeValues = (data, check) => {

    switch(parseInt(data)){
        case 1 :
            price.innerHTML = (check ? (192 - ((16 * .25)* 12)) : 16);
            pageviews.innerHTML = '10';
            plano.innerHTML = (check ? "/ Year" : "/ Month");
        break;
        case 2 :
            price.innerHTML = (check ? ( 360 - ((30 * .25)* 12)) : 30);
            pageviews.innerHTML = '100';
            plano.innerHTML = (check ? "/ Year" : "/ Month");
        break;
        case 3 :
            price.innerHTML = (check ? ( 504 - ((42 * .25)* 12)) : 42);
            pageviews.innerHTML = '500';
            plano.innerHTML = (check ? "/ Year" : "/ Month");
        break;
        case 4 :
            price.innerHTML = (check ? ( 684 - ((57 * .25)* 12)) : 57);
            pageviews.innerHTML = '600';
            plano.innerHTML = (check ? "/ Year" : "/ Month");
        break;
        case 5 :
            price.innerHTML = (check ? ( 732 - ((61 * .25)* 12)) : 61);
            pageviews.innerHTML = '800';
            plano.innerHTML = (check ? "/ Year" : "/ Month");
        break;
    }

    price.innerHTML = '$' + price.innerHTML + ',00';
    pageviews.innerHTML += 'K PAGEVIEWS';

} 

init()