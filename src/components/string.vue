<template>
    <div class="containeres">
        <div class="contents">
          <div class="read">
              <h1 id="strings">C++ Strings</h1>
            <p>Strings are used for storing text.</p>
            <p>A string variable contains a collection of characters surrounded by double quotes:</p>

            <!-- editor -->
              <img src="../assets/str1.png" alt="">
            <p>To use strings, you must include an additional header file in the source code, the string tag library:</p>


              <!-- editor -->
              <img src="../assets/str2.png" alt="">

              <h1 id="string-concat">C++ String Concatenation</h1>
              <p>The + operator can be used between strings to add them together to make a new string. This is called concatenation:</p>
              <!-- editor -->
              <p>In the example above, we added a space after firstName to create a space between John and Doe on output. However, you could also add a space with quotes (" " or ' '):</p>
              <!-- editor -->
              <h3 id="append">Append</h3>
              <p>A string in C++ is actually an object, which contain functions that can perform certain operations on strings. For example, you can also concatenate strings with the append() function:</p>
              <!-- editor -->
              <div class="note">
                  It is up to you whether you want to use + or append(). The major difference between the two, is that the append() function is much faster. However, for testing and such, it might be easier to just use +.
              </div>
          </div>
        <div class="aside">
            <div class="linkmain">
           <div class="links">
          <a href="#strings" @click="find">Strings </a>
            </div>
        <div class="links">
          <a href="#string-concat" @click="find">string concatenation</a>
            </div>
        <div class="links">
          <a href="#append" @click="find">append</a>
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