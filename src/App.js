import React from 'react'
// eslint-disable-next-line
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import MyReads from './MyReads'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
    state = {
        shelves : {
            currentlyReadingShelf: [],
            wantToReadShelf: [],
            readShelf: [],
        },
        books: [],
        test: 'test'
    }
    bookSearch(query) {
        if(query !== ''){
            BooksAPI.search(query, 10).then((books) => {
                this.setState({books})
            })
        } else {
            this.setState({books: []})
        }  
    }
    componentDidMount() {
        // BooksAPI.getAll().then((books) => {
        //    this.setState({books})
        // })  
    }
    render() {
        return (
            <div className="app">
                <Route exact path='/SearchBooks' render={() => (
                    <SearchBooks 
                        onUpdateQuery={(query) => this.bookSearch(query)}
                        books={this.state.books}
                    />
                )}/>
                <Route exact path='/' render={() => (
                    <MyReads />
                )}/>
            </div>
        )
    }
}

export default BooksApp
