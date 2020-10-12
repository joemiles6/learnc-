    <template>
    <div class="containeres">
        <div class="contents">
          <div class="read">
              <h1 id="oprator">C++ Operators</h1>
              <p>Operators are used to perform operations on variables and values.</p>
              <p>In the example below, we use the + operator to add together two values:</p>

              <!-- editor -->
              <img src="../assets/oprator1.png" alt="">
              <h3 id="basic-data-types">Basic Data Types</h3>
              <p>Although the + operator is often used to add together two values, like in the example above, it can also be used to add together a variable and a value, or a variable and another variable:</p>
              <!-- editor -->
              <img src="../assets/oprator2.png" alt="">
              <p>C++ divides the operators into the following groups:</p>
              <ul>
                  <li><a href="#arithemetics">Arithmetic operators</a></li>
                  <li><a href="#Assignment">Assignment operators</a></li>
                  <li><a href="#Logical">Logical operators</a></li>
                  <li><a href="#Bitwise">Bitwise operators</a></li>
              </ul>
              <h3 id="arithemetics">Bitwise</h3>
              <p>Arithmetic operators are used to perform common mathematical operations.</p>
              <img src="../assets/opratorArithemetics.png" alt="">
          </div>
        <div class="aside">
            <div class="linkmain">
           <div class="links">
          <a href="#oprator" @click="find">what is c++</a>
            </div>
        <div class="links">
          <a href="#basic-data-types" @click="find">basic data types</a>
            </div>
        <div class="links">
          <a href="#arithemetics" @click="find">arithemetics</a>
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