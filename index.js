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
    // Add new item - text input as a value
    // must be inside the fucntion - click event
    // as a global variable - it would grab the value as a first thing - without written anything inside -gives back nothing
    let newItemInput = newItemInputField.value; 
  

    // create new item
    let newItem = document.createElement("li");
    //add text from input field to li 
    newItem.innerText = newItemInput;
    newItem.className = "oneItem my-1"
    
    //create the delete button as a child of the new item list
    let deleteBtn = document.createElement("button")
    deleteBtn.innerText = "X"
    deleteBtn.className = "delete float-right p-0.5 text-red-900 font-bold"
    newItem.appendChild(deleteBtn)
    console.log(newItem)

    // add new item list with text and X button to UL
    itemList.appendChild(newItem)
    onList++
    listForm.reset() 
    if(onList >= 3){
        newItemInputField.disabled = true;
        submit.disabled = true;
    }
}

// deleting items
// dont use queryselector here - static
//after adding more items - doesnt grab these items delete button
/*let deleteBtn = document.getElementsByClassName("delete")
console.log(deleteBtn)

for(del of deleteBtn){
    del.addEventListener("click", function(){
        console.log("delete")
    })
}

still not working - just on the first button*/

// deleteing items by grabbing the whole ul
let items = document.getElementById("items")


function deleteItem(event){
    // grab just the function fires on click to delete X btn
    if(event.target.classList.contains("delete")){
        //console.log(event.target) //event target is the btn
        //console.log("delete")

        // remove ul -> li
        let removeLi = event.target.parentElement;
        //console.log(removeLi)
        items.removeChild(removeLi)
        onList--
    }
}

    submit.addEventListener("click", addItem)
    items.addEventListener("click", deleteItem)


   let sendBtn = document.querySelector("#send")
   let envelope = document.getElementById("envelope")
   let container = document.getElementById("container")

    send.addEventListener("click", close)
    
    function close() {
        container.classList.add("down")
        envelope.classList.remove("open");
        envelope.classList.add("close");
        sendBtn.disabled = true
        sendBtn.style.display = "none"
        envelope.classList.add("animate__animated", "animate__bounceOutUp", "animate__delay-1s")
        console.log(envelope.classList)
    }
 