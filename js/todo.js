// IMPORT EXISTING TODOS

const importTodos = (todos) => {
    todos.forEach((todo) => {
  
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
  
        const details = document.createElement("details");
        const summary = document.createElement("summary");
  
        // get todo details from JSON data
        summary.innerHTML = todo.title;
  
        details.append(
            summary,
            "Description: ",
            todo.description,
            document.createElement("br"),
            "Due Date: ",
            todo.due_date,
            document.createElement("br"),
            "Due Time: ", 
            todo.due_time);

        // call listToDo function with existing data as argument to show todos
        this.listToDo(checkbox, details);
        });
    };


const fetchData = () => {
    // create XHR request to load data from JSON file with the GET method
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function(response) {
        if (this.status === 200) {
            const data = this.responseText;
            const todos = JSON.parse(data);
            // pass parsed JSON data to the importTodos method to fetch 
            importTodos(todos);
        }
    });
    xhr.open('GET','data/todo.json');
    xhr.send();
    // remove eventlistener after imported so there won't be duplicate todos
    btnImport.removeEventListener('click',fetchData);
}

// call event listener on the import button for importing existing todos onto the page
const btnImport = document.getElementById('btn-import');
btnImport.addEventListener('click', fetchData);




// ADD NEW TODOS

// call event listener on the add button for adding new todo onto the page
const btnAdd = document.getElementById("btn-add");
btnAdd.addEventListener("click", () => {

    // create checkbox for identifying task status
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // get input data from user
    const summary = document.createElement("summary");
    summary.append(document.getElementById("todo-title").value);
    const details = document.createElement("details");

    details.append(
        summary,
        "Description: ",
        document.getElementById("desc").value,
        document.createElement("br"),
        "Due Date: ",
        document.getElementById("date").value,
        document.createElement("br"),
        "Due Time: ", 
        document.getElementById("time").value);

    // check if all mandatory fields are not empty
    if (document.getElementById("todo-title").value === ""){
        alert("Please input title.");
    }
    if (document.getElementById("date").value === ""){
        alert("Please input due date.");
    }
    if (document.getElementById("time").value === ""){
        alert("Please input due time.");
    }
    // call listToDo function with user input as argument to show new todos
    else {
    this.listToDo(checkbox, details);
    }
    
});


// every todo is a div block with checkbox and todo information
function listToDo(checkbox, details) {
  
    // create p element and pass in check box and details
    const p1 = document.createElement("p");
    p1.appendChild(checkbox);
    const p2 = document.createElement("p");
    p2.appendChild(details);  
  
    // create div to contain the todo
    const div = document.createElement("div");
    div.appendChild(p1);
    div.appendChild(p2);
  
    // get the element where I want the todo to show up, and then pass in the todo
    const container = document.getElementById("todo-container");
    container.appendChild(div);
  
  }