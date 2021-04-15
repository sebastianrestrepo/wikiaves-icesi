import authStore from '../stores/authStore';
import { Bird, birdsArray } from '../stores/birdsStore';

const apiRoot = 'http://i2thub.icesi.edu.co/wikiaves/api/birds/';

const createBird = async (Bird: Object, callback: (result: Bird) => void) => {

    console.log('key antes de POST: ' + authStore.userKeyStored.key)

    await fetch(
        `${apiRoot}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + authStore.userKeyStored.key
            },
            body: JSON.stringify(Bird),
        }
    ).then((rawInfo) => {
        return rawInfo.json();
    }).then((response) => {
            console.log(response);
            callback(response);
        })
    console.log('hola');
}

const getBirdsList = (callback: (result: birdsArray) => void) => {
    fetch(`${apiRoot}?offset=0&limit=30`)
        .then((rawInfo) => {
            return rawInfo.json();
        })
        .then((birds) => {
            callback(birds.results);
        });
}

export default {
    createBird,
    getBirdsList
};