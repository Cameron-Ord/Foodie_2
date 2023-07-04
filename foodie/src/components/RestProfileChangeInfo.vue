<template>
    <div class="parent">
        <span class="span_2">

        <span class="special_span">
        <h1>Edit your profile:</h1>
        </span> 
    
        <div>
        <p class="p_tag_highlight">Change business email:</p>
        <input placeholder="enter a new email" type="text" ref="change_email">
        <button @click="change_email">Change email</button>
        <p v-if="(status !== undefined && status === email_resp) || (status !== undefined && status === 'please enter a new email!') || (status !== undefined && status === 'something went wrong with change email')">{{ status }}</p>
        </div>
        <div>
        <p class="p_tag_highlight">Change phone number:</p>
        <input placeholder="enter a new phone number" type="text" ref="change_number">
        <button @click="change_phone">Change phone</button>
        <p v-if="(status !== undefined && status === phone_resp) || (status !== undefined && status === 'please enter a new number!') || (status !== undefined && status === 'something went wrong with change phone')">{{ status }}</p>
        </div>
        <div>
        <p class="p_tag_highlight">Change address:</p>
        <input placeholder="enter your new address" type="text" ref="change_address">
        <button @click="change_address">Change address</button>
        <p v-if="(status !== undefined && status === address_resp) || (status !== undefined && status === 'please enter a new address!') || (status !== undefined && status === 'something went wrong with change address')">{{ status }}</p>
        </div>
        <div>
        <p class="p_tag_highlight">Edit your bio:</p>
        <input placeholder="write your information here" type="text" ref="change_bio">
        <button @click="change_bio">Change bio</button>
        <p v-if="(status !== undefined && status === bio_resp) || (status !== undefined && status === 'please enter a new bio!') || (status !== undefined && status === 'something went wrong with change bio')">{{ status }}</p>
        </div>
        <div>
        <p class="p_tag_highlight">Change banner:</p>
        <input placeholder="upload your image here" type="text" ref="change_banner">
        <button @click="change_banner">Change banner</button>
        <p v-if="(status !== undefined && status === banner_resp) || (status !== undefined && status === 'please select a new image!') || (status !== undefined && status === 'something went wrong with change image')">{{ status }}</p>
        </div>
        <div>
        <p class="p_tag_highlight">Change password:</p>
        <input placeholder="enter a new password" type="password" ref="change_password">
        <button @click="change_password">Change password</button>
        <p v-if="(status !== undefined && status === password_resp) || (status !== undefined && status === 'please enter a new password!') || (status !== undefined && status === 'something went wrong with change password')">{{ status }}</p>
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
               new_phone: undefined,
               new_address: undefined,
               new_bio: undefined,
               new_banner: undefined,
               new_password: undefined,

               email_resp: undefined,
               phone_resp: undefined,
               address_resp: undefined,
               bio_resp: undefined,
               banner_resp: undefined,
               password_resp: undefined
            }
        },

        methods:{



        change_password() {

            let restaurant_token = Cookies.get(`rest_login_token`);

            this.new_password = this.$refs[`change_password`][`value`];

        
            if(this.new_password === ''){

                this.new_password = null;
            }
 
            axios({

                method: `PATCH`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/restaurant`,

                headers: {

                    token: restaurant_token,
                },

                data: {

                    password: this.new_password,
                }

            }).then((response) => {

            
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
           

            


        change_email() {

            let restaurant_token = Cookies.get(`rest_login_token`);

            this.new_email = this.$refs[`change_email`][`value`];

            if(this.new_email === ''){

                this.new_email = null;
            }

            axios({

                method: `PATCH`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/restaurant`,

                headers: {

                    token: restaurant_token,
                },

                data: {

                    email: this.new_email,
                }

            }).then((response) => {

                response;
                if(response['data'][0]['email'] !== undefined){

                    this.email_resp = `email updated to ${response['data'][0]['email']}`;
                    this.status = this.email_resp;

                }else{
                    this.status = 'please enter a new email!';
                }

            }).catch((error) => {

                error;

                this.status = 'something went wrong with change email';

            });

            },
           

        change_phone() {

            let restaurant_token = Cookies.get(`rest_login_token`);
 
         
            this.new_phone = this.$refs[`change_number`][`value`];

            if(this.new_phone === ''){

                this.new_phone = null;
            }


            axios({

                method: `PATCH`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/restaurant`,

                headers: {

                    token: restaurant_token,
                },

                data: {

                    phone_number: this.new_phone,
                }

            }).then((response) => {

                response;
                if(response['data'][0]['phone_number'] !== undefined){

                    this.phone_resp = `phone number updated to ${response['data'][0]['phone_number']}`;
                    this.status = this.phone_resp;

                }else{
                    this.status = 'please enter a new number!';
                }

            }).catch((error) => {

                error;
                
                this.status = 'something went wrong with change phone';
            });

        },

            change_address() {

            let restaurant_token = Cookies.get(`rest_login_token`);

            this.new_address = this.$refs[`change_address`][`value`];

            if(this.new_address === ''){

                this.new_address= null;
            }

            axios({

                method: `PATCH`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/restaurant`,

                headers: {

                    token: restaurant_token,
                },

                data: {

                    address:this.new_address,
                }

            }).then((response) => {

                response;
                if(response['data'][0]['address'] !== undefined){

                    this.address_resp = `address updated to ${response['data'][0]['address']}`;
                    this.status = this.address_resp;

                }else{
                    this.status = 'please enter a new address!';
                }

            }).catch((error) => {

                error;
                this.status = 'something went wrong with change address';

            });

        },

        change_bio() {

            let restaurant_token = Cookies.get(`rest_login_token`);

            this.new_bio = this.$refs[`change_bio`][`value`];

            if(this.new_bio === ''){

                this.new_bio= null;
            }
            axios({

                method: `PATCH`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/restaurant`,

                headers: {

                    token: restaurant_token,
                },

                data: {

                    bio: this.new_bio,
                }

            }).then((response) => {

                response;

                if(response['data'][0]['bio'] !== undefined){

                    this.bio_resp = `bio updated`;
                    this.status = this.bio_resp;

                }else{
                    this.status = 'please enter a new bio!';
                }
            }).catch((error) => {

                error;
                this.status = 'something went wrong with change bio';
            });


        },


        change_banner() {

            let restaurant_token = Cookies.get(`rest_login_token`);
            
            this.new_banner = this.$refs[`change_banner`][`value`];

            if(this.new_banner === ''){

                this.new_banner= null;
            }
            axios({

                method: `PATCH`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/restaurant`,

                headers: {

                    token: restaurant_token,
                },

                data: {

                    banner_url: this.new_banner,
                }

            }).then((response) => {

                response;

                if(response['data'][0]['banner_url'] !== undefined){

                    this.banner_resp = `banner image updated`;
                    this.status = this.banner_resp;

                }else{
                    this.status = 'please select a new image!';
                }


            }).catch((error) => {

                error;
                this.status = 'something went wrong with change image';
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
    width: 100%;
}

.span_2{

    display: grid;

    grid-template-rows: 10vh 1fr 1fr 1fr 1fr 1fr;

    align-items: center;
    
    justify-items: center;

    text-align: center;

    width: 80%;

    color: #FFFFFF;

    border-radius: 10px;
    
    margin-bottom: 10px;
}

.special_span{

    background-color: #003F91;
    display: grid;
    align-items: center;
    justify-items: center;
    width: 80%;
    padding-top: 25px;
    padding-bottom: 25px;
    border-radius: 10px;
}
.span_2>div{
    display: grid;
    align-items: center;
    justify-items: center;
    text-align: center;
    grid-auto-flow: row;
    background-color: #003F91;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #FFFFFF;
    border-radius: 10px;

}

.span_2>div>p{
    margin-top: 10px;
    margin-bottom: 10px;
}

.span_2>div>input{

    margin-top: 10px;
    margin-bottom: 10px;
}

.span_2>div>button{

    margin-top: 10px;
    margin-bottom: 10px;
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

.parent{

}

.span_2{


}
.span_2>div{


}

.span_2>div>button{


}

.p_tag_highlight{

}

}


@media only screen and (min-width: 1025px){

.parent{

}

.span_2{

width: 70%;
}
.span_2>div{


}

.span_2>div>button{


}

.p_tag_highlight{

}
    
}
</style>