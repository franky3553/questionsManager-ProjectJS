//using selectors inside the element
// traversing the dom

// selections
const btns = document.querySelectorAll('.question-btn')

btns.forEach(function(btn){
   btn.addEventListener('click', function(e){
      const question = e.currentTarget.parentElement.parentElement;
      // show text event
      question.classList.toggle('show-text');
   })
});


