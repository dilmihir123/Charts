import React, { Component } from 'react';




import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";

import SplineChart from "./line charts/Spline Chart";
import ColumnLineAreaChart from "./combination charts/Column Line Area Chart";



class Template extends Component {
  
  render() {    
    return (
		<div>	  
			  <BrowserRouter>		  
						
						
								<div className="content">
									<Route exact path="/" component={ColumnLineAreaChart}/>
									<Route path="/spline-chart" component={SplineChart}/>
									
								</div>
							
			
			  </BrowserRouter>	
			</div>
    );
  }
}

export default Template;