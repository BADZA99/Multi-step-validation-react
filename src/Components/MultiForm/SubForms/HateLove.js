import React,{useState} from 'react'
import './SubForm.css'

export default function HateLove(props) {

    const [FormData,setFormData]=useState({
        prefs: {
            love:"",
            hate:"",
        },
      
    });

    
    const handleTxtArea=(e,pref)=>{
        if(pref==="love"){
            setFormData({
                prefs:{

                    ...FormData.prefs,
                    love:e.target.value
                }
            })
        }
        else if (pref==="hate"){
            setFormData({
              prefs: {
                // copie les elements de formdata
                ...FormData.prefs,
                hate: e.target.value,
              },
            });
        }
    }
    const preventFunc=e=>{
         e.preventDefault()
         props.modifyIndex(6, FormData);
    }

  return (
    <form onSubmit={preventFunc} className="preferences-form">
      <p>Parle nous des aliments que tu preferes et que tu detestes</p>

      <label htmlFor="prefered" placeholder="un ou plusieurs si tu en as">
        Tes aliments preferes separes par une virgule :
      </label>

      <textarea
        id="prefered"
        placeholder="un ou plusieurs si tu en as"
        onChange={(e) => handleTxtArea(e, "love")}
      ></textarea>

      <label htmlFor="hated" placeholder="un ou plusieurs si tu en as">
        Tes aliments detestes separes par une virgule :
      </label>
      <textarea
        id="hated"
        placeholder="un ou plusieurs si tu en as"
        onChange={(e) => handleTxtArea(e, "hate")}
      ></textarea>

      <div className="container-nav-btns">
        <button
          type="button"
          className="prev"
          onClick={() => props.modifyIndex(4)}
        >
          precedent
        </button>

        <button>valider</button>
      </div>
    </form>
  );
}
