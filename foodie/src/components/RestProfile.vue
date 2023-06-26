<template>
    <div>
        <main class="page_main">
            <section class="section_main">

                <!--injecting data stored in variables, gotten by the api-->

                    <div class="article_1_div">

                        <h1>Welcome, {{ rest_data_holder[`name`] }}</h1>

                        <img v-bind:src="rest_data_holder[`profile_url`]">

                    </div>


                <article class="article_1">



                    <span class="span_1">

                        <p class="p_text">Email:</p>
                        <p> {{ rest_data_holder[`email`] }}</p>

                        <p class="p_text">Address:</p>
                        <p> {{ rest_data_holder[`address`] }}</p>

                        <p class="p_text">Phone Number:</p>
                        <p> {{ rest_data_holder[`phone_number`] }}</p>

                        <p class="p_text">Bio:</p>
                        <p class="bio_text"> {{ rest_data_holder[`bio`] }}</p>

                        <p class="p_text">Location:</p>
                        <p> {{ rest_data_holder[`city`] }}</p>

                    </span>
                    <span class="span_2">

                        <h1>Edit your profile:</h1>

                        <p class="p_tag_highlight">Change business email:</p>

                        <input placeholder="enter a new email" type="text" ref="change_email">

                        <button @click="change_email">Change email</button>

                        <p class="p_tag_highlight">Change phone number:</p>

                        <input placeholder="enter a new phone number" type="text" ref="change_number">

                        <button @click="change_phone">Change phone</button>

                        <p class="p_tag_highlight">Change address:</p>

                        <input placeholder="enter your new address" type="text" ref="change_address">

                        <button @click="change_address">Change address</button>

                        <p class="p_tag_highlight">Edit your bio:</p>

                        <input placeholder="write your information here" type="text" ref="change_bio">

                        <button @click="change_bio">Change bio</button>

                        <p class="p_tag_highlight">Change banner:</p>

                        <input placeholder="upload your image here" type="text" ref="change_banner">

                        <button @click="change_banner">Change banner</button>

                    </span>

                </article>

                <article class="article_2">

                    <!--importing some components-->

                    <menu-add></menu-add>

                </article>
                <article class="article_3">

                    <single-menu-item></single-menu-item>

                </article>
            </section>

            <section class="orders_sect">
                
                <article class="incoming_orders" v-if="sort_unconfirmed_orders !== undefined">

                    <h1>Incoming Orders:</h1>

                    <div v-for="(order, i) in sort_unconfirmed_orders" :key="i">

                        <h1>ORDER: {{ order[0][`order_id`] }}</h1>

                        <div v-for="(item, j) in order" :key="j">

                            <h1>{{ item.name }} - ${{ item.price }}</h1>

                          
                        </div>

                        <button :clicked_confirm="i" @click="confirm_order" ref="confirmed_order">Confirm Order</button>

                    </div>
                </article>
                <article class="confirmed_orders" v-if="sort_confirmed_orders !== undefined">

                    <h1>Confirmed Orders:</h1>

                    <span v-for="(confirmed, i) in sort_confirmed_orders" :key="i">

                        <h1>ORDER: {{ confirmed[0][`order_id`] }}</h1>

                        <div v-for="(item, j) in confirmed" :key="j">

                            <h1>{{ item.name }} - ${{ item.price }}</h1>

                        </div>
                        <button :clicked_complete="i" @click="complete_order" ref="completed_order">Complete Order</button>
                    </span>

                </article>


                <article class="completed_orders" v-if="sort_completed_orders !== undefined">

                    <h1>Completed Orders:</h1>

                    <span v-for="(completed, i) in sort_completed_orders" :key="i">

                        <h1>ORDER: {{ completed[0][`order_id`] }}</h1>

                    </span>


                </article>
            </section>
                <!--displaying orders based off values and conditions-->
        <section class="delete_sect">
                <article class="article_4">

                    <span class="span_1">

                        <h1>Account Settings:</h1>

                        <input placeholder="enter your password to delete your account" type="text" ref="delete_acc">


                        <button @click="delete_account">Delete Account</button>

                    </span>

                </article>
            </section>
        </main>

    </div>
