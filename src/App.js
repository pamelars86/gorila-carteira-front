import React, { Component } from "react";

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';

import { library } from '@fortawesome/fontawesome-svg-core';

import Header from "./components/Header";
import HomeContainer from "./containers/HomeContainer";
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer';

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
      <div className="c-gorila-layout">
        <Header />
        <HomeContainer />
        <ToastContainer hideProgressBar position="bottom-right" />
        <Footer year={2020} version={'1.0'} />
      </div>
    );
  }
}

export default App;
