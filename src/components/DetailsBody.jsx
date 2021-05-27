import React, {Component} from 'react';
class DetailsBody extends Component {

    render() {
        const DetailsBody = props => {
            const tableRows = props.categoriesDetails.map((row) => {
                return (
                <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                </tr>
            )
            });

            return (
                <tbody>{tableRows}</tbody>
            );
        }
       return (
           <DetailsBody
               categoriesDetails={this.props.categoriesDetails}
           />
       );
    }
}

export default DetailsBody;