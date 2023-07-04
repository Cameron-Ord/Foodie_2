<template>
    <div>
        <header class="page_header">


            <nav class="header_span">

                <!--bar button for hamburger menu-->

                <button @click="make_active" class="hamburger">
                    <div class="bar"></div>
                </button>

                <!--routes to home on click-->

                <router-link to="/" class="home_nav">
                    <h1>DEV.</h1>
                </router-link>

            </nav>
        
        <nav class="mobile_nav">

            <!--shows buttons depending on a boolean that the user has, which is dependent on on their login cookie-->

            <router-link v-if="(client_logged_in === false && partner_logged_in === false)" to="/ClientSignup" class="nav_menu">Sign-up</router-link>
           
            <router-link v-if="(client_logged_in === false && partner_logged_in === false)"  to="/Login" class="nav_menu">Log-in</router-link>
           
            <router-link v-if="(client_logged_in === false && partner_logged_in === false)" to="/RestaurantSignup" class="nav_menu">Add your restaurant</router-link>
           
            <router-link v-if="(client_logged_in === false && partner_logged_in === false)" to="/RestaurantLogin" class="nav_menu">Restaurant Log-in</router-link>
           
            <router-link v-if="(client_logged_in === true) || (partner_logged_in === true)" to="/AccountProfile" class="nav_menu">Your Profile</router-link>
    
            <router-link v-if="(client_logged_in === true && partner_logged_in === false) || (client_logged_in === false && partner_logged_in === false)" to="/DiscoverPage" class="nav_menu">Discover Restaurants</router-link>

            <router-link v-if="(client_logged_in === true && food_cart !==null )" to="/ShoppingCart" class="nav_menu">Checkout</router-link>

            <button v-if="(client_logged_in === true) || (partner_logged_in === true)" class="nav_menu" @click="log_out">Logout</button>
        </nav>


    </header>
    </div>
</template>

<script>

import Cookies from 'vue-cookies';


export default {


    data() {
    return {
     
        client_logged_in: undefined,

        partner_logged_in: undefined,

        client_token: undefined,

        partner_token: undefined,

        food_cart: undefined
    }
},


    methods: {

        log_out(){

            //removes all possible cookies, resets the variables to false, and pushes to home//

            Cookies.remove(`client_login_token`);
            Cookies.remove(`client_id_token`);
            Cookies.remove(`rest_login_token`);
            Cookies.remove(`restaurant_id`);
            Cookies.remove(`restaurant_selected`);
            Cookies.remove(`menu_items`);
            Cookies.remove(`food_cart`);

            this.client_logged_in = false;
            this.partner_logged_in = false;

            if(this.$route.path !== '/'){

                this.$router.push(`/`);
            }else{
                this.$router.go();
            }

     
        },


        make_active() {

            let menu_btn = document.querySelector(`.hamburger`);

            let mobile_menu = document.querySelector(`.mobile_nav`);

            menu_btn.classList.toggle(`is-active`);

            mobile_menu.classList.toggle(`is-active`);

            let get_div = document.querySelector(`body`);

            get_div.classList.toggle(`no-scroll`);
        
   
        }

    },

    mounted() {

        //if statements for  variables//
        
     
        this.client_token = Cookies.get(`client_login_token`);

        this.partner_token = Cookies.get(`rest_login_token`);



        if(this.client_token !== null){

            this.client_logged_in = true;

        }
      

        if(this.client_token === null){

            this.client_logged_in = false;
       
        } 
        
        if(this.partner_token !== null){
         
            this.partner_logged_in = true;

          

        } 
        
        if(this.partner_token === null){

            this.partner_logged_in = false;

        }


        this.food_cart = Cookies.get(`food_cart`);
      


    }
}
</script>

<style scoped>
.page_header {

    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    place-items: center;

    align-items: center;

    min-height: 10vh;

    background-color: #003F91;

    color: white;
}


.page_header>.header_span {

    display: grid;

    align-items: center;

    grid-template-columns: 3fr 1fr;

}

.hamburger {
    position: relative;

    display: block;
    width: 35px;
    height: 35px;
    cursor: pointer;

    appearance: none;
    background: none;
    outline: none;
    border: none;
}

.hamburger>.bar,
.hamburger::after,
.hamburger::before {

    content: '';
    display: block;
    width: 100%;
    height: 5px;
    background-color: white;

    margin-top: 6px;
    margin-bottom: 6px;
    transition: 0.4s;
}

.hamburger.is-active::before {

    transform: rotate(-45deg) translate(-8px, 6px);
}

.hamburger.is-active::after {

    transform: rotate(45deg) translate(-9px, -8px);
}

.hamburger.is-active .bar {

    opacity: 0;
}

.mobile_nav {

    position: fixed;
    top: 10vh;
    right: 100%;
    width: 100%;
    min-height: 100vh;
    display: block;
    z-index: 98;
    background-color: #FFFFFF;
    padding-top: 120px;
    transition: 0.4s;
}

.mobile_nav.is-active {

    right: 0;
}

.mobile_nav>.nav_menu {


    
  
    display: block;

    text-align: center;

    margin: 0 auto 16px;

    width: 100%;

    max-width: 200px;

    padding: 12px 16px;

    background-color: #003F91;

    color: #FFFFFF;

    text-decoration: none;
}

.home_nav {

    text-decoration: none;
    color: white;
}



@media only screen and (min-width: 770px){

.page_header {



grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));


}
.page_header>.header_span {


grid-template-columns: 60vw 1fr;

}
}













@media only screen and (min-width: 1025px){



.page_header {

display: grid;

grid-template-columns: repeat(auto-fit, minmax(770px, 1fr));

place-items: center;

align-items: center;

min-height: 10vh;

background-color: #003F91;

color: white;
}


.page_header>.header_span {

display: grid;

align-items: center;

grid-template-columns: 70vw 1fr;

}

.hamburger {

}

.hamburger>.bar,
.hamburger::after,
.hamburger::before {

}

.hamburger.is-active::before {


}

.hamburger.is-active::after {


}

.hamburger.is-active .bar {

}

.mobile_nav {


}

.mobile_nav.is-active {

}

.mobile_nav>.nav_menu {





}

.home_nav {


}






}











</style>