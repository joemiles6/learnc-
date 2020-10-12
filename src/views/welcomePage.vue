<template>
    <div class="">
        <modal :user=user />
        <!-- nav -->
        {{user}}
        <div class="coursetainer">
          <div class="nav">
          <div class="courseHeader">Code plus</div>
          <div class="navmenu">
            <div class="navtitle">
              <router-link to="/course/introduction" class="big">Introduction</router-link>
            </div>  
              <div class="navtitle">
              <router-link to="/course/started">Get started</router-link>
            </div>  
            <div class="navtitle">
              <router-link to="/course/syntax">Syntax</router-link>
            </div>  
            <div class="navtitle">
              <router-link to="/course/output">Output</router-link>
            </div> 
            <div class="navtitle">
              <router-link to="/course/comments">Comments</router-link>
            </div> 
            <div class="navtitle">
              <router-link to="/course/variables">Variables</router-link>
            </div> 
            <div class="navtitle">
              <router-link to="/course/user-inputs">User inputs</router-link>
            </div> 
            <div class="navtitle">
              <router-link to="/course/data-types">Data type</router-link>
            </div>
            <div class="navtitle">
              <router-link to="/course/operators">Operators</router-link>
            </div>  
              <div class="navtitle">
              <router-link to="/course/Strings">Strings</router-link>
            </div>
                      
             <div class="navtitle">
              <router-link to="/course/maths">Maths</router-link>
            </div>        
              <div class="navtitle">
              <router-link to="/course/boolean">boolean</router-link>
            </div>        
              <div class="navtitle">
              <router-link to="/course/conditions">condition</router-link>
            </div>            
              <div class="navtitle">
              <router-link to="/course/loops">loops</router-link>
            </div>            
              <div class="navtitle">
              <router-link to="/course/array">array</router-link>
            </div>            
          </div>
        </div>
        <!-- board -->
        <div class="displaycoures">
          <router-view/>
        </div>
        </div>

    </div>
</template>
<script>
import modal from "../components/modal"
export default {
  data () {
    return {
    }
  },
  computed: {
    user () {
      const user = this.$store.state.userboard
      return user
    }
  },
  components: {
      modal
  }
}
  
</script>
<style lang="scss" scoped>
.coursetainer {
  position: relative;
  font-family: Apercu,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;


}
.displaycoures{ 
 padding-left: 12rem;
}
.nav {
  width: 210px;
  position: fixed;  
  top: 0;
  left: 0;
  height: 100vh;
  background: rgb(1, 2, 46);
  overflow-y: scroll;
}
.courseHeader {
  font-size: 2rem;
  color: rgb(221, 227, 243);
  border-bottom: 3px solid;
  padding: 20px;
}
.navmenu {
  padding: 16px;
}
.navtitle {
  margin-bottom: 2rem;
}
.navtitle a {
  text-decoration: none;
  font-size: 1.2rem;
  color: rgb(84, 100, 146);
  font-weight: bold;
  padding: 5px;
      &.router-link-exact-active {
        color: #42b983;
    }
}
a:hover{ 
  color: rgb(185, 197, 228);
}
a:hover{ 
  color: rgb(185, 197, 228);
}
.navtitle .big {
  border-bottom: 1px solid rgb(140, 153, 194);
  font-size: 1.7rem;

}
</style>

