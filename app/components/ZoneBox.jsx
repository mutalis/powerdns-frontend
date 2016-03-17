import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ZoneList from './ZoneList';
import ZoneForm from './ZoneForm';

class ZoneBox extends React.Component {
  static propTypes = {
    url: React.PropTypes.string.isRequired
  };

  static defaultProps = {
    url: ''
  };

  state = {
    filterText: '',
    zones: []
  };

  constructor() {
    super();
    this.loadZonesFromServer = this.loadZonesFromServer.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleZoneDelete = this.handleZoneDelete.bind(this);
    this.handleZoneSubmit = this.handleZoneSubmit.bind(this);
  }

  loadZonesFromServer() {
    axios.get(this.props.url)
      .then((response) => {
        const zones = response.data;
        this.setState({zones: zones});
      })
      .catch((response) => {
        if (response instanceof Error) {
          // Something happened in setting up the request that triggered an Error
          console.log('Error:', response.message);
        } else {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          console.log(response.data);
          console.log(response.status);
          console.log(response.headers);
          console.log(response.config);
        }
      });
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
