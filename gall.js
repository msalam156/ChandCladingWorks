const isEnglish = sessionStorage.getItem('languageCheck');
if(isEnglish == 'true'){
    selectedLanguage='english';
}else{
    selectedLanguage = 'arabic';
}
// const selectedLanguage = isEnglish ? "english" : "arabic";
const gallaryHeadingElem = document.getElementById("gallaryHeading");
const backButtonElem = document.getElementById("backButton");
const { headerTitle, translateButton, sectionHeading, sectionDescription, gotoButton,gallaryHeading,backButton } = languages[selectedLanguage];
gallaryHeadingElem.innerText = gallaryHeading;
  backButtonElem.innerText = backButton;