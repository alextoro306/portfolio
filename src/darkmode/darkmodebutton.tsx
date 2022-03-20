import React from 'react';
import styles from './darkmodebutton.module.scss';
import { useDarkmodeContext } from './darkmodeContextProvider';

const Darkmodebutton: React.FC = () => {

	const { useDarkmode, setUseDarkmode } = useDarkmodeContext();
	return (
	
		<div className={useDarkmode ? styles.darkStyle : styles.ligthStyle}>
			<button className={useDarkmode ? styles.darkmode : styles.lightmode} onClick={() => setUseDarkmode(!useDarkmode)}>
				 {useDarkmode ? "Light ☀️" : "Dark 🌙"}
			</button>
		</div>
	)
}

export default Darkmodebutton;