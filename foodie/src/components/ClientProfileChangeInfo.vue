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
        <p v-if="(status !== undefined && status === email_resp) || (status !== undefined && status === 'something went wrong with change email') || (status !== undefined && status === 'please enter a new email!')">{{ status }}</p>
        </div>

        <div>
        <p>Change username:</p>
        <input placeholder="enter a new username" type="text" ref="username_change">
        <button @click="change_username">Update Username</button>
        <p v-if="(status !== undefined && status === user_resp) || (status !== undefined && status === 'something went wrong with change username') || (status !== undefined && status === 'please enter a new username!')">{{ status }}</p>

        </div>

        <div>
        <p>Change avatar:</p>
        <input placeholder="upload an image" type="text" ref="avatar_change">
        <button @click="change_avatar">Update Avatar</button>
        <p v-if="(status !== undefined && status === avatar_resp) || (status !== undefined && status === 'something went wrong with change avatar') || (status !== undefined && status === 'please select a new image!')">{{status}}</p>

        </div>

        <div>
        <p>Change password:</p>
        <input placeholder="enter a password" type="password" ref="password_change">
        <button @click="change_password">Update Password</button>
        <p v-if="(status !== undefined && status === password_resp) || (status !== undefined && status === 'something went wrong with change password') || (status !== undefined && status === 'please enter a new password!')">{{ status }}</p>

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


                email_resp: undefined,
                user_resp: undefined,
                avatar_resp: undefined,
                password_resp: undefined,


            }
        },

        methods:{



        change_email() {

            let client_token = Cookies.get(`client_login_token`);

            this.new_email = this.$refs[`email_change`].value;

            if(this.new_email === ''){

                this.new_email = null;
            }

            axios({

                method: `PATCH`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/client`,

                headers: {

                    token: client_token,

                },

                data: {

                    email: this.new_email,
                }

            }).then((response) => {

                response;

                if(response['data'][0]['email'] !== undefined){

                    this.email_resp = `email updated to ${response['data'][0]['email']}`;
                    this.status = this.email_resp

                }else{
                    this.status = 'please enter a new email!';
                }


            }).catch((error) => {

                error;
                this.status = 'something went wrong with change email';
            });

        },

        change_username() {
            let client_token = Cookies.get(`client_login_token`);

            this.new_user = this.$refs[`username_change`].value;

            if(this.new_user === ''){

                this.new_user = null;
            }

            axios({

                method: `PATCH`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/client`,

                headers: {

                    token: client_token,

                },

                data: {

                    username: this.new_user
                }

            }).then((response) => {

                response;
                if(response['data'][0]['username'] !== undefined){

                    this.user_resp = `username updated to ${response['data'][0]['username']}`;
                    this.status = this.user_resp;

                }else{
                    this.status = 'please enter a new username!';
                }
            }).catch((error) => {

                error;
                this.status = 'something went wrong with change username';
            });

        },

        change_avatar() {

            let client_token = Cookies.get(`client_login_token`);

            this.new_avatar = this.$refs[`avatar_change`].value;

            if(this.new_avatar === ''){
                this.new_avatar = null;
            }

            axios({

                method: `PATCH`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/client`,

                headers: {



                    token: client_token,

                },

                data: {

                    image_url: this.new_avatar
                }

            }).then((response) => {

                response;

                if(response['data'][0]['image_url'] !== undefined){

                    this.avatar_resp = `username updated`;
                    this.status = this.avatar_resp;

                }else{
                    this.status = 'please select a new image!';
                }

            }).catch((error) => {

                error;
                this.status = 'something went wrong with change avatar';
            });

        },

        change_password() {


            let client_token = Cookies.get(`client_login_token`);

            this.new_password = this.$refs[`password_change`].value;

            if(this.new_password === ''){

                this.new_password = null;
            }

     
            axios({

                method: `PATCH`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/client`,

                headers: {



                    token: client_token,

                },

                data: {

                    password: this.new_password
                }

            }).then((response) => {

                response;                

                if(response['data'][0]['password_updated'] !== undefined){

                    this.password_resp = `password updated`;
                    this.status = this.password_resp;


                }else{
                    this.status = 'please enter a new password!';
                }

            }).catch((error) => {

                error;
                this.status = 'something went wrong with change password';

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