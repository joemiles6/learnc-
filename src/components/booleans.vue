      <template>
    <div class="containeres">
        <div class="contents">
          <div class="read">
             <h1 id="booleans">C++ Booleans</h1>
              <p>Very often, in programming, you will need a data type that can only have one of two values, like:</p>
              <ul>
                  <li>YES / NO</li>
                  <li>ON / OFF</li>
                  <li>TRUE / FALSE</li>
              </ul>
              <p>For this, C++ has a bool data type, which can take the values true (1) or false (0).</p>

              <h3 id="boolean-value">Boolean Values</h3>
              <p>A boolean variable is declared with the bool keyword and can only take the values true or false:</p>
            <!-- editor -->
              <img src="../assets/bool.png" alt="">
            <p>From the example above, you can read that a true value returns 1, and false returns 0.</p>
            <p>However, it is more common to return boolean values from boolean expressions (see next page).</p>
              <img src="../assets/str1.png" alt="">
            <p>To use strings, you must include an additional header file in the source code, the string tag library:</p>
          </div>
        <div class="aside">
            <div class="linkmain">
           <div class="links">
          <a href="#booleans" @click="find">boolean</a>
            </div>
        <div class="links">
         <a href="#boolean-value" @click="find">boolean value</a>
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
    