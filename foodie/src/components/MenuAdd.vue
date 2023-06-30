<template>
        <div class="parent">
            <span class="span_1">

                <h1>Add, modify, or remove your menu items:</h1>

                <!--inputs for adding products-->

                <div>
                <p>Name:</p>
                <input type="text" ref="Name_Box_Add">
                </div>
                <div>
                <p>Description:</p>
                <input type="text" ref="Desc_Box_Add">
                </div>
                <div>
                <p>Image:</p>
                <input type="text" ref="Image_Box_Add">
                </div>
                <div>
                <p>Price:</p>
                <input type="text" ref="Price_Box_Add">
                </div>
                
                <button @click="add_product">Add</button>


            </span>
        </div>
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
.parent{
    display: grid;
    width: 100%;
    justify-items: center;
    align-items: center;
}

.span_1{

    display: grid;
    justify-items: center;
    align-items: center;
    text-align: center;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    width: 80%;
    background-color: #003F91;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 10px;

    color: #FFFFFF;
}

.span_1>button{
    background-color: #FFFFFF;
    color: #003F91;
    padding: 10px;
    width: 25%;
}
.span_1>h1{

    width: 90%;
}
.span_1>div{
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-rows: 8vh 8vh;

}

.span_1>div>p{
    color: #003F91;
    background-color: #FFFFFF;
    padding: 10px;
    border-radius: 10px;
}
@media only screen and (min-width: 770px){



}


@media only screen and (min-width: 1025px){


    
}
</style>