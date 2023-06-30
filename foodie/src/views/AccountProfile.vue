<template>
    <div>
        <page-header></page-header>
    <!--if variable is not null, it shows the page.-->

    <main v-if="(client_data !== null) && (rest_data === null)">
        <section>
            <article>
                <client-profile-info></client-profile-info>
            </article>
            <article>
                <client-profile-change-info></client-profile-change-info>
            </article>
            <article>
                <client-profile-incomplete></client-profile-incomplete>
            </article>
            <article>
                <client-profile-complete></client-profile-complete>
            </article>
            <article>
                <client-profile-delete></client-profile-delete>
            </article>
        </section>
    </main>
    <main v-if="(rest_data !==null) && (client_data === null)">
        <section>
            <article>
                <rest-profile-info></rest-profile-info>
            </article>
            <article>
                <rest-profile-change-info></rest-profile-change-info>
            </article>
            <article>
                <menu-add></menu-add>
            </article>
            <article>
                <single-menu-item></single-menu-item>
            </article>
            <article>
                <rest-profile-unconfirmed></rest-profile-unconfirmed>
            </article>
            <article>
                <rest-profile-confirmed></rest-profile-confirmed>
            </article>
            <article>
                <rest-profile-complete></rest-profile-complete>
            </article>
            <article>
                <rest-profile-delete></rest-profile-delete>
            </article>

        </section>
    </main>
        
        <page-footer></page-footer>
    </div>
</template>

<script>

//importing//

import PageHeader from '@/components/PageHeader.vue';
import ClientProfileDelete from '@/components/ClientProfileDelete.vue';
import RestProfileDelete from '@/components/RestProfileDelete.vue';
import RestProfileInfo from '@/components/RestProfileInfo.vue';
import RestProfileChangeInfo from '@/components/RestProfileChangeInfo.vue';
import RestProfileUnconfirmed from '@/components/RestProfileUnconfirmed.vue';
import RestProfileConfirmed from '@/components/RestProfileConfirmed.vue';
import RestProfileComplete from '@/components/RestProfileComplete.vue';
import SingleMenuItem from '@/components/SingleMenuItem.vue';
import MenuAdd from '@/components/MenuAdd.vue';
import ClientProfileComplete from '@/components/ClientProfileComplete.vue';
import ClientProfileIncomplete from '@/components/ClientProfileIncomplete.vue';
import ClientProfileChangeInfo from '@/components/ClientProfileChangeInfo.vue';
import ClientProfileInfo from '@/components/ClientProfileInfo.vue';
import PageFooter from '@/components/PageFooter.vue';
import Cookies from 'vue-cookies';
    export default {
      
        components:{

            PageHeader,
            ClientProfileDelete,
            RestProfileDelete,
            PageFooter,
            RestProfileInfo,
            RestProfileChangeInfo,
            RestProfileUnconfirmed,
            RestProfileConfirmed,
            RestProfileComplete,
            MenuAdd,
            SingleMenuItem,
            ClientProfileComplete,
            ClientProfileIncomplete,
            ClientProfileChangeInfo,
            ClientProfileInfo
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