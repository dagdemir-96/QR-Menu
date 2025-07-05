import fetchMenu from "./api.js";
import { renderCard, ulElements } from "./ul.js";
//sayfa yüklendiğinde 
document.addEventListener("DOMContentLoaded", async () => {
    //api den menü verisini al. 
    const menuData = await fetchMenu();
    //alınan menü verisine göre arayüze renderla
    renderCard(menuData)

    //ul elements içerisindeki inputlara bir olay izleyicisi ekle. inputlar bir nodeList olduğundan öncebu nodeList içeriindeki elemanlara teker teker erişilip bu erişilen elemanlara olay izleyicisi eklemmeiz gerekir.
    ulElements.inputs.forEach((input) => {
        //her bir inputun değişimini izle
        input.addEventListener("change", () => {
            //seçili inputun id sine eriş
            const selectedCategory = input.id;

         

            //eğer selecedCategory all ise tüm ürünleri renderla değilse seçili categorye sahip ürünleri renderla


            if (selectedCategory === "all") {
                renderCard(menuData)
            } else { 
                  //menuData içerisinde selectedCategorye sahip olan menu elemenlarını filtrele
            const filtredMenuItems = menuData.filter((item) => item.category == selectedCategory);
//filtrelenen menü elemanlarına göre arayüzü renderla
            renderCard(filtredMenuItems)
            }

            




        })
    })

})
//console.log( await fetchMenu());
