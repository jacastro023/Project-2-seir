let imginput= document.getElementById("imginput");
let previewContainer = document.getElementById("imagePreview");
let previewImage = document.querySelector(".image_preview");
let previewDefault = document.querySelector(".image_default");

console.log(document.querySelector("#img"))

function  preview(){
    const file = event.target.files[0];
    console.log(file)

    if (file){
        const reader = new FileReader();

        document.querySelector(".image_default").style.display = "none";
        document.querySelector(".image_preview").style.display = "block";

        reader.addEventListener("load", function(){
            console.log(this);
            document.querySelector(".image_preview").setAttribute("src", this.result);
        })
        reader.readAsDataURL(file);
    } 
};