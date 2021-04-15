import React, { Component } from 'react';
import birdsStore from '../../stores/birdsStore';
import { observer } from 'mobx-react';

class BirdsTable extends Component {

    constructor(props: {}) {
        super(props);
        birdsStore.getBirds();
        console.log('constructor works')
    }

    render() {
        return <div className="birds-table">
            <div className="categories-wrapper">
                <div className="id-cat">Id</div>
                <div className="category">Orden</div>
                <div className="category">Familia</div>
                <div className="category">Especie</div>
                <div className="edit-btn-space"></div>
            </div>
            {
                birdsStore.birdsList && birdsStore.birdsList.map((b) => {
                    /*console.log('sci name, ' + b.scientific_names);
                    console.log('fam, ' + b.family);*/
                    return <div className="each-bird-box" key={b.id}>
                        <div className="id-param">{b.id}</div>
                        {/*
                            b.family.order.scientific_names.map((o) => {
                                return <div>
                                    <div className="bird-param" id="bird-sci-name">{o.name}</div>
                                </div>;
                                console.log('scientific names ' + o.name);
                            })*/
                        }
                        {/*
                            b.family.scientific_names.map((f) => {
                                return <div>
                                    <div className="bird-param" id="bird-sci-name">{f.name}</div>
                                </div>;
                                console.log('scientific names ' + f.name);
                            })*/
                        }
                        {
                            b.scientific_names.map((s) => {
                                return <div>
                                    <div className="bird-param" id="bird-sci-name">{s.name}</div>
                                </div>;
                                console.log('scientific names ' + s.name);
                            })
                        }
                        {/*<button>EDITAR</button>*/}
                    </div>;
                })
            }
        </div >;
    }
}

export default observer(BirdsTable);