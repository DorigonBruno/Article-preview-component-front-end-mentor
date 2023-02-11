function botao() {
  const menuButton = document.querySelector("button");
  const corSeta = document.querySelector("#cor");

  menuButton.addEventListener("click", handleShare);

  function handleShare() {
    menuButton.classList.toggle("ativo");
    const share = document.querySelector(".redes");
    if (menuButton.classList.contains("ativo")) {
      menuButton.style.background = "hsl(212, 23%, 69%)";
      share.classList.add("ativo");
      corSeta.style.fill = "#fff";
    } else {
      menuButton.style.background = "#ecf2f8";
      share.classList.remove("ativo");
      corSeta.style.fill = "#6e8098";
    }
  }
}

botao();
