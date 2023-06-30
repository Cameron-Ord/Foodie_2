<template>
    <div class="parent">
        <span class="span_2">

        <h1>Edit your profile:</h1>
        <div>
        <p class="p_tag_highlight">Change business email:</p>
        <input placeholder="enter a new email" type="text" ref="change_email">
        <button @click="change_email">Change email</button>
        </div>
        <div>
        <p class="p_tag_highlight">Change phone number:</p>
        <input placeholder="enter a new phone number" type="text" ref="change_number">
        <button @click="change_phone">Change phone</button>
        </div>
        <div>
        <p class="p_tag_highlight">Change address:</p>
        <input placeholder="enter your new address" type="text" ref="change_address">
        <button @click="change_address">Change address</button>
        </div>
        <div>
        <p class="p_tag_highlight">Edit your bio:</p>
        <input placeholder="write your information here" type="text" ref="change_bio">
        <button @click="change_bio">Change bio</button>
        </div>
        <div>
        <p class="p_tag_highlight">Change banner:</p>
        <input placeholder="upload your image here" type="text" ref="change_banner">
        <button @click="change_banner">Change banner</button>
        </div>
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


        change_email() {

            let restaurant_token = Cookies.get(`rest_login_token`);

            axios({

                method: `PATCH`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/restaurant`,

                headers: {

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
            
    }
</script>


<style scoped>

.parent{

    display: grid;
    justify-items: center;
    align-items: center;
}

.span_2{

    display: grid;

    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;

    align-items: center;
    
    justify-items: center;

    text-align: center;

    background-color: #003F91;

    width: 80%;

    color: #FFFFFF;

    border-radius: 10px;
    
    margin-bottom: 10px;
}
.span_2>div{
    display: grid;
    align-items: center;
    justify-items: center;
    text-align: center;
    grid-template-rows: 10vh 6vh 10vh;

    color: #FFFFFF;

}

.span_2>div>button{

    padding: 10px;
    background-color: #FFFFFF;
    color: #003F91;
}

.p_tag_highlight{

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