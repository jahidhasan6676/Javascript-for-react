

// const addToItem = () =>{
//     const inputId = document.getElementById('storage-id');
//     const inputValue = document.getElementById('storage-value');
//     const id = inputId.value;
//     const value = inputValue.value;

//     if(id && value){
//         localStorage.setItem(id, value)
//     }
    
//     inputId.value = '';
//     inputValue.value = '';

// }


const addToItem = () =>{
    const fieldId = document.getElementById('storage-id');
    const fieldValue = document.getElementById('storage-value');
    const id = fieldId.value;
    const value = fieldValue.value;
    if(id && value){
        localStorage.setItem(id, value);
    }
    fieldId.value = "";
    fieldValue.value = "";
}