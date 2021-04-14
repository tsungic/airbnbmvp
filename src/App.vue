<template>
  <div id="app">
    <NavigationMobile />
    <div class="content" :class="{'open':showNav}">
      <div class="top-bar">
        <div id="navigation-icon" v-if="mobileView"
          @click="showNav = !showNav">
          <i class="fas fa-bars"></i>
        </div>
        <Navigation v-if="!mobileView" />
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>


<script>

import Navigation from './components/Navigation.vue';
import NavigationMobile from './components/NavigationMobile.vue';


export default {
  data: () =>{
    return {
      mobileView:true,
      showNav:false,
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    }

  },
  components: {
    Navigation,
    NavigationMobile,
  },
  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  }
}
</script>


<style>
@import url("https://use.fontawesome.com/releases/v5.15.3/css/all.css");

body{
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0px;
  font-family:"Segoe UI", Tahoma;
  background-color: #EEE;
}
#app{
  position: relative;
  width: calc(100% - 20px);
  height: calc(100vh - 20px);
  padding: 10px;
  color: #333;
  overflow: hidden;

}
.top-bar {
  display: flex;
  width: 100%;
}

#navigation-icon {
  padding: 10px 10px 20px;
  margin-right: 10px;
  cursor: pointer;
}
i {
  font-size: 2rem;
}
.open {
  transform:translateX(300px);
}
.content {
  position: absolute;
  top: 10px;
  width: calc(100% = 60px);
  height:calc(100vh = 60px);
  padding: 20px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 2px 2px 2px 1px black;
  /* transition: 1s transform cubic-bezier(0.075, 0.82, 0.165, 1); */
  transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
  
  }
</style>
