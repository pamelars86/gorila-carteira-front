import React, { Component } from "react";

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';

import { library } from '@fortawesome/fontawesome-svg-core';

import Header from "./components/Header";
import Home from "./components/Home";
import { ToastContainer } from 'react-toastify';

import {
  faEnvelope, faKey, faFileWord, faThumbtack,
  faFile, faPencilAlt, faSyncAlt, faSave, faTrashAlt,
  faBars,
  faPlus, faMinus,
  faUser, faHome, faSignOutAlt, faUserCircle,
  faSearch, faFolder, faFileAlt, faFilter,
} from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faKey, faFileWord, faThumbtack, faPlus, faMinus, faFile, faPencilAlt, faSyncAlt, faBars,
  faUser, faHome, faSignOutAlt, faUserCircle, faSearch, faFolder, faFileAlt, faFilter, faTrashAlt);


class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Home />
        <ToastContainer hideProgressBar position="bottom-right" />
      </>
    );
  }
}

export default App;
