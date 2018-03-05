import React, { Component } from 'react';
import Projects from './Components/Projects'
import AddProject from './Components/AddProject'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }

  }

  componentWillMount(){
    this.setState({projects: [
       {
          title: 'Business Website',
          category: 'Web Design'
        },{
          title: 'Social App',
          category: 'Mobile Design'
        },{
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development'
        }
    ]});

    console.log(fetch('http://localhost:8080/api/v1/users/').then(results => {return results.json()}));
  }

  handleAddProject(project){
      let projects = this.state.projects;
      projects.push(project);
      this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
