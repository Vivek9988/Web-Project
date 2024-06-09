let btn1 = document.querySelector(".sign-in-2");
let currMode = "Light";

btn1.addEventListener("click", () => {
    if (currMode === "Light") {
        currMode = "Dark";
        document.querySelector("body").style.backgroundColor="black";
    } else {
        currMode = "Light";
        document.querySelector("body").style.backgroundColor = "white";

    }
    console.log(currMode);
});
