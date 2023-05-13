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

//add a listener on the upload button, so that whenever the image changes, the colors and animations show
fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    //show the spinner, while the image loads
    umbImage.style.display = "none";
    umbSpinner.style.display = "block";
    logoCont.style.display = "none";
    uploadButtonSpinner.style.display = "flex";
    uploadButtonImg.style.display = "none";

    //hide the animation, once the image has loaded
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

//add a listener to each of the coloured buttons, so that we can change the colors and show the animations
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("sd");
    buttons.forEach((btn) => {
      btn.style.border = "none";
    });

    //change the background color, upload button color and the animation color
    uploadButton.style.backgroundColor = button.getAttribute("mcolor");
    x.style.backgroundColor = button.getAttribute("mcolor");
    main.style.backgroundColor = button.getAttribute("bcolor");
    loaderimg.style.setProperty("--loader-color", button.getAttribute("deg"));
    uploadButtonSpinner.style.setProperty(
      "--loader-color",
      button.getAttribute("deg")
    );

    //add a border to the selected button and start the animation
    button.style.border = `3px solid ${button.getAttribute("color")}`;
    umbImage.style.display = "none";
    umbImage.src = button.getAttribute("source");
    umbSpinner.style.display = "block";
    logoCont.style.display = "none";
    uploadButtonSpinner.style.display = "flex";
    uploadButtonImg.style.display = "none";

    //stop the animation once the new color umbrella is loaded
    setTimeout(() => {
      umbImage.style.display = "flex";
      umbSpinner.style.display = "none";
      logoCont.style.display = "flex";
      uploadButtonSpinner.style.display = "none";
      uploadButtonImg.style.display = "flex";
    }, 1000);
  });
});

//add a listener to the cross button, to remove the logo
x.addEventListener("click", () => {
  //remove the logo and clear the input field value
  x.style.display = "none";
  logoCont.style.display = "none";
  span.innerText = "UPLOAD LOGO";
  fileInput.value = '';
});
