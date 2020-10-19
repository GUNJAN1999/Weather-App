import React from 'react';
import './SeasonDisplay.css';
//import ReactDOM from 'react-dom';

const seasonConfig={
	summer:{
		text:"LETS HIT THE BEACH",
		iconName:"sun"
	},
	winter:{
		text:"EEE!!! ITS CHILLY OUT HERE",
		iconName:"snowflake"
	}
};
const getSeason=(lat,month)=>
{
	if(month > 2 && month < 9)
	{
		return lat>0? 'summer':'winter';
	}
	else{
		return lat>0? 'winter':'summer';
	}
}

const SeasonDisplay=(props)=>{
	const season=getSeason(props.lat,new Date().getMonth());
	const {text,iconName}=seasonConfig[season];
	return (
		<div>
		<i className={`icon-left massive ${iconName} icon`}/>
		<br/><br/>
		{text}
		<br/><br/>
		<i className={`icon-right massive ${iconName} icon`}/>
		</div>
	);
};

export default SeasonDisplay