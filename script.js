const languageBtn = document.getElementById("languageBtn");

let currentLanguage = "ar";

languageBtn.addEventListener("click", function () {
  const nextLanguage = currentLanguage === "ar" ? "en" : "ar";

  document.querySelectorAll("[data-ar][data-en]").forEach(function (element) {
    element.textContent = element.getAttribute("data-" + nextLanguage);
  });

  document.documentElement.lang = nextLanguage;
  document.documentElement.dir = nextLanguage === "ar" ? "rtl" : "ltr";
  document.body.dir = nextLanguage === "ar" ? "rtl" : "ltr";

  languageBtn.textContent = nextLanguage === "ar" ? "EN" : "AR";

  currentLanguage = nextLanguage;
});