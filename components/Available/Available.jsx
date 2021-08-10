import React from "react";
import AvailableRent from  '../AvailableRent/AvailableRent.jsx';


const Available =(props) => {
 

  let AvailableElements=
  props.AvailableData.map (AvailableData => <AvailableRent name={AvailableData.name} type={AvailableData.type} prise={AvailableData.prise}/> );
return(<div>
  {AvailableElements}
  
</div>
        );
    }

export default Available;