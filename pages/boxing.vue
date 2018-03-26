<template>
<div>
  <section class="container">
  <flexMenu  />
  
  <about />
  <portfolio />
  <contact />
 
  </section>

  
  </div>
</template>

<script>
  import axios from 'Axios'
import flexMenu from "@/components/flexMenu"

import about from "@/components/about"
import portfolio from "@/components/portfolio"
import contact from "@/components/contact"


export default {

  transition: 'bounce',
  components:{
    
    flexMenu,
    about,
    portfolio,
    contact
    
  },

   mounted(){

this.loadUsername();

    },
    methods:{

        loadUsername() {

        {

      axios.get("srv001583/activeservicedesk/helpdesk/api.php",  { withCredentials: true })


        .then(response => {
  
  
  
          this.testUser = response.data;
  
  
  
          console.log(this.testUser);
          console.log("testing Hello");
  
  
  
           
  
  
  
        })
        .catch(error => {
    console.log(error.response)
});

    }



      }

    }

  
}
</script>

<style>


</style>