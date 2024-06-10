const formItems = document.getElementsByClassName('form-item');
const gen = document.querySelectorAll('input[name="gender"]')
const hob = document.querySelectorAll('input[name="hobbies"]')

const form = document.querySelector('form')
form.addEventListener("submit", function arrowFunc(event) {
    event.preventDefault(); //to stop the default behviour of submit button or to stop the page from reloading

    //(other fields)

    for (var i = 0; i < formItems.length; i++) {
        const inputs = formItems[i].querySelector('input');
        const select = formItems[i].querySelector('select');
        const textar = formItems[i].querySelector('textarea');
        if (inputs != null) {
            console.log(inputs.name + ': ' + inputs.value)
        }
        if (select != null) { console.log(select.name + ': ' + select.value) };
        if (textar != null) { console.log(textar.name + ': ' + textar.value) };
    }

    //gender

    for (let g = 0; g < gen.length; g++) {
        if (gen[g].checked)
            console.log(gen[g].name + ': ' + gen[g].value);
    }

    //hobbies

    let hobbies = []
    for (let h = 0; h < hob.length; h++) {
        if (hob[h].checked)
            hobbies += hob[h].value + ' '
    }
    console.log(hob[0].name + ': ' + hobbies);
})





