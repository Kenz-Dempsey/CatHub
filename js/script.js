let generate_btn =  document.querySelector(".generate_btn");

generate_btn.addEventListener("click", fetchPics);

function fetchPics() {

fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then((data) => {
        let catsImgUrl = data[0].url

        let catsImgElement = document.createElement("img")
        catsImgElement.setAttribute('src', `${catsImgUrl}`)
        catsImgElement.classList.add("showcase")

        let catsImg = document.querySelector(".catsImg")
        catsImg.appendChild(catsImgElement)

    })
    .catch((err => console.log(err)))
};