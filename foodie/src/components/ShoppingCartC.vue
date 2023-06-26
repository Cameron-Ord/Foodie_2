<template>
    <div>

        <main class="page_main">

        <section class="section_main">

        <article class="cart_container">

            <!--displays what items are current stored in the shopping cart-->

        <span class="product_span" v-for="(item, i) in shopping_cart_items" :key="i">

        <h4>{{ item[`name`] }}</h4>
    
        <img :src="item[`image_url`]">

        <p> ${{ item[`price`] }}</p>


        </span>
        </article>

        <article class="order_container">

            <span class="button_span">

                <!--buttons for placing the order or clearing the cart-->

                <button @click="delete_item">Clear cart</button>
                <button @click="Order">Order</button>

            </span>

        </article>
    </section>
        </main>

        

    </div>
</template>

<script>
import axios from 'axios';
import Cookies from 'vue-cookies';
    export default {

        data() {
            return {
               

                shopping_cart_items: undefined,

                product_id: []

            }
        },
        
        methods:{

            delete_item(){


                Cookies.remove(`food_cart`);

            },


            Order(){

                let token_var = Cookies.get(`client_login_token`);

                let rest_id_var = Cookies.get(`restaurant_selected`);

                let menu_item_no = this.product_id;
               
                console.log(this.product_id);

                console.log(token_var , `token`);

           
            
                
                axios({

                    method:`POST`,

                    url:`${process.env.VUE_APP_BASE_DOMAIN}/api/client-order`,

                    headers:{

                        'x-api-key': `qK2iR1gTkkAjPH0kfGDY`,

                        token: token_var,

                    },

                    data:{

                        menu_items: menu_item_no,
                        restaurant_id: rest_id_var,

                    }

                }).then((response)=>{
                 
                    response;
                    
                Cookies.remove(`food_cart`);

                this.$router.push(`/AccountProfile`);

                //on post success, removes cart cookie and pushes to your account page//

                }).catch((error)=>{
                    
                    error;
                
                });


            }

        },



        mounted(){

            //defining variables on mount//

            this.shopping_cart_items = Cookies.get(`food_cart`);
            console.log(this.shopping_cart_items, `cart`);
        

            for(let i = 0; i < this.shopping_cart_items.length; i++){

                this.product_id.push(this.shopping_cart_items[i][`id`]);

            }

            console.log(this.product_id);

        }
    }
</script>


<style scoped>

img{
    width: 50px;
    height: 50px;
}
.page_main{

display: grid;

align-items: center;

justify-items: center;

grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

text-align: center;

min-height: 80vh;
}

.page_main>.section_main{

display: grid;

align-items: center;

justify-items: center;

grid-template-rows: 1fr 1fr;

width: 100%;

}
.cart_container{

    display: grid;

    align-items: center;

    justify-items: center;

    grid-auto-flow: row;

    width: 100%;



}

.product_span{

    display: grid;

    justify-items: center;

    align-items: center;

    grid-template-columns: 1fr 1fr 1fr;

    margin-top: 10px;

    margin-bottom: 10px;

    background-color: #003F91;

    width: 70%;

    border-radius: 10px;

}


.product_span>h4{

    color: #FFFFFF;

}

.product_span>p{

    color: #FFFFFF;
}
.order_container{

    display: grid;

    align-items: center;

    justify-items: center;

    text-align: center;

    width: 100%;

 
}
.order_container>.button_span{

    display: grid;

    align-items: center;

    justify-items: center;

}


.order_container>.button_span>button{

    color: #FFFFFF;

    background-color: #003F91;

    padding: 10px;

    width: 30vw;

}


@media only screen and (min-width: 770px){


}









@media only screen and (min-width: 1025px){

.product_span{

display: grid;

justify-items: center;

align-items: center;

grid-template-columns: 1fr 1fr 1fr;

margin-top: 10px;

margin-bottom: 10px;

background-color: #003F91;

width: 30%;

border-radius: 10px;

}

.order_container>.button_span>button{

color: #FFFFFF;

background-color: #003F91;

padding: 10px;

width: 5vw;

}

}

</style>