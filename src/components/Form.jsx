import React, { Component} from 'react';
import axios from 'axios';

export default class Edit extends Component {

    initialState = {
        name: ''
    }

    state = this.initialState;

    handleChange = event => {
        const { name, value } = event.target;
        this.setState( { [name]: value } );
    }

    submitForm = () => {


        axios.post('https://mj-tg-productmanagement.herokuapp.com/api/category/',{name: this.state.name})
            .then(response => { //Because axios is promised based we use then
                console.log(response.data);
                //this.setState({categories: response.data});
                });

        this.props.handleSubmitForm(this.state);
        this.setState(this.initialState);
    }

    render() {
        const {name} = this.state;
        const {handleChange, submitForm} = this;

        return (
            <div>
                <h2>Create Category</h2>
                <form className="from-group">
                    <label for="">Name</label>{" "}
                    {" "}<input type="text" name="name" id="name" value={name} onChange={handleChange} />{" "}
                    <span>{" "}<input className="btn btn-primary" type="button" value="Submit" onClick={submitForm} /></span>
                </form>
            </div>
        );
    }
}