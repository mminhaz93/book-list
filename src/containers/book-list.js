import React, { Component } from 'react';
import { connect } from 'react-redux'

class BookList extends Component {

  renderList(){
    return this.props.books.map((book)=>{
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      )
    })
  }
  render(){
    // console.log(this.props.asdf) ==> will get 123
    return (
      <ul className="list-group col-sm-4">
      {this.renderList()}</ul>
    )
  }

}

//mapStateToProps returns an object that will be avaible to our component as this.props
function mapStateToProps(state){
  // Whatever is returned will show up as props inside of BookList

  return {
    //  asdf: '123'
    books: state.books // bring books from reducer
  };
}

//Connect takes a function (mapStateToProps) and a component (BookList) and produces a container and the container is a smart compoent that is aware of the state that's contained by redux
export default connect(mapStateToProps)(BookList);