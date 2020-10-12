<template>
    <div class="containeres">
        <div class="contents">
          <div class="read">
              <h1 id="syntax">C++ Syntax</h1>
              <p>Let's break up the following code to understand it better:</p>
              <!-- editor -->
              <img src="../assets/codesyntax1.png" alt="">
                  <p>There are many text editors and compilers to choose from. In this tutorial, we will use an IDE (see below).</p>

              <h3 id="syntax-ex-explain">Example explained</h3>
              <p><b>Line 1: </b> #include iostream  tag is a header file library that lets us work with input and output objects, such as cout (used in line 5). Header files add functionality to C++ programs.</p>
              <p>Line 2: using namespace std means that we can use names for objects and variables from the standard library.</p>

              <div class="note">
                  Don't worry if you don't understand how #include iostream tag and using namespace std works. Just think of it as something that (almost) always appears in your program.
              </div>
              <p><b>Line 3:</b> A blank line. C++ ignores white space.</p>
              <p><b>Line 4:</b> Another thing that always appear in a C++ program, is int main(). This is called a function. Any code inside its curly brackets {} will be executed.</p>
              <p><b>Line: 5</b> cout (pronounced "see-out") is an object used together with the insertion operator double back tags to output/print text. In our example it will output "Hello World".</p>
              <p> <b>Note:</b>  Every C++ statement ends with a semicolon ;.</p>
              <p><strong>Remember:</strong> The compiler ignores white spaces. However, multiple lines makes the code more readable.</p>
              <p><b>Line 6:</b> return 0 ends the main function.</p>
              <p><b>Line 7:</b> Do not forget to add the closing curly bracket } to actually end the main function.</p>
              <h3 id="Omitting-namespace">Omitting Namespace</h3>
              <p>You might see some C++ programs that runs without the standard namespace library. The using namespace std line can be omitted and replaced with the std keyword, followed by the :: operator for some objects:</p>
              <!-- editor -->
              <img src="../assets/codesyntax1.png" alt="">
              <div class="note">
                  It is up to you if you want to include the standard namespace library or not.
              </div>
          </div>
        <div class="aside">
            <div class="linkmain">
           <div class="links">
          <a href="#syntax" @click="find">syntax</a>
            </div>
        <div class="links">
          <a href="#syntax-ex-explain" @click="find">example explained</a>
            </div>
        <div class="links">
          <a href="#Omitting-namespace" @click="find">Omitting namespace</a>
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