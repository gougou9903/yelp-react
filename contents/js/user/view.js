

var UserView = React.createClass({

    getInitialState: function() {
        return {user: null}
    },

    render: function() {
        
        if (this.state.user){

            return ( 
                <div className="userView" >
                    <h2 className="userName">
                        {this.state.user.name}
                    </h2>
                    //{this.state.user.full_address}
                    <div className="row">{this.state.user.review_count}</div>
                </div>

                 //<div className=
            )

        }else{

            return (
                <h2>Click an item to see details</h2>
            )
        }
  }
})