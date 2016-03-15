import React from 'react';

class Zone extends React.Component {
  static propTypes = {
    zone: React.PropTypes.shape({id: React.PropTypes.string, kind: React.PropTypes.string, dnssec: React.PropTypes.number}).isRequired,
    key: React.PropTypes.string.isRequired,
    onZoneDelete: React.PropTypes.func.isRequired
  };

  static defaultProps = {
    zone: {},
    key: ''
  };

  constructor() {
    super();
    this.handleDeleteZone = this.handleDeleteZone.bind(this);
  }

  handleDeleteZone() {
    this.props.onZoneDelete(this.props.zone);
  }

  render() {
    return (
      <tr>
        <td>{this.props.zone.id}</td>
        <td>{this.props.zone.kind}</td>
        <td>{this.props.zone.dnssec}</td>
        <td><button id="delete-zone-button" onClick={this.handleDeleteZone}>Delete Zone</button></td>
      </tr>
    );
  }
}

export default Zone;
