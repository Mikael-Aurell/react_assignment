import React, {Component} from "react";
import './App.css';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import MyTable from './components/MyTable';
import Details from "./components/Details";
import Form from './components/Form';
import Navbar from "./components/Navbar";

class App extends Component {
    state = {
        categories: [], categoriesDetails: [],
        showDetails: false, showForm: false
    }

    /*async componentDidMount() {
        await axios.delete('https://mj-tg-productmanagement.herokuapp.com/api/category/')
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

    handleSubmitForm = category => {
        this.setState({ categories: [...this.state.categories, category] } );
        this.setState({ showForm: false})
    }

    render() {
        const {categories, categoriesDetails, showDetails, showForm} = this.state;

        return (

            <div className="App">
                <Navbar/>
                <br /><br /><br /><br /><br /><br />
                <button className="btn btn-primary" onClick={()=>this.setState({showForm: true})}> Create Category</button>
                {showForm ?
                    ( <div>
                        <Form
                            categories={categories}
                            handleSubmitForm={this.handleSubmitForm} />
                        <span>
                            <button className="btn btn-primary" onClick={() => this.setState({showForm: false})}>
                            Close </button>
                        </span>
                      </div> )
                    : null }
                <br />

                { !showDetails ?
                    ( <MyTable
                            categories={categories}
                            removeCategory={this.removeCategory}
                            detailsCategory={this.detailsCategory} />
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
