import React from "react";
import BasicInfo from "./component/BasicInfo";

//VERY EASY: Inside of your ‘App’ class ‘render’ method, return a div with your basic information for example name, number, date of birth and etc. This div should be hard-coded to prepare for the Medium Challenge.

 //EASY: Create a ‘constructor’ that takes in ‘props’ , call the ‘super()’ method, and set ‘this.state’ to an empty object inside of the ‘App’ class. Inside of ‘this.state’ create a ‘person’ property and set it to an empty object

 //MEDIUM: Replace all of the hard-coded with data from ‘this.state.person’ in the constructor.  Then take the returned ‘div’ and create a component, pass state into it and import it as ‘BasicInfo’. (This challenge should not change the look of the page)


class App extends React.Component {
  constructor(props) {
    super(props);

    //---Easy
    this.state = {
      people: [
         {
          name: "Ivan R",
          number: "111-111-1111",
          dateOfBirth: "12/12/1999",
        },

        {
          name: "Amanda A",
          number: "222-222-2222",
          dateOfBirth: "11/11/1980",
        },

        {
          name: "Vannesa R",
          number: "333-333-3333",
          dateOfBirth: "10/10/1970",
        },
      ]
    };
  }  
  render() {
    return this.state.people.map(function (person, index) {
      return <BasicInfo key={index} person={person} />;
    })
  }
}

export default App;
