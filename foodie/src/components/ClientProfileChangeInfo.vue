<template>
    <div class="parent">

        <span class="article_1_span_3">

        <span class="special_div">
        <h1>Edit your profile:</h1>
        </span>

        <div>
        <p>Change email:</p>
        <input placeholder="enter a new email" type="text" ref="email_change">
        <button @click="change_email">Update Email</button>
        </div>

        <div>
        <p>Change username:</p>
        <input placeholder="enter a new username" type="text" ref="username_change">
        <button @click="change_username">Update Username</button>
        </div>

        <div>
        <p>Change avatar:</p>
        <input placeholder="upload an image" type="text" ref="avatar_change">
        <button @click="change_avatar">Update Avatar</button>
        </div>

        <div>
        <p>Change password:</p>
        <input placeholder="enter a password" type="password" ref="password_change">
        <button @click="change_password">Update Password</button>
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

                status: undefined,

                new_email: undefined,
                new_user: undefined,
                new_avatar: undefined,
                new_password: undefined,
                new_address: undefined,

                email_resp: undefined,
                user_resp: undefined,
                avatar_resp: undefined,
                password_resp: undefined,
                address_resp: undefined

            }
        },

        methods:{
        change_email() {

            let client_token = Cookies.get(`client_login_token`);

            axios({

                method: `PATCH`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/client`,

                headers: {

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

.parent{
    display: grid;
    justify-items: center;
    align-items: center;
 


}

.special_div{
    display: grid;
    align-items: center;
    justify-items: center;
    margin-top: 10px;
    margin-bottom: 10px;

}

.article_1_span_3{
    display: grid;
    align-items: center;
    justify-items: center;
    text-align: center;
    background-color: #003F91;
    color: #FFFFFF;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;

    margin-top: 10px;
    margin-bottom: 10px;
    width: 80%;

    border-radius: 10px;
    padding-bottom: 10px;
}

.article_1_span_3>div{

    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-rows: 5vh 5vh 8vh;

}

.article_1_span_3>div>button{
    color: #003F91;
    background-color: #FFFFFF;
    padding: 10px;
    border-radius: 10px;
}

@media only screen and (min-width: 770px){
.parent{


}

.special_div{


}

.article_1_span_3{

}

.article_1_span_3>div{



}

.article_1_span_3>div>button{

}

}


@media only screen and (min-width: 1025px){

.parent{


}

.special_div{


}

.article_1_span_3{

}

.article_1_span_3>div{



}

.article_1_span_3>div>button{

}
    
}
</style>