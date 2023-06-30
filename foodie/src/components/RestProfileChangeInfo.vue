<template>
    <div>
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
@media only screen and (min-width: 770px){



}


@media only screen and (min-width: 1025px){


    
}
</style>