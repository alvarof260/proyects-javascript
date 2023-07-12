const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    console.log("clickeaste");
    removeClassList();
    panel.classList.add("active");
    setTimeout(() => {
      removeClassList();
    }, 25000);
  });
});

function removeClassList() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

console.log(panels);
