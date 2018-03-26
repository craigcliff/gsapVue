<template>
  <div>

      <div class="bg">fsdfafafafads </div>
  
    <svg @click="greet" class="navicon" width="88px" height="50px" viewBox="0 0 88 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  
        <rect id="bottom" x="21" y="32" width="50" height="3" rx="2px"></rect>
  
        <rect id="mid" x="16" y="23" width="60" height="3" rx="2px"></rect>
  
        <rect id="top" x="21" y="14" width="50" height="3" rx="2px"></rect>
  
  	</svg>
  
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 600">
  <g >
    <path class="menu" d="M0 .667h210.911v37.798H0z"   />
    <path class="menu1" d="M0 265.25h210.911v37.798H0z" />
    <path class="menu2" d="M0 227.452h210.911v37.798H0z"  />
    <path class="menu3" d="M0 76.262h210.911v37.798H0z" />
    <path class="menu4" d="M0 189.655h210.911v37.798H0z"  />
    <path class="menu5" d="M0 151.857h210.911v37.798H0z"  />
    <path  class="menu6" d="M0 114.06h210.911v37.798H0z" />
    <path class="menu7" d="M0 38.464h210.911v37.798H0z"  />
  </g>
</svg>
    
  
  
  
  
  
  </div>
</template>



<script>
  import {
  
    TweenMax
  
  } from "gsap";
  
  import TimelineMax from "gsap/TimelineMax";
  
  
  
  export default {
  
  
  
    data() {
  
      return {
  
  
  
        menuToggle: new TimelineMax({
  
          paused: true,
  
          reversed: true
  
        })
  
  
  
      }
  
  
  
    },
  
  
  
    mounted() {
  
  
  
  
  
  
  
  
  
      this.menuToggle
  
        .to('.navicon #mid', .4, {
  
          x: 72,
  
          transformOrigin: '50% 50%',
  
          ease: Back.easeIn.config(2.2)
  
        }, 'burg')
  
        .to('.menu', .001, {
  
          className: "+=openmenu"
  
        })

        .to('.menu2', .001, {
  
          className: "+=openmenu2"
  
        })

        .to('.menu3', .001, {
  
          className: "+=openmenu3"
  
        })
        .to('.menu4', .001, {
  
          className: "+=openmenu4"
  
        })
        .to('.menu5', .001, {
  
          className: "+=openmenu5"
  
        })
        .to('.menu6', .001, {
  
          className: "+=openmenu6"
  
        })
        .to('.menu7', .001, {
  
          className: "+=openmenu7"
  
        })
        .to('.menu8', .001, {
  
          className: "+=openmenu8"
  
        })
        .to('.menu9', .001, {
  
          className: "+=openmenu9"
  
        })
        .to('.menu10', .001, {
  
          className: "+=openmenu10"
  
        })

          .add('rotate')
  
        .to('.navicon #top', .17, {
  
          y: '9'
  
        }, 'rotate')
  
        .to('.navicon #bottom', .17, {
  
          y: '-9'
  
        }, 'rotate')
  
        .to('.navicon #top', .17, {
  
          rotationZ: 45,
  
          transformOrigin: '50% 50%'
  
        }, 'rotate')
  
        .to('.navicon #bottom', .17, {
  
          rotationZ: -45,
  
          transformOrigin: '50% 50%'
  
        }, 'rotate')

        
      
  
  
  
    },
  
  
  
  
  
  
  
  
  
  
  
    methods: {
  
  
  
      greet: function(event) {
  
  
  
        console.log('Hello There');
  
  
  
  
  
  
  
  
  
  
  
  
  
        if (this.menuToggle.reversed()) {
  
          this.menuToggle.restart()
  
  
  
        } else {
  
          this.menuToggle.reverse();
  
  
  
  
  
        }
  
  
  
  
  
  
  
      }
  
  
  
    }
  
  
  
  }
</script>



<style scoped>




 
    
  
  

 

   .navicon {
  
    z-index: 5;
  
    position: absolute;
  
    top: 0;
  
    right: 0;
  
    cursor: pointer;
  
  }
  
  
  
  .navicon #top,
  
  .navicon #bottom {
  
    fill: tan;
  
  }
  
  
  
  .navicon #mid {
  
    fill: tan;
  
  }
  
  
  .menu{
  


        z-index: 1;
  
    position: absolute;
  
    top: 0px;
  
    right: 0;
  
    width: 0%;
  
    height: 10vh;
  
    background: rgba(255, 255, 255, 0.50);
  
    transition: .17s;


  }
  .openmenu{

        
  width: 100%
  }

    .menu2{
  


        z-index: 1;
  
    position: absolute;
  
    top: 10vh;
  
    left: 0;
  
    width: 0%;
  
    height: 10vh;
  
    background: rgba(255, 255, 255, 0.55);
  
    transition: .17s;


  }
  .openmenu2{

        
  width: 100%
  }

  .menu3{
  


        z-index: 1;
  
    position: absolute;
  
    top: 20vh;
  
    right: 0;
  
    width: 0%;
  
    height: 10vh;
  
   background: rgba(255, 255, 255, 0.60);
  
    transition: .17s;


  }
  .openmenu3{

        
  width: 100%
  }

  .menu4{
  


        z-index: 1;
  
    position: absolute;
  
    top: 30vh;
  
    left: 0;
  
    width: 0%;
  
    height: 10vh;
  
    background: rgba(255, 255, 255, 0.65);
  
    transition: .17s;


  }
  .openmenu4{

        
  width: 100%
  }

  .menu5{
  


        z-index: 1;
  
    position: absolute;
  
    top: 40vh;
  
    right: 0;
  
    width: 0%;
  
    height: 10vh;
  
     background: rgba(255, 255, 255, 0.70);
  
    transition: .17s;


  }
  .openmenu5{

        
  width: 100%
  }
  
  .menu6{
  


        z-index: 1;
  
    position: absolute;
  
    top: 50vh;
  
    left: 0;
  
    width: 0%;
  
    height: 10vh;
  
    background: rgba(255, 255, 255, 0.75);
  
    transition: .17s;


  }
  .openmenu6{

        
  width: 100%
  }
  
  .menu7{
  


        z-index: 1;
  
    position: absolute;
  
    top: 60vh;
  
    right: 0;
  
    width: 0%;
  
    height: 10vh;
  
    background: rgba(255, 255, 255, 0.80);
  
    transition: .17s;


  }
  .openmenu7{

        
  width: 100%
  }

   .menu8{
  


        z-index: 1;
  
    position: absolute;
  
    top: 70vh;
  
    left: 0;
  
    width: 0%;
  
    height: 10vh;
  
    background: rgba(255, 255, 255, 0.85);
  
    transition: .17s;


  }
  .openmenu8{

        
  width: 100%
  }

  .menu9{
  


        z-index: 1;
  
    position: absolute;
  
    top: 80vh;
  
    right: 0;
  
    width: 0%;
  
    height: 10vh;
  
    background: rgba(255, 255, 255, 0.90);
  
    transition: .17s;


  }
  .openmenu9{

        
  width: 100%
  }

    .menu10{
  


        z-index: 1;
  
    position: absolute;
  
    top: 90vh;
  
    left: 0;
  
    width: 0%;
  
    height: 10vh;
  
    background: rgba(255, 255, 255, 0.95);
  
    transition: .17s;


  }
  .openmenu10{

        
  width: 100%
  }
  
  
</style>
