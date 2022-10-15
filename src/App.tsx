import React from 'react';
import './App.css';
import IntroPage from './pages/IntroPage';
import GamePage from './pages/GamePage';
import CreditsPage from './pages/CreditsPage';
import {backgroundPattern} from './assets';
import {palette} from './styles';
import SelectPage from './pages/SelectPage';
import EndGamePage from './pages/EndGamePage';
import {useStore} from './store/storeConfig';
import { observer } from 'mobx-react-lite';

const App: React.FC = () => {
  const store = useStore();

	const classes = {
		background: {
			display: 'flex',
			flexDirection: 'column' as 'column',
			alignItems: 'center',
			height: '100%',
			width: '100%',
			minHeight: '100vh',
			backgroundColor: palette.background,
			backgroundImage: `url(${backgroundPattern})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
		},
		main: {
			dir: 'rtl',
			display: 'flex',
			minHeight: '100vh',
			flexDirection: 'column' as 'column',
			alignItems: 'center',
			width: '100%',
			maxWidth: 600,
			margin: 'auto',
		},
		mobileOnlyMessageBox: {
			margin: 30,
		},
		mobileOnlyMessageInner: {
			textAlign: 'center' as 'center',
			padding: 40,
			fontSize: 30,
		},
	};

	let page: React.ComponentElement<any, any>;
	switch (store.activePage) {
		case 'select':
			page = <SelectPage />;
			break;
		case 'game':
			page = <GamePage />;
			break;
		case 'game-end':
			page = <EndGamePage />;
			break;
		case 'credits':
			page = <CreditsPage />;
			break;
		case 'intro':
		default:
			page = <IntroPage />;
			break;
	}

	return (
		<div style={classes.background}>
			<main dir="rtl" id="main" style={classes.main}>
				{page}
			</main>
		</div>
	);
};

export default observer(App);
