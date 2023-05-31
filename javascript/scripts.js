const albums=fetch('https://jsonplaceholder.typicode.com/albums')
.then(response => response.json())
.then(data => data)

async function displayAlbums() {
  const data = await albums
  const albumsEL = document.querySelector(".albums")
  albumsEL.innerHTML = data.map((album) => {
    return `
    
    <div onclick="displayPhotos('${album.id}')" class="card">
    <h2  class="title">${album.title}</h2>
    </div>
    `
  }).join("")
}

displayAlbums()

const albumsEL = document.querySelector(".albums")
const btn = document.querySelector(".btn")
btn.addEventListener("click", () => {
  albumsEL.classList.toggle("hide");
});

function displayPhotos(id){
albumsEL.classList.add("hide")
  const photosEL = document.querySelector(".photos")
const fetchPhotos = fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
.then(response => response.json())
.then(data => {

console.log(data)

photosEL.innerHTML = data.map((photo)=> {
  return `
  <div class="card2">
  <h2 class="title">${photo.title}</h2>
  <img src=${photo.url} alt="">
  </div>
  `
}).join("")
});
}

