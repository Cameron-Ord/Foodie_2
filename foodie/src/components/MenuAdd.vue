<template>
                    <span class="span_1">

                        <h1>Add, modify, or remove your menu items:</h1>

                        <!--inputs for adding products-->

                        <p>Name:</p>
                        <input type="text" ref="Name_Box_Add">
                        <p>Description:</p>
                        <input type="text" ref="Desc_Box_Add">
                        <p>Image:</p>
                        <input type="text" ref="Image_Box_Add">
                        <p>Price:</p>
                        <input type="text" ref="Price_Box_Add">

                        <button @click="add_product">Add</button>


                    </span>
</template>

<script>
import axios from 'axios';
import Cookies from 'vue-cookies';




    export default {
        data() {
            return {
              
            }
        },


        methods:{


              add_product() {

                //defining variables for axios//

            let restaurant_token = Cookies.get(`rest_login_token`);

            let rest_id_value = Cookies.get(`restaurant_id`);

            if (rest_id_value !== undefined) {

                axios({

                    method: `POST`,

                    url: `${process.env.VUE_APP_BASE_DOMAIN}/api/menu`,

                    headers: {

                        'x-api-key': `qK2iR1gTkkAjPH0kfGDY`,

                        token: restaurant_token

                    },

                    data: {


                        name: this.$refs[`Name_Box_Add`][`value`],
                        description: this.$refs[`Desc_Box_Add`][`value`],
                        image_url: this.$refs[`Image_Box_Add`][`value`],
                        price: this.$refs[`Price_Box_Add`][`value`]

                    },


                }).then((response) => {

                    //if post is successful, adds the information inside all the text boxes, they all need to be filled//

                    response;

                  

                }).catch((error) => {

                    error;

                });

            }



        },

        }
    }
</script>


<style scoped>
@media only screen and (min-width: 770px){



}


@media only screen and (min-width: 1025px){


    
}
</style>