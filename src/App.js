import React, {Component} from "react";
import './App.css';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import MyTable from './components/MyTable';
import Details from "./components/Details";

class App extends Component {
    state = {
        categories: [], categoriesDetails: [],
        showDetails: false, showMyTable: true
    }

    /*async componentDidMount() {
        await axios.delete('https://mj-tg-productmanagement.herokuapp.com/api/category/')
            .then(response => { //Because axios is promised based we use then
                console.log(response.data);
                //this.setState({categories: response.data});
            });*/

    /*async componentDidMount() {
        await axios.post('https://mj-tg-productmanagement.herokuapp.com/api/category/',{name: "Test"})
            .then(response => { //Because axios is promised based we use then
                console.log(response.data);
                //this.setState({categories: response.data});
            });*/

    async componentDidMount() {
        await axios.get('https://mj-tg-productmanagement.herokuapp.com/api/category/')
            .then(response => { //Because axios is promised based we use then
                console.log(response.data);
                this.setState({categories: response.data});
            });

    }

    removeCategory = Id => {
        const {categories} = this.state;
        this.setState(
            {
                categories: categories.filter(
                    (category) => {return category.id !==Id}
                )
            }
        );
    }

    detailsCategory = Id => {
        const {categories} = this.state;
        this.setState(
            {
                categoriesDetails: categories.filter(
                    (category) => {return category.id === Id}
                )
            }
        );
        this.setState({showDetails: true});
        this.setState({showMyTable: false});
    }

    render() {
        const {categories, categoriesDetails, showDetails, showMyTable} = this.state;

        return (
            <div className="App">
                {!showDetails ?
                    ( <MyTable
                            categories={categories}
                            removeCategory={this.removeCategory}
                            detailsCategory={this.detailsCategory}
                        />
                ) : null }

                {showDetails ?
                    ( <div>
                        <br />
                        <header>Category Details</header>
                        <Details categoriesDetails={categoriesDetails} />
                        <button className="btn btn-primary" onClick={
                            ()=> this.setState({showDetails: false})}
                        >Close Details</button>
                    </div> )
                        : null }
            </div>
        );
    }
}

export default App;
