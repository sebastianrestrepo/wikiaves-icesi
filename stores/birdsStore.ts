import { observable, autorun, toJS, configure, action, computed } from 'mobx';
import api from '../utils/api';
import birdsApi from '../utils/birdsApi';
import authStore from '../stores/authStore';

export type Bird = {};
export type arrayData = { count: number, next: string, previous: string };
//export type birdsArray = {order: Object, family: Object, scientificName: Object}[];

export type birdsArray = {
    id: number,
    subspecies: [
        {
            names: [
                {
                    name: {
                        language: string,
                        text: string
                    },
                    main: boolean
                }
            ],
            distribution: {
                language: string,
                text: string
            }
        }
    ],
    family: {
        scientific_names: [
            {
                name: string,
                main: boolean
            },
            {
                name: string,
                main: boolean
            }
        ],
        order: {
            scientific_names: [
                {
                    name: string,
                    main: boolean
                }
            ]
        }
    },
    scientific_names: [
        {
            name: string,
            main: boolean
        }
    ],
    common_names: [
        {
            main: boolean,
            name: {
                language: string,
                text: string
            }
        },
        {
            main: false,
            name: {
                language: string,
                text: string
            }
        }
    ],
    habitat: {
        language: string,
        text: string
    },
    conservation: {
        type: string,
        text: {
            language: string,
            text: string
        }
    },
    taxonomy: {
        language: string,
        text: string
    },
    behavior: [{
        type: string,
        text: {
            language: string,
            text: string
        }
    }]
}[];

class BirdsStore {

    @observable birdCreated: boolean = false;
    @observable birdsList: birdsArray | null | false = null;

    @action createBird(order: string, family: string, scientificName: string) {
        console.log('estado del key: ' + authStore.userKeyStored.key)
        const Bird: Object = {
            "family": {
                "scientific_names": [
                    {
                        "name": family,
                        "main": true
                    }
                ],
                "order": {
                    "scientific_names": [
                        {
                            "name": order,
                            "main": true
                        }
                    ]
                }
            },
            "scientific_names": [
                {
                    "name": scientificName,
                    "main": true
                }
            ],
        }
        birdsApi.createBird(Bird, (result: Bird) => {
            console.log("Ave recibida", Bird)
            console.log("Bird created", this.birdCreated)
            this.birdCreated = true;
        })

    }


    @action getBirds() {

        //if (this.birdsList != null) return;

        birdsApi.getBirdsList((result: birdsArray) => {
            console.log('aves cargadas', result);
            /*result.map((p) => {
                 p.color = Math.floor(Math.random() * 5);
                 p.size = Math.floor(Math.random() * 5);
                 return p;
            });*/

            this.birdsList = result;
            console.log(this.birdsList)

            this.birdsList && this.birdsList.map((b) => {
                console.log(b.scientific_names);
                b.family.scientific_names.map((s) => {
                    console.log('fam ' + s.name);
                });
            })

        });
    }

}

const store = new BirdsStore();

export default store;