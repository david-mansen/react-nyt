// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Query = require("./grandchildren/Query");
var Results = require("./grandchildren/Results");

var Search = React.createClass({

    getInitialState: function(){
        return {shared_var: []};
    },

    updateShared: function(shared_value){
        this.setState({shared_var: shared_value});
    },

    render: function() {
        return (
            <div>
                <Query updateShared={this.updateShared} />
                <Results shared_var={this.state.shared_var} />
            </div>
        );
    }
});

module.exports = Search;
