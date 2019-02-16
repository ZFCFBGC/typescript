import Vue from 'vue';
import HelloComponent from "./components/hello";
import gqg from "./components/hello.vue"
let v= new Vue({
  el:'#app',
  template:`<div>
    <div>Hello {{name}}!</div>
    Name:  <input v-model="name" type="text"/>
    <hello-component :name="name" :initialEnthusiasm="5" />
    <gqg :name="name" :initialEnthusiasm="10"></gqg>
  </div>`,
  data: {
    name: "World"
  },
  components:{
    HelloComponent,
    gqg
  }
})

