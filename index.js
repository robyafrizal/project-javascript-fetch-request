//Menggunakan Fetch
function getFollowers() {
  fetch("https://api.github.com/users/robyafrizal/followers")
    .then(response => response.json())
    .then(follower => {
      let jumlahFollower = document.createElement("h3");
      jumlahFollower.innerText = `Jumlah Follower : ${follower.length}`;
      jumlahFollower.className = "text-center";
      document.getElementById("div").append(jumlahFollower);
      //   console.log(follower.length);

      follower.map(data => {
        let image = document.createElement("figure");
        image.className = "figure m-4";

        let link = document.createElement("a");
        link.className = "text-center";
        link.style = "font-size:10px";
        link.href = data.html_url;
        // link.innerText = data.html_url;

        let img = document.createElement("img");
        img.setAttribute("src", data.avatar_url);
        img.className = "figure-img img-thumbnail rounded-circle";
        img.style = "height: 200px";

        let text = document.createElement("figcaption");
        text.className = "figure-caption text-center m-3";
        text.href = data.html_url;
        text.innerText = data.login;

        link.append(img);
        link.append(text);
        // image.append(img);
        // image.append(text);
        image.append(link);
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
