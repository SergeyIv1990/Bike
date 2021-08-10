import React from "react";
import './Form.css';


const Form =(props) => {
let newPostElement = React.createRef();
let newPostElement2 = React.createRef();


  let AddPost=()=>{
  let text = newPostElement.current.value;
  let text2 = newPostElement2.current.value;
  props.addPostNew(text,text2);
 
 //newPostElement.current.value= ' '
  }


return(<div>
<div className="wrapperTitle">Create new rent</div>
<div className="wrapper">
<form>
  <div>Bike name &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; Bike type &ensp;&ensp;&ensp;&ensp;&ensp;Rent prise</div>
  <textarea ref={newPostElement}></textarea>
  
<select >
  <option value="Road">Road</option>
  <option value="Mountain">Mountain</option>
  <option selected value="Bike">Bike</option>
</select>

<textarea ref={newPostElement2}></textarea>

<button className="btn2" onClick={AddPost}>Submint rent</button>
</form>

</div></div>
    );
}
  

  export default Form;