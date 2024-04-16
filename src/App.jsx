import React, { useEffect, useState, useContext } from 'react';
import injectContext from './store/AppContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DetailedPeople from './pages/DetailedPeople';
import DetailedPlanets from './pages/DetailedPlanets';
import DetailedVehicles from './pages/DetailedVehicles';
import { Context } from './store/AppContext';


const App = () => {
    
    const { store, actions } = useContext(Context)

    return (
        <>
            <nav class="navbar navbar-expand bg-body-secondary mb-5">
                <div class="container-fluid">
                    <div className='row justify-content-between'>
                        <div className='col-4'>
                    <a class="navbar-brand" href="#"><strong>STAR WARS</strong></a>
                    </div>
                    <div className='col-4 '>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ">

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle bg-primary text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Favorites {store?.favorites?.length}
                                </a>
                                <ul class="dropdown-menu">
                                    {store?.favorites?.map(({name}, index) => {
                                        return (
                                            <li key={index}>{name}<button className='btn btn-danger' onClick={() => actions.deleteFavorites(index)}>Delete</button></li>
                                        )
                                    })}
                                </ul>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </nav>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/detailedpeople/:id' element={<DetailedPeople />}/>
                    <Route path='/detailedplanets/:id' element={<DetailedPlanets />}/>
                    <Route path='/detailedvehicles/:id' element={<DetailedVehicles />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default injectContext(App);