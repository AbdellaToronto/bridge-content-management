import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap';
import './style.css';

class Home extends React.Component {

  render() {

    return (
    	<div id="home">
	    	<Grid>
	    		<h2 className="text-center">
		        Home
		      </h2>
		      <Row>
						<Col sm="6">
							<p>This project integrate following libs -</p>
							<ul>
								<li>React Bootsrap @3</li>
								<li>React Router @4</li>
								<li>react-router-redux @next</li>
								<li>Redux @3</li>
								<li>Scss</li>
								<li>Font awesome</li>
							</ul>
						</Col>
						<Col sm="6"></Col>
		      </Row>
			  </Grid>
		  </div>
    );
  }

}

export default Home;