<template>
    
<table>
   
    <tbody>
     <tr>
        <div>{{prname}}</div>  
        <th>{{prprice}}</th>
         
    
     </tr>
    </tbody>
</table>
    
</template>

<script>
   export default {
    components:{

    },
   }
</script>
<style  scoped>
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
 
</style>