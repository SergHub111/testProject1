let burger_btn = document.querySelector('.burger_btn');
let nav_list_item = document.querySelectorAll('.nav_list_item');
let nav_burg = document.querySelectorAll('.burg_menu');

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})

// burger_btn.onclick = function (e) {
//     nav_burg.forEach(item => {
//         item.classList.toggle('toggle_hide')
//     }
//     )
// }



