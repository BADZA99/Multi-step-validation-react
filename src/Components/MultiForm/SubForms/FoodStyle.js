import React, { useRef } from 'react'
import './SubForm.css'

export default function FoodStyle(props) {
    
    const preventFunc=(e)=>{
        e.preventDefault();

        const styleData={
            foodStyle:[]
        }

        allCheckboxes.current.forEach(el=>{
            if(el.checked){
                styleData.foodStyle.push(el.value)
            }
        }
        )

        props.modifyIndex(4,styleData)
    }

    const handleReturn = () => {
        props.modifyIndex(2)
    }

    const allCheckboxes=useRef([])

    const addCheck=el=>{
        if(el && !allCheckboxes.current.includes(el)){
            allCheckboxes.current.push(el)
        }
    }

    return (
        <form className='checkbox-form'
            onSubmit={preventFunc}
           
        >
            <p>Quel sont tes cuisines préférées</p>
            <span>Choix multiples.</span>

            <label htmlFor="italian">Italienne</label>
            <input ref={addCheck}
                type="checkbox"
                id="italian"
                value='italian'
            />

            <label htmlFor="french">Française</label>
            <input ref={addCheck}
                type="checkbox"
                id="french"
                value='french'
            />

            <label htmlFor="japanese">Japonaise</label>
            <input ref={addCheck}
                type="checkbox"
                id="japanese"
                value='japanese'
            />

            <label htmlFor="chinese">Chinoise</label>
            <input ref={addCheck}
                type="checkbox"
                id="chinese"
                value='chinese'
            />

            <label htmlFor="indian">Indienne</label>
            <input ref={addCheck}
                type="checkbox"
                id="indian"
                value='indian'
            />
            <label htmlFor="mexican">Méxicaine</label>
            <input ref={addCheck}
                type="checkbox"
                id="mexican"
                value='mexican'
            />

            <div className="container-nav-btns">
                <button type='button' className='prev' onClick={handleReturn}>
                    precedent
                </button>

                <button>valider</button>
            </div>


        </form>
    )
}
