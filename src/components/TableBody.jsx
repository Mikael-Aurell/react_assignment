import React, {Component} from 'react';
//import axios from 'axios'
class TableBody extends Component {

    render() {
        const TableBody = props => {
            const tableRows = props.categories.map((row) => {
                return (
                <tr key={row.id}>
                    <td>{row.name}</td>
                    <td>{" "}</td>
                    <td>
                        <button className="btn btn-info">Details</button>
                        {" "}
                        <button className="btn btn-danger" onClick={}>Delete</button>
                    </td>
                </tr>
            )
            });

            return (
                <tbody>{tableRows}</tbody>
            );
        }
       return (
           <TableBody categories={this.props.categories} />
       );
    }
}

export default TableBody;