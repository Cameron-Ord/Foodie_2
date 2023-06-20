<template>
    <div>


        <main class="page_main">

            <section class="section_main">

                <article class="article_main">

                    <span class="Rest_Comp">

                        <!--login for restaurant-->

                        <h1>Email:</h1>
                        <input placeholder="..." type="text" ref="email_input">

                        <h1>Password:</h1>
                        <input placeholder="..." type="password" ref="password_input">
                        <button @click="rest_log_in">log in</button>

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

            rest_log_in(){

                //restaurant login api//

                axios({

                    method: `POST`,

                    url: `https://foodie.bymoen.codes/api/restaurant-login`,

                    headers:{


                        'x-api-key': `qK2iR1gTkkAjPH0kfGDY`

                    },

                    data:{

                        email: this.$refs[`email_input`].value,
                        password: this.$refs[`password_input`].value

                    }
                }).then((response)=>{


                    //assigns respective cookies on success//

                    Cookies.set(`rest_login_token`, `${response[`data`][`token`]}`);

                    Cookies.set(`restaurant_id`, `${response[`data`][`restaurant_id`]}`);

                    Cookies.remove(`client_login_token`);

                    Cookies.remove(`client_id_token`);

                    this.$router.push(`/`);

                }).catch((error)=>{

                    error;

                    this.failed_login = true;
                });

            }
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


}
.page_main>.section_main>.article_main>.Rest_Comp{

display: grid;

justify-items: center;

align-items: center;

grid-template-rows: 75px 50px 75px 50px 100px;

background-color: #003F91;

width: 80%;

border-radius: 25px;
}

.page_main>.section_main>.article_main>.Rest_Comp>input{


width: 50vw;

}

.page_main>.section_main>.article_main>.Rest_Comp>button{

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

.failed{



width: 25%;


}

.page_main>.section_main>.article_main>.Rest_Comp{



width: 50%;

}

.page_main>.section_main>.article_main>.Rest_Comp>input{


width: 30vw;

}
}

@media only screen and (min-width: 1025px){

.page_main>.section_main>.article_main>.Rest_Comp{

display: grid;

justify-items: center;

align-items: center;

grid-template-rows: 75px 50px 75px 50px 100px;

background-color: #003F91;

width: 40%;

border-radius: 25px;
}

.page_main>.section_main>.article_main>.Rest_Comp>input{


width: 15vw;

}

.failed{



width: 10%;


}


}

</style>