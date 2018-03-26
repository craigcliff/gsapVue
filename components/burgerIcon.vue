<template>
  <div>
  
    <svg @click="greet" class="navicon" width="88px" height="50px" viewBox="0 0 88 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  
        <rect id="bottom" x="21" y="32" width="50" height="3" rx="2px"></rect>
  
        <rect id="mid" x="16" y="23" width="60" height="3" rx="2px"></rect>
  
        <rect id="top" x="21" y="14" width="50" height="3" rx="2px"></rect>
  
  	</svg>
  
    <div class="menu"></div>
    <div class="menu2"></div>

    <nav class ="menu-main">
      <ul class = "menu-items">
        <li class ="li1" >Link 1</li>
        <li class ="li2">Link 2</li>
        <li class ="li3"  >Link 3</li>
        <li class ="li4"> Link 4</li>

      </ul>

      </nav>
  
  
  
  
  
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
  
          className: "+=openmenu"
  
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

        .from('.li1', 0.5, {
  
          
            x: '-=400',
            
            ease: Power3.easeInOut

  
        }, 0.5)

         .to('.li1', 0.5, {
  
          opacity: 1,
          scale:1.5,
          transformOrigin:"50% 50%"

  
        }, 0.5)

        .from('.li2', 0.8, {
  
          
            x: '-=400',
            ease: Power3.easeInOut

  
        }, 0.5)

         .to('.li2', 0.8, {
  
          opacity: 1,
          scale:1.5

  
        }, 0.5)

        .from('.li3', 1, {
  
          
            x: '-=400',
            ease: Power3.easeInOut

  
        }, 0.5)

         .to('.li3', 1, {
  
          opacity: 1,
          scale:1.5

  
        }, 0.5)

.from('.li4', 1.2, {
  
          
            x: '-=400',
            ease: Power3.easeInOut

  
        }, 0.5)

         .to('.li4', 1.2, {
  
          opacity: 1,
          scale:1.5

  
        }, 0.5)
  
      
  
  
  
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
  body {
  
    background: #333;
  
  }
  
  
  
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
  
  
  
  .menu.openmenu {
  
    height: 100%;
  width: 50%
  }


  .menu2 {
  
    z-index: 1;
  
    position: absolute;
  
    top: 0px;
  
    left: 0;
  
    width: 0%;
  
    height: 100%;
  
    background: #000;
  
    transition: .17s;
  
  }
  
  
  
  .menu2.openmenu {
  
    height: 100%;
  width: 50%;
  
  }

  .menu-main{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;


  }

  .menu-items{
    color: yellow;
    z-index: 200;
     font-size: 40px;

  }


  
  .li1, .li2, .li3, .li4{
  list-style:none;
  opacity: 0;
 margin-top: 50px;


  }
  
  
</style>
