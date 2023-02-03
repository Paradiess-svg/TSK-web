var btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const textCopied = ClipboardJS.copy("tetambastudio@gmail.com");
  element.classList.add("copied");
});
