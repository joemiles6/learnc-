<template>
    <div class="">

        <div class="container_login">
                <span class="float1"></span>
      <span class="float2"></span>
      <span class="float3"></span>
         <form @submit.prevent="Login" class="form-group">
            <h1>Log in account!</h1>
          <small class="error" v-if="error">*{{error}}</small>
          <small class="success" v-if="success">*{{success}}</small>


              <div class="input-group">
              <label for="Email">Email</label>
            <input type="email" id="Email"  v-model="email" class="form-control" required>
            </div>
            <div class="input-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" class="form-control">
            </div>            
            <div class="input-btn">
            <input type="submit" class="login">
            </div>
            <small class="check">I don't have an account? <a href="/signup">signup</a></small>
          </form>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return {
      email: '',
      password: '',
      error: '',
      success: '',
    }
  },
  methods: {
    Login () {
      const user = {
        email: this.email,
        password: this.password        
      }
      this.$store.dispatch('login', user).then((data) => {
        console.log(data)
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
 z-index: 2;

  margin-left: 0.75rem;
  margin-top: 1.75rem;
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
.login:hover {
  background: rgb(84, 31, 182);
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
  background: rgb(114, 59, 215);
  color: #fff;
  cursor: pointer;
  font-size: .90rem;
  font-weight: bold;
}
.check{
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
}
.float1, .float2, .float3 {
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
.float2{
    width: 200px;
  height: 200px;
  background: rgba(125, 67, 192, 0.459);
  border-radius: 100px;
  top: 70vh;
  left: 60vw;
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
  z-index: 0;
}
</style>