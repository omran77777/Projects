let currentLang = "ar";

function toggleLanguage() {
  const title = document.getElementById("title");
  const desc = document.getElementById("description");

  if (currentLang === "ar") {
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
    title.textContent = "Welcome to my website";
    desc.textContent = "This is a multilingual demo website.";
    currentLang = "en";
  } else {
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
    title.textContent = "مرحباً بك في موقعي";
    desc.textContent = "هذا موقع تجريبي متعدد اللغات.";
    currentLang = "ar";
  }
}
function changeLanguage() {
  const lang = document.getElementById("language-select").value;
  const title = document.getElementById("title");
  const desc = document.getElementById("description");

  if (lang === "en") {
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
    title.textContent = "Welcome to my website";
    desc.textContent = "This is a multilingual demo website.";
  } else {
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
    title.textContent = "مرحباً بك في موقعي";
    desc.textContent = "هذا موقع تجريبي متعدد اللغات.";
  }
}
