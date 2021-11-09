/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function mobileMenu() {
	var mobilenav = document.getElementById("topnav");
	if (mobilenav.className === "nav column-right") {
		mobilenav.className += " responsive-menu";
	} else {
    mobilenav.className = "nav column-right";
	}
}
// defining array to be accessed based on user choice later
const selfHelp = ["You are healthy! No need for help", "You should consider getting help", "You should get help immediately"];
document.getElementById("optionOne").addEventListener("click", selfAssessment);
document.getElementById("optionTwo").addEventListener("click", selfAssessment);
document.getElementById("optionThree").addEventListener("click", selfAssessment);
function selfAssessment(clickedButtonId) {
	if (clickedButtonId === "optionOne") {
		document.getElementById("results").innerHTML = selfHelp[0];
	}
	if (clickedButtonId === "optionTwo") {
		document.getElementById("results").innerHTML = selfHelp[1];
	}
	if (clickedButtonId === "optionThree") {
		document.getElementById("results").innerHTML = selfHelp[2];
	}
}

// reference for modal: https://www.w3schools.com/howto/howto_css_modal_images.asp
// get modal by id imageModal
var modal = document.getElementById("imageModal");
// get the images and insert them one by one inside the modal, depending on which one a user chooses
var imgOne = document.getElementById("imgOne");
var imgTwo = document.getElementById("imgTwo");
var imgThree = document.getElementById("imgThree");
var imgFour = document.getElementById("imgFour");
var imgFive = document.getElementById("imgFive");
var imgSix = document.getElementById("imgSix");
var imgSeven = document.getElementById("imgSeven");
var imgEight = document.getElementById("imgEight");
// get modal image by id imgExpanded
var modalImg = document.getElementById("imgExpanded");
// get caption text by id caption
var captionText = document.getElementById("caption");
imgOne.onclick = function firstImageClick(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}
imgTwo.onclick = function secondImageClick(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}
imgThree.onclick = function thirdImageClick(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}
imgFour.onclick = function fourthImageClick(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}
imgFive.onclick = function FifthImageClick(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}
imgSix.onclick = function sixthImageClick(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}
imgSeven.onclick = function seventhImageClick(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}
imgEight.onclick = function eighthImageClick(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}
// get closing span element by class closing-button to close the modal
var span = document.getElementsByClassName("closing-button")[0];
// function to close the modal when span element is clicked by a user
span.onclick = function() {
  modal.style.display = "none";
}
// form javascript validation, reference: https://www.w3schools.com/js/js_validation.asp
var success = document.getElementById("success-message");
function formValidation() {
	if(document.getElementById("name").value == "" || document.getElementById("phone").value == "" || document.getElementById("email").value == "" || document.getElementById("message").value == "") {
		return false;
	}
	else {
		success.style.display = "block";
		return false;
	}
}