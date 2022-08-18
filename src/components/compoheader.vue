<template>
    <!-- footer -->
    <footer>
        
        <div class="footer-item">
            <div class="img-footer">
              <div>
                <div class="logo-teddy"><a href=""></a></div>
                <div> <a class="shopname " href=""> Gấu Bông CiTy </a> </div> 
              </div>
              <div>
                   <input  class="search-input" placeholder="Nhập Sản Phẩm Cần Tìm" type="text" > 
                   <button class="button-search"> <SearchOutlined /></button>
              </div>
              
              
                <div class="telephone">
                  <li> <a href=""><PhoneFilled /></a> </li>
                  <li>  <a href="">0987.486.146</a> </li> 
                </div>
                
            </div>
        </div>
    </footer>
</template>

<script>
import {ShoppingCartOutlined,SearchOutlined,PhoneFilled} from '@ant-design/icons-vue';
import channel from '../components/channel.vue';
export default {
  name : 'compoheader',
  components : {
    channel,SearchOutlined,ShoppingCartOutlined,PhoneFilled,
  }



}

</script>

<style scoped>
.footer h1
{
  color: aqua;
  position: absolute;
  right: 0px;
  width: 300px;
  padding: 10px;
 
}
.footer-item {
  padding: .5rem 9rem;
  background: white;
  display: flex;
  text-align: center;
  height: 50px;
  margin-top: auto;
  margin-left:auto;
}
.search-input{
   height: 33px;
   width: 350px;
   border-color: #3e5483;
   border-radius: 5px;
}
.logo-teddy{
  height: 80px;
  width: 80px;
  margin-left: 24px;
  background-image: url(../assets/logo-teddy.png);
  background-repeat: no-repeat;
  background-size: 80% 85%;
  background-position: center;
  border-radius: 80px;

}
.footer-item .img-footer {
  align-items: center;
  display: flex;
}
.footer-item .img-footer  .shopname{
    font-size: 1.5rem;
    text-decoration: none;
    color: #EE6477;
    text-transform: uppercase;
    margin-left: 0.5rem;
    font-family: var(--bs-body-font-family);
}
 .button-search {
  height: 40px;
  width: 50px;
  border-color: #021233;
  background: #05173f;
  color: white;
  font-size: 100%;
  border-radius: 6px;

}
.button-search :hover{
    background-color: red;
    cursor: pointer;
}
 .telephone  a { 
  text-decoration: none;
  color: #EE6477;
  font-size: 2rem;
  display: block;
  margin-left: 8px;
  
}
</style>