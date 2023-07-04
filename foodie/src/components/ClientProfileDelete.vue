<template>
    <div class="parent">
              
    <span class="del_span">
        <div>
            <h1>Account settings:</h1>
            <input placeholder="enter your password to delete your account" type="password"
                ref="delete_account">

                <!--calling the delete api on click, requires password typed in field-->

            <button @click="delete_profile" class="delete_button">Delete Account</button>

            <p v-if="status !== undefined">{{ status }}</p>
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

            password: undefined,
            status: undefined
        }
    },



    methods: {



        delete_profile() {

            //defining the token for the api header//

            let client_token = Cookies.get(`client_login_token`);

            this.password =  this.$refs[`delete_account`].value;

            if(this.password === ''){

                this.password = null;
            }

            axios({

                method: `DELETE`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/client`,

                headers: {

                    token: client_token,

                },

                data: {

                    //getting the typed value//

                    password: this.password
                }

            }).then((response) => {

                response;

                //deletes your profile, removes cookies, and pushes user to home page.//

                if(response['data'][0]['row_count()'] > 0){

                    this.$router.push(`/`);

                Cookies.remove(`client_id`);

                Cookies.remove(`client_login_token`);

                }

                

            }).catch((error) => {

                error;

                this.status = 'enter your password to delete your account';
            })


        },



    },



    mounted() {



      

      

    }
}
</script>

<style scoped>
.parent{
    justify-items: center;
    align-items: center;
    display: grid;
}

.del_span{
    justify-items: center;
    align-items: center;
    display: grid;
    background-color: #003F91;
    color: #FFFFFF;
    width: 80%;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 10px;

}

.del_span>div{
    justify-items: center;
    align-items: center;
    display: grid;
    grid-template-rows: 5vh 6vh 8vh auto;

}

.del_span>div>button{

    color: #003F91;
    background-color: #FFFFFF;
    padding: 10px;
    border-radius: 10px;
}
@media only screen and (min-width: 770px){

.parent{
 
}

.del_span{


}

.del_span>div{


}

.del_span>div>button{


}

}


@media only screen and (min-width: 1025px){

.parent{
 
}

.del_span{

}

.del_span>div{


}

.del_span>div>button{


}
    
}
</style>