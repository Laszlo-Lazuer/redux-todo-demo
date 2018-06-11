import React, { Component } from 'react';
import './App.css';
import PostForm from './components/PostForm.js';
import AllPost from './components/AllPost.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <PostForm /> 
        <AllPost />        
      </div>
    );
  }
}

export default App;
