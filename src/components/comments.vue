<template>
    <div class="containeres">
        <div class="contents">
          <div class="read">
              <h1 id="comment">C++ Comments</h1>
              <p>Comments can be used to explain C++ code, and to make it more readable. It can also be used to prevent execution when testing alternative code. Comments can be singled-lined or multi-lined.</p>
              <p>Single-line comments start with two forward slashes (//).</p>
              <p>Any text between // and the end of the line is ignored by the compiler (will not be executed).</p>
              <p>This example uses a single-line comment before a line of code:</p>
              <!-- editor -->
              <img src="../assets/comment1.png" alt="">
              <p>This example uses a single-line comment at the end of a line of code:</p>
              <h3 id="multi-line-comment">C++ Multi-line Comments</h3>
              <p>Multi-line comments start with /* and ends with */.</p>
               <p>Any text between /* and */ will be ignored by the compiler:</p>
               <!-- editor -->
              <img src="../assets/comment2.png" alt="">
               <div class="note">
                   <h4 id="single-or-multiline-comment">Single or multi-line comments?</h4>
                   <p>It is up to you which you want to use. Normally, we use // for short comments, and /* */ for longer.</p>
               </div>
                  <p>you can add as many cout objects as you want. However, note that it does not insert a new line at the end of the output</p>

                  <!-- editor -->
              <img src="../assets/comment3.png" alt="">

          </div>
        <div class="aside">
            <div class="linkmain">
           <div class="links">
          <a href="#comment" @click="find">comment </a>
            </div>
        <div class="links">
          <a href="#multi-line-comment" @click="find">multi line comment </a>
            </div>
        <div class="links">
          <a href="#single-or-multiline-comment" @click="find">single or multiline comment</a>
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