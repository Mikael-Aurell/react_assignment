import React, {Component} from 'react';
import axios from 'axios'
class TableBody extends Component {
    state = {
        categories: [
            {id: 0, name: ""}
        ]}

    async componentDidMount(){
        await axios.get('https://mj-tg-productmanagement.herokuapp.com/api/category/')
            .then(response => { //Because axios is promised based we use then
                console.log(response.data);
                this.setState({categories: response.data });
            });

    }

    render() {
        const tableRows = this.state.categories.map((row) => (
           <tr key={row.id}>
                <td>{row.name}</td>
                <td>
                    <button className="btn btn-info">Details</button>
                    {" "}
                    <button className="btn btn-danger">Delete</button>
                </td>
           </tr>
        ));

        return (
            <tbody>{tableRows}</tbody>
        );
    }
}

export default TableBody;