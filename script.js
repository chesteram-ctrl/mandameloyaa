
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactoForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const nombre = data.get("nombre");
      alert(`Gracias, ${nombre}. Te contactaremos pronto. (Mándamelo Ya)`);
      form.reset();
    });
  }
});
