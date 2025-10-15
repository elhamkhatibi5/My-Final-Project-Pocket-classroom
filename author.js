const flashcardsList = document.getElementById("flashcardsList");
const addFlashcardBtn = document.getElementById("addFlashcardBtn");
const quizList = document.getElementById("quizList");
const addQuestionBtn = document.getElementById("addQuestionBtn");

function populateAuthorFlashcards(){
  flashcardsList.innerHTML="";
  currentCapsule.flashcards.forEach(fc=>{
    const div=document.createElement("div");
    div.className="list-group-item";
    div.innerText=`${fc.question} → ${fc.answer}`;
    flashcardsList.appendChild(div);
  });
}

function populateAuthorQuiz(){
  quizList.innerHTML="";
  currentCapsule.quiz.forEach(q=>{
    const div=document.createElement("div");
    div.className="list-group-item";
    div.innerText=`${q.question} → ${q.answer}`;
    quizList.appendChild(div);
  });
}

addFlashcardBtn.addEventListener("click",()=>{
  const q=prompt("Enter flashcard question:"); if(!q)return;
  const a=prompt("Enter flashcard answer:"); if(!a)return;
  currentCapsule.flashcards.push({question:q,answer:a});
  populateAuthorFlashcards();
});

addQuestionBtn.addEventListener("click",()=>{
  const question=prompt("Enter quiz question:"); if(!question)return;
  const answer=prompt("Enter correct answer:"); if(!answer)return;
  const opts=prompt("Enter options separated by comma:").split(",");
  currentCapsule.quiz.push({question,answer,options:opts});
  populateAuthorQuiz();
});