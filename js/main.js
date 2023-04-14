//Side menu functionality//

function showSideMenu() {
    document.querySelector('#side-menu').classList.add('show-side-menu');
}

document.querySelector('#open-side-menu').addEventListener('click', showSideMenu);

function hideSideMenu() {
    document.querySelector('#side-menu').classList.remove('show-side-menu');
}

document.querySelector('#close-menu').addEventListener('click', hideSideMenu);

//Call to action form//

let ctaForm = document.querySelector('#cta-form');

function submitForm(event) {
    event.preventDefault();

    let formName = document.querySelector('#form-name').value.trim();
    let formEmail = document.querySelector('#form-email').value.trim();

    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    
    if (formEmail.match(emailFormat) && formName.length > 0) {
        document.querySelector('#error-message').textContent='';
        
        document.querySelector('#cta-form').classList.remove('form-style');
        document.querySelector('#cta-form').classList.add('hide-cta-form');
        
        document.querySelector('#submit-success').classList.remove('thankyou-message-hide');
        document.querySelector('#submit-success').classList.add('thankyou-message');
    } 
    else {
        document.querySelector('#error-message').textContent='Enter valid name and email address.';
    }    

    ctaForm.reset();
}

ctaForm.addEventListener('submit', submitForm);

