import rerenderEntireTree from '../index';

let state = {
    RentData: [
        {id:1, name: 'Superfast bicycle/', type:'custom/', prise:'12,99'}
        
        
      ],
      
      AvailableData: [
        {id:1, name: 'Superfast bicycle/', type:'custom/', prise:'12,99'},
        {id:2, name: 'Superfast bicycle/', type:'custom/', prise:'12,99'},
        {id:3, name: 'Superfast bicycle/', type:'custom/', prise:'12,99'}
        
      ]

}
export let addPostNew = (RentName, RentType, RentPrise) => {
    let newPost = {id:2,name:RentName, type:RentType, prise:RentPrise};
    state.AvailableData.push(newPost);
    rerenderEntireTree (state);
   };

export let DeletPost = () => {
 state.AvailableData.push(state.RentData[0]);
 state.RentData.splice(0, 1);
 rerenderEntireTree (state);
   };
   
   export let cutPost = () => {
    state.RentData.push(state.AvailableData[0]);
    state.AvailableData.splice(0, 1);
    rerenderEntireTree (state);
};
export let Delete = () => {
 
  state.AvailableData.splice(0, 1);
  rerenderEntireTree (state);
};

export let numberOfItems=(Object.keys(state.AvailableData).length) ;


export default state;

