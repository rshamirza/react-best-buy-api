var ProView = React.createClass({

    getInitialState: function() {
        return {pro: null}
    },

    render: function() {
        
        if (this.state.pro){

            return ( 
                <div className="proView" >
                    <h2 className="proName">
                        {this.state.pro.name}
                    </h2>
                    {this.state.pro.shortDescription}<br/> <br/>  
                    {this.state.pro.url}
                </div>
            )

        }else{

            return (
                <h2>Click an item to see details</h2>
            )
        }
  }
})