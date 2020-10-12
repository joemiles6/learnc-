<template>
    <div class="containeres">
        <div class="contents">
          <div class="read">
              <h1 id="started">C++ Get Started</h1>
              <p>To start using C++, you need two things:</p>
              <ul>
                  <li>A text editor, like Notepad, to write C++ code</li>
                  <li>A compiler, like GCC, to translate the C++ code into a language that the computer will understand</li>
              </ul>
                  <p>There are many text editors and compilers to choose from. In this tutorial, we will use an IDE (see below).</p>

              <h3 id="intall-ide">C++ Install IDE</h3>
              <p>An IDE (Integrated Development Environment) is used to edit AND compile the code.</p>
              <p>Popular IDE's include Code::Blocks, Eclipse, and Visual Studio. These are all free, and they can be used to both edit and debug C++ code.</p>
              <p><strong> Note:</strong> Web-based IDE's can work as well, but functionality is limited.</p>
              <p>We will use Code::Blocks in our tutorial, which we believe is a good place to start.</p>
              You can find the latest version of Codeblocks at <a href="http://www.codeblocks.org/downloads/26.">http://www.codeblocks.org/downloads/26.</a>  Download the mingw-setup.exe file, which will install the text editor with a compiler.
              <h3 id="quick-start">C++ Quickstart</h3>

              <p>Let's create our first C++ file..</p>
              <p>Open Codeblocks and go to File > New > Empty File.</p>
              <p>Write the following C++ code and save the file as myfirstprogram.cpp (File > Save File as):</p> 
              <!-- editor -->
            <img src="../assets/code1.png" alt="" srcset="">
              <p>Don't worry if you don't understand the code above - we will discuss it in detail in later chapters. For now, focus on how to run the code.</p>
              <p>In Codeblocks, it should look like this:</p>
            <!-- image -->
            <img src="../assets/codeblocks2.png" alt="" srcset="">
            <p>Then, go to <b>Build > Build and Run</b> to run (execute) the program. The result will look something to this:</p>
              <div class="darkcode">
                 <p>Hello World!</p> 
                 <p>Process returned 0 (0x0) execution time : 0.011 s</p>
                 <p>Press any key to continue</p>
              </div>
              <p><b>Congratulations!</b>  You have now written and executed your first C++ program.</p>
              <h3 id="get-started">Get Started</h3>
              <p>This tutorial will teach you the basics of C++.</p>
              <p>It is not necessary to have any prior programming experience.</p>
          </div>
        <div class="aside">
            <div class="linkmain">
           <div class="links">
                  <div class="links">
          <a href="#started" @click="find"> get started</a>
            </div>
          <a href="#intall-ide" @click="find">Install IDE</a>
            </div>
        <div class="links">
          <a href="#quick-start" @click="find">Quick start</a>
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