</template>

<script>

import axios from 'axios';
import Cookies from 'vue-cookies';
import SingleMenuItem from './SingleMenuItem.vue';
import MenuAdd from './MenuAdd.vue';
export default {


    components:{

        SingleMenuItem,
        MenuAdd


    },

    data() {
        return {

            index: 0,

            rest_data_holder: {},

            unsort_unconfirmed_orders: [],

            unsort_confirmed_orders: [],

            unsort_completed_orders: [],

            sort_unconfirmed_orders: undefined,

            sort_confirmed_orders: undefined,

            sort_completed_orders: undefined,

        }
    },

    methods: {


        sort_unconfirmed(){

            let sorted_orders = [];

            let order_ids = [];

            console.log(order_ids, sorted_orders);

            for(let i = 0; i<this.unsort_unconfirmed_orders.length; i++){

                let indexed = order_ids.findIndex((order_id) => order_id === this.unsort_unconfirmed_orders[i][`order_id`]);

                if(indexed !== -1) {

                    sorted_orders[indexed].push(this.unsort_unconfirmed_orders[i]);

                }else{

                    sorted_orders.push([this.unsort_unconfirmed_orders[i]]);
                    order_ids.push(this.unsort_unconfirmed_orders[i][`order_id`]);
                }

                this.sort_unconfirmed_orders = sorted_orders;

             
            }

        },


        sort_confirmed(){

            let sorted_orders = [];

            let order_ids = [];

            console.log(this.unsort_confirmed_orders, `unsort`);

            for(let i = 0; i<this.unsort_confirmed_orders.length; i++){

                let indexed = order_ids.findIndex((order_id) => order_id === this.unsort_confirmed_orders[i][`order_id`]);

                if(indexed !== -1) {

                    sorted_orders[indexed].push(this.unsort_confirmed_orders[i]);

                }else{

                    sorted_orders.push([this.unsort_confirmed_orders[i]]);
                    order_ids.push(this.unsort_confirmed_orders[i][`order_id`]);
                }

                this.sort_confirmed_orders = sorted_orders;

                console.log(this.sort_confirmed_orders, `confirmed`);
             
            }

        },

    sort_completed(){

            let sorted_orders = [];

            let order_ids = [];

            console.log(order_ids, sorted_orders);

            for(let i = 0; i<this.unsort_completed_orders.length; i++){

                let indexed = order_ids.findIndex((order_id) => order_id === this.unsort_completed_orders[i][`order_id`]);

                if(indexed !== -1) {

                    sorted_orders[indexed].push(this.unsort_completed_orders[i]);

                }else{

                    sorted_orders.push([this.unsort_completed_orders[i]]);
                    order_ids.push(this.unsort_completed_orders[i][`order_id`]);
                }

                this.sort_completed_orders = sorted_orders;

             
            }

        },


        confirm_order(details) {

            let restaurant_token = Cookies.get(`rest_login_token`);

            this.$refs[`confirmed_order`] = details.currentTarget;

            let button_clicker = this.$refs[`confirmed_order`].getAttribute(`clicked_confirm`);

            let confirmed_item = this.unsort_unconfirmed_orders[button_clicker][`order_id`];


            axios({

                method: `PATCH`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/restaurant-order`,

                headers: {

                    'x-api-key': `qK2iR1gTkkAjPH0kfGDY`,

                    token: restaurant_token,
                },

                data: {

                    order_id: confirmed_item,

                    is_confirmed: "true",


                },

            }).then((response) => {

                response;

            }).catch((error) => {

                error;

            })

        },

        complete_order(details) {

            let restaurant_token = Cookies.get(`rest_login_token`);

            this.$refs[`completed_order`] = details.currentTarget;

            let button_clicker = this.$refs[`completed_order`].getAttribute(`clicked_complete`);

            let completed_item = this.unsort_confirmed_orders[button_clicker][`order_id`];



            axios({

                method: `PATCH`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/restaurant-order`,

                headers: {
                    'x-api-key': `qK2iR1gTkkAjPH0kfGDY`,

                    token: restaurant_token,
                },

                data: {

                    order_id: completed_item,

                    is_complete: "true",
                    is_confirmed: "false"


                },


            }).then((response) => {

                response;


            }).catch((error) => {
                error;


            });




        },


        delete_account() {

            let restaurant_token = Cookies.get(`rest_login_token`);
    
            console.log(this.refs[`delete_acc`][`value`]);

            console.log(restaurant_token);
            axios({

                method: `DELETE`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/restaurant`,

                headers: {


                    'x-api-key': `qK2iR1gTkkAjPH0kfGDY`,

                    token: restaurant_token,
                },

                data: {

                    password: this.$refs[`delete_acc`][`value`],

                }

            }).then((response) => {

                response;

            }).catch((error) => {

                error;

            });


        },


        change_email() {

            let restaurant_token = Cookies.get(`rest_login_token`);

            axios({

                method: `PATCH`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/restaurant`,

                headers: {

                    'x-api-key': `qK2iR1gTkkAjPH0kfGDY`,

                    token: restaurant_token,
                },

                data: {

                    email: this.$refs[`change_email`][`value`],
                }

            }).then((response) => {

                response;


            }).catch((error) => {

                error;

            });

        },

        change_phone() {

            let restaurant_token = Cookies.get(`rest_login_token`);

            axios({

                method: `PATCH`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}api/restaurant`,

                headers: {

                    'x-api-key': `qK2iR1gTkkAjPH0kfGDY`,

                    token: restaurant_token,
                },

                data: {

                    phone_number: this.$refs[`change_number`][`value`],
                }

            }).then((response) => {

                response;


            }).catch((error) => {

                error;

            });

        },

        change_address() {

            let restaurant_token = Cookies.get(`rest_login_token`);

            axios({

                method: `PATCH`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/restaurant`,

                headers: {

                    'x-api-key': `qK2iR1gTkkAjPH0kfGDY`,

                    token: restaurant_token,
                },

                data: {

                    address: this.$refs[`change_address`][`value`],
                }

            }).then((response) => {

                response;


            }).catch((error) => {

                error;

            });

        },

        change_bio() {

            let restaurant_token = Cookies.get(`rest_login_token`);

            axios({

                method: `PATCH`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/restaurant`,

                headers: {

                    'x-api-key': `qK2iR1gTkkAjPH0kfGDY`,

                    token: restaurant_token,
                },

                data: {

                    bio: this.$refs[`change_bio`][`value`],
                }

            }).then((response) => {

                response;


            }).catch((error) => {

                error;

            });


        },

        change_banner() {

            let restaurant_token = Cookies.get(`rest_login_token`);

            axios({

                method: `PATCH`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/restaurant`,

                headers: {

                    'x-api-key': `qK2iR1gTkkAjPH0kfGDY`,

                    token: restaurant_token,
                },

                data: {

                    banner_url: this.$refs[`change_banner`][`value`],
                }

            }).then((response) => {

                response;


            }).catch((error) => {

                error;

            });



        },


    },




    mounted() {


        let rest_id_value = Cookies.get(`restaurant_id`);


        axios({


            method: `GET`,


            url: `${process.env.VUE_APP_BASE_DOMAIN}/api/restaurant`,


            headers: {


                'x-api-key': `qK2iR1gTkkAjPH0kfGDY`


            },


            params: {


                restaurant_id: rest_id_value,
            }




        }).then((response) => {

            response;




            this.rest_data_holder = response[`data`][0];



        }).catch((error) => {


            error

        });


        let rest_token = Cookies.get(`rest_login_token`);

        axios({

            method: `GET`,

            url: `${process.env.VUE_APP_BASE_DOMAIN}/api/restaurant-order`,

            headers: {

                'x-api-key': `qK2iR1gTkkAjPH0kfGDY`,

                token: rest_token,


            },

            params: {

                is_confirmed: "false",

                is_complete: "false"
            }

        }).then((response) => {

            response;

            for (let i = 0; i < response[`data`].length; i++) {

                this.unsort_unconfirmed_orders.push(response[`data`][i]);



            }


            if(this.unsort_unconfirmed_orders.length <= 0){

                this.unsort_unconfirmed_orders = undefined;

            }


            this.sort_unconfirmed();


        }).catch((error) => {

            error;

        });


        axios({

            method: `GET`,

            url: `${process.env.VUE_APP_BASE_DOMAIN}/api/restaurant-order`,

            headers: {

                'x-api-key': `qK2iR1gTkkAjPH0kfGDY`,

                token: rest_token,


            },

            params: {

                is_confirmed: "true",

                is_complete: "false"


            }

        }).then((response) => {

            response;


            for (let i = 0; i < response[`data`].length; i++) {

                this.unsort_confirmed_orders.push(response[`data`][i]);

                
            }

            this.sort_confirmed();

             if(this.unsort_confirmed_orders.length <= 0){

                this.unsort_confirmed_orders = undefined;

            }

        }).catch((error) => {

            error;

        });

        axios({

            method: `GET`,

            url: `${process.env.VUE_APP_BASE_DOMAIN}/api/restaurant-order`,

            headers: {

                'x-api-key': `qK2iR1gTkkAjPH0kfGDY`,

                token: rest_token,


            },

            params: {


                is_complete: "true",


            }

        }).then((response) => {

            response;

            for (let i = 0; i < response[`data`].length; i++) {

                this.unsort_completed_orders.push(response[`data`][i]);




            }

            this.sort_completed();

            if(this.unsort_completed_orders.length <= 0){

                this.unsort_completed_orders = undefined;

            }


        }).catch((error) => {

            error;

        });





    }





}
</script>

