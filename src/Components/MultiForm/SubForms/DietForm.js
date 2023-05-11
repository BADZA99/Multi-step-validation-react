import React,{useState} from 'react'
import './SubForm.css'

export default function DietForm(props) {

  const [formData,setFormData]=useState({
    dietForm:'nodiet'
  })
 const handleRadio=(e)=>{
  setFormData({
    dietForm: e.target.value
  })
 }



  return (
    <form 
    onSubmit={(e)=>{e.preventDefault()}}
    className='diet-form'>
        <h1>Quel est ton régime alimentaire ?</h1>

        <label htmlFor="nodiet">Pas de regime en particulier</label>
        <input 
        type="radio"
        onChange={handleRadio}
        name="diet"
        id="nodiet"
        value="nodiet"/>

        <label htmlFor="homnivorus">Homnivore</label>
        <input 
        type="radio"
        onChange={handleRadio}
        name="diet"
        id="homnivorus"
        value="homnivorus"/>

        <label htmlFor="vegetarian">Vegetarien</label>
        <input 
        type="radio"
        onChange={handleRadio}
        name="diet"
        id="vegetarian"
        value="vegetarian"/>

        <label htmlFor="vegan">Vegan</label>
        <input 
        // 197161
        type="radio"
        onChange={handleRadio}
        name="diet"
        id="vegan"
        value="vegan"/>
        
        <button onClick={()=> props.modifyIndex(3,formData)}>Valider</button>
    </form>
  )
}
