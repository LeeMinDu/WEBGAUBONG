<script>
import directory from './components/directory.vue';
import inforstore from './components/inforstore.vue';
import card from './components/card.vue';
import  comment from './components/comment.vue';
import banner from './components/banner.vue';
import test from './components/test.vue';
import test2 from './components/test2.vue';
import test1 from './components/test1.vue';
 export default {
   name : 'app',
   components : {
    directory, inforstore ,comment,card,banner,test,test2,
 },
 }
</script>
<template id="abc">
    <header>
      <directory />
      <banner/>
    <!-- <card />  --> 
    </header>
  <main>
    <test />
    <test2/>
    
      <comment />
    
  </main>
  <footer>
    <div  class="site-contten">
           <h1>  Hệ Thống Cửa Hàng  </h1> 
      </div>
    <div class="main">
    <meta charset="urf-8">
    <h6> Hà Nội </h6>
    <p>   Store 1 : 348 Trương Định -  Hà Nội </p>
    <p>   Store 2 : 44 Tây Sơn - Đống Đa - Hà Nội  </p>
    <p>   Store 3 : 42 Xuân Thủy - Cầu Giấy - Hà Nội </p>
    <p>   Store 4 : 411 Nguyễn Văn Cừ - Long Biên - Hà Nội </p>
    <p>   Store 5 : 17 Ngõ 23 Nguyễn Khuyến - Hà Đông - Hà Nội </p><br>
    <h6> Hồ Chí Minh </h6> 
    <p>   Store 1 : 228 Âu Cơ, Phường 9, Tân Bình, Hồ Chí Minh </p>
    <p>   Store 2 : 77 Bàu Cát 1, Phường 14, Tân Bình, Hồ Chí Minh  </p>
    <p>   Store 3 : 555 Quang Trung, Phường 10, Gò Vấp, Hồ Chí Minh </p>
    <p>   Store 4 : 114 Cách Mạng Tháng 8, Phường 7, Quận 3, Hồ Chí Minh </p>
    <h6>   ĐẶT HÀNG ONLINE : 0987.486.146 </h6>
    <h6>   MUA HÀNG BUÔN SỈ: 0388.270.075 </h6>
    <h6> KÊNH ONLINE </h6> 
    <div class="link-icon">
        
           <a target="_blank" href="https://shopee.vn/gaubongcity.vn"> <img src="https://gaubongonline.vn/wp-content/uploads/2020/07/shopee-gau-bong1.png" alt=""></a>
           <a href="https://www.facebook.com/gaubongcity/" target="_blank"> <img src="https://gaubongonline.vn/wp-content/uploads/2020/07/facebook-1.png" alt=""> </a> 
           <a target="_blank" href="https://www.lazada.vn/shop/gau-bong-royal/?itemId=1382679057&spm=a2o4n.pdp_revamp.seller.1.7d4f2a70DMoDCw&path=promotion-33736-0.htm&tab=promotion&channelSource=pdp"> <img src="https://n7.com.vn/wp-content/uploads/2021/08/shopee-2.png" alt="" width="35px" height="35px"> </a>
           <a href="https://vt.tiktok.com/ZSd7RantE/"> <img src="https://gaubongonline.vn/wp-content/uploads/2020/07/tiktok-gaubong1.png" alt=""></a>
    </div>
    
</div>
  
  </footer> 
</template>

<style scoped>

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}
.abc{

    all: initial;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  

}


main{
  border-top: 0.2125rem solid #EE6477;
}
footer{
            background: color aquamarine;
            background-color: aquamarine;
            color: white;
            text-align:justify;
            padding:25px;
            font-size:10px;
            border-top: 0.225rem solid #EE6477;
      }
.main{
            
            padding:20px;
            text-align: justify;
            color: black;
            text-decoration:none;
            font-size: 18px;
           

        }
 .main h6{
            font-family:'Segoe UI',Arial,sans-serif;
            font-size:18px;
        }
.link-icon{
    display: flex;
    height: 100px;
    width: 100px;
    padding: 5px;
    padding-left: auto;
    padding-right: auto;

}
</style>
