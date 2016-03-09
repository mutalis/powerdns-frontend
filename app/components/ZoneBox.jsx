import React from 'react';
import SearchBar from './SearchBar.jsx';
import ZoneList from './ZoneList.jsx';
import ZoneForm from './ZoneForm.jsx';

class ZoneBox extends React.Component {
  constructor() {
    super();
    this.state = {
      filterText: '',
      zones: []
    };
    this.loadZonesFromServer = this.loadZonesFromServer.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleZoneDelete = this.handleZoneDelete.bind(this);
    this.handleZoneSubmit = this.handleZoneSubmit.bind(this);
  }

  loadZonesFromServer() {
    const zones = [
      {id: 'a.a', kind: 'Master', dnssec: 0},
      {id: 'b.b', kind: 'Slave', dnssec: 0},
      {id: 'c.c', kind: 'Master', dnssec: 0},
      {id: 'd.d', kind: 'Native', dnssec: 0}
    ];
    this.setState({zones: zones});
  }

  componentDidMount() {
    this.loadZonesFromServer();
  }

  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  }

  handleZoneDelete(zoneToDelete) {
    const zones = this.state.zones;
    zones.forEach((zone, array_index) => {
      // if the zones names matches delete it.
      if ( zone.id.indexOf(zoneToDelete.id) !== -1) {
        zones.splice(array_index, 1);
      }
      return;
    });
    this.setState({zones: zones});
    console.log(this.state.zones);
  }

  handleZoneSubmit(zone) {
    const zones = this.state.zones;
    const newZones = zones.concat([zone]);
    this.setState({zones: newZones});
  }

  render() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput} />
        <ZoneList zones={this.state.zones} filterText={this.state.filterText} onZoneDelete={this.handleZoneDelete} />
        <ZoneForm onZoneSubmit={this.handleZoneSubmit} />
      </div>
    );
  }
}

export default ZoneBox;