<style scoped>

.page_main{

    display: grid;

    min-height: 80vh;

    grid-template-columns: repeat(auto-fit, minmax(250px));

    justify-items: center;

    align-items: center;


}


.section_main{

    display: grid;

    justify-items: center;

    align-items: center;

    grid-auto-flow: row;


}

.orders_sect{

    display: grid;

    width: 100%;
}

.delete_sect{

display: grid;

width: 100%;
}


.article_1 {
    display: grid;

    justify-items: center;

    align-items: center;

    width: 100%;


}

.section_main>.article_1_div {

    display: grid;

    justify-items: center;

    align-items: center;

    grid-template-rows: 10vh 1fr;

    width: 100%;

}

.section_main>.article_1_div>h1{

    color: #FFFFFF;

    background-color: #003F91;

    padding: 10px;

    border-radius: 10px;

}

.section_main>.article_1_div>img {

    width: 100%;

    object-fit: cover;
    
    padding-top: 15px;

    padding-bottom: 15px;

    background-color: #003F91;

}

.article_1>.span_1 {

    display: grid;

    justify-items: center;

    align-items: center;

    text-align: center;

    grid-template-rows: 10vh 5vh 10vh 5vh 10vh 5vh 10vh 1fr 10vh 5vh;

    width: 100%;

    margin-top: 25px;

    margin-bottom: 25px;

    background-color: #003F91;

    width: 90%;

    padding-top: 15px;

    padding-bottom: 15px;

    border-radius: 15px;

    margin-bottom: 25px;

}

