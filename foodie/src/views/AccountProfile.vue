<template>
    <div>
        <page-header></page-header>
    <!--if variable is not null, it shows the page.-->
        <client-profile v-if="client_data != null"></client-profile>
        
        <rest-profile v-if="rest_data != null"></rest-profile>
        
        <page-footer></page-footer>
    </div>
</template>

<script>

//importing//

import PageHeader from '@/components/PageHeader.vue';
import ClientProfile from '@/components/ClientProfile.vue';
import RestProfile from '@/components/RestProfile.vue';
import PageFooter from '@/components/PageFooter.vue';
import Cookies from 'vue-cookies';
    export default {
      
        components:{

            PageHeader,
            ClientProfile,
            RestProfile,
            PageFooter
        },

        data() {
            return {
                client_data: undefined,
                rest_data: undefined
            }
        },

        mounted(){

            //gets the cookies and makes it equal to a variable, if the cookie is undefined, client_data or rest_data, will be null//

            let client_cookie_data = Cookies.get(`client_login_token`);

            this.client_data = client_cookie_data;

            let rest_cookie_data = Cookies.get(`rest_login_token`);

            this.rest_data = rest_cookie_data;

            let get_div = document.querySelector(`body`);
            get_div.classList.remove(`no-scroll`);


        }
    }
</script>

<style scoped>

</style>