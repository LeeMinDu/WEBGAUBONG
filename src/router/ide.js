import {createRouter,createWebHistory} from 'vue-router';
import channel  from '../components/channel.vue';
import product from '../components/product.vue';
import productdetail from '../components/productdetail.vue';
import notfound from '../components/error.vue';
import accessory from '../components/accessory.vue';
import cattoon from '../components/animal.vue';
import collection from '../components/collection.vue';
import inforstore from '../components/inforstore.vue';
import animal from '../components/animal.vue';
import cart from '../components/cart.vue';
import smallteddy from '../components/smallteddy.vue';
import bigteddy from '../components/bigteddy.vue';
import homepage from'../components/homepage.vue';

import dogteddy from '../components/dogteddy.vue';
import doraemonteddy from '../components/doraemonteddy.vue';
import pokemonteddy from '../components/pokemonteddy.vue';
import catteddy from '../components/catteddy.vue'; 

import chairteddy from '../components/chairteddy.vue';
import keychainteddy from '../components/keychainteddy.vue';




const routes = [
    {
        path :"/",
        component: homepage,
    },
   
    {
        path :"/product",
        component: product,
    
    },
    {
        path :"/chairteddy",
        component: chairteddy,
    
    },
    {
        path :"/keychainteddy",
        component: keychainteddy,
    
    },
    {
        path :"/dogteddy",
        component: dogteddy,
    
    },
 
    {
        path :"/catteddy",
        component: catteddy,
    
    },
    {
        path :"/doraemonteddy",
        component: doraemonteddy,
    
    },
    {
        path :"/pokemonteddy",
        component: pokemonteddy,
    
    },
    {
        path :"/accessory",
        component: accessory,
    
    },
    {
        path :"/smallteddy",
        component: smallteddy,
    
    },
    {
        path :"/bigteddy",
        component: bigteddy,
    
    },
    {
        path :"/cattoon",
        component: cattoon,
    },
    {
        path :"/animal",
        component: animal,
    },

    {
        path :"/inforstore",
        component: inforstore,
    },
    {
        path :"/collection",
        component: collection,
    },
    {
        path :"/cart",
        component: cart,
    },
    {
        path :"/product/:id",
        component: productdetail,
    },
    {
        path :"/ab",
        redirect: "/product",
    },
    {
        path :"/:pathMatch(.*)*",
        component :  notfound,
    },

];
const router = createRouter ({
    history : createWebHistory(),
    routes,
})
export default router;