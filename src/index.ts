// import Vue from 'vue';
// import HelloComponent from "./components/hello";
// import gqg from "./components/hello.vue";
// import router from "./router/index.js"
// let v= new Vue({
//   el:'#app',
//   template:`<div>
//     <div>Hello {{name}}!</div>
//     Name:  <input v-model="name" type="text"/>
//     <hello-component :name="name" :initialEnthusiasm="5" />
//     <gqg :name="name" :initialEnthusiasm="10"></gqg>
//   </div>`,
//   data: {
//     name: "World"
//   },
//   components:{
//     HelloComponent,
//     gqg
//   }
// })
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

