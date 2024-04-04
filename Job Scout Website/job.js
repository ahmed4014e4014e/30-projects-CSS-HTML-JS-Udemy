document.getElementById("getJob").onclick = () => {
  document.querySelectorAll(".container").forEach((container) => {
    container.style.display = "grid";
  });

  getJob.style.display = "none";
};

document.querySelectorAll(".btn").forEach((slideBtn) => {
  slideBtn.onclick = (e) => {
    const input = e.target.nextElementSibling;

    slide(input);
    function slide() {
      if (input.classList.contains("slide-in")) {
        input.classList.remove("slide-in");
        input.classList.add("slide-out");

        setTimeout(() => {
          e.target.style.borderRadius = "50%";
          e.target.style.backgroundColor = "#f18d38";
        }, 500);
      } else {
        input.classList.remove("slide-out");
        input.classList.add("slide-in");
        e.target.style.borderRadius = "50% 0 0 50%";
        e.target.style.backgroundColor = "#6e46ea";
      }
    }
  };
});
