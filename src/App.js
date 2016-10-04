import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './signup.css';

//components 
import Nav from './components/Nav'
import Footer from './components/Footer'
import FoundError from './FoundError'
import HomePage from './HomePage'
import CategoryPage from './CategoryPage'
import ProductPage from './ProductPage'
import Signup from './Signup'
import data from './data'

var App = React.createClass({

  getInitialState(){
    return {
      data: data, 
      listOfItems: '', 
      filteredList: '',
      filteredData: null, 
      modalIsOpen: false, 
      closeModal: this.closeModal, 
      scrollRight: this.scrollRight, 
      scrollLeft: this.scrollLeft, 
      bottomFeatureI: 0 
    }
  },

  componentDidMount(){

    //create a list of all data items
    var listOfItems = []
    Object.keys(data).map(function(category){
      return data[category].map(function(item){
          listOfItems.push(item)
      })
    })

    this.setState({listOfItems: listOfItems, filteredList: listOfItems})
  },
  openModal: function() {
    this.setState({modalIsOpen: true});
  },
  closeModal: function() {
    this.setState({modalIsOpen: false});
  },
  scrollRight(){
    if(this.state.bottomFeatureI === this.state.data.tech.length-4){
      this.setState({bottomFeatureI: 0})
    } else {
      this.setState({bottomFeatureI: this.state.bottomFeatureI + 1})
    }
  },
  scrollLeft(){
    if(this.state.bottomFeatureI === 0){
      this.setState({bottomFeatureI: this.state.data.tech.length-4})
    } else {
      this.setState({bottomFeatureI: this.state.bottomFeatureI - 1})
    }
  },

  handleItemSearch(item){

    var searchItemsObjs = this.state.filteredList.filter(function(filteredListItem){
      if(filteredListItem.name.toLowerCase().indexOf(item) !== -1){
        return filteredListItem
      }
    })

    
    this.setState({filteredList: searchItemsObjs})
  },
  handleSearchReset: function() {
    this.setState({filteredList: this.state.listOfItems})
  },

  render() {
    console.log(this.state.filteredList.length)
    //loop over all the children routes and pass them propTypes
    var that = this
    var children = React.Children.map(this.props.children, function(child) {
        return React.cloneElement(child, Object.assign({}, that.state));
    });
    return (
      <div>
        <Nav onChange={this.handleItemSearch} onReset={this.handleSearchReset} openModal={this.openModal} closeModal={this.closeModal}/>
        {children}
        <Footer />
      </div>
    )
  }
})


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/category/:category" component={CategoryPage} />
      <Route path="/category/:category/:product" component={ProductPage} />
      <Route path="/signup" component={Signup} />
    </Route> 
    <Route path="*" component={FoundError} />
  </Router>,
  document.getElementById('root')
);
