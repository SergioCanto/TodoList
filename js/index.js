
function postTodo(){

    let form = document.getElementById('newTodo');
    let todo = document.getElementById('todo');

    form.addEventListener('submit', function(event){

        event.preventDefault();

        if(todo.value != ""){
            addTodo(todo.value);
            todo.value = "";
        }

    });
}

function addTodo(todo){

    let ul = document.getElementById('ul');
    let li = document.createElement('li');

    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.value = 1;
    checkbox.name = "todo[]";

    li.appendChild(checkbox);

    li.appendChild(document.createTextNode(todo));
    ul.appendChild(li); 

}

function clear(){
    
    let clearBtn = document.getElementById('clear');
    let clears = document.getElementsByName('todo[]');

    clearBtn.addEventListener('click', function(event){
        
        for(i = 0; i < clears.length; i++){
            clears[i].checked = false;
        }
        
    });

}

function mark(){
    
    let markBtn = document.getElementById('mark');
    let marks = document.getElementsByName('todo[]');

    markBtn.addEventListener('click', function(event){
        
        for(i = 0; i < marks.length; i++){
            marks[i].checked = true;
        }
        
    });

}

function delet(){
    
    let deleteBtn = document.getElementById('delete');
    let deletes = document.getElementById('ul');

    deleteBtn.addEventListener('click', function(event){
        
        deletes.innerHTML = '';
        
    });

}

function init(){
    postTodo();
    clear();
    mark();
    delet();
}

init();