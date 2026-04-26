document.addEventListener("DOMContentLoaded", () => {

  const intro = document.getElementById("intro");
  const main = document.getElementById("main");
  const bg1 = document.getElementById("bg1");
  const bg2 = document.getElementById("bg2");
  const texto = document.getElementById("mensaje");
  const titulo = document.querySelector(".titulo");

  // 🔴 VALIDACIÓN (CLAVE)
  if (!intro || !main || !bg1 || !bg2 || !texto || !titulo) {
    console.error("❌ Error: faltan elementos en el HTML");
    return;
  }

  // INTRO
  setTimeout(() => {
    intro.style.transform = "scale(1.2)";
    intro.style.opacity = "0";

    setTimeout(() => {
      intro.style.display = "none";
      main.classList.remove("hidden");
    }, 800);
  }, 1800);

  // FONDOS
  const imagenes = [
    "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
  ];

  let actual = 0;

  bg1.style.backgroundImage = `url(${imagenes[0]})`;

  setInterval(() => {
    actual = (actual + 1) % imagenes.length;

    bg2.style.backgroundImage = `url(${imagenes[actual]})`;
    bg2.style.opacity = 1;

    setTimeout(() => {
      bg1.style.backgroundImage = bg2.style.backgroundImage;
      bg2.style.opacity = 0;
    }, 1000);

  }, 5000);

  // TEXTO
  const frases = [
    "Esto no es solo ropa",
    "Es una nueva etapa",
    "Prepárate para el drop",
    "BV STORE está por comenzar"
  ];

  let index = 0;

  function cambiarTexto() {
    texto.classList.remove("show");

    setTimeout(() => {
      texto.textContent = frases[index];
      texto.classList.add("show");
      index = (index + 1) % frases.length;
    }, 300);
  }

  cambiarTexto();
  setInterval(cambiarTexto, 2500);

  // PARALLAX
  document.addEventListener("mousemove", (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) / 60;
    const moveY = (e.clientY - window.innerHeight / 2) / 60;

    titulo.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

});
