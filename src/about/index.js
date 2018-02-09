import React from 'react'
import { Grid } from 'react-bootstrap';
import './style.css';

class About extends React.Component {

  render() {

    return (
    	<div id="about">
	    	<Grid>
	    		<h2 className="text-center">
		        About
		      </h2>
			  </Grid>
		  </div>
    );
  }

}

export default About;