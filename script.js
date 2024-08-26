const submitButton = document.getElementById("submit");
const optionSelected = document.getElementById("file-select")
const fileInput = document.getElementById("fileInput");


submitButton.addEventListener("click", function(){
        alert(fileInput.value);
});