<template>
    <div>

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

        mounted(){


        }
    }
</script>
<style scoped>
@media only screen and (min-width: 770px){



}


@media only screen and (min-width: 1025px){


    
}
</style>