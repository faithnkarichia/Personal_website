document.addEventListener("DOMContentLoaded", function () {
 

  let text = "Hello, my name is faith, a software developer.";
  let index = 0;
  let mainParagraph = document.getElementById("main-para");

  function animateText() {
    if (index < text.length) {
      mainParagraph.innerHTML += text.charAt(index);
      index++;

      setTimeout(animateText, 100);
    }
  }
  animateText();



  document.getElementById("downloadBtn").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "./assets/cv.txt"; 
    link.download = "./assets/cv.txt"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
});
