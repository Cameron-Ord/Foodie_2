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

            <span class="span_3">

                <p class="text_decor">Change Name:</p>
       
                <!--inputs that alter info of a product based off the current index in the array-->

                <input type="value" class="name_type">

                <button :clicked_item="j" ref="product_clicked" @click="edit_name">Edit</button>

                <p class="text_decor">Change Description:</p>

                <input type="value" class="desc_type">

                <button :clicked_item="j" ref="product_clicked" @click="edit_desc">Edit</button>

                <p class="text_decor">Change Image</p>

                <input type="value" class="image_type">

                <button :clicked_item="j" ref="product_clicked" @click="edit_image">Edit</button>

                <p class="text_decor">Change Price: </p>

                <input type="value" class="price_type">

                <button :clicked_item="j" ref="product_clicked" @click="edit_price">Edit</button>

                <button :clicked_item="j" ref="product_clicked" @click="delete_product">Delete</button>

            </span>
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

    grid-auto-flow: row;

    justify-items: center;

    align-items: center;

    width: 100%;

}

.parent_div>.span_1{

    display: grid;

    align-items: center;

    justify-items: center;

    background-color: #003F91;

    width: 80%;

    grid-template-rows: 9vh 30vh;

    border-radius: 15px;

    margin-bottom: 15px;

    
}
.parent_div>.span_2{

    display: grid;

    align-items: center;

    justify-items: center;

    background-color: #003F91;

    width: 60%;

    grid-template-columns: 1fr 1fr;

    height: 10vh;

    border-radius: 15px;
    
}
.parent_div>.span_2>button{

    color: #003F91;

    background-color: #FFFFFF;

    padding: 10px;

    height: 40px;

    width: 75px;


}
.parent_div>.span_3{

    display: grid;

    align-items: center;

    justify-items: center;

    background-color: #003F91;

    width: 80%;
    
    grid-template-rows: 10vh 5vh 10vh 10vh 5vh 10vh 10vh 5vh 10vh 10vh 5vh 10vh 10vh;

    border-radius: 15px;

    margin-bottom: 5px;

    margin-top: 15px;

}

.parent_div>.span_3>p{

    color: #003F91;

    background-color: #FFFFFF;

    padding: 10px;

    border-radius: 10px;

    border-radius: 10px;

    
}

.parent_div>.span_3>button{

    color: #003F91;

    background-color: #FFFFFF;

    padding: 10px;

    height: 40px;

    width: 75px;
}
.span_1>img {

    width: 150px;
    height: 150px;

    border-radius: 50%;
    border-style: solid;
    color: #FFFFFF;
    border-width: 10px;

}



.span_1>p{

color: #FFFFFF;
}

.span_1>h2{

    color: #FFFFFF;
}

.span_1>.text_decor{

    color: #003F91;

    padding: 10px;

    background-color: #FFFFFF;

    border-radius: 10px;
}


@media only screen and (min-width: 770px){
.parent_div>.span_1{


width: 75%;



}
.parent_div>.span_2{


width: 60%;


}
.parent_div>.span_2>button{




}
.parent_div>.span_3{


width: 75%;


}

}















@media only screen and (min-width: 1025px){
.parent_div>.span_1{

display: grid;

align-items: center;

justify-items: center;

background-color: #003F91;

width: 50%;

grid-template-rows: 5vh 25vh;

border-radius: 15px;


}
.parent_div>.span_2{

display: grid;

align-items: center;

justify-items: center;

background-color: #003F91;

width: 25%;

grid-template-columns: 1fr 1fr;

height: 10vh;

border-radius: 15px;

}    


.parent_div>.span_3{

display: grid;

align-items: center;

justify-items: center;

background-color: #003F91;

width: 50%;

grid-template-rows: 10vh 5vh 10vh 10vh 5vh 10vh 10vh 5vh 10vh 10vh 5vh 10vh 10vh;

border-radius: 15px;

margin-bottom: 25px;

}
}

</style>