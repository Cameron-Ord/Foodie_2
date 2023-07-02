<template>
        <div class="parent">
            <span class="span_1">

                <span class="special_span">
                    <h1>Add menu items:</h1>
                </span>
     

                <!--inputs for adding products-->

                <div>
                <p>Name:</p>
                <input type="value" ref="Name_Box_Add" class="name_type_add">
                </div>
                <div>
                <p>Description:</p>
                <input type="value" ref="Desc_Box_Add">
                </div>
                <div>
                <p>Image:</p>
                <input type="value" ref="Image_Box_Add">
                </div>
                <div>
                <p>Price:</p>
                <input type="value" ref="Price_Box_Add">
                </div>
                
                <span class="special_span">
                <button @click="add_product">Add</button>
                <p v-if="(status !==undefined && item_added !==undefined) || (status == 'Failed to add item')">{{ status }}</p>
                </span>


            </span>
        </div>
</template>

<script>
import axios from 'axios';
import Cookies from 'vue-cookies';




    export default {
        data() {
            return {
              status: undefined,
              item_added: undefined
            }
        },


        methods:{


              add_product() {

                //defining variables for axios//

            let restaurant_token = Cookies.get(`rest_login_token`);

            let rest_id_value = Cookies.get(`restaurant_id`);

            let name_input_menu_add = document.querySelector(`.name_type_add`);

            this.item_added = name_input_menu_add['value'];

            if (rest_id_value !== undefined) {

                axios({

                    method: `POST`,

                    url: `${process.env.VUE_APP_BASE_DOMAIN}/api/menu`,

                    headers: {


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

                    if(response['data'][0]['row_count()'] !== undefined){

                    this.status = `${this.item_added} added to menu`;

                    } else {

                        this.status = 'Failed to add item';

                    }
                  

                }).catch((error) => {

                    error;
                    
                    this.status = 'Failed to add item';
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
    grid-template-rows: 10vh 1fr 1fr 1fr 1fr 10vh;
    width: 80%;

    margin-bottom: 10px;
    border-radius: 10px;

    color: #FFFFFF;
}

.special_span>button{
    background-color: #FFFFFF;
    color: #003F91;
    padding: 10px;
    width: 45%;
}
.span_1>h1{

    width: 90%;
}

.special_span{
    background-color: #003F91;
    width: 90%;
    padding-top: 10px;

    padding-bottom: 10px;
    border-radius: 10px;
}
.span_1>div{
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-rows: 8vh 8vh;

    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #003F91;
    width: 100%;
    border-radius: 10px;

}

.span_1>div>p{
    color: #003F91;
    background-color: #FFFFFF;
    padding: 10px;
    border-radius: 10px;
}
@media only screen and (min-width: 770px){
.parent{

}

.span_1{


}

.special_span>button{

}
.span_1>h1{

}

.special_span{

}
.span_1>div{


}

.span_1>div>p{

}


}


@media only screen and (min-width: 1025px){

.parent{

}

.span_1{

    width: 70%;

}

.special_span>button{
width: 60%;
}
.span_1>h1{

}

.special_span{
width: 75%;
}
.span_1>div{


}

.span_1>div>p{

}

    
}
</style>