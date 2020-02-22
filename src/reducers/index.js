import { REMOVE_ITEM_SUCCESS, ADD_ITEM, AUTH_SUCCESS, FETCH_SUCCESS, FETCH_REQUEST } from 'actions';

const initialState = {
  userID: '5e4bd7160b35f75928acb6bc',
  isLoading: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        [action.payload.itemType]: [...action.payload.data],
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        // eslint-disable-next-line no-underscore-dangle
        userID: action.payload.data._id,
      };
    case ADD_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.item],
      };
    case REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [
          // eslint-disable-next-line no-underscore-dangle
          ...state[action.payload.itemType].filter(item => item._id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
