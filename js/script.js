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

// Tab Change
const $tabBtn=document.querySelectorAll("[data-tab-btn]");
let [lastActiveTab] = document.querySelectorAll("[data-tab-content");
let [lastActiveTabBtn] = $tabBtn;

$tabBtn.forEach(item => {
    item.addEventListener("click", function () {

        lastActiveTab.classList.remove("active");
        lastActiveTabBtn.classList.remove("active");

        const $tabContent = document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`);

        $tabContent.classList.add("active");
        this.classList.add("active");

        lastActiveTab = $tabContent;
        lastActiveTabBtn = this;
    });
});