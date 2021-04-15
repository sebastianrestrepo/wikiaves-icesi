import { observable, autorun, toJS, configure, action, computed } from 'mobx';
import api from '../utils/api';
import { useState, useEffect } from "react";

export type userKey = {};

class AuthStore {

    @observable isLogged: boolean = false;
    @observable userKeyStored: any;

    @action login(email: string, password: any) {
        api.login({ email, password }, (result: userKey) => {
            console.log("key recibida", result)
            localStorage.setItem("userKey", JSON.stringify(result));
            this.userKeyStored = JSON.parse(localStorage.getItem("userKey") || 'Default Value');
            /*if (localStorage.getItem("userKey")) {
                this.setIsLogged(true);
            }*/
            this.setIsLogged(true);
            console.log("key transformada", this.userKeyStored)
            console.log("key transformada SOLA", this.userKeyStored.key)
            console.log("¿inició sesión?", this.isLogged)
        })
        console.log('isLogged es: ' + this.isLogged);
    }

    @action setIsLogged(isLogged: boolean) {
        this.isLogged = isLogged;
    }

    @action setUserKeyStored(theKey: any) {
        this.userKeyStored = theKey;
    }

}

const store = new AuthStore();

export default store;