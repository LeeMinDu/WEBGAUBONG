<template >

 <div class="banner">
     <banner />
 </div>

      <div class="banners">
    
        <div class="banners-1"> <img src="https://teddy.vn/wp-content/uploads/2021/06/dien-gau-tan-nha.jpg" alt="" width="540px" height="176px"> </div>
        <div class="banners-2"> <img src="https://teddy.vn/wp-content/uploads/2021/06/bao-hanh-goi-qua-mien-phi.jpg" alt="" width="540px" height="176px" > </div>
      </div>
       <div  class="site-contten">
           Gấu Bông Cao Cấp 
      </div>
           <card />

</template>
<script>
import banner from './banner.vue';
import card from './card.vue';
export default{
    name : 'homepage',
    components :{
    card,
    banner
}
}
</script>
<style>

.banner{
    border-bottom: 0.425rem solid #EE6477;
}

.banners{
  display: flex;
  text-align: center;
  

  
}
.banners-1{
  padding-left: 110px;
  padding-right: 30px;
  padding-top: 40px;
  padding-bottom: 40px;
  transition: all 0.5s ease;
  transform: scale(1);
 
}
.banners-1:hover{
  transform: scale(1.1);
}
.banners-2{
  padding-right: 110px;
  padding-left:30px;
  padding-top: 40px;
  padding-bottom: 40px;
  transition: all .3s ease;
  transform: scale(1);
 
}
.banners-2:hover{
  transform: scale(1.1);
}
.site-contten{
    color:  #3e5483 ;
    text-align: center;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-size: 1.5rem;
    text-transform: uppercase;
    border-bottom: 1.125rem solid #EE6477;
    padding-bottom: 0.625rem;
    margin-bottom: 1.25rem;
}
</style>