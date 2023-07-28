// Get references to the elements
const takeBook = document.getElementById("takeBook");
const bookList = document.getElementById("bookList");
const alertSms = document.getElementById("alertSms");

// Function to add a new task to the list
function addBook() {
  const storeBook = takeBook.value.trim();
  alertSms.innerHTML="User Enter a "+ storeBook;
  console.log(storeBook)

  if (storeBook !== "") {
    const listItem = document.createElement("li");
    listItem.innerText = storeBook;
    bookList.appendChild(listItem);
    
  }
  else{
    alertSms.innerHTML="Please Enter A Book Name"
  }
}

