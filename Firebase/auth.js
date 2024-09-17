import axios from 'axios';

export async function createUser(email, password) {
    const responce = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB6-pFsmXM5X7_1UVpBYFnmAidhSgxN4Y8',
        {
            email: email,
            password: password,
            returnSecureToken: true,
        }
    );
    const token = responce.data.idToken;
    return token;
}

export async function login(email, password) {
    
    const responce = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB6-pFsmXM5X7_1UVpBYFnmAidhSgxN4Y8',
        {
            email: email,
            password: password,
            returnSecureToken: true,
        }
    );

    const token = responce.data.idToken;
    return token;
}
