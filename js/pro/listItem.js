var ProListItem = React.createClass({

    handleClick: function(event) {
        console.log('an item is clicked', this.props.pro)
        this.props.onListItemClicked(this.props.pro.sku)
    },

    render: function() {

        var pro = this.props.pro

        return ( 
            <div className="pro" >
                <table className="u-full-width">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>SKU</th>
                            <th>Regular Price</th>
                            <th>Sale Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="#" onClick={this.handleClick}>{pro.name}</a></td>
                            <td> {pro.sku} </td>
                            <td> {pro.regularPrice} </td>
                            <td> {pro.salePrice} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
  }
})
