<template>
    <div class="containeres">
        <div class="contents">
          <div class="read">
              <h1 id="Array">C++ Arrays</h1>
              <p>Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.</p>
              <p>To declare an array, define the variable type, specify the name of the array followed by square brackets and specify the number of elements it should store:</p>
              <!-- editor -->
              <img src="../assets/arr1.png" alt="">

              <p>We have now declared a variable that holds an array of four strings. To insert values to it, we can use an array literal - place the values in a comma-separated list, inside curly braces:</p>
              <!-- editor -->
              <img src="../assets/arr2.png" alt="">

              <p>To create an array of three integers, you could write:</p>
              <img src="../assets/arr3.png" alt="">

              <h3 id="Access-element">Access the Elements of an Array</h3>  
              <p>You access an array element by referring to the index number.</p>
              <p>This statement accesses the value of the first element in cars:</p>
              <!-- editor -->
              <img src="../assets/arr4.png" alt="">

              <div class="note">Note: Array indexes start with 0: [0] is the first element. [1] is the second element, etc.</div>
              <h3 id="change-array-element">Change an Array Element</h3>
              <p>To change the value of a specific element, refer to the index number:</p>
              <!-- editor -->
              <img src="../assets/arr5.png" alt="">

              <!-- editor -->
              <img src="../assets/arr6.png" alt="">

          </div>
        <div class="aside">
            <div class="linkmain">
           <div class="links">
          <a href="#Array" @click="find">Array</a>
            </div>
        <div class="links">
          <a href="#Access-element" @click="find">Access element</a>
            </div>
        <div class="links">
          <a href="#change-array-element" @click="find">Array element</a>
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