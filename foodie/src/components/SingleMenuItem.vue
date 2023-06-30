<template>
    <!--an if statement that protects the html-->

        <div v-if="j !== undefined && menu_get_holder !== undefined" class="parent_div"> 

            <span class="span_1" >

                <!--displays the menu items based off its indexed position-->

                <h2>{{ menu_get_holder[j][`name`] }}</h2>

                <img :src="menu_get_holder[j][`image_url`]">

            </span>

            <span class="span_2">

                <!--buttons for going forwards or backwards in the index-->

                <button @click="prev">Previous</button>

                <button @click="next">Next</button>

            </span>

            <article class="span_3">       
                <!--inputs that alter info of a product based off the current index in the array-->

                <div>
                <p class="text_decor">Change Name:</p>
                <input type="value" class="name_type">
                <button :clicked_item="j" ref="product_clicked" @click="edit_name">Edit</button>
                </div>

                <div>
                <p class="text_decor">Change Description:</p>
                <input type="value" class="desc_type">
                <button :clicked_item="j" ref="product_clicked" @click="edit_desc">Edit</button>
                </div>

                <div>
                <p class="text_decor">Change Image</p>
                <input type="value" class="image_type">
                <button :clicked_item="j" ref="product_clicked" @click="edit_image">Edit</button>
                </div>

                <div>
                <p class="text_decor">Change Price: </p>
                <input type="value" class="price_type">
                <button :clicked_item="j" ref="product_clicked" @click="edit_price">Edit</button>
                </div>

                <span class="delete_div">
                    <button :clicked_item="j" ref="product_clicked" @click="delete_product">Delete</button>     
                </span>
       
            
            </article>
        </div>
</template>

