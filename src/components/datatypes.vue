<template>
    <div class="containeres">
        <div class="contents">
          <div class="read">
              <h1 id="data-types">C++ Data Types</h1>
            <p>As explained in the <a href="/course/variables">Variables</a>  chapter, a variable in C++ must be a specified data type:</p>

              <!-- editor -->
              <img src="../assets/dtype.png" alt="">

              <h3 id="basic-data-types">Basic Data Types</h3>
              <p>The data type specifies the size and type of information the variable will store:</p>
              <div class="note">You will learn more about the individual data types in the next chapters.</div>
              <img src="../assets/datatypetable.png" alt="">
          </div>
        <div class="aside">
            <div class="linkmain">
           <div class="links">
          <a href="#data-types" @click="find">data types</a>
            </div>
        <div class="links">
          <a href="#basic-data-types" @click="find">basic data types </a>
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