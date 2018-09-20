import {combineReducers} from 'redux';
import Recipes from './recipes';
//import In from '../components/sign-in/sign-in';

const allReducers = combineReducers ({
	recipes: Recipes,
	//in: In,
	
});

export default allReducers;