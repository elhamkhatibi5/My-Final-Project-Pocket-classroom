
const capsuleGrid = document.getElementById("capsuleGrid");
const newCapsuleBtn = document.getElementById("newCapsuleBtn");
const learnSelector = document.getElementById("learnSelector");

// ===== RENDER LIBRARY =====
function renderLibrary() {
  capsuleGrid.innerHTML = "";
  capsules.forEach(c => {
    const div = document.createElement("div");
    div.className = "col-md-4";
    div.innerHTML = `
      <div class="card capsule-card shadow-sm">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${c.title}</h5>
          <span class="badge ${c.level==="Beginner"?"bg-success":c.level==="Intermediate"?"bg-warning":"bg-danger"} mb-2">${c.level}</span>
          <div class="mt-auto d-flex justify-content-between align-items-center">
            <button class="btn btn-primary btn-sm learnBtn"><i class="bi bi-play-circle"></i> Learn</button>
            <div>
              <button class="btn btn-outline-secondary btn-sm editBtn"><i class="bi bi-pencil"></i></button>
              <button class="btn btn-outline-danger btn-sm delBtn"><i class="bi bi-trash"></i></button>
            </div>
          </div>
          <div class="progress mt-2" style="height:6px;">
            <div class="progress-bar" style="width:${c.bestScore||0}%"></div>
          </div>
        </div>
      </div>
    `;
    capsuleGrid.appendChild(div);

    // Event listeners
    div.querySelector(".learnBtn").addEventListener("click", () => {
      selectCapsule(c.title);
      document.getElementById("learn").scrollIntoView({behavior:"smooth"});
    });
    div.querySelector(".editBtn").addEventListener("click", () => {
      selectCapsule(c.title);
      document.getElementById("author").scrollIntoView({behavior:"smooth"});
    });
    div.querySelector(".delBtn").addEventListener("click", () => {
      if(confirm(`Delete ${c.title}?`)){
        capsules = capsules.filter(cp => cp.title !== c.title);
        renderLibrary();
        populateLearnSelector();
      }
    });
  });
}

// ===== POPULATE LEARN SELECTOR =====
function populateLearnSelector() {
  learnSelector.innerHTML = "";
  capsules.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c.title;
    opt.innerText = c.title;
    learnSelector.appendChild(opt);
  });
}

// ===== SELECT CAPSULE =====
function selectCapsule(title){
  currentCapsule = capsules.find(c => c.title === title);
  updateLearnMode();
}

// ===== NEW CAPSULE BUTTON =====
// جایگزین prompt با فرم Author (کمتر غیر حرفه‌ای)
newCapsuleBtn.addEventListener("click", () => {
  // Scroll to Author section
  document.getElementById("author").scrollIntoView({behavior:"smooth"});
  // Clear Author form for new capsule
  currentCapsule = {title:"",subject:"",level:"Beginner",description:"",notes:[],flashcards:[],quiz:[]};
  updateAuthorForm();
});

// ===== INITIAL SETUP =====
renderLibrary();
populateLearnSelector();
updateLearnMode();
