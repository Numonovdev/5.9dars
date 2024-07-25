const cardIn = document.getElementById('card_in');
const img = document.getElementById('img');
const title = document.getElementById('title');
const komp = document.getElementById('komp');
const prise = document.getElementById('prise');
const info = document.getElementById('pp')


document.addEventListener('DOMContentLoaded', function () {

     let res = window.location.href;
     let id = res.split('id=')[1];
     if (id) {
         fetch(`https://strapi-store-server.onrender.com/api/products/${id}`)
             .then(res => {
                 if (res.status == 200) {
                     return res.json()
                 }
             })
             .then(data => {
                 if (data.data.id) {
                     imag.setAttribute('src', data.data.attributes.image)
                     title.innerHTML = data.data.attributes.title;
                     komp.innerHTML = data.data.attributes.company;
                     prise.innerHTML = data.data.attributes.price;
                     info.innerHTML = data.data.attributes.description;
                 }
             })
             .catch(err => {
                 console.log(err);
             })
             .finally(function () {
                 cardIn.style.display = 'flex';
                 cardIn.style.gap = '30';
                 loding.remove()
             })
 
     } else {
         window.location.assign('http://127.0.0.1:5500/two.html')
     }
 })
     