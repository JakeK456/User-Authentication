const signInButton = document.getElementById('sign-in-button');
const signUpButton = document.getElementById('sign-up-button');
const userNameInput = document.getElementById('username-input');
const passwordInput = document.getElementById('password-input');
const accountButtonContainer = document.getElementById('account-button-container');


// const signIn = async (accountCredentials) => {

// }

const signUp = (accountCredentials) => {
    fetch('api/accounts/sign_up', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(accountCredentials)
    })
    .then((res) => res.json())
    .then((data) => {
      console.log('Successful POST request:', data);
    })
    .catch((error) => {
      console.error('Error in POST request:', error);
    });
}

accountButtonContainer.addEventListener('click', (event) => {
    event.preventDefault();

    const accountCredentials = {
        username: userNameInput.value.trim(),
        password: passwordInput.value.trim(),
    }

    switch (event.target.id){
        case "sign-in-button":
            //signIn(accountCredentials);
            break;
        
        case "sign-up-button":
            signUp(accountCredentials);
            break;
    }
});