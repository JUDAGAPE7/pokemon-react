
import React, { useEffect } from 'react'
import useFecth from '../../hooks/useFecth'

const SelectedType = ({ setTypeSelected  }) => { 

    const [ types, getTypes] = useFecth() 

    useEffect( () => {

        const url = 'https://pokeapi.co/api/v2/type?offset=0&limit=100'

        getTypes(url) 


    },[]) 

    const handleChange = e =>{

       setTypeSelected(e.target.value)

    }



  return (
    <select onChange={handleChange}>  
        <option value="allPokemons">All Pokemons </option>
        {
            types?.results.map(typeInfo => (
                

             <option key={typeInfo.url} value={typeInfo.url}>{typeInfo.name}</option>

            ))
        }
  </select>
  )
}

export default SelectedType