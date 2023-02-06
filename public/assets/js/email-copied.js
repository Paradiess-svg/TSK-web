var btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const textCopied = ClipboardJS.copy("Contact@tetambastudio.com");
  element.classList.add("copied");
});
