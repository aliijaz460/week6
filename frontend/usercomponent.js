import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../actions/userActions';
import { View, Text, ActivityIndicator } from 'react-native';

const UserComponent = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <View>
      {loading ? <ActivityIndicator /> : user ? <Text>{user.name}</Text> : <Text>{error}</Text>}
    </View>
  );
};

export default UserComponent;
