import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Context } from '../store/AppContext';


const DetailedVehicles = () => {

    const { store, actions } = useContext(Context)
    const { id } = useParams()

    useEffect(() => {
        actions.getDetailsVehicles(id)
        console.log(id)
    }, [id])

    const { name, model, manufacturer, length, crew, cargo_capacity } =
        store.detailedvehicles;
    return (
        <>
            {/*   <h1>{store?.details?.name}</h1> */}
            <div className="card-body text-center">
                <div className="vehiculo">
            <img
                    src={
                        "https://starwars-visualguide.com/assets/img/vehicles/" +
                        id +
                        ".jpg"
                    }
                    className="card-img-top"
                    alt="..."
                ></img>
                </div>
                <h1 className="card-title mb-5 ">{name}</h1>
                <p className="card-text">Manufacturer: {manufacturer}</p>
                <p className="card-text">Length: {length}</p>
                <p className="card-text">Crew: {crew}</p>
                <p className="card-text">Model: {model}</p>
                <p className="card-text">Cargo_capacity: {cargo_capacity}</p>
            </div>

        </>
    )
}

export default DetailedVehicles
