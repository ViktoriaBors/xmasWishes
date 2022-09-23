// Variables
//Form - toList
let listForm = document.getElementById("toListForm")

// UL list
let itemList = document.querySelector("ul")

//submit button
let submit = document.querySelector("#toListForm input[type=submit]")

let onList = 0;
let newItemInputField = document.getElementById("newText")


function addItem(event){
    event.preventDefault();
    if(onList < 3){
    newItemInputField.disabled = false;
    submit.disabled = false;
    // Add new item - text input as a value
    // must be inside the function - click event
    // as a global variable - it would grab the value as a first thing - without written anything inside -gives back nothing
    let newItemInput = newItemInputField.value; 
    
    // create new item
    let newItemContainer = document.createElement("div")
    newItemContainer.className = "flex justify-between"
    let newItem = document.createElement("li");
    //add text from input field to li 
    newItem.innerText = newItemInput;
    newItem.className = "oneItem my-1"
        
    //create the delete button as a child of the new item list
    let deleteBtn = document.createElement("button")
    deleteBtn.innerText = "X"
    deleteBtn.className = "delete float-right p-0.5 text-red-900 font-bold"
    newItemContainer.append(newItem, deleteBtn)
    
    // add new item list with text and X button to UL
    itemList.appendChild(newItemContainer)
    onList++ //count how many items we have on the list -  add plus one
    newItemInputField.value = ""; // clear the input field
    } else{
        newItemInputField.value = ""
        newItemInputField.placeholder = "You have reached your limit for wishes";
        //if you want to enter 4th item and click on add item - input field clears out and placeholder reminds you have no more wishes
    }
}

// deleting items
//let deleteBtn = document.getElementsByClassName("delete")
// grabs the deleteBTN which exist in that time - 0
//after adding more items - doesnt grab these items delete button
// option can be - event delegation

// deleting items by grabbing the whole ul
let items = document.getElementById("items")

function deleteItem(event){
    // grab just the function fires on click to delete X btn
    if(event.target.classList.contains("delete")){
        //console.log(event.target) //event target is the btn

        // remove ul -> li
        let removeLi = event.target.parentElement;
        items.removeChild(removeLi)
        onList--
        newItemInputField.placeholder = "Add item";
    }
}

// Adding event listener to the button - add delete items
    submit.addEventListener("click", addItem)
    items.addEventListener("click", deleteItem)

// adding animation to envelope and form
   let sendBtn = document.querySelector("#send")
   let envelope = document.getElementById("envelope")
   let container = document.getElementById("container")
   
   function close() {
       container.classList.add("down")
       envelope.classList.remove("open");
       envelope.classList.add("close");
       sendBtn.disabled = true
       sendBtn.style.display = "none"
       envelope.classList.add("animate__animated", "animate__bounceOutUp", "animate__delay-1s")
       console.log(envelope.classList)
   }

    send.addEventListener("click", ()=>{
        let list = document.querySelectorAll(".oneItem")
        let wishes = []
        for (let listItem of list){
            let wish = listItem.innerText;
            wishes.push(wish)
        }
        let email = document.querySelector("#email").value

        let data = {"email": email, "wishes" : wishes}

        fetch("http://localhost:8080/send", { 
            method: "POST", 
            headers:
                {"content-type": "application/json"},
            body:JSON.stringify(data)}
            ).then(res=>res.json())
            .then(data => {
                console.log(data)
            })

    })
    
 