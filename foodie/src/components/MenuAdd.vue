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

            console.log(this.$refs[`Name_Box_Add`][`value`]);

            if (rest_id_value !== undefined) {

                axios({

                    method: `POST`,

                    url: `https://foodie.bymoen.codes/api/menu`,

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

.span_1 {


display: grid;

justify-items: center;

align-items: center;

text-align: center;

grid-template-rows: 15vh 10vh 5vh 10vh 5vh 10vh 5vh 10vh 5vh 10vh;

background-color: #003F91;

width: 90%;

border-radius: 15px;

margin-bottom: 25px;
}

.span_1>button{

    color: #003F91;

    background-color: #FFFFFF;

    padding: 10px;

    height: 40px;

    width: 75px;
}

.span_1>p{

color: #003F91;

background-color: #FFFFFF;

padding: 10px;

border-radius: 10px;


}

.span_1>h1{

color: #FFFFFF;

width: 75%;

}








@media only screen and (min-width: 770px){

.span_1 {

width: 75%;

}

}











@media only screen and (min-width: 1025px){

.span_1 {

width: 50%;

}

    
}

</style>