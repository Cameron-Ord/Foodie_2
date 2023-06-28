<template>
    <div>
        <main class="page_main">

            <div class="divider_div">
            <section class="section_main">
                <article class="article_1">
                    <span class="article_1_span_2">

                        <!--using data stored in variable to display onto the page-->

                        <h1>Welcome, {{ client_data_holder[`username`] }}</h1>

                        <h1>Account info:</h1>

                        <img v-bind:src="client_data_holder[`image_url`]">
                
                        <p class="p_prof">Email:</p>
                        <p class="p_data">{{ client_data_holder[`email`] }}</p>

                        <p class="p_prof">First-name: </p>
                        <p class="p_data"> {{ client_data_holder[`first_name`] }}</p>

                        <p class="p_prof">last-name: </p>
                        <p class="p_data">{{ client_data_holder[`last_name`] }}</p>

                        <p class="p_prof">username: </p>
                        <p class="p_data">{{ client_data_holder[`username`] }}</p>

                    
                </span>
                    <span class="article_1_span_3">

                        <h1>Edit your profile:</h1>

                        <p>Change email:</p>

                        <input placeholder="enter a new email" type="text" ref="email_change">

                        <button @click="change_email">Update Email</button>

                        <p>Change username:</p>

                        <input placeholder="enter a new username" type="text" ref="username_change">

                        <button @click="change_username">Update Username</button>

                        <p>Change avatar:</p>

                        <input placeholder="upload an image" type="text" ref="avatar_change">

                        <button @click="change_avatar">Update Avatar</button>

                        <p>Change password:</p>

                        <input placeholder="enter a password" type="password" ref="password_change">

                        <button @click="change_password">Update Password</button>
                    </span>
                </article>
            </section>
            <section class="orders_section">
                <article class="orders">

                    <!--displaying orders based on a condition and whether they have been completed or not-->

                    <span v-if="sort_incomplete_orders !== undefined" class="incomp">

                        <h1>Current Orders:</h1>

                    <div class="incomp_order" v-for="(order, i) in sort_incomplete_orders" :key="i">

                        <h1>ORDER: {{ order[0][`order_id`] }}</h1>

                        <div v-for="(item, j) in order" :key="j">
                        
                        <h4>{{ item.name }} - ${{ item.price }}</h4>
                        
                        </div>
              

                    </div>

                    </span>
                </article>
                <article class="old_orders">

                    <span class="completed" v-if="sort_completed_orders !== undefined">

                        <h1>Order History:</h1>

                    <div class="comp_order" v-for="(order, i) in sort_completed_orders" :key="i">

                        <h1>ORDER: {{ order[0][`order_id`] }}</h1>
                  
                        <div v-for="(item, j) in order" :key="j">
                        
                            <h4>{{ item.name }} - ${{ item.price }}</h4>
                        </div>
                    </div>
                </span>
            </article>
            </section>
            <section class="section_sub">
                <article class="article_sub">
                <span class="del_span">
                        <h1>Account settings:</h1>
                        <input placeholder="enter your password to delete your account" type="password"
                            ref="delete_account">

                            <!--calling the delete api on click, requires password typed in field-->

                        <button @click="delete_profile" class="delete_button">Delete Account</button>
                    </span>

                </article>
            </section>
        </div>
        </main>

    </div>
</template>

<script>

import axios from 'axios';
import Cookies from 'vue-cookies';


