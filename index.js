let form = document.querySelector("form")
let addBookBtn = document.getElementById("add-book-btn")
let bookLibrary = document.querySelector(".library-grid")

function book(name , author , pages , isRead){
    this.name = name
    this.author = author
    this.pages = pages
    this.isRead = isRead
    this.info = function()
    {
        console.log(`${name} by ${author} has ${pages} pages and is ${isRead}`)
    }
}
function addBook(name , author , pages , isRead){
    console.log(`${name} by ${author} has ${pages} pages `)
    let div = document.createElement("div");
    div.innerHTML = `<div class="book"><p>${name}</p> <p>${author}</p><p>${pages}</p> </div>`;
    bookLibrary.appendChild(div);
}
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let userName = document.querySelector('#book-name').value;
    let userAuthor = document.querySelector('#book-author').value;
    let userPages = document.querySelector('#book-pages').value;
    let userisRead = document.querySelector('#book-read').value;
    addBook(userName, userAuthor, userPages ,userisRead);
    userName.value = "";
    userPages.value = "";
    userAuthor.value = "";
    userisRead.value = "";
let newBook = new book(userName, userAuthor, userPages ,userRead)
console.log(newBook.info())})