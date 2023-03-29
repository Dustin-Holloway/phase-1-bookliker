document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:3000/books")
    .then((res) => res.json())
    .then((book) => {
      console.log(book);
      book.forEach(renderBooks);
    });

  const body = document.querySelector("body");
  const bookList = document.querySelector("#list");
  const show = document.querySelector("div#show-panel");

  let renderBooks = (book) => {
    const userGen = (users) => {
      const userName = document.createElement("li");
      userName.textContent = users.username;
      show.append(userName);
    };

    innerHTML = " ";
    const user = book.users;
    const list = document.createElement("li");
    list.textContent = book.title;
    bookList.append(list);
    list.addEventListener("click", (e) => {
      innerHTML = "";
      const thumbNail = document.createElement("img");
      thumbNail.src = book.img_url;
      const description = document.createElement("p");
      description.textContent = book.description;
      const liked = document.createElement("li");
      liked.textContent = book.users.forEach(userGen);

      show.append(description, thumbNail, liked);
      console.log(book.users.username);
    });
  };
});
