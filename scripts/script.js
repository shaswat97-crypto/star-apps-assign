const fileInput = document.getElementById("upload-button-input");
const uploadedImage = document.querySelector("#logo-holder-image");
const main = document.querySelector("main");
const x = document.querySelector(".x");
const logoCont = document.querySelector(".logo-cont");
const span = document.querySelector("span");
const buttons = document.querySelectorAll(".color-buttons-button");
const umbImage = document.querySelector(".umbrella-holder-img");
const umbSpinner = document.querySelector("#umbrella-holder-spinner");
const uploadButton = document.querySelector(".upload-button");
const loaderimg = document.querySelector(".loaderimg");
const uploadButtonSpinner = document.querySelector(".upload-button-spinner");
const uploadButtonImg = document.querySelector(".upload-button-img");

fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    umbImage.style.display = "none";
    umbSpinner.style.display = "block";
    logoCont.style.display = "none";
    uploadButtonSpinner.style.display = "flex";
    uploadButtonImg.style.display = "none";

    setTimeout(() => {
      umbImage.style.display = "flex";
      umbSpinner.style.display = "none";
      logoCont.style.display = "flex";
      uploadButtonSpinner.style.display = "none";
      uploadButtonImg.style.display = "flex";
      uploadedImage.src = reader.result;
    }, 1000);
  };
  span.innerText = file.name;
  x.style.display = "flex";
  logoCont.style.display = "flex";
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("sd");
    buttons.forEach((btn) => {
      btn.style.border = "none";
    });

    uploadButton.style.backgroundColor = button.getAttribute("mcolor");
    x.style.backgroundColor = button.getAttribute("mcolor");
    main.style.backgroundColor = button.getAttribute("bcolor");
    loaderimg.style.setProperty("--loader-color", button.getAttribute("deg"));
    uploadButtonSpinner.style.setProperty(
      "--loader-color",
      button.getAttribute("deg")
    );

    button.style.border = `3px solid ${button.getAttribute("color")}`;
    umbImage.style.display = "none";
    umbImage.src = button.getAttribute("source");
    umbSpinner.style.display = "block";
    logoCont.style.display = "none";
    uploadButtonSpinner.style.display = "flex";
    uploadButtonImg.style.display = "none";

    setTimeout(() => {
      umbImage.style.display = "flex";
      umbSpinner.style.display = "none";
      logoCont.style.display = "flex";
      uploadButtonSpinner.style.display = "none";
      uploadButtonImg.style.display = "flex";
    }, 1000);
  });
});

x.addEventListener("click", () => {
  x.style.display = "none";
  logoCont.style.display = "none";
  span.innerText = "UPLOAD LOGO";
  fileInput.value = '';
});
