const shopbag = document.getElementById('shop');
const wrapper = document.getElementById('wrapper');

document.addEventListener("DOMContentLoaded", function () {
     function createCard(data) {
       return `
            <div class="card" data-id = ${data.id}>
                    <img src="${data.attributes.image}" alt="image">
                    <div class="info">
                          <h3>${data.attributes.title}</h3>
                          <p> ${data.attributes.price}</p>
                    </div>
               </div>
       `;
     }
     fetch("https://strapi-store-server.onrender.com/api/products/")
       .then((res) => {
         if (res.status == 200) {
           return res.json();
         }
       })
       .then((data) => {
           if (data.data.length){
               data.data.forEach(el =>{
                   let card = createCard(el)
                   wrapper.innerHTML += card
               })
           }
   
           let cards = document.querySelectorAll('.card')
           cards.length && cards.forEach(function(card) {   
               card.addEventListener('click', function(){
                   let id = this.getAttribute('data-id')
                  window.location.assign(`http://127.0.0.1:5500/two.html?id=${id}`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
               })
           })
       })
       .catch((err) => {
         console.log(err);
       })
       .finally(function(){
           loding.remove()
       })
   });
   