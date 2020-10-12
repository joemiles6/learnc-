<template>
    <div class="">
        <div class="modal-container" :class="{offModal: offModal}">
          <div class="modal-main" > 
             <span class="cancel" @click="offModal = true">&times;</span>
             <div class="alert-text">
                 <h1>Welcome to the Course</h1>
                 Hello, {{user}}
                 </div>
            <div class="study">
               <p>
                   Make sure you finish all topics to understand the full concepts of c++ as a beginer!
               </p>
               <div class="wants">
                   <h1>What you need for the course?</h1>
                   <ul>
                       <li>A pc!</li>
                       <li>An internet connection!</li>
                       <li>Focus !!</li>
                   </ul>
                   with a cup of coffee you are off, writting c++ code. 
               </div>
            </div>
         </div>
        </div>
    </div>
</template>

<script>
/*
plans for site!

functionalities!

      beginner!
      intermidiate *
      master
  level    #######
      ..............
    results > passing * > try hard > failing --  67%
course stats ---> progress bar on me user, 
questions on each and every topic
can't access any topic till you are done!
pagination  

analyse
100 / 50
result.
data > qId: 1
 if qId === quiz.questionId

quiz: [{
    qId: "1"
    question: "what is c++",
    wrong: ["helo", "jis", "op"],
    correct: "bjarne"
}]
nav
|
|--- intro
|
|--- function
*/






export default {
  data () {
   return {
    offModal: false
    }
  },
    props: {
      user: String
    }

}
  
</script>
<style lang="scss" scoped>
// turn off modal
 .offModal{
     transition: .5s;
     transform: scale(1, 0);
     display: none;
 }
 .modal-container {
     position: absolute;
     top: 0;
     z-index: 1;
     width: 100%;
     height: 100vh;
     background: rgba(212, 249, 255, .8);
    font-family: Apercu,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
 }
 .alert-text {
     display: flex;
     font-weight: bold;
 }
 .alert-text  h1{
    color: #105;   
     margin: 0.75rem;
     font-size: 3.3rem;
 }
 .study {
     border-radius: 10px;
     padding: 20px;
     padding-left: 5rem;
     margin: 1rem;
     font-size: 1.7rem;
     color: rgb(0, 60, 139);
     background: rgba(142, 207, 201, 0.671);

 }
 .study p {
     margin: 0.5rem;
     padding: 10px;
 }

ul {
    margin: 10px;
}
ul li {
    margin: 0.5rem;
}
.cancel {
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
    font-size: 3rem;
    cursor: pointer;
}
</style>
