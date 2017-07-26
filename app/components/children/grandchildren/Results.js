// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;






var Results = React.createClass({
    render: function() {
        // var rows = [];
        // console.log("what");
        // for (var i=0; i < this.props.shared_var.length; i++) {
        //     console.log("how");
        //     rows.push(<p>this.props.shared_var[i].headline</p>);
        //     console.log(this.props.shared_var[i]);
        // }

        var articleComponents = this.props.shared_var.map(function(article) {
            return <div key={article.url}>{article.headline}{article.date}{article.url}</div>;
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
          