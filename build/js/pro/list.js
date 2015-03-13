var ProList = React.createClass({displayName: 'ProList',

    getInitialState: function() {
        return {data: []};
    },
  
    componentDidMount: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                this.setState({
                    data: data.products
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    handleListItemClicked: function(sku){
        var pro = _.find(this.state.data, {sku: sku})
        this.refs.proView.setState({pro:pro})
    },

    render: function() {

        var self = this

        var pros = this.state.data.map(function (pro) {
        
          return (    
            <ProListItem pro={pro} onListItemClicked={self.handleListItemClicked}/>
            )
        })        

        return (
            <div className="proPage">
                <div className="proList six columns">
                    {pros}
                </div>
                <div className="proView six columns">
                    <ProView ref="proView"/>
                </div>
            </div>
        )
    }
})
