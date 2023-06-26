<template>
    <div>

    <main class="page_main">

    <section class="section_main">

        <article class="input_article">

            <span class="input_span">

                <h4>Enter your information</h4>

                <input placeholder="your email" type="value" ref="email_input">
                <input placeholder="your name" type="value" ref="name_input">
                <input placeholder="your last name" type="value" ref="last_name_input">
                <input placeholder="your avatar" type="value" ref="avatar_input">
                <input placeholder="username" type="value" ref="username_input">
                <input placeholder="password" type="value" ref="password_input">

                <!--logs the user in-->

                <button @click="sign_up"><h1>Create Account</h1></button>

            </span>
            <span class="tinyspan">
                <h4>Already have an account?</h4><router-link class="router_color" to="/Login"><h2>Log-in</h2></router-link>
            </span>
        </article>
    </section>

    </main>


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



    methods: {


        sign_up() {


            axios({

                method: `POST`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/client`,

                headers: {

                    'x-api-key': `qK2iR1gTkkAjPH0kfGDY`

                },

                data: {

                    //grabbing values from input tags//

                    email: this.$refs[`email_input`].value,

                    first_name: this.$refs[`name_input`].value,

                    last_name: this.$refs[`last_name_input`].value,

                    image_url: this.$refs[`avatar_input`].value,

                    username: this.$refs[`username_input`].value,

                    password: this.$refs[`password_input`].value


                }



            }).then((response) => {

                response;

                //assigns respective tokens to a cookie and removes possible existing ones on success//

                Cookies.set(`client_login_token`, `${response[`data`][`token`]}`);

                Cookies.set(`client_id_token`, `${response[`data`][`client_id`]}`);


                Cookies.remove(`rest_login_token`);

                Cookies.remove(`restaurant_id`);

                Cookies.remove(`food_cart`);

                this.$router.push(`/`);

            }).catch((error) => {

                error;

            });

        }

    }

}
</script>

<style scoped>
.page_main {

display: grid;

align-items: center;

justify-items: center;

min-height: 80vh;

grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 

background-color: #FFFFFF;

color: #FFFFFF;

}


.page_main>.section_main {

display: grid;

align-items: center;

justify-items: center;

width: 100%;

}

.page_main>.section_main>.input_article {

display: grid;

align-items: center;

justify-items: center;

grid-auto-flow: row;

width: 100%;

height: 100%;

}

.page_main>.section_main>.input_article>.input_span {

display: grid;

align-items: center;

justify-items: center;

grid-template-rows: 10vh 8vh 8vh 8vh 8vh 8vh 8vh 10vh;

width: 90%;

background-color: #003F91;

border-radius: 25px;

text-align: center;

margin-top: 25px;

}



.page_main>.section_main>.input_article>.input_span>input{

    width: 50vw;

}

.page_main>.section_main>.input_article>.input_span>button{

    text-decoration: none;

    color: #003F91;

    padding: 5px;

    border-radius: 5px;

    background-color: #FFFFFF;
}

.page_main>.section_main>.input_article>.tinyspan {

    display: grid;

align-items: center;

justify-items: center;

grid-template-rows: 5vh 10vh;

color: #FFFFFF;

width: 90%;

text-align: center;

background-color: #003F91;

margin-bottom: 25px;

margin-top: 25px;

border-radius: 25px;
}

.router_color{

    color: #003F91;

    text-decoration: none;

    padding: 15px;

    background-color: #FFFFFF;

    border-radius: 10px;

}







@media only screen and (min-width: 770px){

.page_main {

grid-template-columns: repeat(auto-fit, minmax(480px, 1fr)); 


}
.page_main>.section_main>.input_article>.input_span {

width: 75%;



}



.page_main>.section_main>.input_article>.input_span>input{

    width: 35vw;

}

.page_main>.section_main>.input_article>.input_span>button{


}

.page_main>.section_main>.input_article>.tinyspan {


width: 60%;


}

}











@media only screen and (min-width: 1025px){

.page_main {

grid-template-columns: repeat(auto-fit, minmax(770px, 1fr)); 


}

.page_main>.section_main>.input_article>.input_span {


width: 40%;



}

.page_main>.section_main>.input_article>.input_span>input{

width: 15vw;

}

.page_main>.section_main>.input_article>.tinyspan {



width: 25%;


}





}
</style>