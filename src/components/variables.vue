<template>
    <div class="containeres">
        <div class="contents">
          <div class="read">
              <h1 id="varibles">C++ Variables</h1>
              <p>Variables are containers for storing data values.</p>
              <p>In C++, there are different types of variables (defined with different keywords), for example:</p>
              <ul>
                  <li>int - stores integers (whole numbers), without decimals, such as 123 or -123</li>
                  <li>double - stores floating point numbers, with decimals, such as 19.99 or -19.99</li>
                  <li>char - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes</li>
                  <li>string - stores text, such as "Hello World". String values are surrounded by double quotes</li>
                  <li>bool - stores values with two states: true or false</li>
              </ul>
              <h3 id="declaring">Declaring (Creating) Variables</h3>
              <p>To create a variable, you must specify the type and assign it a value:</p>
              <!-- editor -->
              <img src="../assets/v1.png" alt="">
              <p>This example uses a single-line comment at the end of a line of code:</p>
              <h3 id="multi-line-variable-comment">C++ Multi-line Comments</h3>
              <p>Multi-line comments start with /* and ends with */.</p>
               <p>Any text between /* and */ will be ignored by the compiler:</p>
               <!-- editor -->
              <img src="../assets/v2.png" alt="">
              <p>Where type is one of C++ types (such as int), and variable is the name of the variable (such as x or myName). The equal sign is used to assign values to the variable.</p>
              <p>To create a variable that should store a number, look at the following example:</p>
              <!-- editor -->
              <img src="../assets/v3.png" alt="">

              <p>You can also declare a variable without assigning the value, and assign the value later:</p>
              <p>Note that if you assign a new value to an existing variable, it will overwrite the previous value:</p>
                  <!-- editor -->
              <img src="../assets/v4.png" alt="">

              <h3 id="varables-other-types"> Other Types</h3>
              <p>A demonstration of other data types:</p>
              <!-- editor -->
              <img src="../assets/v5.png" alt="">
              <div class="note">You will learn more about the individual types in the <a href="/course/datatypes"> Data Types</a> chapter.</div>
              <h3 id="display-variables">Display Variables</h3>
              <p>The cout object is used together with the (>>) tag operator to display variables.</p>
              <p>To combine both text and a variable, separate them with the (>>) tag operator:</p>
              <!-- editor -->
              <img src="../assets/v6.png" alt="">
                <h3 id="add-variables-together">Add Variables Together</h3>
                <p>To add a variable to another variable, you can use the + operator:</p>
                <!-- editor -->
  
          </div>
        <div class="aside">
            <div class="linkmain">
           <div class="links">
          <a href="#variables" @click="find">variables</a>
            </div>
        <div class="links">
          <a href="#declaring" @click="find">declaring variables</a>
            </div>
        <div class="links">
          <a href="#multi-line-variable-comment" @click="find">Multi line variable comment</a>
            </div>
        <div class="links">
          <a href="#varables-other-types" @click="find">variables other types</a>
            </div>
                    <div class="links">
          <a href="#display-variables" @click="find">display variables</a>
            </div>
                    <div class="links">
          <a href="#add-variables-together" @click="find">add variables together</a>
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