.article_1>.span_1>p{

    color: #FFFFFF;

    width: 75%;

    font-weight: 900;

}

.article_1>.span_2>button{

    color: #003F91;

    background-color: #FFFFFF;

    padding: 5px;



    width: 40%;
}

.article_1>.span_2 {

    display: grid;

    justify-items: center;

    align-items: center;

    text-align: center;

    grid-template-rows: 10vh 10vh 5vh 10vh 10vh 5vh 10vh 10vh 5vh 10vh 10vh 5vh 10vh 10vh 5vh 10vh;

    background-color: #003F91;

    width: 90%;

    border-radius: 15px;

    margin-bottom: 25px;

    


}

.article_1>.span_2>.p_tag_highlight{

    background-color: #FFFFFF;

    color: #003F91;

    padding: 10px;

    border-radius: 10px;
}

.article_1>.span_2>p{


    color: #FFFFFF;


}

.article_1>.span_2>h1{

    color: #FFFFFF;
}


.article_2 {


    display: grid;

    justify-items: center;

    align-items: center;

    width: 100%;
}


.article_3 {
    display: grid;

    justify-items: center;

    align-items: center;

    grid-auto-flow: row;

    width: 100%;
}




.article_4 {
    display: grid;
    justify-items: center;

    align-items: center;

    text-align: center;

    width: 100%;
}

