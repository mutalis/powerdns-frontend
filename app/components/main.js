var React = require('react');
var ReactDom = require('react-dom');

var Zone = React.createClass({
  handleDeleteZone:function(){
    this.props.onZoneDelete(this.props.zone);
  },
  render: function() {

    return (
      <tr>
        <td>{this.props.zone.id}</td>
        <td>{this.props.zone.kind}</td>
        <td>{this.props.zone.dnssec}</td>
        <td><button onClick={this.handleDeleteZone}>Delete Zone</button></td>
      </tr>
    );
  }
});

var ZoneList = React.createClass({

  render: function() {
    var rows=[];
    this.props.zones.forEach(function(zone) {
      if (zone.id.indexOf(this.props.filterText) === -1) {
        return;
      }
      rows.push(<Zone zone={zone} key={zone.id} onZoneDelete={this.props.onZoneDelete}/>);
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

var ZoneForm = React.createClass({
  handleDomainChange: function(e){
    this.setState({id: e.target.value});
  },
  handleKindChange: function(e){
    this.setState({kind: e.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault();
    var domain = this.state.id.trim();
    var kind = this.state.kind.trim();
    if (!domain || !kind ) {
      return
    }
    this.props.onZoneSubmit({id: domain, kind: kind, dnssec: 0});
    this.setState({id: '', kind: 'Master', dnssec: 0});
  },
  getInitialState: function(){
    return {id: '', kind: 'Master', dnssec: 0};
  },
  render: function() {
    return (
      <form className="zoneForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Domain" value={this.state.id} onChange={this.handleDomainChange}/>
        <select value={this.state.kind} onChange={this.handleKindChange}>
          <option value="Native">Native</option>
          <option value="Master">Master</option>
          <option value="Slave">Slave</option>
          <option value="Forwarded">Forwarded</option>
        </select>
        <input type="submit" value="Add Zone"/>
      </form>
    );
  }
});

var ZoneBox = React.createClass({
  loadZonesFromServer: function(){
    var zones = [
      {id: 'a.a', kind: 'Master', dnssec: 0},
      {id: 'b.b', kind: 'Slave', dnssec: 0},
      {id: 'c.c', kind: 'Master', dnssec: 0},
      {id: 'd.d', kind: 'Native', dnssec: 0}
    ];
    this.setState({zones: zones});
  },
  handleZoneDelete(zone_to_delete){
    var zones = this.state.zones;
    zones.forEach(function(zone, array_index) {
      var index = zone.id.indexOf(zone_to_delete.id);
      if ( index !== -1) {
        zones.splice(array_index, 1);
      }
      return;
    });
    this.setState({zones: zones});
    console.log(this.state.zones);
  },
  handleUserInput: function(filterText){
    this.setState({filterText: filterText});
  },
  handleZoneSubmit: function(zone){
    var zones = this.state.zones;
    var newZones = zones.concat([zone]);
    this.setState({zones: newZones});
  },
  getInitialState: function() {
    return {
      filterText: '',
      zones: []
    };
  },
  componentDidMount: function(){
    this.loadZonesFromServer();
  },
  render: function() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput}/>
        <ZoneList zones={this.state.zones} filterText={this.state.filterText} onZoneDelete={this.handleZoneDelete}/>
        <ZoneForm onZoneSubmit={this.handleZoneSubmit}/>
      </div>
    );
  }
});

ReactDom.render(<ZoneBox />, document.getElementById('dns'));
// ReactDom.render(<h1>Hello, world!</h1>, document.getElementById('Zone'));
