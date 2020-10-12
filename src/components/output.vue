<template>
    <div class="containeres">
        <div class="contents">
          <div class="read">
              <h1 id="output">C++ Output (Print Text)</h1>
              <p>The cout object, together with the double front tags operator, is used to output values/print text:</p>
              <!-- editor -->
              <img src="../assets/output1.png" alt="">

                  <p>you can add as many cout objects as you want. However, note that it does not insert a new line at the end of the output</p>
                  <!-- editor -->
              <img src="../assets/output2.png" alt="">

          </div>
        <div class="aside">
            <div class="linkmain">
           <div class="links">
          <a href="/course/introduction/#output" @click="find">output</a>
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