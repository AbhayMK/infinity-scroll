const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

// Unsplash API

const cnt = 20;
const apiKey = "b-Ki_iHx2S5i3id08uQCHjNEmlrKFw8XYIQ4jRJKsZo";

const apiUrl = `https://api.unsplash.com/photos/?client_id=${apiKey}&count=20`;

// create elements for links and photos, add to DOM
function displayPhotos() {
  photosArray.forEach((photo) => {
    console.log(photo.links.html.toString());
  });
}

// get photos
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const photosArray = await response.json();
    console.log(photosArray);
    photosArray.forEach((photo)=>{
        console.log(photos.links);
    });
    
  } catch (error) {
    // catch error here
  }
}
// on load
getPhotos();
