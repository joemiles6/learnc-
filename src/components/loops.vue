      <template>
    <div class="containeres">
        <div class="contents">
          <div class="read">
             <h1 id="while">C++ While Loop</h1>
             <p>Loops can execute a block of code as long as a specified condition is reached.</p>
             <p>Loops are handy because they save time, reduce errors, and they make code more readable.</p>
             <h3 id="while-loop">C++ While Loop</h3>
             <p>The while loop loops through a block of code as long as a specified condition is true:</p>
             <!-- editor -->
              <img src="../assets/while1.png" alt="">
             <p>In the example below, the code in the loop will run, over and over again, as long as a variable (i) is less than 5:
                 <!-- editor -->
              <img src="../assets/while2.png" alt="">
             <div class="note">Note: Do not forget to increase the variable used in the condition, otherwise the loop will never end!</div>
             <h1 id="for-loop">C++ For Loop</h1>
             <p>When you know exactly how many times you want to loop through a block of code, use the for loop instead of a while loop:</p>
             <!-- editor -->
              <img src="../assets/for1.png" alt="">

             <p><b> Statement 1</b> is executed (one time) before the execution of the code block.</p>
             <p><b>Statement 2 </b> defines the condition for executing the code block.</p>
             <p> <b>Statement 3</b> is executed (every time) after the code block has been executed.</p>
             <p>The example below will print the numbers 0 to 4:</p>
             <!-- edtor -->
              <img src="../assets/for2.png" alt="">
             
             <h4 id="for-example">Example explained</h4>
             <p>Statement 1 sets a variable before the loop starts (int i = 0).</p>
             <p>Statement 2 defines the condition for the loop to run (i must be less than 5). If the condition is true, the loop will start over again, if it is false, the loop will end.</p>
             <p>Statement 3 increases a value (i++) each time the code block in the loop has been executed.</p>
             <h3 id="loop-another-example">Another Example</h3>
             <p>This example will only print even values between 0 and 10:</p>
             <!-- editor -->
              <img src="../assets/for3.png" alt="">
             <h1 id="break-continue">C++ Break and Continue</h1>
             <p>You have already seen the break statement used in an earlier chapter of this tutorial. It was used to "jump out" of a switch statement.</p>
             <p>The break statement can also be used to jump out of a <b>loop.</b></p>
             <p>This example jumps out of the loop when i is equal to 4:</p>
             <!-- editor -->
              <img src="../assets/break1.png" alt="">

             <h3 id="continue">C++ Continue</h3>
             <p>The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.</p>
             <p>This example skips the value of 4:</p>
             <!-- editor -->
              <img src="../assets/break2.png" alt="">

             <h3 id="break-continue-in-while">Break and Continue in While Loop</h3>
             <p>You can also use break and continue in while loops:</p>
             <!-- editor -->
              <img src="../assets/break3.png" alt="">

             <!-- editor -->
              <img src="../assets/break4.png" alt="">

          </div>
        <div class="aside">
            <div class="linkmain">
           <div class="links">
          <a href="#while" @click="find">while introduction</a>
            </div>
        <div class="links">
          <a href="#while-loop" @click="find">while-loop</a>
            </div>
        <div class="links">
          <a href="#for-loop" @click="find">for loop</a>
            </div>
             <div class="links">
          <a href="#for-example" @click="find">for example</a>
            </div>
        <div class="links">
          <a href="#loop-another-example" @click="find">another example</a>
        </div>
        <div class="links">
          <a href="#break-continue" @click="find">break continue</a>
            </div>   
                    <div class="links">
          <a href="#continue" @click="find">continue</a>
            </div>  
                    <div class="links">
          <a href="#break-continue-in-while" @click="find">break continue in while</a>
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
    