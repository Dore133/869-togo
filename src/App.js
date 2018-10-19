import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import {Router, Route, MemoryRouter} from 'react-router';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Restaraunts from './Res';
import MenuComponent from './ResMenuComponent';
import MyHeader from './MyHeader';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://fullbreed.000webhostapp.com/MyServices/GetRestaurants.php")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
            menu: null
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  getMenu = (ResID) => {
    console.log('getMenu function');
    
    fetch("http://fullbreed.000webhostapp.com/MyServices/GetMenuItem.php?ID="+ResID)
      .then(res => res.json())
      .then(
        (result) => {
          //console.log(result);
          this.setState({
            isLoaded: true,
            menu: result
          });

          ReactDOM.render(<MenuComponent ResId={ResID} MenuData={result} />, document.getElementById('root'));
          //<MenuComponent ResId={ResID} MenuData={result} />
        },
        (error) => {
          console.log(error);
          console.log('something is wrong');
        }
      )
  }

  seeMenu = (ResID, MenuData) => {
    console.log(ResID);
    
    ReactDOM.render(<MenuComponent ResId={ResID} MenuData={MenuData} />, document.getElementById('root'));
  }

  HomeLayout = () => {
    console.log('home');
    return(
      <Restaraunts ResData={this.state.items} getRes={this.getMenu} />
    )
  } 

  AboutLayout = () => {
    console.log('about');
    return(
      <h1>About Page</h1>
    )
  }

  RestLayout = ({match}) => {
    console.log('Rest layout function');
    
    let RestID = match.params.id;
    var List = null;
    fetch('http://fullbreed.000webhostapp.com/MyServices/GetMenuItem.php?ID='+RestID)
      .then(
        function(response){
          response.json().then(function(data){
            List = data;
            console.log(List);
            ReactDOM.render(<MenuComponent ResId={RestID} MenuData={data} />, document.getElementById('rend'));
          });
        }
      ).catch(function(err){
        console.log('Fetch Error :-S', err);
      });
    
    return(
      //<MenuComponent ResId={RestID} MenuData={List} />
      <h1>{RestID}</h1>
    )
  }

  render() {
    return (
      <Router>
        <div className="App">
          <MyHeader />
          <Route path="/" exact={true} component={this.HomeLayout} />
          <Route path="/about/" exact={true} component={this.AboutLayout} />
          <Route path="/rest/:id" exact={true} component={this.RestLayout} />
          <div id="rend"></div>
        </div>
      </Router>
    );
  }
}

export default App;
