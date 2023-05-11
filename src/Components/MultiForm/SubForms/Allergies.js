import React, { useRef } from "react";
import "./SubForm.css";

export default function Allergies(props) {
  const preventFunc = (e) => {
    e.preventDefault();

    const styleData = {
      allergies: [],
    };

    allCheckboxes.current.forEach((el) => {
      if (el.checked) {
        styleData.allergies.push(el.value);
      }
    });

    props.modifyIndex(5, styleData);
  };

  const handleReturn = () => {
    props.modifyIndex(3);
  };

  const allCheckboxes = useRef([]);

  const addCheck = (el) => {
    if (el && !allCheckboxes.current.includes(el)) {
      allCheckboxes.current.push(el);
    }
  };

  return (
    <form className="checkbox-form"
        onSubmit={preventFunc}
    >
      <p>Quel sont tes cuisines préférées</p>
      <span>Choix multiples.</span>

      <label htmlFor="milk">lait</label>
      <input ref={addCheck} type="checkbox" id="milk" value="milk" />

      <label htmlFor="pollen">pollen</label>
      <input ref={addCheck} type="checkbox" id="pollen" value="pollen" />

      <label htmlFor="nuts">Noix</label>
      <input ref={addCheck} type="checkbox" id="nuts" value="nuts" />

      <label htmlFor="eggs">oeufs</label>
      <input ref={addCheck} type="checkbox" id="eggs" value="eggs" />

      <label htmlFor="shellfish">fruits de mer</label>
      <input ref={addCheck} type="checkbox" id="shellfish" value="shellfish" />
    

      <div className="container-nav-btns">
        <button type="button" className="prev" onClick={handleReturn}>
          precedent
        </button>

        <button>valider</button>
      </div>
    </form>
  );
}
