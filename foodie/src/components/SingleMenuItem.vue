<template>
    <!--an if statement that protects the html-->
    <div class="parent" v-if="j !== undefined && menu_get_holder !== undefined">

        <div class="header_div">
            <h2>View and modify your menu items</h2>
        </div>

        <div  class="parent_div"> 

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
                <p v-if="(status !== undefined && status === name_resp) || (status !== undefined && status === 'please enter a new name!')">{{ status }}</p>
                </div>

                <div>
                <p class="text_decor">Change Description:</p>
                <input type="value" class="desc_type">
                <button :clicked_item="j" ref="product_clicked" @click="edit_desc">Edit</button>
                <p v-if="(status !== undefined && status === desc_resp) || (status !== undefined && status === 'please enter a new description!')">{{ status }}</p>
                </div>

                <div>
                <p class="text_decor">Change Image</p>
                <input type="value" class="image_type">
                <button :clicked_item="j" ref="product_clicked" @click="edit_image">Edit</button>
                <p v-if="(status !== undefined && status === image_resp) || (status !== undefined && status === 'please select a new image!')">{{ status }}</p>
                </div>

                <div>
                <p class="text_decor">Change Price: </p>
                <input type="value" class="price_type">
                <button :clicked_item="j" ref="product_clicked" @click="edit_price">Edit</button>
                <p v-if="(status !== undefined && status === price_resp) || (status !== undefined && status === 'please enter a new price!')">{{ status }}</p>
                </div>

                <span class="delete_div">
                    <button :clicked_item="j" ref="product_clicked" @click="delete_product">Delete</button>     
                    <p v-if="status_delete !== undefined">{{ status_delete }}</p>
                </span>
       
        
            </article>
        </div>
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
            new_price: undefined,
            new_name: undefined,
            new_desc: undefined,
            new_image: undefined,
            status: undefined,
            status_delete: undefined,
            name_resp: undefined,
            price_resp: undefined,
            desc_resp: undefined,
            image_resp: undefined


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

                this.status_delete = 'Item deleted';

            }).catch((error) => {

                error;

                this.status_delete = 'Try again';

            });
        },


        edit_name(details) {

              //edits info based on index//

            let restaurant_token = Cookies.get(`rest_login_token`);

            this.$refs[`product_clicked`] = details.currentTarget;

            let button_clicked = this.$refs[`product_clicked`].getAttribute(`clicked_item`);

            let image = this.menu_get_holder[button_clicked][`id`];

            let name_input = document.querySelector(`.name_type`);

            this.new_name = name_input[`value`];

            if(this.new_name === ''){

                this.new_name = null;
            }


            
            axios({

                method: `PATCH`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/menu`,

                headers: {

                    token: restaurant_token

                },

                data: {

                    menu_id: image,

                    name: this.new_name,



                }


            }).then((response) => {
                
                if(response['data'][0]['name'] !== undefined){

                this.name_resp = `${this.menu_get_holder[this.j]['name']} name updated to ${response['data'][0]['name']}`
                this.status = this.name_resp;

                }else{

                    this.status = 'please enter a new name!';
                }


            }).catch((error) => {

                error;

                this.status = 'Something has gone wrong!';


            })

        },

        edit_desc(details) {

              //edits info based on index//

            let restaurant_token = Cookies.get(`rest_login_token`);

            this.$refs[`product_clicked`] = details.currentTarget;

            let button_clicked = this.$refs[`product_clicked`].getAttribute(`clicked_item`);

            let image = this.menu_get_holder[button_clicked][`id`];

            let desc_input = document.querySelector(`.desc_type`);

            this.new_desc = desc_input[`value`];


            if(this.new_desc === ''){

                this.new_desc = null;
            }
         
            axios({

                method: `PATCH`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/menu`,

                headers: {

                    token: restaurant_token

                },

                data: {

                    menu_id: image,
                    description: this.new_desc


                }


            }).then((response) => {

                response;

                
                if(response['data'][0]['description'] !== undefined){

                this.desc_resp = `${this.menu_get_holder[this.j]['name']} description updated`
                this.status = this.desc_resp;

                }else{

                    this.status = 'please enter a new description!';
                }
                
            }).catch((error) => {

                error;

                this.status = 'something has gone wrong!';

            })

        },

        edit_image(details) {

            //edits info based on index//

            let restaurant_token = Cookies.get(`rest_login_token`);

            this.$refs[`product_clicked`] = details.currentTarget;

            let button_clicked = this.$refs[`product_clicked`].getAttribute(`clicked_item`);

            let image = this.menu_get_holder[button_clicked][`id`];

            let image_input = document.querySelector(`.image_type`);

            this.new_image = image_input[`value`];


            
            if(this.new_image === ''){

                this.new_image = null;
            }

            axios({

                method: `PATCH`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/menu`,

                headers: {

                    token: restaurant_token

                },

                data: {

                    menu_id: image,
                    image_url: this.new_image,



                }


            }).then((response) => {

                response;
                
                if(response['data'][0]['image_url'] !== undefined){

                this.image_resp = `${this.menu_get_holder[this.j]['name']} image updated`
                this.status = this.image_resp;

                }else{

                    this.status = 'please select a new image!';
                }
              


            }).catch((error) => {

                error;

                this.status = 'something has gone wrong!';

            })


        },

        edit_price(details) {

              //edits info based on index//

            let restaurant_token = Cookies.get(`rest_login_token`);

            this.$refs[`product_clicked`] = details.currentTarget;

            let button_clicked = this.$refs[`product_clicked`].getAttribute(`clicked_item`);

            let image = this.menu_get_holder[button_clicked][`id`];

            let price_input = document.querySelector(`.price_type`);

            this.new_price = price_input[`value`];

            if(this.new_price === ''){

                this.new_price = null;
            }
          
            axios({

                method: `PATCH`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/menu`,

                headers: {

                    token: restaurant_token

                },

                data: {

                    menu_id: image,
                    price: this.new_price,



                }


            }).then((response) => {


                
                if(response['data'][0]['price'] !== undefined){

                this.price_resp = `${this.menu_get_holder[this.j]['name']} price updated to ${response['data'][0]['price']}`
                this.status = this.price_resp;

                }else{

                    this.status = 'please enter a new price!';
                }

            }).catch((error) => {

                error;

                this.status = 'something has gone wrong!'


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

.parent{

    display: grid;
    justify-items: center;
    align-items: center;
}

.header_div{
    display: grid;
    justify-items: center;
    align-items: center;
    text-align: center;
    margin-bottom: 10px;

}

.header_div>h2{
    color: #FFFFFF;
    background-color: #003F91;
    padding: 10px;
    border-radius: 10px;
    width: 85%;
}

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
    width: 50%;
    margin-top: 20px;
    height: auto;
    object-fit: cover;
    border-radius: 10px;

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
    background-color: #003F91;
    width: 70%;
    border-radius: 10px;
}

.span_2>button{
    display: grid;
    align-items: center;
    justify-items: center;
    background-color: #FFFFFF;
    color: #003F91;
    padding: 10px;

    width: 80%;
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

    grid-auto-flow: row;
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
margin-top: 10px;
margin-bottom: 10px;
}
.span_3>div>input{
    margin-top: 10px;
margin-bottom: 10px;
}
.span_3>div>p{
    margin-top: 10px;
margin-bottom: 10px;
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
    margin-top: 10px;
    padding-bottom: 10px;
    border-radius: 10px;
    grid-auto-flow: row;

}
.delete_div>button{

    width: 50%;
display: grid;
justify-items: center;
align-items: center;
background-color: #FFFFFF;
color: #003F91;

margin-top: 10px;
margin-bottom: 10px;
padding: 10px;
border-radius: 10px;


}
.delete_div>button>p{
    margin-top: 10px;
    margin-bottom: 10px;
}
@media only screen and (min-width: 770px){


.parent{


}

.header_div{

}

.header_div>h2{

}


.parent_div{

}

.span_1{

}
.span_1>h2{

}
.span_1>img{

}
.span_2{

}

.span_2>button{

}
.span_3{



}
.span_3>div{


}

.span_3>div>button{
}

.text_decor{


}
.delete_div{



}
.delete_div>button{




}


}


@media only screen and (min-width: 1025px){

.parent{


}

.header_div{

}

.header_div>h2{
width: 100%;
}
.parent_div{

}

.span_1{

}
.span_1>h2{

}
.span_1>img{
width: 25%;
}
.span_2{

}

.span_2>button{

}
.span_3{



}
.span_3>div{


}

.span_3>div>button{
}

.text_decor{


}
.delete_div{



}
.delete_div>button{




}
    
}
</style>