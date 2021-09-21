
 AOS.init();
const container  = document.querySelector('.container');
const loading = document.querySelector('.loading');
setInterval(function() {
   container.style.display = 'flex';
   container.style.animation = 'containerAnimation ease 1s'
},5000)

setInterval(function() {
 loading.style.display = 'none';
},4000)

const changeLogo = document.querySelector('.dr')

setInterval(function() {
   changeLogo.classList.add('left')
},2000)
setInterval(function() {
   changeLogo.classList.add('top')
   changeLogo.classList.remove('left')

},4000)
setInterval(function() {
   changeLogo.classList.add('bottom')
   changeLogo.classList.remove('top')

},6000)


