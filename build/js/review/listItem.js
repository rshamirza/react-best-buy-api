var ReviewListItem = React.createClass({

    handleClick: function(event) {
        console.log('an item is clicked', this.props.review)
        this.props.onListItemClicked(this.props.review.id)
    },

    render: function() {

        var review = this.props.review

        return ( 
            <div className="review" >
                <table className="u-full-width">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>SKU</th>
                            <th>ID</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="#" onClick={this.handleClick}>{review.title}</a></td>
                            <td> {review.sku} </td>
                            <td> {review.id} </td>
                            <td> {review.rating} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
  }
})
