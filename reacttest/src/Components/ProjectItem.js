import React, { Component } from 'react';

class ProjectItem extends Component {

	deleteProject(){
		console.log("test");
	}

 	render() {
	    return (
	    	<li className="Project">
	    		<strong> {this.props.project.title} - {this.props.project.category} </strong>
	    		<a href="#" onClick={this.deleteProject.bind(this)}> X </a>
	     	</li>
	    );
  }
}

export default ProjectItem;
