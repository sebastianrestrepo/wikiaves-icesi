import Head from 'next/head';
//import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import { useState, useEffect } from "react";
import birdsStore from '../../stores/birdsStore';
import { observer } from 'mobx-react';
import EditorNavBar from "../editor/EditorNavBar";
import BirdsTable from "../editor/BirdsTable";

const Editor = () => {

  const printBirdsList = () => {
    birdsStore.getBirds();
    console.log(birdsStore.birdsList);
  }

  return (
    <div className="editor">
      <EditorNavBar></EditorNavBar>
      <div className="editor-header-wrapper">
        <div className="header-title-wrapper">
          <div className="species-title-counter">
            <h1 className="speciesTitle">Lista de especies</h1>
            <h1 className="speciesCounter">0 especies</h1>
          </div>
          <div className="create-load-species-wrapper">
            <Link href="/editor/CreateSpecie"><button >CREAR ESPECIE</button></Link>
            <button>CARGAR ESPECIE</button>
          </div>
        </div>
        <div className="searchBar">
          <input placeholder="Busca por nombre común o científico"></input><button>BUSCAR</button>
        </div>
        <div className="table-wrapper">
          <div>
            <BirdsTable/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default observer(Editor);