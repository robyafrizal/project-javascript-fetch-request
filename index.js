//Menggunakan Fetch
function getFollowers() {
  fetch("https://api.github.com/users/robyafrizal/followers")
    .then(response => response.json())
    .then(follower => {
      follower.map(data => {
        let image = document.createElement("figure");
        image.className = "figure m-4";

        let img = document.createElement("img");
        img.setAttribute("src", data.avatar_url);
        img.className = "figure-img img-thumbnail rounded-circle";
        img.style = "height: 200px";

        let text = document.createElement("figcaption");
        text.className = "figure-caption text-center";
        text.innerText = data.login;

        image.append(img);
        image.append(text);
        document.getElementById("div").append(image);
      });
    });
}

// //Menggunakan Fetch
// function getFollowers() {
//   fetch("https://randomuser.me/api/")
//     .then(response => response.json())
//     .then(data => {
//       data.map(datas => {
//         console.log(datas.name);
//       });
//     });
// }

//Menggunakan Ajax
// const req = new HMLHttpRequest
