<template>
<main>

 <div>
<h3>BÌNH LUẬN </h3>
<div class="table">
<table>
   
    <tbody>
     <tr v-for="item in list " :key="item.stt">
        <div class="UserOutlined-icon" > <UserOutlined/> </div>  
        <th>{{item.name}}</th>
        <th>{{item.contten}}</th>
        <th class="reply"> Trả Lời </th>
    
     </tr>
    </tbody>
</table>

</div>
<commentbutton @save="clickSave" />
</div>

</main>
   
</template>
<script>
import {UserOutlined} from '@ant-design/icons-vue';
import commentbutton from "../components/commentbutton.vue";
export default{
    components : {
      commentbutton,UserOutlined,
      
    },
    methods :{
        clickSave(itemSave){
          console.log(itemSave)
          this.list.push(itemSave)

        }
       
    },
    data (){
         return {
            list:[
                {
                    stt:1,
                    name:"Dương",
                    contten:" Gấu Bông Mềm "

                },
                {
                    stt:2,
                    name:"Tũn",
                    contten:" Shop Phục Vụ Nhiệt tình rất đang tiền mua"

                },
                {
                    stt:3,
                    name:"Hoàng",
                    contten:" Gấu Bông rẻ"

                },
            ]
         }
    }
  
}
</script>
<style scoped>
template {
    font-family: Arial, Helvetica, sans-serif;
}
main{
    display: flex;
    background: #F5F5F5;
    font-family: 'Nunito', sans-serif;
    line-height: 1.5;
    color: #333;
    font-size: 0.875rem

    
}
main.bt-comment:hover{
    background-color: aqua;
}
main .bt-comment:active{
    background-color: #0d6588;
}
table {
    width: 1330px;       
    font-family: arial, sans-serif;
    border-collapse: collapse;
}
th {
    padding: 8px;
    text-align: left;
    border-top: 1px solid #dee2e6;
}
    tbody tr:nth-child(odd) {
    background-color: #f2f2f2;
}
.UserOutlined-icon{
    font-size: 1.3rem;
    color: #FFF;
    background: #02c4c1;
    border-radius: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 0.9375rem;
}

.reply{
    color: #02c4c1;
    float: right;
    font-size:0.875rem ;
}
</style>
