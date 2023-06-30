let elWrite = document.getElementById("home");
let elCheck = document.getElementById("rec");

function goWrite() {
  window.location.href = "../pages/write.html";
}

function goComment() {
  window.location.href = "../pages/comment.html";
}

elWrite.addEventListener("click", goWrite);
elCheck.addEventListener("click", goComment);
