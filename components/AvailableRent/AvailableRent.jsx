import React from "react";
import './AvailableRent.css';
import {cutPost} from '../../Redux/state';
import {Delete} from '../../Redux/state';


  const AvailableRent =(props) =>{
  
    return(<div>
   
        <div className="AvailableRent">
  <form>

 {props.name} {props.type}{props.prise}
 <button className="btn3" onClick={cutPost}>Rent</button>
 <button className="btn4"onClick={Delete}>Delete</button>


  </form>
  </div></div>
      );

  }
  export default AvailableRent; 








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
