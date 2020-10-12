<template>
    <div class="containeres">
        <div class="contents">
          <div class="read">
              <h1 id="user-input">C++ User Input</h1>
              <P>You have already learned that cout is used to output (print) values. Now we will use cin to get user input.</P>
              <P>cin is a predefined variable that reads data from the keyboard with the extraction operator (>>).</P>
              <P>In the following example, the user can input a number, which is stored in the variable x. Then we print the value of x:</P>
              <!-- editor -->
              <img src="../assets/userinp1.png" alt="">
              
              <div class="note">
                  <h4 id="good-to-know">Good To Know</h4>
                  <p>cout is pronounced "see-out". Used for output, and uses the insertion operator double back tag  </p>
                  <p>cin is pronounced "see-in". Used for input, and uses the extraction operator (>>)</p>
              </div>
              <h3 id="creating-a-simple-calculator">Creating a Simple Calculator</h3>
              <p>In this example, the user must input two numbers. Then we print the sum by calculating (adding) the two numbers:</p>
              <!-- editor -->
              <img src="../assets/userinp2.png" alt="">

              <p>There you go! You just built a basic calculator!</p>
          </div>
        <div class="aside">
            <div class="linkmain">
           <div class="links">
          <a href="#user-input" @click="find">user input</a>
            </div>
        <div class="links">
          <a href="#good-to-know" @click="find">good to know</a>
            </div>
        <div class="links">
          <a href="#creating-a-simple-calculator" @click="find">creating a simple calculator</a>
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