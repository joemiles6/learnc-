      <template>
    <div class="containeres">
        <div class="contents">
          <div class="read">
             <h1 id="if-else">C++ If ... Else</h1>
              <p>C++ supports the usual logical conditions from mathematics:</p>
              <ul>
                  <li>Less than: a less than b</li>
                  <li>Less than or equal to: a less or equal b</li>
                  <li>Greater than: a > b</li>
                  <li>Greater than or equal to: a >= b</li>
                  <li>Equal to a == b</li>
                  <li>Not Equal to: a != b</li>
              </ul>
              <p>You can use these conditions to perform different actions for different decisions.</p>
              <p>C++ has the following conditional statements:</p>
               <ul>
                   <li>Use if to specify a block of code to be executed, if a specified condition is true</li>
                   <li>Use else to specify a block of code to be executed, if the same condition is false</li>
                   <li>Use else if to specify a new condition to test, if the first condition is false</li>
                   <li>Use switch to specify many alternative blocks of code to be executed</li>
              </ul>
              <h3 id="if-statement">The if Statement</h3>
              <p>Use the if statement to specify a block of C++ code to be executed if a condition is true.</p>
              <!-- editor -->
              <img src="../assets/if1.png" alt="">
              <div class="note">
                  Note that if is in lowercase letters. Uppercase letters (If or IF) will generate an error.
              </div>
              <p>In the example below, we test two values to find out if 20 is greater than 18. If the condition is true, print some text:</p>
              <!-- editor -->
              <img src="../assets/if2.png" alt="">

              <p>We can also test variables:</p>
              <!-- editor -->
              <img src="../assets/if3.png" alt="">

              <h4 id="if-example-explained">Example explained</h4>
              <p>In the example above we use two variables, x and y, to test whether x is greater than y (using the > operator). As x is 20, and y is 18, and we know that 20 is greater than 18, we print to the screen that "x is greater than y".</p>
              <h3 id="switch">C++ Switch</h3>
              <p>Use the switch statement to select one of many code blocks to be executed.</p>
              <!-- EDITOR -->
              <img src="../assets/swit1.png" alt="">

              <p>This is how it works:</p>
              <ul>
                  <li>The switch expression is evaluated once</li>
                  <li>The value of the expression is compared with the values of each case</li>
                  <li>If there is a match, the associated block of code is executed</li>
                  <li>The break and default keywords are optional, and will be described later in this chapter</li>
              </ul>
              <p>The example below uses the weekday number to calculate the weekday name:</p>
              <!-- editor -->
              <img src="../assets/switch2.png" alt="">

              <h3 id="break-keyword">The break Keyword</h3>
              <p>When C++ reaches a break keyword, it breaks out of the switch block.</p>
              <p>This will stop the execution of more code and case testing inside the block.</p>
              <p>When a match is found, and the job is done, it's time for a break. There is no need for more testing.</p>
              <div class="note">A break can save a lot of execution time because it "ignores" the execution of all the rest of the code in the switch block.</div>
              <h3 id="default-keyword">The default Keyword</h3>
              <p>The default keyword specifies some code to run if there is no case match:</p>
              <!-- editor -->
              <img src="../assets/switch3.png" alt="">
              <div class="note">Note: The default keyword must be used as the last statement in the switch, and it does not need a break.</div>
          </div>
        <div class="aside">
            <div class="linkmain">
           <div class="links">
          <a href="#if-else" @click="find">if...else</a>
            </div>
        <div class="links">
          <a href="#if-statement" @click="find"> if statement</a>
            </div>
        <div class="links">
          <a href="#if-example-explained" @click="find">if example explained</a>
            </div>
        <div class="links">
          <a href="#switch" @click="find">switch </a>
            </div>
        <div class="links">
          <a href="#break-keyword" @click="find">break-keyword</a>
            </div>
            <div class="links">
          <a href="#default-keyword" @click="find">dafault keyworf</a>
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
    