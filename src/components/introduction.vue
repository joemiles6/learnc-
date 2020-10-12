<template>
    <div class="containeres">
        <div class="contents">
          <div class="read">
              <h1>C++ Introduction</h1>
              <h3 id="what-is-c++">What is C++?</h3>
              <p>C++ is a cross-platform language that can be used to create high-performance applications.</p>
              <p>C++ was developed by Bjarne Stroustrup, as an extension to the C language.</p>
              <p>C++ gives programmers a high level of control over system resources and memory.</p>
              <p>The language was updated 3 major times in 2011, 2014, and 2017 to C++11, C++14, and C++17.</p>
              <h3 id="why-use">Why Use C++</h3>
              <p>C++ is one of the world's most popular programming languages.</p>
              <p>C++ can be found in today's operating systems, Graphical User Interfaces, and embedded systems.</p>
              <p>C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused, lowering development costs.</p>
              <p>C++ is portable and can be used to develop applications that can be adapted to multiple platforms.</p>
              <p>C++ is fun and easy to learn!</p>
              <p>As C++ is close to C# and Java, it makes it easy for programmers to switch to C++ or vice versa</p>
              <h3 id="get-started">Get Started</h3>
              <p>This tutorial will teach you the basics of C++.</p>
              <p>It is not necessary to have any prior programming experience.</p>
          </div>
        <div class="aside">
            <div class="linkmain">
           <div class="links">
          <a href="/course/introduction/#what-is-c++" @click="find">what is c++</a>
            </div>
        <div class="links">
          <a href="/course/introduction/#why-use" @click="find">why use c++</a>
            </div>
        <div class="links">
          <a href="/course/introduction/#get-started" @click="find">get started</a>
            </div>
            </div>
 
        </div>
        </div>
    </div>
</template>

<script>
export default {
    methods : {
        find (e) {
          const path = e.target.href.split('#')
          const a = document.getElementById(path[1] )
          a.className = 'el'
          if (a.className === 'el') {
              setTimeout(() =>{
              a.className = ''
              }, 1000)
          }

        }
    }
}
</script>

<style lang="scss">
.el {
        background: rgb(5, 119, 119);
      color: #fff;
}
.containeres {
    position: relative;
    top: 0;
}
  .contents {
      width: 100%;
      position: absolute;
      top: 0;
      display: flex;
    justify-content: space-between;
    height: 100vh;
    scroll-behavior: smooth;
  font-family: Apercu,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;


  }
  .read{
      width: 70vw;
      border-radius: 10px;
      color: #105;
      padding: 15px;
      margin-left: .75rem;
      margin-right: .75rem;
    //   min-width: fit-content;
  }

  .read h1{ 
      text-align: left;
      font-size: 3.7rem;
     padding: 10px;
     margin: 1.3rem;
  }
  .read h3 {
      text-align: left;
      font-size: 2.7rem;
     padding: 10px;
     margin: 1rem;
  }
  .read p {
      margin-bottom: 1rem;
  }
  .aside {
      height: 50%;
      width: 30%;
      display: flex;
      position: relative;
      flex-direction: column;
      justify-content: center;
    //   padding-left: 10px;
      align-items: center;
  }
  .links {
      margin-bottom: .75rem;
  }
   .linkmain {
       position: fixed;
   }
  a {
      text-decoration: none;
      font-size: 1.2rem;
      color: rgb(6, 31, 87);
      padding: 10px;

  }
  ul {
      padding-left: 20px;
      margin: 0.9rem;
  }
  .darkcode {
      background: #000; 
      padding: 5px;
      color: #fff;
  }
  img {
      margin: 5px;
  }
  .note {
      background: rgb(166, 227, 245);
      padding: 13px;
      margin: 1rem;
  }
</style>