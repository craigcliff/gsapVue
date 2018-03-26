<template>
    <div class="bg">
        <div class = "fixed">
    	<header class="header" :class="{'class1': class1}">
		<h1 class="logo"><logo :class= "{'changeSvg': changeSvg}"/></h1>
      <ul class="main-nav">
          <li><a href="#" v-scroll-to="'.header'">Home</a></li>
          <li><a href="#" v-scroll-to="'.about__main'">About Us</a></li>
          <li><a href="#" v-scroll-to="'.portfolio__main'">Classes</a></li>
          <li><a href="#" v-scroll-to="'.contact__main'">Contact</a></li>
      </ul>

	</header> 
    </div>


</div>
</template>


<script>

import logo from "@/components/logo"
import logo2 from "@/components/logo2"

export default {
	components:{
logo,
logo2

	},


	 data() {
  
      return {
    
	changeSvg: false,
  class1: false,
  scrolled: false,
 
         
  
      }
  
  
  
	},

	methods: {
        handleScroll: function (event) {


if (event.target.scrollingElement.scrollTop > 120) {

	this.class1 = true;
	this.changeSvg = true;
}

else{
	this.class1 = false;
	this.changeSvg = false;
}

			
        }
	},
	


  mounted: function () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed: function () {
        window.removeEventListener('scroll', this.handleScroll);
    }






}
</script>


<style scoped>




* {
	box-sizing: border-box;
}

.svgLogo {
  width: 240px;
  
  
  transition: all 0.7s;
  


}

.changeSvg{
	
width: 120px;
fill: white;
fill-opacity: 0.5;

}

body {
	font-family: 'Montserrat', sans-serif;
	line-height: 1.6;
	margin: 0;
	min-height: 100vh;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}


h2,
h3,
a {
	color: #34495e;
}

a {
	text-decoration: none;
}



.logo {
  
  
	margin: 0;
	
    
    height: 90px;
    margin-right: 20px;
   
}

.logo2{

    width: 200px;
    

}

.main-nav {
	margin-top: 5px;
    margin-left: 50px;
    
    

}
.logo a,
.main-nav a {
	padding: 15px 20px;
	text-transform: uppercase;
	text-align: center;
	display: block;
}

.main-nav a {
	color: white;
	font-size: 1.2em;
	font-weight: bold;
}

.main-nav a:hover {
	color: red;
}



.header {
    
    
	padding-top: .5em;
	padding-bottom: .5em;
    z-index: 1;

	transition: all 1.3s;

    


}

.class1{
	background-color:rgba(0, 0, 0, 0.5);

}

.bg{
   

	background: linear-gradient(to top right,#020202, transparent), url("~/assets/bg4.jpg") no-repeat center;
     /* -webkit-clip-path: polygon(46% 0, 100% 0, 100% 88%, 0 100%, 0 0);
clip-path: polygon(46% 0, 100% 0, 100% 88%, 0 100%, 0 0); */
    
    height: 100vh;

}

.fixed {

    position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  width: 100%;
}


/* ================================= 
  Media Queries
==================================== */




@media (min-width: 769px) {
	.header,
	.main-nav {
		display: flex;

	}
	.header {
		display: flex;
        flex-direction: column-reverse;
		align-items: center;
   
	}

}

@media (min-width: 1025px) {
	.header {
		flex-direction: row-reverse;
		justify-content: space-between;
	}

}

    
</style>



