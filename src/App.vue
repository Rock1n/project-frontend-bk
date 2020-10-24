<template>
  <div id="app">
    <!--这是最底层页面-->
    <Nav/>
    <router-view/>

    <!--
      路由自动在router-view中渲染组件
        <Index/>
        <About/>
    -->

    <img src="./assets/logo.png">
  </div>

</template>

<script>
import Nav from "./components/Nav";
//import Index from "./components/Index";
//import About from "./components/About";

export default {
  name: 'app',
  components: {Nav
    //, Index, About
  },
}
</script>

<style>
#app {
  text-align: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
