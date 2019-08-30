<template>
  <div id="app">
    <keep-alive include="goods,goodsDetail">
      <router-view></router-view>
    </keep-alive>  
  </div>
</template>

<script>

export default {
  name: 'app',
   data () {
    return {
      
    }
  }
}
</script>

<style>
body{
		background-color: #f7f9fa;
		font-size: 14px;
	}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
.child-view {
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
  transition-delay: 0.1s
}

.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
