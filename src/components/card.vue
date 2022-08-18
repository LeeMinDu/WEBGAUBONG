
<template>
      
<section class="wrapper">
        <div class="products">
            <ul>
                <li class="main-product"  v-for="item in image" :key="item.id" >
                  <div class="main-product-parent">      
                    <a class="img-product"  href=""><img :src="item.url" alt="" ></a>
                    <div class="content-product">
                        <h3 class="content-product-h3">{{item.name}}</h3>
                        <div class="content-product-deltals">
                            <div class="price">
                                <span class="money">{{item.price}}₫</span>
                            </div>
                            <button type="button" class="btn btn-cart">Thêm Giỏ Hàng</button>
                        </div>
                    </div>
                  </div>
                   
                </li>
            </ul>
     
        </div>
    </section>
</template>
<style scoped>

/* wrapper */
.wrapper {
  padding:4.2rem;
  list-style: none; 
  background: white;

}
.products{
  text-align: center;
}

.wrapper .products ul {
   
    font-weight: 500;
   
    list-style: none;
    display: flex;
    clear: both;
    flex-wrap: wrap;
    padding-left: 0;
    margin-left: -0.9375rem;
    margin-right: -0.9375rem;
    margin-bottom: 0;
}
.products ul .main-product {
  width: 260px;
  height: 55%;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-top:20px;
}
.products ul .main-product-parent {
 box-shadow: rgba(0,0,0,1.3) 0px 2px 12px ;
 border-radius:20px;
}
.products ul .main-product-parent:hover{

    opacity: 3;
    box-shadow: rgba(0,0,0,4.3) 0px 4px 24px ;
    }
.products ul .no-margin {
  margin-right: 0;
}

.products ul .img-product img {

 width: 100%;
 border-top-right-radius: 20px;
 border-top-left-radius: 20px;
 
 
}

.content-product .content-product-h3 {
  padding: .5rem 0;
  overflow: hidden;
  color: #3e5483;
  font-weight: 800;
  font-size: inherit;
  max-height: 50px;
  min-height: 50px;
  text-align: center;
  line-height: 19px;
  margin: 0 0 5px;
}

.content-product .content-product-deltals {
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  width: 260px;
  height: 47px;
  text-align: center;
  
}
.main-product .content-product .content-product-deltals .price {
  color: #0d6588;
  font-weight: 700;
  margin-right: 1rem;
  vertical-align: middle;
  font-size: 21px;

}

.content-product .content-product-deltals .price .money {
  vertical-align: middle;
}

.content-product .content-product-deltals .btn-cart {
  background: #eaeff0;
  border-radius: 5px;
  color: #0d6588;
  font-weight: 500;
  width: 150px;
  height:40px;
  
  text-align: center;
  box-shadow: rgba(0,0,0,1.75) 0px 1px 3px ;

}

.content-product .content-product-deltals .btn-cart:hover {
  background: rgb(5, 202, 236);
}

</style>
<script>
 import 'viewerjs/dist/viewer.css'
export default{
    data(){
        
        return{
            image:[
               {
                id :1,
                name: 'gấu bông bạch Tuộc Cảm Xúc',
                price: 50000,
                url : "/public/bach-tuoc.jpg",

               },
                {
                 id:2,
                 name:'Gấu Bông Búp Bê Váy Nhung',
                 price: 239000,
                 url:"/public/bup-be-vay-nhung.jpg",
                },
                 {
                 id:3,
                 name:'Búp Bê  Xuka',
                 price: 139000,
                 url:"/public/bup-be-xuka.jpg",
                },
                 {
                 id:4,
                 name:'Gấu Bông Chó Shiba 25 cm',
                 price: 65000,
                 url:"/public/cho-shiba.jpg",
                },
                 {
                 id:5,
                 name:'Gấu Bông Tedđy Head sale',
                 price: 399000,
                 url:"/public/teddy-head-sale.jpg",
                },
                 {
                 id:6,
                 name:'Gấu Bông Gối Ôm Hình Thú',
                 price: 239000,
                 url:"/public/gau-om-thu.jpg",
                },
                 {
                 id:7,
                 name:'Gấu Bông Heo ÔM Milk',
                 price: 365000,
                 url:"/public/heo-om-sua.jpg",
                },
                 {
                 id:8,
                 name:'Gấu Bông Teddy Head Scaled',
                 price: 390000,
                 url:"/public/teddy-scale .jpg",
                },
                 {
                 id:9,
                 name:'Gấu Bông Kì Lân Dáng Ngồi',
                 price: 314000,
                 url:"/public/ki-lan-ngoi.jpg",
                },
                 {
                 id:10,
                 name:'Gấu Bông Mèo Hoàng Thượng',
                 price: 345000,
                 url:"/public/meo-hoang-thuong.jpg",
                },
                 {
                 id:11,
                 name:'Gấu Bông Mèo Má Hồng',
                 price: 219000,
                 url:"/public/meo-ma-hong.jpg",
                },
                 {
                 id:12,
                 name:'Gấu Bông Thỏ Hoa Qủa',
                 price: 149000,
                 url:"/public/tho-hoa-qua.jpg",
                },
                 {
                 id:13,
                 name:'Gấu Bông Khủng Long Trà Sữa',
                 price: 99000,
                 url:"/public/trasua.jpg",
                },
            ]
                 
    }
}
}
</script>