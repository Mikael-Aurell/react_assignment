import React, {Component} from 'react';
import DetailsHeader from "./DetailsHeader";
import DetailsBody from "./DetailsBody";

class Details extends Component {
    render() {
        const {categoriesDetails} = this.props;
        return (
            <div className="container">
                <DetailsHeader />
                <DetailsBody
                    categoriesDetails={categoriesDetails}
                />
            </div>
        );
    }
}

export default Details;