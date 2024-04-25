/**
 *  getStore: () => {}, //funcion que devuelve el objeto store con cada uno de los atributos alli definidos, 
 *  getActions: () => {}, //funcion que devuelve el objeto actions con cada una de las funciones alli definidas,
 *  setStore: () => {} // funcion que recibe como argumento un objeto con cada uno de los atributos que se desea actulizar o asignar un valor 
 */
const getStore = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: null,
            planets: null,
            vehicles: null,
            favorites: [] ,
            detailedpeople: [],
            detailedplanets: [],
            detailedvehicles: [],
        },
        actions: {
            getPeople: () => {
                fetch("https://swapi.py4e.com/api/people/")
                    .then(response => response.json())
                    .then(datos => setStore({ people: datos }))
            },
            getPlanets: () => {
                fetch("https://swapi.py4e.com/api/planets/")
                    .then(response => response.json())
                    .then(datos => setStore({ planets: datos }))
            },
            getVehicles: () => {
                fetch("https://swapi.py4e.com/api/vehicles/")
                    .then(response => response.json())
                    .then(datos => setStore({ vehicles: datos }))
            },
            getDetailsPeople: (id) => {
                let urls = "https://swapi.py4e.com/api/people/" + id
                fetch(urls)
                .then(response => response.json())
                .then(datos => setStore({ detailedpeople: datos }))
            },
            getDetailsPlanets: (id) => {
                let urls = "https://swapi.py4e.com/api/planets/" + id
                fetch(urls)
                .then(response => response.json())
                .then(datos => setStore({ detailedplanets: datos }))
            },
            getDetailsVehicles: (id) => {
                let urls = "https://swapi.py4e.com/api/vehicles/" + id
                fetch(urls)
                .then(response => response.json())
                .then(datos => setStore({ detailedvehicles: datos }))
            },
            addFavorites: (name , index) => {
                const newFavorite = {name,index}
                const favoritos = getStore()
                const newFavorites = [...favoritos.favorites, newFavorite]
                setStore({favorites: newFavorites})
            },
            deleteFavorites: (index) => {
                const favoritos = getStore()
                setStore({favorites: favoritos.favorites.toSpliced(index,1)})
            },
        }
    }
}

export default getStore