import React, { Component } from 'react';
import FPIButton from '../components/fpibutton_component';

// import FPITabs from '../components/fpitabs_component'
import FPISlider from '../components/fpislider_component';
import FPITaginput from '../components/fpitaginput_component';


class ComponentsScreen extends Component {
	render() {
		return (
			<div>
				<h1>componenets</h1>
				<FPISlider />
				<FPITaginput />
				<h3>button</h3>
        &lt;FPIButton text=&#123;&quot;text&quot;&#125;/&gt;
				<FPIButton text={'text'} type={'cancel'}/>
			</div>
		);
	}
}

export default ComponentsScreen;