export default {
    data() {
        return {

            client_data_holder: {},

            unsort_incomplete_orders: [],

            unsort_completed_orders: [],

            sort_incomplete_orders: undefined,

            sort_completed_orders: undefined,

            id_array: []
        }
    },



    methods: {



        sort_completed(){
 
            let sorted_orders = [];

            let order_ids = [];

           

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


        sort_incomplete(){

            let sorted_orders = [];

            let order_ids = [];

           

            for(let i = 0; i<this.unsort_incomplete_orders.length; i++){

                let indexed = order_ids.findIndex((order_id) => order_id === this.unsort_incomplete_orders[i][`order_id`]);

                if(indexed !== -1) {

                    sorted_orders[indexed].push(this.unsort_incomplete_orders[i]);

                }else{

                    sorted_orders.push([this.unsort_incomplete_orders[i]]);
                    order_ids.push(this.unsort_incomplete_orders[i][`order_id`]);
                }

                this.sort_incomplete_orders = sorted_orders;

             
            }


        },


        delete_profile() {

            //defining the token for the api header//

            let client_token = Cookies.get(`client_login_token`);

            axios({

                method: `DELETE`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/client`,

                headers: {

                    'x-api-key': `qK2iR1gTkkAjPH0kfGDY`,

                    token: client_token,

                },

                data: {

                    //getting the typed value//

                    password: this.$refs[`delete_account`].value,
                }

            }).then((response) => {

                response;

                //deletes your profile, removes cookies, and pushes user to home page.//

                this.$router.push(`/`);

                Cookies.remove(`client_id`);

                Cookies.remove(`client_login_token`);

            }).catch((error) => {

                error;
            })


        },


        change_email() {

            let client_token = Cookies.get(`client_login_token`);

            axios({

                method: `PATCH`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/client`,

                headers: {

                    'x-api-key': `qK2iR1gTkkAjPH0kfGDY`,

                    token: client_token,

                },

                data: {

                    email: this.$refs[`email_change`].value,
                }

            }).then((response) => {

                response;

            }).catch((error) => {

                error;

            });

        },

        change_username() {
            let client_token = Cookies.get(`client_login_token`);

            axios({

                method: `PATCH`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/client`,

                headers: {

                    token: client_token,

                },

                data: {

                    username: this.$refs[`username_change`].value,
                }

            }).then((response) => {

                response;

            }).catch((error) => {

                error;

            });

        },

        change_avatar() {

            let client_token = Cookies.get(`client_login_token`);

            axios({

                method: `PATCH`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/client`,

                headers: {



                    token: client_token,

                },

                data: {

                    image_url: this.$refs[`avatar_change`].value,
                }

            }).then((response) => {

                response;

            }).catch((error) => {

                error;

            });

        },

        change_password() {


            let client_token = Cookies.get(`client_login_token`);

            axios({

                method: `PATCH`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/client`,

                headers: {

                    'x-api-key': `qK2iR1gTkkAjPH0kfGDY`,

                    token: client_token,

                },

                data: {

                    password: this.$refs[`password_change`].value,
                }

            }).then((response) => {

                response;

            }).catch((error) => {

                error;

            });

        },


         

        

        

    },



    mounted() {



        let client_token = Cookies.get(`client_login_token`);

        let client_id_value = Cookies.get(`client_id_token`);

        if (client_token !== undefined) {

            axios({

                method: `GET`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/client`,

                headers: {

                },

                params: {

                    client_id: client_id_value,

                }


            }).then((response) => {

                response;
                this.client_data_holder = response[`data`][0];

            }).catch((error) => {

                error;

            });

        }


        axios({

            method: `GET`,

            url: `${process.env.VUE_APP_BASE_DOMAIN}/api/client-order`,

            headers: {

                token: client_token

            },

            params: {

                is_confirmed: 1,
                is_complete: 0,
               
            }


        }).then((response) => {

        
            response;

            
            for (let i = 0; i < response[`data`].length; i++) {

                this.unsort_incomplete_orders.push(response[`data`][i]);

            
                
                
        
            }

            this.sort_incomplete();

            if(this.unsort_incomplete_orders.length <= 0){

                this.unsort_incomplete_orders = undefined;
            }


      
        }).catch((error) => {

            error;

        });

        axios({

            method: `GET`,

            url: `${process.env.VUE_APP_BASE_DOMAIN}/api/client-order`,

            headers: {


                token: client_token

            },

            params: {

                is_confirmed: 1,
                is_complete: 1
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




.page_main {

    display: grid;

    min-height: 80vh;

    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    align-items: center;

    justify-items: center;
}

.divider_div{

width: 100%;

display: grid;
}

.page_main>.divider_div>.section_main {

    display: grid;

    grid-auto-flow: row;

    align-items: center;

    justify-items: center;

    width: 100%;

}

.page_main>.divider_div>.section_main>.article_1 {

    display: grid;

    grid-auto-flow: row;

    align-items: center;

    justify-items: center;

    width: 100%;

    text-align: center;

}





.page_main>.divider_div>.section_main>.article_1>.article_1_span_2 {

    display: grid;

    grid-template-rows: auto;

    align-items: center;

    justify-items: center;

    grid-template-rows: 15vh 5vh 30vh 10vh 5vh 10vh 5vh 10vh 5vh 10vh 5vh;

    background-color: #003F91;

    margin-top: 25px;

    width: 90%;

    text-align: center;

    color: #FFFFFF;

    border-radius: 10px;

    margin-bottom: 25px;
}


.page_main>.divider_div>.section_main>.article_1>.article_1_span_2>img {

    height: 125px;

    width: 125px;

    border-radius: 50%;

    border-style: solid;

    color: #5DA9E9;

    border-width: 10px;

}

.page_main>.divider_div>.section_main>.article_1>.article_1_span_3 {

    display: grid;

    grid-template-rows: auto;

    align-items: center;

    justify-items: center;

    grid-template-rows: 10vh 8vh 8vh 8vh 8vh 8vh 8vh 8vh 8vh 8vh 8vh 8vh 8vh;

    background-color: #003F91;

    margin-top: 25px;

    width: 90%;

    color: #FFFFFF;

    border-radius: 10px;

    margin-bottom: 25px;
}

.page_main>.divider_div>.section_main>.article_1>.article_1_span_3>button{


    color: #003F91;

    background-color: #FFFFFF;

    padding: 5px;

}

.page_main>.divider_div>.section_main>.article_1>.article_1_span_3>p{

    padding: 10px;

    border-radius: 10px;

    color: #003F91;

    background-color: #FFFFFF;
}

.page_main>.divider_div>.section_main>.account_setting{

    width: 100%;

    display: grid;

    align-items: center;

    justify-items: center;

    margin-bottom: 25px;

    margin-top: 25px;
}

.p_prof{


    color: #003F91;

    background-color: #FFFFFF;

    padding: 5px;

    border-radius: 5px;
}

.p_data{

font-size: 0.95em;

color: #FFFFFF;

}

.orders_section{


    display: grid;

    align-items: center;

    justify-items: center;

    grid-auto-flow: row;

    width: 100%;
}

.orders{


    display: grid;

    justify-items: center;

    align-items: center;

    grid-auto-flow: row;

    width: 100%;

}

.old_orders{

    display: grid;

    justify-items: center;

    align-items: center;

    grid-auto-flow: row;

    width: 100%;


}



.orders>.incomp>.incomp_order{

    display: grid;

    justify-items: center;

    align-items: center;

    width: 75%;
    
    background-color: #003F91;

    margin-top: 5px;

    margin-bottom: 5px;

    border-radius: 10px;


}
.orders>.incomp>.incomp_order>div{

    display: grid;

    justify-items: center;

    align-items: center;

    width: 100%;
    
}

.orders>.incomp>.incomp_order>div>h4{

    color: #FFFFFF;

    margin-top: 5px;

    margin-bottom: 5px;
}


.old_orders>.completed>.comp_order>div{

        display: grid;

    justify-items: center;

    align-items: center;

    width: 100%;

}

.old_orders>.completed>.comp_order>div>h4{

    color: #FFFFFF;

    margin-top: 5px;

    margin-bottom: 5px;
}
.incomp{

    width: 100%;

    display: grid;

    align-items: center;

    justify-items: center;

    text-align: center;
}

.orders>.incomp>h1{
    display: grid;
    
    margin-top: 10px;

    margin-bottom: 10px;

    width: 50%;

    justify-items: center;

    align-items: center;

    background-color: #003F91;

    padding: 10px;

    color: #FFFFFF;

    border-radius: 10px;
}


.orders>.incomp>.incomp_order>h1{

    margin-bottom: 5px;
    margin-top: 5px;
    color: #FFFFFF;
}

.old_orders>.completed{

    display: grid;

    width: 100%;

    justify-items: center;

    align-items: center;
}

.old_orders>.completed>h1{
    display: grid;
    
    margin-top: 10px;

    margin-bottom: 10px;

    width: 50%;

    justify-items: center;

    align-items: center;

    background-color: #003F91;

    padding: 10px;

    color: #FFFFFF;

    border-radius: 10px;
}

.old_orders>.completed>.comp_order{


    display: grid;

    justify-items: center;

    align-items: center;

    width: 75%;

    background-color: #003F91;

    border-radius: 10px;

    margin-top: 5px;

    margin-bottom: 5px;

}


.old_orders>.completed>.comp_order>h1{


    margin-bottom: 5px;
    margin-top: 5px;
    color: #FFFFFF;

}

.delete_button{

    color: #003F91;

    background-color: #FFFFFF;

    padding: 5px;


}

.section_sub{

    display: grid;

    align-items: center;

    justify-items: center;

    width: 100%;


}

.article_sub{

    display: grid;

    align-items: center;

    justify-items: center;

    width: 100%;


}

.section_sub>.article_sub>.del_span{

    display: grid;

    align-items: center;

    justify-items: center;

    grid-template-rows: 10vh 10vh 10vh;

    background-color: #003F91;

    width: 90%;

    color: #FFFFFF;

    border-radius: 10px;

    margin-top: 25px;

    margin-bottom: 25px;

    width: 90%;

}


@media only screen and (min-width: 770px){

.page_main {


    grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));


}
.orders_section{



width: 100%;
}

.orders{



width: 100%;

}

.old_orders{



width: 100%;


}


.divider_div{

width: 100%;


}

.page_main>.divider_div>.section_main {



width: 100%;

}

.page_main>.divider_div>.section_main>.article_1 {

grid-template-columns: 1fr 1fr;


width: 100%;



}





.page_main>.divider_div>.section_main>.article_1>.article_1_span_2 {

width: 90%;

height: 113vh;

grid-template-rows: 15vh 5vh 30vh 10vh 5vh 10vh 5vh 10vh 5vh 10vh 5vh;
}


.page_main>.divider_div>.section_main>.article_1>.article_1_span_2>img {

height: 125px;

width: 125px;

border-radius: 50%;


}

.page_main>.divider_div>.section_main>.article_1>.article_1_span_3 {


    width: 90%;

    height: 113vh;

    grid-template-rows: 15vh 8vh 8vh 8vh 8vh 8vh 8vh 8vh 8vh 8vh 8vh 8vh 8vh;
}


.old_orders>.completed>h1{

    width: 40%;

}
.orders>.incomp>h1{

    width: 40%;

}


.orders>.incomp>.incomp_order{


width: 30%;



}

.old_orders>.completed>.comp_order{


width: 30%;



}



.section_sub>.article_sub>.del_span{

width: 50%;

}

}





@media only screen and (min-width: 1025px){


.page_main {

grid-template-columns: repeat(auto-fit, minmax(770px, 1fr));

place-items: center;

}
.orders_section{

grid-auto-flow: column;

width: 85%;

align-items: center;

justify-items: center;
}

.orders{

align-items: center;

justify-items: center;

width: 100%;

}

.old_orders{

align-items: center;

justify-items: center;

width: 100%;


}


.divider_div{

width: 100%;

align-items: center;

justify-items: center;


}

.page_main>.divider_div>.section_main {



width: 100%;

}

.page_main>.divider_div>.section_main>.article_1 {

grid-template-columns: 1fr 1fr;


width: 85%;



}





.page_main>.divider_div>.section_main>.article_1>.article_1_span_2 {



grid-template-rows: 15vh 5vh 30vh 10vh 5vh 10vh 5vh 10vh 5vh 10vh 5vh;



width: 95%;



height: 115vh;


}


.page_main>.divider_div>.section_main>.article_1>.article_1_span_2>img {

height: 125px;

width: 125px;

border-radius: 50%;


}

.page_main>.divider_div>.section_main>.article_1>.article_1_span_3 {


width: 95%;

grid-template-rows: 15vh 8vh 8vh 8vh 8vh 8vh 8vh 8vh 8vh 8vh 8vh 8vh 8vh;
height: 115vh;
}


.old_orders>.completed>h1{

    width: 50%;

}
.orders>.incomp>h1{


    width: 50%;

}


.orders>.incomp>.incomp_order{


width: 75%;

height: 16vh;


}

.old_orders>.completed>.comp_order{


width: 75%;
height: 16vh;


}



.section_sub>.article_sub>.del_span{

width: 50%;

}


}
</style>