import authStore from '../stores/authStore';
import { userKey } from '../stores/authStore';

const apiRoot = 'http://i2thub.icesi.edu.co/wikiaves/api/users/rest-auth/login/';

const login = async (loginCredentials: any, callback: (result: userKey) => void) => {

    await fetch(
        `${apiRoot}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginCredentials),
        }
    ).then((rawInfo) => {
        return rawInfo.json();
    }).then((response) => {
            console.log(response);
            callback(response);
        })
    console.log('hola');
}

export default {
    login
};