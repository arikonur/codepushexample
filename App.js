import codePush from "react-native-code-push";
import React, { Component } from 'react';
import Navigation from './src/navigation';

const app = () => {
  return <Navigation />;
};

export default codePush(app);


