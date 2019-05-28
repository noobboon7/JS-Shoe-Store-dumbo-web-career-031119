document.addEventListener('DOMContentLoaded', event => {
  console.log('ok you go now');
});


let shoeSideBar = document.querySelector('#shoe-list')
  fetch("http://localhost:3000/shoes")
    .then(res => res.json())
    .then(shoes => {
      shoes.forEach(shoe => {

        shoeSideBar.innerHTML += `<li class="list-group-item">${shoe.name}</li>`
        // shoeSideBar.addEventListener('click', event => {})
      })
    })


function displayShoe(event, shoe) {
  fetch("http://localhost:3000/shoes")
    .then(res => res.json())
    .then(shoes => {
      console.log(shoes);

    })
  if (event.target.className === "list-group-item") {
    document.querySelector('#main-shoe').innerHTML =
      `<img class = "card-img-top"
        id = "shoe-image"
        src = ${shoe.image} >
        <div class = "card-body" >
        <h4 class = "card-title"
        id = "shoe-name" > ${shoe.name} </h4> <p class = "card-text"
        id = "shoe-description" > ${shoe.description} </p> <p class = "card-text" > <small class = "text-muted" id = "shoe-price"> $${shoe.price} </small></p>`
  }
}
