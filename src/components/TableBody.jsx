import React, {Component} from 'react';
class TableBody extends Component {

    render() {
        const TableBody = props => {
            const tableRows = props.categories.map((row) => {
                return (
                <tr key={row.id}>
                    <td>{row.name}</td>
                    <td>
                        <button className="btn btn-info" onClick={()=> props.detailsCategory(row.id)}>Details</button>
                        {" "}
                        <button className="btn btn-danger" onClick={()=> props.removeCategory(row.id)}>Delete</button>
                    </td>
                </tr>
            )
            });

            return (
                <tbody>{tableRows}</tbody>
            );
        }
       return (
           <TableBody
               categories={this.props.categories}
               removeCategory={this.props.removeCategory}
               detailsCategory={this.props.detailsCategory}
           />
       );
    }
}

export default TableBody;