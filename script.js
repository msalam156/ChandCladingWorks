let isEnglish = true; // Default language is English
const headerTitleElem = document.getElementById("header-title");
const translateButtonElem = document.getElementById("translate-button");
const sectionHeadingElem = document.getElementById("section-heading");
const sectionDescriptionElem = document.getElementById("section-description");
const gotButtonElem = document.getElementById("goto-button");
const sheetInformationElem = document.getElementById("sheetInformation");
const sampleHeadingElem = document.getElementById("sampleHeading");
console.log(sheetInformationElem);

function changeLanguage() {
  isEnglish = !isEnglish;
  const selectedLanguage = isEnglish ? "english" : "arabic";
  const { headerTitle, translateButton, sectionHeading, sectionDescription, gotoButton,sampleHeading, sheetInformation} = languages[selectedLanguage];
  headerTitleElem.innerText = headerTitle;
  translateButtonElem.innerText = translateButton;
  sectionHeadingElem.innerText = sectionHeading;
  sectionDescriptionElem.innerText = sectionDescription;
  gotButtonElem.innerText = gotoButton;
  sheetInformationElem.innerText = "sheetInformation";
  sampleHeadingElem.innerText = sampleHeading;
  sessionStorage.setItem('languageCheck', isEnglish);
}
document.getElementById("translate-button").addEventListener("click", changeLanguage);
changeLanguage();

