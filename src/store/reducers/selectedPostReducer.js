import * as ActionType from '../actions/ActionType';
import initialState from './initialState';
import _ from 'lodash';


const selectedPostReducer = (state = initialState.selectedPostReducer, action) => {
    switch(action.type) {

        case ActionType.GET_POST_RESPONSE: {
            return {
                ...state,
                post: _.assign(action.post)
            };
        }


        default: { return state; }
    }
};


export default selectedPostReducer;