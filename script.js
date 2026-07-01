// ---- STUDY BUDY DOWNLOAD POPUP ----

const openStudyBudyModalButton = document.getElementById("openStudyBudyModal");
const studyBudyModal = document.getElementById("studyBudyModal");
const closeStudyBudyModalButton = document.getElementById("closeStudyBudyModal");
const cancelStudyBudyDownloadButton = document.getElementById("cancelStudyBudyDownload");

function openStudyBudyModal(event) {
    if (event) {
        event.preventDefault();
    }

    studyBudyModal.classList.add("is-open");
    document.body.classList.add("study-budy-modal-open");
}

function closeStudyBudyModal() {
    studyBudyModal.classList.remove("is-open");
    document.body.classList.remove("study-budy-modal-open");
}

openStudyBudyModalButton.addEventListener("click", openStudyBudyModal);
closeStudyBudyModalButton.addEventListener("click", closeStudyBudyModal);
cancelStudyBudyDownloadButton.addEventListener("click", closeStudyBudyModal);

studyBudyModal.addEventListener("click", function (event) {
    if (event.target === studyBudyModal) {
        closeStudyBudyModal();
    }
});

document.addEventListener("keydown", function (event) {
    if (
        event.key === "Escape" &&
        studyBudyModal.classList.contains("is-open")
    ) {
        closeStudyBudyModal();
    }
});


// ---- RUNAWAY BUTTON ----

const runawayButton = document.querySelector(".running-button");
const container = document.querySelector(".button-container");

runawayButton.addEventListener("mouseover", function () {
    const containerRect = container.getBoundingClientRect();
    const buttonRect = runawayButton.getBoundingClientRect();

    const maxLeft = containerRect.width - buttonRect.width;
    const maxTop = containerRect.height - buttonRect.height;

    const newLeft = Math.floor(Math.random() * maxLeft);
    const newTop = Math.floor(Math.random() * maxTop);

    runawayButton.style.left = `${newLeft}px`;
    runawayButton.style.top = `${newTop}px`;
});
