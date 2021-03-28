const inpHead = document.getElementById('create');
const inpMainContent = document.getElementById('create-main');
const btnCreate = document.getElementById('btn-create-todo');
const btnAdd = document.getElementById('btnadd');
const listHead = document.getElementById('item-head');
const listMainContent = document.getElementById('item-main');
const btnDeleteTodo = document.getElementById('trash-btn');

btnCreate.onclick = function (e) {

    const x = document.getElementById('create-todo');
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }

}

btnAdd.onclick = function () {

        
    if (inpHead.value === '') {
        alert('Fill Heading');
    }

    else {

        const todoHead = inpHead.value;
        const todoMainContent = inpMainContent.value;
        const liHead = document.createElement('item-head');
        liHead.innerText = todoHead;

        const liMainContent = document.createElement('item-main');
        liMainContent.innerText = todoMainContent;

        listHead.appendChild(liHead);
        listMainContent.appendChild(liMainContent);

        inpHead.value = '';
        inpMainContent.value = '';


    const x = document.getElementById('todo-sec');
    if (x.style.display === "none") {
        x.style.display = "block";
    
    }

    btnDeleteTodo.onclick = function (e) {

            const listHeadRemove = document.getElementById('item-nav');
            const liHead = document.createElement('item-nav');
            const liMainContent = document.createElement('item-main');

            listHeadRemove.remove(liHead);
            listMainContent.remove(liMainContent);

    }

}

    

    // function addTodo () {

    //     newTodo.remove('todo-sec');
    //     let newTodo = document.createElement('todo-sec');
    //     newTodo.innerHTML = document.getElementById('todo-sec').innerHTML;
    //     document.getElementById('todo-sec').appendChild(newTodo);
    //     newTodo.querySelector("#item-head").innerText = '';
    //     newTodo.querySelector("#item-main").innerText = '';

    // }

    // addTodo();

}






   