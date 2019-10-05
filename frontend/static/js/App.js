import React, { useState } from 'react';

import NAVbar from './nav/navbar'


function App(props) {
  const stateArr = useState({
    counter: 'what the f',
  });
  const styel = {
    color: "red",
  };

  const [currentState, Function_updateState] = stateArr; //array destructuring
  //starArr first element will be current state , or currnet data. and secound element is update state , this tell react we will change state
  const changeName = (event) => {
    Function_updateState({
      counter: event.target.value,
    });
  };
  const [selectedOption, setSelectOption] = useState('');

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  // list_property = (
  //   currnt_persons.people.map((value, index) => {
  //     return <LIST Change_name={(event) => Change_name(event, index)} name={value['name']} key={value['id']} id={value['id']} />
  //   }));
  const options_list = (
    options.map((value, index) => {
      return (<Card value={value.value} label={value.label} key={index} />
      );
    })
  );


  return (

    <div className="App">
      <header>
        <NAVbar />
        <p></p>
      </header>
      <br></br>
      <h1 style={styel}>My first react app {currentState.counter}</h1>
      <p>hello</p>
      
      <select id="lang" onChange={handleChange} value={selectedOption}>
        {options_list}
      </select>

      {/* <input type='text' name='input' onChange={changeName}></input> */}
    </div>
  );
}

export default App;



const Card = (props) => {

  return (
    <option value={props.value}>{props.label}</option>
  );

}