const formItems = document.getElementsByClassName('form-item');

const form = document.querySelector('form')
form.addEventListener("submit", function arrowFunc(event) {
    event.preventDefault();
    for (var i = 0; i < formItems.length; i++) {
        const inputs = formItems[i].querySelectorAll('input');
        const select = formItems[i].querySelector('select');
        const textar = formItems[i].querySelector('textarea');
        for (let j = 0; j < inputs.length; j++) {
            if (inputs[j] != null) {
                if ((inputs[j].type != "radio") && (inputs[j].type != "checkbox")) {
                    console.log(inputs[j].name + ': ' + inputs[j].value)
                }
                if (inputs[j].type == "radio" || inputs[j].type == "checkbox") {
                    if (inputs[j].checked) {
                        console.log(inputs[j].name + ': ' +
                            inputs[j].value
                        );
                    }
                }
            }
        }
        if (select != null) { console.log(select.name + ': ' + select.value) };
        if (textar != null) { console.log(textar.name + ': ' + textar.value) };
    }
})