.article_4>.span_1 {


    display: grid;

    justify-items: center;

    align-items: center;

    text-align: center;

    grid-template-rows: 15vh 5vh 15vh;

    background-color: #003F91; 
    
    width: 70%;

    border-radius: 15px;

    margin-bottom: 25px;

    margin-top: 25px;
}


.article_4>.span_1>button{
    color: #003F91;

    background-color: #FFFFFF;

    padding: 5px;



    width: 35vw;

}



.article_4>.span_1>h1{

    color: #003F91;

    background-color: #FFFFFF;

    padding: 10px;

    border-radius: 10px;
}

.incoming_orders{

    display: grid;

    align-items: center;

    justify-items: center;

    grid-auto-flow: row;

    width: 100%;

}

.incoming_orders>h1{

    color: #FFFFFF;

    background-color: #003F91;

    padding: 10px;

    margin-bottom: 10px;

    margin-top: 10px;

    border-radius: 10px;
}

.confirmed_orders{
    display: grid;

    align-items: center;

    justify-items: center;

    grid-auto-flow: row;

    width: 100%;

}

.confirmed_orders>h1{


    color: #FFFFFF;

    background-color: #003F91;

    padding: 10px;

    border-radius: 10px;
    
    margin-top: 10px;

    margin-bottom: 10px;
}

.completed_orders{
    display: grid;

    align-items: center;

    justify-items: center;

    grid-auto-flow: row;

    width: 100%;

}

.completed_orders>h1{

    color: #FFFFFF;

    background-color: #003F91;

    padding: 10px;

    border-radius: 10px;

    margin-top: 10px;

    margin-bottom: 10px;
}

.incoming_orders>div{

    display: grid;

    align-items: center;

    justify-items: center;

    grid-auto-flow: row;

    background-color: #003F91;

    border-radius: 15px;

    width: 80%;

    margin-top: 5px;

    margin-bottom: 5px;

    padding-top: 10px;

    padding-bottom: 10px;

    text-align: center;

    color: #FFFFFF;

}

.incoming_orders>div>h1{

    color: #003F91;
    background-color: #FFFFFF;
    padding: 10px;
    border-radius: 10px;
    margin-top: 8px;
    margin-bottom: 8px;

}

.incoming_orders>div>div{

    display: grid;

    align-items: center;

    justify-items: center;

}

.incoming_orders>div>button{

    color: #003F91;

    background-color: #FFFFFF;

    padding: 5px;

    margin-top: 10px;

    margin-bottom: 10px;

    width: 50vw;

}
.incoming_orders>span>div{

display: grid;

align-items: center;

justify-items: center;



}

.confirmed_orders>span{

display: grid;

align-items: center;

justify-items: center;

grid-auto-flow: row;

background-color: #003F91;

border-radius: 15px;

width: 80%;

margin-top: 5px;

margin-bottom: 5px;

padding-top: 15px;

padding-bottom: 15px;

color: #FFFFFF;



}

.confirmed_orders>span>h1{

    color: #003F91;
    background-color: #FFFFFF;
    padding: 10px;
    border-radius: 10px;
    margin-top: 8px;
    margin-bottom: 8px;
}

