import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/AppContext';
import { Link } from 'react-router-dom'


const Home = () => {

    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.getPeople()
        actions.getPlanets()
        actions.getVehicles()
    }, [])

    return (
        <>
            <h3>Characters</h3>
            <div className='d-flex m-2'>
                {
                    !!store.people &&
                        store?.people?.results?.length > 0 ?
                        store?.people?.results?.map((people, index) => {
                            console.log(people?.url)
                            const match = people?.url.match(/\d+(?=\/$)/);
                            const numero = match ? match[0] : "No se encontró número";
                            return (

                                <div className="card m-2" key={index} style={{ width: 500 + 'px' }}>
                                    {/* <img src={people?.url}
                               
                                class="card-img-top" alt="..."/> */}
                                    <div class="card-body">
                                        <h5 class="card-title text-dark">{people?.name}</h5>
                                        <p class="card-text text-dark">
                                            Gender: {people?.gender} <br />
                                            Hair color: {people?.hair_color} <br />
                                            Birth Year: {people?.birth_year}</p> <br />
                                        <Link className="btn btn-info" to={"/detailedpeople/" + numero}>More Details</Link>
                                        <button className='btn btn-secondary' onClick={() => actions.addFavorites(people.name)}>Favorites</button>
                                    </div>
                                </div>
                            )
                        }) : (
                            <h4 className='text-center'>Lista de contactos vacia</h4>
                        )
                }
            </div>
            <h3>Planets</h3>
            <div className='d-flex m-2'>
                {
                    !!store.planets &&
                        store?.planets?.results?.length > 0 ?
                        store?.planets?.results?.map((planets, index) => {
                            const match = planets?.url.match(/\d+(?=\/$)/);
                            const numero = match ? match[0] : "No se encontró número";
                            return (

                                <div className="card m-2" key={index} style={{ width: 500 + 'px' }}>
                                    {/* <img src={planets.url} class="card-img-top" alt="..."/> */}
                                    <div class="card-body">
                                        <h5 class="card-titl text-dark">{planets?.name}</h5>
                                        <p class="card-text "> </p>
                                        <Link className="btn btn-info" to={"/detailedplanets/" + numero}>More Details</Link>
                                        <button className='btn btn-secondary' onClick={() => actions.addFavorites(planets.name)}>Favorites</button>
                                    </div>
                                </div>
                            )
                        }) : (
                            <h4 className='text-center'>Lista de contactos vacia</h4>
                        )
                }
            </div>
            <h3>Vehicles</h3>
            <div className='d-flex m-2'>
                {
                    !!store.vehicles &&
                        store?.vehicles?.results?.length > 0 ?
                        store?.vehicles?.results?.map((vehicles, index) => {
                            const match = vehicles?.url.match(/\d+(?=\/$)/);
                            const numero = match ? match[0] : "No se encontró número";
                            return (
                                <div className="card m-3" key={index} style={{ width: 500 + 'px' }}>
                                    {/* <img src={vehicles.url} class="card-img-top" alt="..."/> */}
                                    <div class="card-body">
                                        <h5 class="card-title text-dark">{vehicles?.name}</h5>
                                        <p class="card-text"> </p>
                                        <Link className="btn btn-info" to={"/detailedvehicles/" + numero}>More Details</Link>
                                        <button className='btn btn-secondary' onClick={() => actions.addFavorites(vehicles.name)}>Favorites</button>
                                    </div>
                                </div>
                            )
                        }) : (
                            <h4 className='text-center'>Lista de contactos vacia</h4>
                        )
                }
            </div>


        </>
    )
}

export default Home