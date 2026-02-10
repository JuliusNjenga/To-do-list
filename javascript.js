//NEED TO PRACTICE LOCAL STORAGE    
const input_list = document.querySelector('#input_list');
const add_btn = document.querySelector('#add_btn');
const live_text = document.querySelector('#live_text');
const new_items = document.querySelector('#new_items');

let get_items = JSON.parse(localStorage.getItem('saved_items')) || [];
get_items.forEach((item)=>{
     const label = document.createElement('label');
    const icon = document.createElement('i');
    icon.classList.add('fa-solid' ,'fa-delete-left');
    label.style.color = 'white';
    const deleteBtn = document.createElement('button');
    deleteBtn.appendChild(icon);
    deleteBtn.classList.add('delete'); 
    deleteBtn.addEventListener('click' , ()=>{
        if(confirm('are you sure')){
        label.remove();
        deleteBtn.remove();

        let savedItems = JSON.parse(localStorage.getItem('saved_items')) || [];
        savedItems = savedItems.filter(savedItem => savedItem !== item); 
        localStorage.setItem('saved_items', JSON.stringify(savedItems));
            
        }
    })
    label.textContent = item;

    label.appendChild(deleteBtn);
    new_items.appendChild(label);


})


let items = [];

input_list.addEventListener('input', ()=>{
    live_text.textContent = input_list.value;
});

input_list.addEventListener('keydown', (e)=>{
    if(e.key == 'Enter'){
        createElements();
    }
});

add_btn.addEventListener('click' , ()=>{
    createElements();

});


function createElements(){
    let data = input_list.value.trim();
    const label = document.createElement('label');
    const icon = document.createElement('i');
    icon.classList.add('fa-solid' ,'fa-delete-left');
    label.style.color = 'white';
    const deleteBtn = document.createElement('button');
    deleteBtn.appendChild(icon);
    deleteBtn.classList.add('delete'); 
    deleteBtn.addEventListener('click' , ()=>{
        if(confirm('are you sure')){
        label.remove();
        deleteBtn.remove();
            
        }
    })
    label.textContent = data;
    if(input_list.value.trim() == ""){
        alert('Empty list');
        live_text.textContent = ''
        input_list.value = ''
        return;
    };
    if(/\d/.test(input_list.value)){
        alert("Cannot contain numbers");
        live_text.textContent = ''
        input_list.value = '';
        return;

    }

    label.appendChild(deleteBtn);
    new_items.appendChild(label);
    input_list.value = '';
    live_text.textContent = '';
    items.push(data);
    localStorage.setItem('saved_items' , JSON.stringify(items));

}
