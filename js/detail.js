//çok sayfalı uygulamalrda profile ,ditail gibi sayfalar bir çok eleman için dinamik şekilde renderlanır.
//bunu ise ul e geçilen parametreye göre yaparız.

import fetchMenu from "./api";
import {renderDetailPage, ulElements} from ".ul.js"

//js de URLSearchPrams classı sayesinde url deki arama parametrelerine erişip kullanabiliriz.

//URLSearchParams clssını kullanarak url deki arama parametrelerini al
const params=new URLSearchParams(window.location.search);

//alınan parametrelerin içerisinden id parametresini al ve bu id parametresini karşılığını numbere çevir.
const id=+params.get("id");

document.addEventListener("DOMContentLoaded", async ()=>{
    //api den menü elemanlarını al
   const data=  await fetchMenu()
   //detay sayfasında renderlanacak ürünü bul
   const detailProduct=data.find((item)=>item.id==id);

   //bulunan ürün verisine göre detay sayfası renderla

   renderDetailPage(detailProduct,ulElements.wrapper);
   

  

})