const formItems = document.getElementsByClassName('form-item');
const items = document.getElementsByClassName('item');

// console.log(items);

const form = document.querySelector('form')


form.addEventListener("submit", (e) => {
    e.preventDefault()
})



function showValues() {
    for (var i = 0; i < formItems.length; i++) {
        const input = formItems[i].querySelector('input');
        const select = formItems[i].querySelector('select');
        const textar = formItems[i].querySelector('textarea');
        if (input != null) { console.log(input.name + ': ' + input.value) };
        if (select != null) { console.log(select.name + ': ' + select.value) };
        if (textar != null) { console.log(textar.name + ': ' + textar.value) };
    }
    
    for (let j = 0; j < items.length; j++) {
        const inputs = items[j].querySelectorAll('input');
        let input;
        let empArr = [];
        for (let i = 0; i < inputs.length; i++) {
            input = inputs[i];
            if (input.checked) {
                empArr += input.value + ' ';
            }
        }
        console.log(input.name + ': ' + empArr);
    }

}







