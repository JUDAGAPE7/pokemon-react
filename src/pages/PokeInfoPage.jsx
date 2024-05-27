import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFecth from '../hooks/useFecth'
import './PokeInfoPage.css'
import headerone from '../images/topheader.png'

const PokeInfoPage = () => { 

    const { name } =  useParams() 

    const [pokemon, getPokemon] = useFecth() 

    useEffect(() => { 
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`
      
      getPokemon(url)
      

    },[ name ]) 

 
   
    
    const maxStat = 150;

  return ( 

      <div>


   <section className='header'>
              <img src={headerone} alt="" />
        </section>



    <article className='all__poke'>  

   
  
      
      <section className='first__part'>

      <div className='poke__container'>
      <img  className='poke__img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" /> 
      </div>

      <div className='poke__headet3'>
      <h3 className={`poke__name text__${pokemon?.types[0].type.name}`}>#{pokemon?.id}</h3>
      <h2 className={`poke__name text__${pokemon?.types[0].type.name}`}>{pokemon?.name}</h2>  
      </div>

      <div>
      <ul className='poke__description'> 
        
        <li className='poke__weight' > 
        <span>Weight</span>
        <br />
        <span>{pokemon?.weight}</span> 
        </li> 
        <li className='poke__height'>
        <span>Height</span>
        <br />
        <span>{pokemon?.height}</span> 
        </li>
      </ul> 

      </div> 

      <ul className='poke__aspects'>
  <li className='poke__item__type'>
    <h3>Type</h3>
    <ul className='poke__type__list'>
      {pokemon?.types.map(item => (
        <li key={item.type.url} className='poke__slide'>
          <span className={`bg__${item.type.name}`}>{item.type.name}</span>
        </li>
      ))}
    </ul>
  </li>
  <li className='poke__item__type'>
    <h3>Skills</h3>
    <ul className='poke__type__list'>
      {pokemon?.abilities.map(ability => (
        <li key={ability.ability.url} className='poke__slide'>
          <span>{ability.ability.name}</span>
        </li>
      ))}
    </ul>
  </li>
</ul>


      <div>


      
      </div>




      



      <section className='poke__part__one'> 
      <h2>Stats</h2>
      <ul className='poke__table'>
      {pokemon?.stats.map((stat, index) => (
        <li key={index}>  
          <div className='poke__spreat'>
          <span className='poke__stat'>{stat.stat.name}</span>
          
          <span className='base__stat'>{stat.base_stat} / {maxStat} </span>
          </div>

          <div className="progressBarContainer">
            <div className={`progressBar bg__${pokemon?.types[0].type.name}`}style={{ width: `${(stat.base_stat / maxStat) * 100}%` }}>
              
            </div>
          </div>
          
        </li>
      ))}  
    </ul> 
      </section>  



      </section>

      <section className='poke__part__two'>

      <div className='poke__moves'>

      <h2>Skills</h2> 

          {pokemon?.moves.map(move=> (
        <span key={move.move.url} className={`poke__move__value bg__${pokemon?.types[0].type.name}`}>
             {move.move.name}
           
           </span>
             ))
          }   


</div>

      </section>

     



    </article>
      </div>

  )
}

export default PokeInfoPage