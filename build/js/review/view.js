var ReviewView = React.createClass({

    getInitialState: function() {
        return {review: null}
    },

    render: function() {
        
        if (this.state.review){

            return ( 
                <div className="reviewView" >
                    <h2 className="reviewName">
                        {this.state.review.title}
                    </h2>
                    {this.state.review.comment}
                </div>
            )

        }else{

            return (
                <h2>Click an item to see details</h2>
            )
        }
  }
})