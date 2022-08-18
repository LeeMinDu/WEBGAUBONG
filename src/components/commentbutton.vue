<template>
<div>
     <div class="comment-button">
        <input class="input-comment-name"  type="text" placeholder="Nhập Tên" v-model="commentsbutton.name"> 
        <input  class="input-comment-contten" type="text" placeholder="Nhập Nội Dung" v-model="commentsbutton.contten"> 
        <button class="button-comment" @click="clickAdd" variant="danger"> Gửi Bình Luận </button>
    </div>
</div>
   
</template>
<script>
export default{
    methods:{
        clickAdd (){
            this.$emit('save',this.commentsbutton)
            this.commentsbutton={
                stt:Math.floor(Math.random()*10000),
                name:"",
                contten:"",

            }

        }
    },
data(){
    return{
    commentsbutton : {
        stt : Math.floor(Math.random()*10000),
        name:"",
        contten:"",

    },
        

    }

}
}

</script>

<style scoped>
.comment-button{
    display:flex;
   font-size: 1rem;

}
.input-comment-name{
    width: 300px;
    height: 45px;
    border-radius: 5px;
}
.input-comment-contten{
    width: 700px;
    height: 45px;
    border-radius: 5px;
    
}
.button-comment{
    width: 200px;
    height: 50px;
    border-radius: 5px;
    background: pink;
    font-size: 100%;
}
.button-comment:hover{
    background: rgb(211, 113, 130);
}

</style>