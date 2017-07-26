// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;






var Results = React.createClass({

    clickButton: function(event){
        alert(event.target.value);
    },

    render: function() {
        // var rows = [];
        // console.log("what");
        // for (var i=0; i < this.props.shared_var.length; i++) {
        //     console.log("how");
        //     rows.push(<p>this.props.shared_var[i].headline</p>);
        //     console.log(this.props.shared_var[i]);
        // }
        var temp = this;

        var articleComponents = this.props.shared_var.map(function(article) {
            return( 
                <div className="row" key={article.url}>
                    <div className="col-md-8">
                        <h3>{article.headline}</h3>
                        <p>{article.url}</p>
                    </div>

                    <div className="col-md-4">
                        <button value={article.url} onClick={temp.clickButton} className="btn btn-primary">Save</button>
                    </div>
                    <br/>
                    
                </div>
            );
        });

        return (
        <div className="container">
            <div className="col-lg-12">
            <div className="panel panel-primary">
                <div className="panel-heading">
                <h3 className="panel-title text-center">Results</h3>
                </div>
                <div className="panel-body text-center">
                    {articleComponents}
                </div>
            </div>
            </div>
        </div>
        );
    }
});

module.exports = Results;
          