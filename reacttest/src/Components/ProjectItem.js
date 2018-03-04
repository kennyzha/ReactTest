import React, { Component } from 'react';

class ProjectItem extends Component {
 	render() {
	    return (
	    	<li className="Project">
	    		<strong> {this.props.project.title} - {this.props.project.category} </strong>
	     	</li>
	    );
  }
}

export default ProjectItem;
