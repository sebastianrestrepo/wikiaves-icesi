import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from "react";
import birdsStore from '../../stores/birdsStore';
import { observer } from 'mobx-react';
import EditorNavBar from "../editor/EditorNavBar";
import { useRouter } from 'next/router'

const CreateSpecie = () => {

    const [scientificName, setScientificName] = useState('');
    const [family, setFamily] = useState('');
    const [order, setOrder] = useState('');

    const [clickSend, setClickSend] = useState(false);

    const handleSubmit = (e: any): void => {
        e.preventDefault();
        birdsStore.createBird(order, family, scientificName);
        setClickSend(true);
    }

    useEffect(() => {
        if (birdsStore.birdCreated) {
            //console.log('FUNCIONA EL BIRDSTORE, BIRD CREATED')W
        }
    }, [order, family, scientificName, birdsStore.birdCreated]);

    return (
        <div className="createSpecie">
            <div className="formWrapper">
                <h1>Crear nueva especie</h1>
                <form className="birdForm" onSubmit={handleSubmit}>
                    <div className="textInputWrapper">
                        <label>Orden</label>
                        <input type="text" className="formTextInput" value={order} onChange={(e: any) => setOrder(e.target.value)}></input>
                        <label>Familia</label>
                        <input type="text" className="formTextInput" value={family} onChange={(e: any) => setFamily(e.target.value)}></input>
                        <label>Nombre científico</label>
                        <input type="text" className="formTextInput" value={scientificName} onChange={(e: any) => setScientificName(e.target.value)}></input>
                    </div>
                    {/*<Link href="/editor">*/}<input className="formButton" type="submit" value="ENVIAR"></input>{/*</Link>*/}
                </form>
            </div>
        </div>
    )
}

export default observer(CreateSpecie);