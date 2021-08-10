import React from "react";
import './FormRent.css';
import {DeletPost} from '../../Redux/state';


  const FormRent =(props) =>{
  
    return(<div>
   
        <div className="wrapperFormRent">
  <form>
  
 {props.name} {props.type}{props.prise}
 <button className="btn" onClick={DeletPost}>Cancel rent</button>
 


  </form>
  </div></div>
      );

  }
  export default FormRent; 








/*
<div>
        <div className="wrapperTitleRent">Your rent</div>
        <div className="wrapperRent">
  <form>
    <div>Bike name &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; Bike type &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Rent prise</div>
  <input type="text" placeholder="Bike name"/>
  <input type="text" placeholder="Bike type"/>
  <input type="text" placeholder="Rent prise"/>
  <button>Submint rent</button>
  </form>
  </div></div>
  */
