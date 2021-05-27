import React, {Component} from 'react';
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

class MyTable extends Component {
    render() {
        const {categories} = this.props;
        console.log(categories);
        return (
            <div>
                <TableHeader />
                <TableBody categories={categories} />
            </div>
        );
    }
}

export default MyTable;