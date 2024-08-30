let todoList=[
  {
    item:'Buy Milk',
    dueDate:'4/10/2023'
  },
  {
    item:'Complete Homework',
    dueDate:'1/12/2023'
  }
];

displayTodos();


function todoAdd(){
  let inputElement=document.querySelector('#todo-input');
  let inputDate=document.querySelector('#todo-date');
  let todoItem=inputElement.value;
  let todoDate=inputDate.value;
  todoList.push({item:todoItem, dueDate:todoDate});
  //console.log(todoList);
  inputElement.value='';
  inputDate.value='';
  displayTodos();
}

function displayTodos(){
  let containerElement=document.querySelector('.todo-container');
  let newHtml='';
  for(let i=0;i<todoList.length;i++){
    let {item,dueDate}=todoList[i];
    newHtml+=`
         <span>${item}</span>
         <span>${dueDate}</span>
         <button  class='btn-delete' onclick="todoList.splice(${i},1); displayTodos();">Delete</button>
    `;
  }
  containerElement.innerHTML=newHtml;
}