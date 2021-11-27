import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {

  state = {
    exams: []
  }

  componentDidMount(){
    this.consultarExamenes();  
  }

  consultarExamenes = async () =>{
    const url = `https://localhost:44342/api/Examen`;

    const respuesta = await fetch(url);
    const exams = await respuesta.json();

    console.log(exams);
    
    this.setState({
      exams: exams
    });
  }
  render() {
    return (
      <h1>
        { this.state.exams.map(exam => <li>{exam.descripcionCorta}</li>)}
      </h1>
    )
  }
}