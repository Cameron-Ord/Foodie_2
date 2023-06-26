<template>
    <div>

        <main class="page_main">

            <section class="section_main">

                <article class="article_main">

                    <span class="Client_Comp">

                        <h1>Email:</h1>
    
                        <input placeholder="..." type="text" ref="email_input">
    
                        <h1>Password:</h1>

                        <input placeholder="..." type="password" ref="password_input">
    
                        <!--calls the login api, if information is correctly typed, returns a cookie and redirects to home page-->

                    

                        <button @click="user_log_in" ><h1>Log In</h1></button>

                        

                    </span>

                    <span class="failed" v-if="failed_login === true">

                        <p>Invalid Login</p>

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
               failed_login: false,
            }
        },

        methods:{

            user_log_in(){

                axios({

                    method: `POST`,

                    url: `${process.env.VUE_APP_BASE_DOMAIN}/api/client-login`,

                    data:{

                        email: this.$refs[`email_input`].value,
                        password: this.$refs[`password_input`].value

                    }

                }).then((response)=>{

                    //if axios post is successful, assigns respective tokens to a cookie, and removes possible existing tokens..//

                    console.log(response);

                    Cookies.set(`client_login_token`, `${response[`data`][0][`token`]}`);

                    Cookies.set(`client_id_token`, `${response[`data`][0][`client_id`]}`);

                    Cookies.remove(`rest_login_token`);

                    Cookies.remove(`restaurant_id`);

                    Cookies.remove(`food_cart`);

                    //pushes to home page//

                    this.$router.push(`/`);



                }).catch((error)=>{

                    error;

                    this.failed_login = true;
                });
            }
        },

        mounted(){

            console.log(process.env.VUE_APP_BASE_DOMAIN);
        }

    }
</script>

<style scoped>

.page_main{

    display: grid;

    justify-items: center;

    align-items: center;

    min-height: 80vh;

    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    width: 100%;

    color: #FFFFFF;

}

.page_main>.section_main{

    display: grid;

    justify-items: center;

    align-items: center;

    width: 100%;

}

.page_main>.section_main>.article_main{

    display: grid;

    justify-items: center;

    align-items: center;

    width: 100%;

    grid-auto-flow: row;


}
.page_main>.section_main>.article_main>.Client_Comp{

display: grid;

justify-items: center;

align-items: center;

grid-template-rows: 75px 50px 75px 50px 100px;

background-color: #003F91;

width: 80%;

border-radius: 25px;
}

.page_main>.section_main>.article_main>.Client_Comp>input{


    width: 50vw;

}

.page_main>.section_main>.article_main>.Client_Comp>button{


    text-decoration: none;

    color: #003F91;

    padding: 5px;

    border-radius: 5px;

    background-color: #FFFFFF;

}

.failed{

    color: #FFFFFF;

    background-color: #003F91;

    width: 50%;

    align-items: center;

    justify-items: center;

    text-align: center;

    margin-top: 25px;

    padding: 10px;

    border-radius: 25px;

}






@media only screen and (min-width: 770px){
.page_main{

grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));

}
.page_main>.section_main>.article_main>.Client_Comp{

width: 50%;

}

.page_main>.section_main>.article_main>.Client_Comp>input{


    width: 30vw;

}
}




@media only screen and (min-width: 1025px){

.page_main{

grid-template-columns: repeat(auto-fit, minmax(770px, 1fr));

}

.page_main>.section_main>.article_main>.Client_Comp{

display: grid;

justify-items: center;

align-items: center;

grid-template-rows: 75px 50px 75px 50px 100px;

background-color: #003F91;

width: 40%;

border-radius: 25px;
}

.page_main>.section_main>.article_main>.Client_Comp>input{


width: 15vw;

}
.failed{



width: 10%;


}
}
</style>