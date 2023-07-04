<template>
    <div>
        <main class="page_main">

            <section class="section_main">

                <article class="input_article">

                    <span class="input_span">

                        <h4>Enter your information</h4>

                        <!--input boxes for the restaurant signup values-->

                        <input placeholder="your email"  type="text" ref="email_input">
                        <input placeholder="your name" type="text" ref="name_input">
                        <input placeholder="address" type="text" ref="address_input">
                        <input placeholder="phone number" type="text" ref="phone_input">
                        <input placeholder="bio"  type="text" ref="bio_input">
                        <input placeholder="city"  type="text" ref="city_input">
                        <input placeholder="profile image" type="text" ref="profile_input">
                        <input placeholder="banner image" type="text" ref="banner_input">
                        
                        <input placeholder="password" type="password" ref="password_input">

                        <button @click="sign_up">Create Account</button>

                    </span>
                    <span class="tinyspan">
                        
                        <h4>Already have an account?</h4>

                        <router-link class="router_color" to="/RestaurantLogin"><h2>Log in</h2></router-link>
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

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/restaurant`,
                
                method: `POST`,

                data: {

                    //grabs the values typed in the boxes, each box must have appropriate values.//

                    email: this.$refs[`email_input`].value,
                    name: this.$refs[`name_input`].value,
                    address: this.$refs[`address_input`].value,
                    phone_number: this.$refs[`phone_input`].value,
                    bio: this.$refs[`bio_input`].value,
                    city: this.$refs[`city_input`].value,
                    profile_url: this.$refs[`profile_input`].value,
                    banner_url: this.$refs[`banner_input`].value,
                    password: this.$refs[`password_input`].value,


                }



            }).then((response) => {

               
                response;

                //assigns cookies and pushes to main page//

                    Cookies.set(`rest_login_token`, `${response[`data`][0][`token`]}`);

                    Cookies.set(`restaurant_id`, `${response[`data`][0][`restaurant_id`]}`);

                    Cookies.remove(`client_login_token`);

                    Cookies.remove(`client_id_token`);

                    if((response['data'][0]['restaurant_id'] !== null) || (response['data'][0]['restaurant_id'] !== undefined)){

                        this.$router.push(`/`);

                    }


            }).catch((error) => {

                error;

          
                

            });
        
    }

}
    }
</script>

<style scoped>
.page_main{

display: grid;

align-items: center;

justify-items: center;

min-height: 80vh;

grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));


}
.page_main>.section_main{

display: grid;

align-items: center;

justify-items: center;

width: 100%;

}

.page_main>.section_main>.input_article{

display: grid;

align-items: center;

justify-items: center;

grid-auto-flow: row;

height: 100%;

width: 100%;
}

.page_main>.section_main>.input_article>.input_span{
display: grid;

align-items: center;

justify-items: center;

grid-template-rows: 10vh 8vh 8vh 8vh 8vh 8vh 8vh 8vh 8vh 8vh 15vh;

margin-top: 25px;

width: 90%;

background-color: #003F91;

color: #FFFFFF;

border-radius: 15px;

}

.page_main>.section_main>.input_article>.input_span>input{

    width: 60vw;
}

.page_main>.section_main>.input_article>.input_span>button{

    color: #003F91;

    background-color: #FFFFFF;

    padding: 5px;


}

.page_main>.section_main>.input_article>.tinyspan{

display: grid;

align-items: center;

justify-items: center;

grid-template-rows: 5vh 10vh;

color: #FFFFFF;

width: 90%;

text-align: center;

background-color: #003F91;

border-radius: 15px;

margin-top: 25px;

margin-bottom: 25px;
}

.router_color{

    text-decoration: none;

    color: #003F91;

    padding: 10px;

    border-radius: 5px;

    background-color: #FFFFFF;
}



@media only screen and (min-width: 770px){
.page_main{

grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));

}
.page_main>.section_main>.input_article>.input_span{


width: 75%;



}
.page_main>.section_main>.input_article>.input_span>input{

width: 35vw;
}

.page_main>.section_main>.input_article>.tinyspan{


width: 60%;


}
}





@media only screen and (min-width: 1025px){
.page_main{

grid-template-columns: repeat(auto-fit, minmax(770px, 1fr));

}

.page_main>.section_main>.input_article>.tinyspan{


width: 25%;

}



.page_main>.section_main>.input_article>.input_span{


width: 40%;



}

.page_main>.section_main>.input_article>.input_span>input{

    width: 25vw;
}






}

</style>