import React, {Component} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MyTable from './components/MyTable';
import axios from "axios";

class App extends Component {
    state = {
        categories: []
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


    render() {
        const {categories} = this.state;

        return (
            <div className="App">
                <MyTable categories={categories} />
            </div>
        );
    }
}

export default App;
