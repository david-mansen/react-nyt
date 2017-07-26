// Include React
var React = require("react");



// This is the Form, our main component. It includes the banner and form element
var Query = React.createClass({

    updateShared: function(callback){
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        var parameters = $.param({
            'api-key': "ab3aa28c8add469ca323c6117aeffb45",
            'q': this.state.topic,
        });

        url += '?' + parameters;

        $.ajax({
            url: url,
            method: 'GET',
        }).done(function(result) {
            console.log(result);
            console.log(result.response.docs);
            var articles = result.response.docs;

            var bundle = [];


            for(let i=0; i<articles.length; i++){

            var temp = {};

            temp.headline = articles[i].headline.main;
            temp.url = articles[i].web_url;
            temp.date = articles[i].pub_date;

            bundle.push(temp);

            }

            callback(bundle);

        }).fail(function(err) {
            throw err;
        });

        
    },

    // Here we set a generic state associated with the text being searched for
    getInitialState: function() {
        return { topic: "", beginYear: 0, endYear: 0 };
    },

    // This function will respond to the user input
    handleChange: function(event) {
        // Here we create syntax to capture any change in text to the query terms (pre-search).
        // See this Stack Overflow answer for more details:
        // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    },

    handleSubmit: function(event) {
        alert('A name was submitted: ' + this.state.topic);
        this.updateShared(this.props.updateShared);
        //browserHistory.push('/some/path');
        event.preventDefault();
    },


    // Here we descibe this component's render method
    render: function() {
        return (
        <div className="container">
            <div className="row">
            <div className="col-md-12">
                <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title text-center">Form</h3>
                </div>
                <div className="panel-body text-center">
                    <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <h4 className="">
                        <strong>Topic</strong>
                        </h4>
                        {/*
                        Note how each of the form elements has an id that matches the state.
                        This is not necessary but it is convenient.
                        Also note how each has an onChange event associated with our handleChange event.
                        */}
                        <input
                        type="text"
                        value={this.state.num1}
                        className="form-control"
                        id="topic"
                        onChange={this.handleChange}
                        required
                        />

                        <h4>
                        <strong>Begin Year</strong>
                        </h4>
                        <input
                        type="number"
                        value={this.state.num2}
                        className="form-control"
                        id="beginYear"
                        onChange={this.handleChange}
                        required
                        />

                        <h4>
                        <strong>End Year</strong>
                        </h4>
                        <input
                        type="number"
                        value={this.state.text}
                        className="form-control"
                        id="endYear"
                        onChange={this.handleChange}
                        required
                        />
                    </div>
                    <input type="submit" value="Submit" />
                    </form>
                </div>
                </div>
            </div>
            {/* <div className="col-md-6">
                <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-center">Results</h3>
                </div>
                <div className="panel-body text-center">
                    <form>
                    <div className="form-group">
                        <h2>
                        {this.state.num1} + {this.state.num2} =
                        {Number(this.state.num1) + Number(this.state.num2)}
                        </h2>
                        <h2>
                        {this.state.text} Reversed: {this.state.text.split("").reverse().join("")}
                        </h2>
                    </div>
                    </form>
                </div>
                </div>
            </div> */}
            </div>
        </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Query;
