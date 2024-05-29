const joias = document.getElementById('joia');
const joia = document.querySelectorAll('#joia img');
const clients = document.getElementById('client');
const client = document.querySelectorAll('#client img');

let r = 0;
let c = 0;

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileMenuItems = document.querySelectorAll(".mobile-menu ul li a");

    menuIcon.addEventListener("click", function() {
        mobileMenu.classList.toggle("active");
    });

    mobileMenuItems.forEach(function(item) {
        item.addEventListener("click", function() {
            mobileMenu.classList.remove("active");
        });
    });
});

function ringCarrossel(){
    r++;

    if (r > joia.length - 1) {
        r = 0;
    }

    joias.style.transform = `translateX(${-r * 300}px)`;
}

setInterval(ringCarrossel, 2000);

function clientCarrossel() {
    c++;

    if (c > client.length - 1) {
        c = 0;
    }

    clients.style.transform = `translateX(${-c * 300}px)`;
}

setInterval(clientCarrossel, 3000);