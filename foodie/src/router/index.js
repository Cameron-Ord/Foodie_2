import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import ClientSignup from '@/views/ClientSignup'
import DiscoverPage from '@/views/DiscoverPage.vue'
import RestaurantSignup from '@/views/RestaurantSignup.vue'
import AccountProfile from '@/views/AccountProfile.vue'
import ShoppingCart from '@/views/ShoppingCart.vue'
import LoginPage from '@/views/LoginPage.vue'
import PartnerLogin from '@/views/PartnerLogin.vue'
import PublicPage from '@/views/PublicPage.vue'
Vue.use(VueRouter)

//importing all my views and assigning meta tags//

const routes = [
{

  path: `/`,

  component: LandingPage,

  name: `default-page`,

  meta: [


    {

      title: `landing page`,

    },
    {

      name:`description`,

      content: `welcome to placeholder`,

    },
    {

      name: `author`,

      content: `Cameron Ord`

    }

  ]

},

{

  path: `/ClientSignup`,

  component: ClientSignup,

  name: `client account page`,

  meta :[
    {
      title: `client signup page`,
    },
    {
      name: `description`,

      content: `placeholder`,

    
    },
    {

      name: `author`,

      content: `Cameron Ord`
    }
  ]


},


{

  path: `/DiscoverPage`,

  component: DiscoverPage,

  name: `discover`,

  meta: [

    {
      title: `discover page`,
    },
    {
      name: `description`,

      content: `placeholder`,

    
    },
    {

      name: `author`,

      content: `Cameron Ord`
    }
  ]

},

{

  path: `/RestaurantSignup`,

  component: RestaurantSignup,

  name: `restaurant login`,

  meta: [

    {
      title: `restaurant page`,
    },
    {
      name: `description`,

      content: `placeholder`,

    
    },
    {

      name: `author`,

      content: `Cameron Ord`
    }
  ]

},

{

  path: `/AccountProfile`,

  component: AccountProfile,

  name: `restaurant profile`,

  meta: [
    {
      title: `profile page`,
    },
    {
      name: `description`,

      content: `placeholder`,

    
    },
    {

      name: `author`,

      content: `Cameron Ord`
    }
  ]
},

{

  path: `/ShoppingCart`,

  component: ShoppingCart,

  name: `shopping cart`,

  meta: [

    {
      title: `shopping cart`,
    },
    {
      name: `description`,

      content: `placeholder`,

    
    },
    {

      name: `author`,

      content: `Cameron Ord`
    }
  ]
},
{
  path: `/Login`,

  component: LoginPage,

  name: `log in`,

  meta: [

    {
      title: `log-in page`,
    },
    {
      name: `description`,

      content: `placeholder`,

    
    },
    {

      name: `author`,

      content: `Cameron Ord`
    }
  ]
},

{

  path: `/RestaurantLogin`,

  component: PartnerLogin,

  name: `restaurant log in`,

  meta: [
    {
      title: `partner log-in page`,
    },
    {
      name: `description`,

      content: `placeholder`,

    
    },
    {

      name: `author`,

      content: `Cameron Ord`
    }
  ]
},

{

  path: `/PublicPage`,

  component: PublicPage,

  name: `restaurant selected`,

  meta: [
        {
      title: `partner log-in page`,
    },
    {
      name: `description`,

      content: `placeholder`,

    
    },
    {

      name: `author`,

      content: `Cameron Ord`
    }
  ]

}

]

const router = new VueRouter({
  routes
})


router.beforeEach((to, from, next) => {

  let current_meta_tags = document.querySelectorAll(`meta`);

  for(let i = 0; i<current_meta_tags.length; i++){

    current_meta_tags[i].remove();
  }

  let new_meta_tags = to[`meta`];

  document.querySelector(`title`)[`innerText`] = new_meta_tags[0][`title`];

  for(let i = 0; i<new_meta_tags.length; i++){

    document.querySelector(`head`).insertAdjacentHTML(`beforeend`,
    
    `<meta name="${new_meta_tags[i][`name`]}"
    
    content="${new_meta_tags[i][`content`]}">`);


  }

  document.querySelector(`head`).insertAdjacentHTML(`afterbegin`,
    
  `<meta charset="utf-8">
  
  <meta http-equiv=""X-UA-Compatible" content="IE=edge">
  
  <meta name="viewport" content="width=device-width, initial-scale=1.0">`
  
  );

  from;

  next();

}
);


export default router
