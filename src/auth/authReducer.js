import { types } from '../types/types';

const authReducer = (state = {}, action) => {
	switch (action.type) {
		case types.login:
			return { ...action.payload, sesion: true };
		case types.logout:
			return { sesion: false };
		default:
			return state;
	}
};
export default authReducer;
