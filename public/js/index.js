let imginput= document.getElementById("imginput");
let previewContainer = document.getElementById("imagePreview");
let previewImage = document.querySelector(".image_preview");
let previewDefault = document.querySelector(".image_default");

// function to set up the image display preview when posting
function  preview(){
    const file = event.target.files[0];
    if (file){
        const reader = new FileReader();
        // display and hide certain divs
        document.querySelector(".image_default").style.display = "none";
        document.querySelector(".image_preview").style.display = "block";

        reader.addEventListener("load", function(){
            console.log(this);
            document.querySelector(".image_preview").setAttribute("src", this.result); // change the preview display image
        })
        reader.readAsDataURL(file);
    } 
};