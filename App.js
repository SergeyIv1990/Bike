import './App.css';
import Info from  './components/Info/Info.jsx';
import Form from  './components/Form/Form.jsx';
import Available from  './components/Available/Available.jsx';
import FormRent from  './components/FormRent/FormRent.jsx';


const App = (props)=> {

  
  let RentElements=props.state.RentData.map( RentData => <FormRent name={RentData.name} type={RentData.type} prise={RentData.prise}/> );
   
    return (<div>
      <Info/>
       <Form addPostNew={props.addPostNew}/>
       <div className="wrapperTitleRent">Your rent</div>
       
       {RentElements}
       <div className="wrapperTitleRent">Available bicycles ({props.numberOfItems})</div>           
       <Available AvailableData={props.state.AvailableData}/>
          
       </div>)};

export default App;
