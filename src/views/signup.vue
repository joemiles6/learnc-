<template>
    <div class="">
        <div class="container_login">
        <span class="float1"></span>
      <span class="float3"></span>
         <form @submit.prevent="signup" class="form-group">
            <h1>Create an account!</h1>
          <small class="error" v-if="error">*{{error}}</small>
          <small class="success" v-if="success">*{{success}}</small>
              <div class="input-group">
              <label for="Username">Username</label>
            <input type="text" id="Username" v-model="username" class="form-control" autocomplete="off">
            </div>
              <div class="input-group">
              <label for="email">Email</label>
            <input type="email" id="email" v-model="email" class="form-control" autocomplete="off">
            </div>
            <div class="input-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" class="form-control" autocomplete="off">
            </div>            
            <div class="input-btn">
            <input type="submit" class="login">
            </div>
            <small class="checks">Already had an existing account? <a href="/login">login</a></small>
          </form>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      email: '',
      password: '',
      error: '',
      success: ''
    }
  },
  methods: {
    signup () {
      const user = {
        email: this.email,
        password: this.password,      
        username: this.username        
      }
      this.$store.dispatch('signup', user).then(() => {
        this.error = ''
        this.success = this.$store.state.success
        location.reload()
      }).catch(err => {
        if (!err.response) {
        this.error = err.message
        } else if(err.message) {
         this.error = this.$store.state.errors
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.container_login {
 width: 100%;
 height: 70vh;
 display: flex;
 justify-content: center;
 align-items: center;
  font-family: Apercu,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
}
.form-group {
  margin-left: 0.75rem;
  margin-top: 1.75rem;
  z-index: 1;
}
.formtext {
  font-size: .1.3rem;
  font-family: inherit;
  padding: 10px;
  color: #05013a
}
.input-group {
  display: flex;
  flex-direction: column;   
//   width: 100%;
  margin: 0.75rem;
  padding: .75rem;
}
.input-btn {
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
label {
  font-size: .80rem;
  font-weight: bold;
}
.form-control {
  width: 400px;
  border: 1px solid rgb(205, 204, 209);
  padding: 0.75rem;
  outline: none;
}
.login {
  width: 400px;
  text-align: center;
  padding: 1rem;
  border: none;
  background: rgb(37, 3, 139);
  color: #fff;
  font-size: .90rem;
  font-weight: bold;
  cursor: pointer;
}
.login:hover {
  background: rgb(21, 1, 83);
}
.checks{
    width: 100%;
    // height: 5 px;  
    padding-top: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.error {
  font-size: 14px;
  color: rgb(194, 0, 0);
  font-weight: bold;
  text-align: center;
}
.success {
  font-size: 14px;
  color: rgb(58, 175, 22);
  font-weight: bold;
  text-align: center;
}.float1,  .float3 {
  position: absolute;
  top: -8rem;
}
.float1 {
    width: 300px;
  height: 300px;
  background: rgba(6, 119, 194, .3);
  border-radius: 200px;
  box-shadow: 8px 4px 5px rgba(6, 119, 194, .3);

  top: 50vh;
  left: 50vw;
  z-index: 0;
}
.float3 {
    width: 100px;
  height: 100px;
  background: rgba(195, 22, 218, 0.3);
  box-shadow: 2px 4px 5px rgba(195, 22, 218, 0.3);

  border-radius: 50px;
  top: 20vh;
  left: 30vw;
}

</style>