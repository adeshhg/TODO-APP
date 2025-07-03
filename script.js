function addTask() {
    const textInput = document.getElementById("textInput").value

    if (textInput == "") {
        alert("Please enter a task")
    }
    else {
           const taskDiv = document.createElement("div")
           const taskText = document.createElement("hi")
           taskText = textInput
           const doneButton = document.createElement("button")
           doneButton.textContent  = "Done"
           doneButton.onclick = function(){
            
           }
           const  delButton = document.createElement("button")
            delButton.textContent = "Delete"
        
        }
}