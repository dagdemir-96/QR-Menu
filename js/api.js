//APİden menü verilerini al ve dosya dışarısına çıkar
const fetchMenu= async()=>{
/* api e istek at */
 const response = await fetch("../db.json");


 /* api den gelen veriyi json formatından js nesnesine çevir */

 const data= await response.json();
 /* elde edilen data içerisindeki menu yü fonksiyon çağırıldığında return et */
 return data.menu;
};




export default fetchMenu;