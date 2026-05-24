
const SHOP = {
  whatsapp: "94776001972",
  phoneDisplay: "077 600 1972",
  facebook: "https://www.facebook.com/share/1CpkiTvVPU/?mibextid=wwXIfr",
  loginUrl: "https://Aruna1991.pythonanywhere.com"
};

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");
  if (menuBtn && navLinks) menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));

  document.querySelectorAll("[data-whatsapp]").forEach(el => {
    const msg = el.getAttribute("data-message") || "Hello ESADI TAILOR - MIRIGAMA, I want to make a booking.";
    el.href = `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(msg)}`;
  });

  document.querySelectorAll("[data-login]").forEach(el => el.href = SHOP.loginUrl);
  document.querySelectorAll("[data-facebook]").forEach(el => el.href = SHOP.facebook);

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  const bookingForm = document.querySelector("#bookingForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", e => {
      e.preventDefault();
      const data = new FormData(bookingForm);
      const special = [...bookingForm.querySelectorAll('input[name="special[]"]:checked')].map(i => i.value).join(", ");
      const message = [
        "Hello ESADI TAILOR - MIRIGAMA, I want to book a tailoring appointment.",
        "",
        `Name: ${data.get("name") || ""}`,
        `Phone: ${data.get("phone") || ""}`,
        `Service: ${data.get("service") || ""}`,
        `Preferred Date: ${data.get("date") || ""}`,
        `Preferred Time: ${data.get("time") || ""}`,
        `Fabric Ready: ${data.get("fabric") || ""}`,
        `Special Requirements: ${special || "Not selected"}`,
        `Message: ${data.get("message") || ""}`
      ].join("\n");
      window.open(`https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
    });
  }


  const academyForm = document.querySelector("#academyForm");
  if (academyForm) {
    academyForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(academyForm);
      const message = [
        "Hello ESADI TAILOR ACADEMY - MIRIGAMA, I want to join tailoring classes.",
        "",
        `Name: ${data.get("name") || ""}`,
        `Phone: ${data.get("phone") || ""}`,
        `Course: ${data.get("course") || ""}`,
        `Experience Level: ${data.get("level") || ""}`,
        `Preferred Batch: ${data.get("batch") || ""}`,
        `Message: ${data.get("message") || ""}`,
      ].join("\n");
      window.open(`https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
    });
  }

  const revealEls = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, {threshold: 0.12});
  revealEls.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(18px)";
    el.style.transition = "opacity .7s ease, transform .7s ease";
    observer.observe(el);
  });
});
