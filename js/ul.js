//ul elemanlaını bir arada tutan obje
const ulElements={
    menuList:document.querySelector("#menu-list"),
    inputs:document.querySelectorAll("input"),
    wrapper:document.querySelector("#wrapper"),


};

//menüList içerisine dinamik şekilde kart ekleyecek fonksiyon
const renderCard=(data)=>{
//bu fonksiyon dışarıdan data adında bir parametere verilsin. verilen bu parametre içerisindeki her element içn bir html oluştur.

const cardHtml= data.map((item)=>`<a href='/detail.html?id=${item.id}'
 class="d-flex flex-column flex-md-row text-dark gap-3 text-decoration-none" id="card">
        <img
          src="image/item-1.jpeg" //!item.img eklenecek
          class="rounded img-fluid shadow"
          alt="card-image"
        />

        <div>
          <div class="d-flex justify-content-between">
            <h5>${item.title}</h5>
            <p class="fw-bold text-success">${(item.price * 60).toFixed(2)}₺</p>
          </div>

          <p class="lead">
            ${item.desc}
          </p>
        </div>
      </a>`)
//map ile bir diziyi döndürüp geriye yeni bir dizi oluşturduğundan dizileri birbirinden virgüller ile ayrırı. bu virgülleri ise join ile kaldırırız.
.join("")
      //oluşturulan html'i arayüze aktar
      ulElements.menuList.innerHTML=cardHtml;

      console.log(cardHtml);
};
//detay sayfasını renderlayacak fonksiyon
const renderDetailPage = (product, outlet) => {
  // Fonksiyona dışarıdan verilen outlet'in html içeriğini oluştur
  outlet.innerHTML = ` 
      <div class="d-flex justify-content-between">

      <a href='/'>
      <img src="./images/home.png" width="35px" alt="menu-icon" />
      </a>
        

        <a class="text-decoration-none text-dark" href="#">
          anasayfa / ${product.category} / ${product.title}
        </a>
      </div>

   
      <h1 class="text-center">${product.title}</h1>

   
      <img
        src="${product.img}"
        alt="product-image"
        class="rounded object-fit-cover shadow"
        style="max-height: 400px"
      />

   
      <h4>Ürünün Kategorisi: <span class="text-success">${
        product.category
      }</span></h4>

  
      <h4>Ürünün Fiyat: <span class="text-success">${(
        product.price * 60
      ).toFixed(2)} ₺</span></h4>

   
      <p class="lead">
       ${product.desc}
      </p>`;
};

export{ulElements,renderCard,renderDetailPage }