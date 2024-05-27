
import { useRef } from 'react'
import { setTrainer } from '../store/slice/trainer.slice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './HomePasge.css';

const HomePage = () => { 
    
   const trainer = useSelector( states => states.trainer )

    const dispatch = useDispatch()

    const inputTrainer = useRef() 

    const navigate = useNavigate()
    
    const handleSubmit = e => {

        e.preventDefault() 
        dispatch(setTrainer(inputTrainer.current.value.trim()))
        navigate('/pokedex')
    } 



  return (
    <div>

<img className="titles" src='../images/topheader.png' alt="" />
        <p>Hi trainer, if you want to find your prefer pokemon please enter your trainer name</p> 

        <form onSubmit={handleSubmit}>
            <input ref={inputTrainer} type="text" />
            <button>Catch Them All</button>
        </form>

    </div>
  )
}

export default HomePage