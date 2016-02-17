var React = require('react');
var ReactDom = require('react-dom');

var ZoneRow = React.createClass({

  render: function() {

    return (
      <tr>
        <td>{this.props.zone.id}</td>
        <td>{this.props.zone.kind}</td>
        <td>{this.props.zone.dnssec}</td>
      </tr>
    );
  }
});

var ZoneTable = React.createClass({

  render: function() {
    var rows=[];
    this.props.zones.forEach(function(zone) {
      if (zone.id.indexOf(this.props.filterText) === -1) {
        return;
      }
      rows.push(<ZoneRow zone={zone} key={zone.id} />);
    }.bind(this));

    return (
      <table>
        <thead>
          <tr>
            <th>Domain</th>
            <th>Type</th>
            <th>DNSSEC</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

var SearchBar = React.createClass({
  handleChange: function(){
    this.props.onUserInput(
      this.refs.filterTextInput.value
    );
  },
  render: function() {
    return (
      <form>
        <input type="text" placeholder="Search..." value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange}/>
      </form>
    );
  }
});

var FilterableZoneTable = React.createClass({
  getInitialState: function() {
    return {
      filterText: ''
    };
  },
  handleUserInput: function(filterText){
    this.setState({filterText: filterText});
  },
  render: function() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput}/>
        <ZoneTable zones={this.props.zones} filterText={this.state.filterText}/>
      </div>
    );
  }
});

var ZONES = [
  {id: 'a.a', kind: 'Master', dnssec: 1},
  {id: 'b.b', kind: 'Slave', dnssec: 0},
  {id: 'c.c', kind: 'Master', dnssec: 1}
];

ReactDom.render(<FilterableZoneTable zones={ZONES} />, document.getElementById('dns'));
// ReactDom.render(<h1>Hello, world!</h1>, document.getElementById('Zone'));
