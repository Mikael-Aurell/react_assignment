import React, {Component} from "react";
import './App.css';
import axios from "axios";
import {useSelector} from "react-redux"; //useSelector is a hook which take a slice of the store
import 'bootstrap/dist/css/bootstrap.css';
import MyTable from './components/MyTable';
import Details from "./components/Details";
import Form from './components/Form';
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";


class App extends Component {



    state = {
        categories: [], categoriesDetails: [],
        showDetails: false, showForm: false
    }

    async componentDidMount() {
        await axios.get('https://mj-tg-productmanagement.herokuapp.com/api/category/')
            .then(response => { //Because axios is promised based we use then
                console.log(response.data);
                this.setState({categories: response.data});
            });

    }

    removeCategory = id => {

        console.log(id);

        axios.delete('https://mj-tg-productmanagement.herokuapp.com/api/category/'+id)
             .then(response => {console.log(response.data);});

        const {categories} = this.state;
        this.setState(
            {
                categories: categories.filter(
                    (category) => {return category.id !==id}
                )
            }
        );
    }

    detailsCategory = id => {
        const {categories} = this.state;
        this.setState(
            {
                categoriesDetails: categories.filter(
                    (category) => {return category.id === id}
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

            <div className="container">
                <Navbar />
                <Counter />
                <br />
                <div>
                    <button className="btn btn-success" onClick={()=>this.setState({showForm: true})}> Create Category</button>
                </div>
                <br />
                {showForm ?
                    (<div>
                        <Form
                            categories={categories}
                            handleSubmitForm={this.handleSubmitForm} />
                    </div> )
                    : null }
                <br />

                { !showDetails ?
                    (<div>
                        <MyTable
                            categories={categories}
                            removeCategory={this.removeCategory}
                            detailsCategory={this.detailsCategory}
                        />
                    </div> )
                    : null }

                {showDetails ?
                    (<div>
                        <br />
                        <header>Category Details</header>
                        <Details categoriesDetails={categoriesDetails} />
                        <br />
                        <button className="btn btn-primary" onClick={()=> this.setState({showDetails: false})}>Close Details</button>
                    </div> )
                    : null }
            </div>
        );
    }
}

export default App;
