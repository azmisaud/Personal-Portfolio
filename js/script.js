// Light and Dark Mode

const $themeBtn=document.querySelector("[data-theme-btn]");
const $HTML=document.documentElement;
let isDark=window.matchMedia("(prefers-color-scheme:dark)").matches;

if (sessionStorage.getItem("theme")){
    $HTML.dataset.theme=sessionStorage.getItem("theme");
} else {
    $HTML.dataset.theme= isDark ? "dark" : "light";
}

const changeTheme = () => {
    const currentTheme=sessionStorage.getItem("theme") == "light" ? "dark" : "light";
    $HTML.dataset.theme=currentTheme;
    sessionStorage.setItem("theme",currentTheme);
}

$themeBtn.addEventListener("click", changeTheme);