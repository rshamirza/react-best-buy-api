var ReviewList = React.createClass({displayName: 'ReviewList',

    getInitialState: function() {
        return {data: []};
    },
  
    componentDidMount: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                this.setState({
                    data: data.reviews
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    handleListItemClicked: function(id){
        var review = _.find(this.state.data, {id: id})
        this.refs.reviewView.setState({review:review})
    },

    render: function() {

        var self = this

        var reviews = this.state.data.map(function (review) {
        
          return (    
            <ReviewListItem review={review} onListItemClicked={self.handleListItemClicked}/>
            )
        })        

        return (
            <div className="reviewPage">
                <div className="reviewList six columns">
                    {reviews}
                </div>
                <div className="reviewView six columns">
                    <ReviewView ref="reviewView"/>
                </div>
            </div>
        )
    }
})
