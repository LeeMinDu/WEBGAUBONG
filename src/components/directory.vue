<template>
<div class="directory">
   <nav>
    <br id="app">
    <div class="compo-header">
         <compoheader/>
    </div>
 
    <ul class ="contten-nav">
    
             <li>   <router-link  to="/"> Trang Chủ </router-link>  </li>
            <li>
                     <router-link  to="/product"> 
                             <span>  Gấu Teddy <CaretDownOutlined/> </span>
                     </router-link>
       
                  <ul class="product-detail">
                      <router-link to ="/smallteddy">Teddy Nhỏ </router-link>
                      <router-link to ="/bigteddy">Teddy To</router-link>

                 </ul>
            </li>
            <li><router-link to="/cattoon"> 
                <span> Gấu Bông Hoạt Hình  <CaretDownOutlined/> </span>  
                 </router-link>

                <ul class="product-detail">
                      <router-link to ="/pokemonteddy"> Gấu Bông Pokemon </router-link>
                      <router-link to ="/doraemonteddy"> Mèo doraemon</router-link>

                 </ul>

            </li>
             <li><router-link to="/animal"> <span>Gấu bông thú <CaretDownOutlined/> </span> </router-link>
                <ul class="product-detail">
                      <router-link to ="/dogteddy"> Chó Bông </router-link>
                      <router-link to ="/catteddy"> Mèo Bông </router-link>
                 </ul>
             </li>
             <li><router-link to="/accessory"> <span> Phụ Kiện<CaretDownOutlined/> </span> </router-link>
                 <ul class="product-detail">
                      <router-link to ="/chairteddy"> Ghế Bông </router-link>
                      <router-link to ="/keychainteddy"> Móc Khóa  </router-link>
                 </ul>
             </li>
             <li><router-link to="/collection"> <span>Bộ Sưu Tập <CaretDownOutlined/> </span> </router-link>
                 <ul class="product-detail">
                      <router-link to ="/animal"> Thú Bông </router-link>
                      <router-link to ="/cattoon"> Hoạt Hình </router-link>
                 </ul>
             </li>
             <li><router-link to="/inforstore"> <span>Hệ Thống Cửa Hàng  </span></router-link></li>
             <button class="button-cart"><router-link class=" contten-nav-8" to="/cart" > Giỏ Hàng <ShoppingCartOutlined /> </router-link></button>

    </ul>
   </nav>
    <router-view/>
 </div>
</template>
<script>
import {CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons-vue';
import compoheader from '../components/compoheader.vue';
export default{
    components : {
       compoheader,CaretDownOutlined,ShoppingCartOutlined ,
    },

}

</script>
<style scoped>
.directory nav{
    list-style: none;
    font-weight: 700;
    font-family: var(--bs-body-font-family);
    padding: 0.5rem 1.25rem;
 
    
}
nav ul .button-cart {
  
   font-family: var(--bs-body-font-family);
   font-weight: 700; 

}
nav ul .button-cart a {
    text-decoration: none;
    font-size: 14px;


}
nav ul li:hover .product-detail
{
    display: block;
    position:absolute ;
    background: white;
}
nav .product-detail{
    display: none;
    Width: 100%;
    height: auto;

    Left: 0;
    background-color: #fff;
    padding: 15px;
    box-shadow: 0 0.1875rem 0.25rem rgb(0 0 0 / 20%);
    
}
.product-detail:hover {
    display : block;
    position:absolute ;
}

nav ul li{
 position: relative;
 text-decoration: none;
 

}
nav ul li a {
    text-decoration: none;
    font-family: 17.5px 'Nunito', sans-serif;
    font-weight: 1000;
    padding: 5px;
    

   
}

nav ul.contten-nav {
            display: flex;
            
            justify-content: space-around;
            align-items: center;
            list-style: none;
            color: #3e5483;
            background-color:white; 
            background-size: over;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 8px 10px -5px rgb(0 0 0 / 30%);
            
        }

        
</style>