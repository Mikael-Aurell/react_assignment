import React, {Component} from 'react';
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

class MyTable extends Component {
    render() {
        const {categories, removeCategory, detailsCategory} = this.props;
        console.log(categories);
        return (
            <div>
                <TableHeader />
                <TableBody
                    categories={categories}
                    removeCategory={removeCategory}
                    detailsCategory={detailsCategory}
                />
            </div>
        );
    }
}

export default MyTable;