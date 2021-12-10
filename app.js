//method 1 traversing the dom

// const btns = document.querySelectorAll(".question-btn")

// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//        const question = e.currentTarget.parentElement.parentElement;
//        question.classList.toggle("show-text")

//     })
// })



// method 2 using selectors inside the element

const questions = document.querySelectorAll(".question")
console.log(questions)

questions.forEach(function(qnumb){
    // console.log(qnumb);
    const btn = qnumb.querySelector(".question-btn")
    // console.log(btn);

    btn.addEventListener("click", function(){
        qnumb.classList.toggle("show-text");

        questions.forEach(function(item){
            if (item !== qnumb){
                item.classList.remove("show-text")
            }
        });
    })
})
