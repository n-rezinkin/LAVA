document.getElementById('burger').onclick = function () {
   open()
};
document.getElementById('mobile-burger').onclick = function () {
   close()
};


function open() {
   document.getElementById('burger').classList.toggle('active')
   document.getElementById('mobile-burger').classList.toggle('active')
   document.getElementById('mobile-menu').classList.toggle('active');
}

function close() {
   document.getElementById('burger').classList.toggle('active')
   document.getElementById('mobile-burger').classList.toggle('active')
   document.getElementById('mobile-menu').classList.toggle('active');
}
