let isEnglish = true; // Default language is English
const headerTitleElem = document.getElementById("header-title");
const translateButtonElem = document.getElementById("translate-button");
const sectionHeadingElem = document.getElementById("section-heading");
const sectionDescriptionElem = document.getElementById("section-description");
const gotButtonElem = document.getElementById("goto-button");


function changeLanguage() {
  isEnglish = !isEnglish;
  const selectedLanguage = isEnglish ? "english" : "arabic";
  const { headerTitle, translateButton, sectionHeading, sectionDescription, gotoButton,gallaryHeading,backButton } = languages[selectedLanguage];
  headerTitleElem.innerText = headerTitle;
  translateButtonElem.innerText = translateButton;
  sectionHeadingElem.innerText = sectionHeading;
  sectionDescriptionElem.innerText = sectionDescription;
  gotButtonElem.innerText = gotoButton;
  sessionStorage.setItem('languageCheck', isEnglish);
}
document.getElementById("translate-button").addEventListener("click", changeLanguage);
changeLanguage();

