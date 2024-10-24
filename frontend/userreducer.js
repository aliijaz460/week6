const initialState = {
    user: null,
    loading: false,
    error: null,
  };
  
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_USER_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_USER_SUCCESS':
        return { ...state, user: action.payload, loading: false };
      case 'FETCH_USER_FAIL':
        return { ...state, error: action.error, loading: false };
      default:
        return state;
    }
  };
  