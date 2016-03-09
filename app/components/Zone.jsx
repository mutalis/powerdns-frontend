import React from 'react';

class Zone extends React.Component {
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
        <td><button onClick={this.handleDeleteZone}>Delete Zone</button></td>
      </tr>
    );
  }
}

export default Zone;