<script>
import axios from 'axios';
import Cookies from 'vue-cookies';
export default {
    data() {
        return {

            //setting the index as undefined//

            j: undefined,

            menu_get_holder: [],


        }
    },



    methods: {

        //next and prev buttons//

        next() {

            this.j++;



            if (this.j > this.menu_get_holder.length - 1) {

                this.j = 0;

            }

        },


        prev() {

            this.j--;

            if (this.j < 0) {

                this.j = this.menu_get_holder.length - 1;
            }

        },

        delete_product(details) {


            //deleting the product based off the index of the product clicked//

            let restaurant_token = Cookies.get(`rest_login_token`);

            this.$refs[`product_clicked`] = details.currentTarget;

            let button_clicked = this.$refs[`product_clicked`].getAttribute(`clicked_item`);

            let image = this.menu_get_holder[button_clicked][`id`];



            axios({

                method: `DELETE`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/menu`,

                headers: {

                    'x-api-key': `qK2iR1gTkkAjPH0kfGDY`,

                    token: restaurant_token

                },

                data: {

                    menu_id: image,
                }


            }).then((response) => {

                //if successful, deletes product//

                response;

            }).catch((error) => {

                error;

            });
        },


        edit_name(details) {

              //edits info based on index//

            let restaurant_token = Cookies.get(`rest_login_token`);

            this.$refs[`product_clicked`] = details.currentTarget;

            let button_clicked = this.$refs[`product_clicked`].getAttribute(`clicked_item`);

            let image = this.menu_get_holder[button_clicked][`id`];

            let name_input = document.querySelector(`.name_type`);

            let name_input_value = name_input[`value`];



            
            axios({

                method: `PATCH`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/menu`,

                headers: {

                    'x-api-key': `qK2iR1gTkkAjPH0kfGDY`,

                    token: restaurant_token

                },

                data: {

                    menu_id: image,

                    name: name_input_value,



                }


            }).then((response) => {

                response;

              


            }).catch((error) => {

                error;


            })

        },

        edit_desc(details) {

              //edits info based on index//

            let restaurant_token = Cookies.get(`rest_login_token`);

            this.$refs[`product_clicked`] = details.currentTarget;

            let button_clicked = this.$refs[`product_clicked`].getAttribute(`clicked_item`);

            let image = this.menu_get_holder[button_clicked][`id`];

            let desc_input = document.querySelector(`.desc_type`);

            let desc_input_value = desc_input[`value`];




         
            axios({

                method: `PATCH`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/menu`,

                headers: {

                    'x-api-key': `qK2iR1gTkkAjPH0kfGDY`,

                    token: restaurant_token

                },

                data: {

                    menu_id: image,
                    description: desc_input_value


                }


            }).then((response) => {

                response;

                
            }).catch((error) => {

                error;


            })

        },

        edit_image(details) {

            //edits info based on index//

            let restaurant_token = Cookies.get(`rest_login_token`);

            this.$refs[`product_clicked`] = details.currentTarget;

            let button_clicked = this.$refs[`product_clicked`].getAttribute(`clicked_item`);

            let image = this.menu_get_holder[button_clicked][`id`];

            let image_input = document.querySelector(`.image_type`);

            let image_input_value = image_input[`value`];

            axios({

                method: `PATCH`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/menu`,

                headers: {

                    'x-api-key': `qK2iR1gTkkAjPH0kfGDY`,

                    token: restaurant_token

                },

                data: {

                    menu_id: image,
                    image_url: image_input_value,



                }


            }).then((response) => {

                response;

              


            }).catch((error) => {

                error;


            })


        },

        edit_price(details) {

              //edits info based on index//

            let restaurant_token = Cookies.get(`rest_login_token`);

            this.$refs[`product_clicked`] = details.currentTarget;

            let button_clicked = this.$refs[`product_clicked`].getAttribute(`clicked_item`);

            let image = this.menu_get_holder[button_clicked][`id`];

            let price_input = document.querySelector(`.price_type`);

            let price_input_value = price_input[`value`];


          
            axios({

                method: `PATCH`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/menu`,

                headers: {

                    'x-api-key': `qK2iR1gTkkAjPH0kfGDY`,

                    token: restaurant_token

                },

                data: {

                    menu_id: image,
                    price: price_input_value,



                }


            }).then((response) => {

                response;

               


            }).catch((error) => {

                error;


            })

        },

   },
   


        mounted(){

            //axios call for menu on mount//

            
            let rest_id_value = Cookies.get(`restaurant_id`);

            axios({

                method: `GET`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/menu`,

                headers: {

                    'x-api-key': `qK2iR1gTkkAjPH0kfGDY`,

                },

                params: {

                    restaurant_id: rest_id_value,

                },
            }).then((response) => {

                response;

                for (let i = 0; i < response[`data`].length; i = i + 1) {

                    this.menu_get_holder.push(response[`data`][i]);

                  


                }

                this.j = 0;

                if(this.menu_get_holder.length <= 0){

                    this.menu_get_holder = undefined;
                }

            }).catch((error) => {

                error;

            });

 

        }
    }
</script>

<style scoped>

.parent_div{
    display: grid;
    justify-items: center;
    align-items: center;
    grid-auto-flow: row;
}

.span_1{
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-rows: 5vh 1fr;
    margin-top: 20px;
    margin-bottom: 10px;
}
.span_1>h2{
margin-bottom: 10px;
color: #FFFFFF;
background-color: #003F91;
border-radius: 10px;
padding: 10px;
}
.span_1>img{
    width: 75%;
    height: 75%;
    object-fit: cover;
    border-radius: 50%;

    color: #003F91;
    border-width: 10px;
    border-style: solid;
}
.span_2{
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    margin-top: 10px;
    margin-bottom: 10px;
}

.span_2>button{
    display: grid;
    align-items: center;
    justify-items: center;
    background-color: #FFFFFF;
    color: #003F91;
    padding: 10px;

    margin-top: 15px;
    margin-bottom: 15px;
    border-radius: 5px;
}
.span_3{
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    text-align: center;
    width: 80%;

    border-radius: 10px;
    color: #FFFFFF;
    margin-top: 10px;
    margin-bottom: 10px;


}
.span_3>div{
    display: grid;
    align-items: center;
    justify-items: center;

    grid-template-rows: 10vh 6vh 8vh;
    width: 100%;
    background-color: #003F91;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 10px;

}

.span_3>div>button{
    display: grid;
justify-items: center;
align-items: center;
background-color: #FFFFFF;
color: #003F91;
width: 25%;
padding: 10px;
border-radius: 10px;
}

.text_decor{
    color: #003F91;
    background-color: #FFFFFF;
    padding: 10px;
    border-radius: 10px;

}
.delete_div{

    display: grid;
    align-items: center;
    justify-items: center;
    width: 70%;
    background-color: #003F91;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 10px;

}
.delete_div>button{

    width: 50%;
display: grid;
justify-items: center;
align-items: center;
background-color: #FFFFFF;
color: #003F91;

padding: 10px;
border-radius: 10px;


}
@media only screen and (min-width: 770px){



}


@media only screen and (min-width: 1025px){


    
}
</style>