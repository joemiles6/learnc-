<template>
    <div class="containeres">
        <div class="contents">
          <div class="read">
              <h1 id="math">C++ Math</h1>
            <p>C++ has many functions that allows you to perform mathematical tasks on numbers.</p>
            <h3 id="max-min">Max and min</h3>
            <p>The max(x,y) function can be used to find the highest value of x and y:</p>
            <!-- editor -->
              <img src="../assets/math1.png" alt="">
            <p>And the min(x,y) function can be used to find the lowest value of x and y:</p>
              <img src="../assets/math2.png" alt="">
            <p>To use strings, you must include an additional header file in the source code, the string tag library:</p>
            <h3 id="cmath-header">C++ cmath Header</h3>
            <p>Other functions, such as sqrt (square root), round (rounds a number) and log (natural logarithm), can be found in the cmath header file:</p>
              <img src="../assets/math3.png" alt="">
            <h3 id="other-math-functions">Other Math Functions</h3>
            A list of other popular Math functions (from the cmath library) can be found in the table below:
              <!-- editor pics--> 
              <img src="../assets/mathtable1.png" alt="">
              <img src="../assets/mathtable2.png" alt="">
              

          </div>
        <div class="aside">
            <div class="linkmain">
           <div class="links">
          <a href="#math" @click="find">math</a>
            </div>
           <div class="links">
          <a href="#max-min" @click="find">max and min </a>
            </div>
        <div class="links">
          <a href="#cmath-header" @click="find">cmath header </a>
            </div>
        <div class="links">
          <a href="#other-math-functions" @click="find">other math functions</a>
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