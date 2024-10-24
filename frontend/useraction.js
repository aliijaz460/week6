export const fetchUserData = () => async (dispatch) => {
    dispatch({ type: 'FETCH_USER_REQUEST' });
  
    try {
      const response = await fetch('https://api.example.com/user'); // Replace with your API URL
      const data = await response.json();
      dispatch({ type: 'FETCH_USER_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_USER_FAIL', error: error.message });
    }
  };
  