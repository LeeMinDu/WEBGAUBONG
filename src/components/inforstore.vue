<template>
<div id = " contten">
    
    <h1 class="contten-section">  Hệ Thống Cửa Hàng</h1>
    <p class="section-title"> Gấu Bông CiTy </p>
    <p class="about-contten"> *GẤU BÔNG CITY- SHOP THƯƠNG HIỆU CHÍNH HÃNG : </p>
    <p> GẤU BÔNG CITY là thương hiệu gấu bông- thú nhồi bông cao cấp, có uy tín với mẫu mã đa dạng, cam kết hàng chính hãng </p>
    <p> - 100% nhồi bông trắng PP 3D cao cấp, tinh khiết </p>
    <p> - Ảnh và video đúng sản phẩm </p>
    <p> - Tuyển sỉ và CTV toàn quốc, chiết khấu cực cao. Hàng luôn có sẵn đầy kho, đặt là ship ngay! </p>
<p> GẤU BÔNG CITY SHOP CAM KẾT VỚI KHÁCH HÀNG </p>
<p> - Miễn phí vận chuyển theo chính sách của Shopee  </p> 
<p> - Miễn phí trả hàng trong 7 ngày theo chính sách của Shopee </p> 
<p> - Sản phẩm 100% giống mô tả - có video quay sản phẩm </p> 
<p> - Đảm bảo chất lượng, dịch vụ tốt nhất, hàng được giao từ 1-5 ngày kể từ ngày đặt hàng  </p> 
<p> - Giao hàng trên toàn quốc theo hình thức COD/ ví AIRPAY hoặc nhân hàng thanh toán. </p>  
 </div>
 <p class="contten-title"> Hệ  Thống Cửa Hàng Hà Nội </p>
 <div class="store-list">
   <div class="store-item-all" v-for="item in store" :key="item.id"> 
     <div class="store-item-image"> <img :src="item.img" alt="" class="store-item-image-img" > </div>   
        
 
     <div class="store-item">
        <div class="store-item-name"> 
            <div class="store-item-name-icon"> <HomeOutlined /></div>
            <div  class="store-item-name-title"> {{item.name}} </div>  
        </div>
        <div class="store-item-address"> 
            <div class="store-item-name-icon"> <EnvironmentOutlined /></div> 
            <div>{{item.address}}</div>
        </div>
        <div class="store-item-phone"> 
            <div class="store-item-name-icon">   <WhatsAppOutlined /> </div> 
            <div>{{item.phone}}</div> 
        </div>
        <div class="store-item-time">  
            <div class="store-item-name-icon"> <DashboardOutlined /> </div> 
            <div>{{item.time}}</div>
        </div>
      <div class="store-item-image-address"> <img src="" alt=""> </div>
    </div> 
   </div>
  
  </div>

</template>

<script>
import {FacebookOutlined,WhatsAppOutlined,EnvironmentOutlined,DashboardOutlined,HomeOutlined} from '@ant-design/icons-vue';
export default {
    components : {
        FacebookOutlined,WhatsAppOutlined,EnvironmentOutlined,DashboardOutlined,HomeOutlined ,
    },
  data (){
    return  {

      store : [
        {
        id : 1 , 
        name: 'Gấu Bông CiTY Hà Nội ',
        img: "/public/hethong_hanoi.png",
        address: 'GaubongCiTy.vn',
        phone : '097.989.6616',
        time : '8h30 - 23h',
      },
        {
        id : 1 , 
        name: 'Gấu Bông CiTY Đống Đa ',
        img: "/public/Untitled design (3).png",
        address: '1028 Đường Láng, Đống Đa',
        phone : '035.369.6616',
        time : '8h30 - 23h',
      },
        {
        id : 1 , 
        name: 'Gấu Bông Online Cầu Giấy ',
        img: "/public/Untitled design (4).png",
        address: '42 Xuân Thủy, Cầu Giấy',
        phone : '093.777.6616',
        time : '8h30 - 23h'

      },
      {
        id : 3 , 
        name: 'Gấu Bông Online Long Biên ',
        img: "/public/Untitled design (5).png",
        address: '411 Nguyễn Văn Cừ, Long Biên',
        phone : '034.369.6616',
        time : '8h30 - 23h'

      },
      {
        id : 1 , 
        name: 'Gấu Bông CiTY Hà Đông ',
        img: "/public/store-4.png",
        address: '17 Ngõ 23 Nguyễn Khuyến, Văn Quán, Hà Đông',
        phone : '03.9799.6616',
        time : '8h30 - 23h',
      },
      ]
    }
  }
}


</script>

<style scoped >
#contten{

  padding-top: 64px;
  padding-bottom: 104px;
  padding-left: 14px;
  padding-right: 14px;

}


.contten-section{
  width: 800;
  text-align:  center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 800;
  color: #ff6683;
  border-bottom : 3px solid #02c4c1;
  padding-bottom: 14px;

}
.section-title{
  text-align:  center;
  font-size: 30px;
  color: rgb(1, 1, 12);



}
.about-contten{
  text-align: justify;
  font-size: 20px;
  margin-bottom: 35px;
  line-height: 1.6;
}
.contten-title{
  font-size: 30px;
  border-bottom: 0.225rem solid #ff6683;
  padding-bottom:10px;
  font-family:'Segoe UI',Arial,sans-serif;
        
}
.store-item-all{
  display: flex;
  
}
.store-item-image{
  width: 665px;
  height: 350px;
  text-align: center;
  padding-bottom: 60px;
  
  
}
.store-item-image-img{
  border-radius:25px;
  box-shadow: rgba(0,0,0,6.075) 0px 2px 12px ;
}
.store-item{
    display:block;
    
    width: 665px;
    height: 350px;
    font-weight: 600;
    font-size: 20px;
    color: inherit ;
    line-height: 1.6;
    align-items: center!important;
    padding-bottom: 60px;
}
.store-item-time,
.store-item-phone,
.store-item-address,
.store-item-name{
  display: flex;
  font-family: inherit;
}
.store-item-name-icon{
  color: #02c4c1 !important;
  padding-right: 10px;
}
.store-item-name-title{
  color:#ff6683;
  font-size: 25px;
  font-weight: 900;

}
</style>