.confirmed_orders>span>div{

display: grid;

align-items: center;

justify-items: center;


}
.confirmed_orders>span>button{

    color: #003F91;

    background-color: #FFFFFF;

    padding: 5px;

    margin-top: 10px;

    margin-bottom: 10px;

    width: 50vw;
}

.completed_orders>span{

display: grid;

align-items: center;

justify-items: center;

grid-auto-flow: row;

background-color: #003F91;

border-radius: 15px;

padding-top: 10px;

padding-bottom: 10px;

width: 50%;

margin-top: 5px;

margin-bottom: 5px;

color: #FFFFFF;

}



.article_1>.span_1>.p_text{

background-color: #FFFFFF;

color: #003F91;

padding: 10px;

border-radius: 10px;

width: 50%;

}

.bio_text{

    margin-top: 10px;
    margin-bottom: 10px;


}




@media only screen and (min-width: 770px){




.page_main{


grid-template-columns: repeat(auto-fit, minmax(480px));



}

.article_4>.span_1>button{

    width: 20vw;

}

.orders_sect{

display: grid;

width: 100%;

}

.delete_sect{

display: grid;

width: 100%;
}


.incoming_orders>div{

width: 50%;
}



.incoming_orders>div>button{

color: #003F91;

background-color: #FFFFFF;

padding: 5px;

margin-top: 10px;

margin-bottom: 10px;

width: 10vw;

}

.confirmed_orders>span>button{

color: #003F91;

background-color: #FFFFFF;

padding: 5px;

margin-top: 10px;

margin-bottom: 10px;

width: 10vw;

}


.page_main{

width: 100%;


}


.section_main{

width: 100%;

}

.article_1 {
width: 100%;
}



.article_1>.span_1 {

width: 75%;

}


.article_1>.span_2 {


width: 75%;




}



.article_2 {

width: 100%;

}


.article_3 {
width: 100%;
}




.article_4 {
width: 100%;
}

.article_4>.span_1 {
width: 75%;


}




.confirmed_orders>span{

width: 50%;


}



.completed_orders>span{


width: 50%;

}


.section_main>.article_1_div>img {

width: 90%;

object-fit: cover;

padding-top: 15px;

padding-bottom: 15px;

padding-left: 15px;

padding-right: 15px;

border-radius: 50px;

background-color: #003F91;

}


}



@media only screen and (min-width: 1025px){
.page_main{


grid-template-columns: repeat(auto-fit, minmax(770px));



}

.orders_sect{

display: grid;

width: 50%;

grid-auto-flow: column;

}

.delete_sect{

display: grid;

width: 100%;
}

.incoming_orders>div{

    width: 80%;

    height: 25vh;
}

.article_4>.span_1>button{

width: 10vw;

}

.incoming_orders>div>button{

    color: #003F91;

    background-color: #FFFFFF;

    padding: 5px;

    margin-top: 10px;

    margin-bottom: 10px;

    width: 10vw;

}

.confirmed_orders>span>button{

color: #003F91;

background-color: #FFFFFF;

padding: 5px;

margin-top: 10px;

margin-bottom: 10px;

width: 10vw;

}


.page_main{

    width: 100%;


}


.section_main{

    width: 100%;

}

.article_1 {
    width: 100%;
}



.article_1>.span_1 {

width: 50%;

}


.article_1>.span_2 {


    width: 50%;




}



.article_2 {

    width: 100%;

}


.article_3 {
    width: 100%;
}




.article_4 {
    width: 100%;
}

.article_4>.span_1 {
    width: 50%;


}




.confirmed_orders>span{

    width: 80%;

    height: 25vh;
}



.completed_orders>span{


    width: 80%;

    height: 25vh;
}


.section_main>.article_1_div>img {

width: 55%;

object-fit: cover;

padding-top: 15px;

padding-bottom: 15px;

padding-left: 15px;

padding-right: 15px;

border-radius: 50px;

background-color: #003F91;

}





}
</style>