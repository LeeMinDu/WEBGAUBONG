
<template>
      
<section class="wrapper">
        <div class="products">
            <ul>
                <li class="main-product"  v-for="item in productcomputed" :key="item.id" >
                  <div class="main-product-parent">      
                    <a class="img-product"  href=""><img :src="item.url" alt=""  ></a>
                    <div class="content-product">
                        <h3 class="content-product-h3">{{item.name}}</h3>
                        <div class="content-product-deltals">
                            <div class="price">
                                <span class="money">{{item.price}}₫</span>        
                            </div>
                           
                            <button type="button" class="btn btn-cart" @click="onCart" >Thêm Giỏ Hàng</button>
                            
                        </div>
                    </div>
                  </div>
                </li>
            </ul>
            <test1 />
     
        </div>
    </section>
</template>
<style scoped>

/* wrapper */
.wrapper {
  padding:4.2rem;
  list-style: none; 
  background: rgb(241, 239, 239);

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
 border-radius:15px;
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
 border-top-right-radius: 25px;
 border-top-left-radius: 25px;
 
 
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
  width: 240px;
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
   components : { 
  },
    methods : {
        onCart (){
          this.name="item.name";
          this.price="item.price"
        }

    },
    computed:{
      productcomputed(){
        return this.image.filter(item => item.price <60000);
      }

    },
    props:['prname','prprice'],
    data(){
        
        return{
            image:[
               {
                id :1,
                name: 'gấu bông bạch Tuộc Cảm Xúc',
                price: 50000,
                url : "/public/bach-tuoc.jpg",
                iscart : false,

               },
                {
                 id:2,
                 name:'Gấu Bông Búp Bê Váy Nhung',
                 price: 239000,
                 url:"/public/bup-be-vay-nhung.jpg",
                 iscart : false,

                },

              {
                 id:2,
                 name:'Gấu Bông Búp Bê Váy Nhung',
                 price: 2000,
                 url:"/public/bup-be-vay-nhung.jpg",
                 iscart : false,

                },
                {
                 id:2,
                 name:'Gấu Bông',
                 price: 3000,
                 url:"/public/bup-be-vay-nhung.jpg",
                 iscart : false,

                },
            ]
                 
    }
}
}
</script>