import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Context } from '../store/AppContext';


const DetailedPlanets = () => {

    const { store, actions } = useContext(Context)
    const { id } = useParams()

    useEffect(() => {
       actions.getDetailsPlanets(id)
       console.log(id)
    }, [id])

    const { name, diameter, climate, gravity, terrain, population } =
    store.detailedplanets;

    return (
        <>
           {/*  <h1>{store?.details?.name}</h1> */}
            <div className="card-body text-center">
            <div className="imagen1">
            <img
                    src={
                        "https://starwars-visualguide.com/assets/img/planets/" +
                        id +
                        ".jpg"
                    }
                    className="card-img-top"
                    alt="..."
                ></img>
                </div>
                
        <h1 className="card-title mb-5">{name}</h1>
        <p className="card-text">Diameter: {diameter}</p>
        <p className="card-text">Climate: {climate}</p>
        <p className="card-text">Gravity: {gravity}</p>
        <p className="card-text">Terrain: {terrain}</p>
        <p className="card-text">Population: {population}</p>
      </div>

        </>
    )
}

export default DetailedPlanets

