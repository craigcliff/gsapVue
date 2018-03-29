<template>
	<div class="bg">
		  
		<div class="fixed" :class="{'fixed-after': fixedAfter}">
	
			<header class="header" :class="{'class1': class1}">
	
				<h1 class="logo">
	
					<logo :class="{'changeSvg': changeSvg}" />
	
				</h1>
	
				<a class="burgWrapper" href="##">
	
					<div class="burg" :class="{'activeBurg': activeBurg}" @click="toggleBurger"></div>
	
				</a>
	
				<ul class="main-nav" :class="{'toggleNav': toggleNav}" @click="toggleBurger">
	
					<li><a href="#" :class="{'toggleNav': toggleNav}" v-scroll-to="'.header'">Home</a></li>
	
					<li><a href="#" :class="{'toggleNav': toggleNav}" v-scroll-to="'.about__main'">About Us</a></li>
	
					<li><a href="#" :class="{'toggleNav': toggleNav}" v-scroll-to="'.portfolio__main'">Classes</a></li>
	
					<li><a href="#" :class="{'toggleNav': toggleNav}" v-scroll-to="'.contact__main'">Contact</a></li>
	
				</ul>
	
	
	
			</header>
	
		</div>
	
	
	
	
	
	</div>
</template>


<script>
	import logo from "@/components/logo"
	
	
	
	
	
	export default {
	
		components: {
	
			logo,
	
	
	
	
	
		},
	
	
	
	
	
		data() {
	
	
	
			return {
	
	
	
				changeSvg: false,
	
				class1: false,
	
				scrolled: false,
	
				activeBurg: false,
	
				toggleNav: false,

				fixedAfter: false
	
	
	
	
	
	
	
			}
	
	
	
	
	
	
	
		},
	
	
	
		methods: {
	
			handleScroll: function(event) {
	
	
	
	
	
				if (event.target.scrollingElement.scrollTop > 120) {
	
	
	
					this.class1 = true;
	
					this.changeSvg = true;
	
				} else {
	
					this.class1 = false;
	
					this.changeSvg = false;
	
				}
	
	
	
	
	
			},
	
	
	
			toggleBurger: function() {
	
	
	
				this.activeBurg = !this.activeBurg;
	
				this.toggleNav = !this.toggleNav;

				this.fixedAfter = !this.fixedAfter;
	
				console.log('Burger');
	
	
	
			}
	
		},
	
	
	
	
	
	
	
		mounted: function() {
	
			window.addEventListener('scroll', this.handleScroll);
	
		},
	
		destroyed: function() {
	
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
	
	
	
	.changeSvg {
	
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
	
				.bg {
	
		background: linear-gradient(to top right, #020202, transparent), url("~/assets/bg4.jpg") no-repeat center;
		
	
		/* -webkit-clip-path: polygon(46% 0, 100% 0, 100% 88%, 0 100%, 0 0);
	
	clip-path: polygon(46% 0, 100% 0, 100% 88%, 0 100%, 0 0); */
	
		height: 100vh;
	
	}


  .menu {
  
    z-index: 1;
  
    position: absolute;
  
    top: 0px;
  
    right: 0;
  
    width: 0%;
  
    height: 100%;
  
    background: #000;
  
    transition: .17s;
  
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
	
	
	
	.logo2 {
	
		width: 200px;
	
	}
	
	
	
	.main-nav {
	
		margin-top: 5px;
	
		margin-left: 50px;
	
		display: none;
		
	
	}
	
	
	
	.logo a,
	
	.main-nav a {
	
		padding: 15px 20px;
	
		text-transform: uppercase;
	
		text-align: center;

	
		
	
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
	
	
	

	
	
	

	
	
	
	.fixed {
	
		position: fixed;
	
		top: 0;
	
		left: 0;
	
		margin: auto;
	
		width: 100%;

		

	
	
	}
	

	.burgWrapper {
	
		padding: 20px 0;
	
		display: block;
	
	}
	
	
	
	.burg {
	
		display: block;
	
		height: 5px;
	
		width: 30px;
	
		background: black;
	
		position: fixed;
	
		top: 50px;
	
		right: 50px;
	
		-moz-transition: 0.2s;
	
		-o-transition: 0.2s;
	
		-webkit-transition: 0.2s;
	
		transition: 0.2s;
	
	}
	
	
	
	.burg:before {
	
		content: "";
	
		position: absolute;
	
		top: -10px;
	
		width: 30px;
	
		height: 5px;
	
		background: #000;
	
		-moz-transition: 0.2s;
	
		-o-transition: 0.2s;
	
		-webkit-transition: 0.2s;
	
		transition: 0.2s;
	
	}
	
	
	
	.burg:after {
	
		content: "";
	
		position: absolute;
	
		top: 10px;
	
		width: 30px;
	
		height: 5px;
	
		background: #000;
	
		-moz-transition: 0.2s;
	
		-o-transition: 0.2s;
	
		-webkit-transition: 0.2s;
	
		transition: 0.2s;
	
	}
	
	
	
	.activeBurg {
	
		background: transparent;
	
	}
	
	
	
	.activeBurg:before {
	
		-webkit-transform: rotate(45deg);
	
		top: 0;
	
	}
	
	
	
	.activeBurg:after {
	
		-webkit-transform: rotate(-45deg);
	
		top: 0;
	
	}
	
	
	
	.toggleNav {
	
		display: block;
	
		color: green;
	
	}
	
	
	
	
	
	/* ================================= 
	
	  Media Queries
	
	==================================== */
	@media (max-width: 768px){

	.fixed-after {
	height: 100vh;
		background-color: rgba(0, 0, 0, 0.5);


	}
	



	}
	
	
	@media (min-width: 769px) {



	
		.burgWrapper {
	
			padding: 20px 0;
	
			display: none;
	
		}
	
		.main-nav a {
	
			display: block;
	
		}
	
		.header,
	
		.main-nav {
	
			display: flex;
	
		}
	
		.header {
	
			display: flex;
	
			flex-direction: column-reverse;
	
			align-items: center;
	
		}

			.class1 {
	
		background-color: rgba(0, 0, 0, 0.5);
	
	}
	
	}
	
	
	
	@media (min-width: 1025px) {
	
		.burgWrapper {
	
			padding: 20px 0;
	
			display: none;
	
		}
	
		.main-nav a {
	
			display: block;
	
		}
	
		.header {
	
			flex-direction: row-reverse;
	
			justify-content: space-between;
	
		}
	
	}
</style>



