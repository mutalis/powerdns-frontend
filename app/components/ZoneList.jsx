import React from 'react';
import Zone from './Zone.jsx';

class ZoneList extends React.Component {
  constructor() {
    super();
  }

  render() {
    const zoneRows = [];
    this.props.zones.forEach((zone) => {
      if (zone.id.indexOf(this.props.filterText) === -1) {
        return;
      }
      zoneRows.push(<Zone zone={zone} key={zone.id} onZoneDelete={this.props.onZoneDelete} />);
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Domain</th>
            <th>Type</th>
            <th>DNSSEC</th>
          </tr>
        </thead>
        <tbody>{zoneRows}</tbody>
      </table>
    );
  }

}

ZoneList.propTypes = {
  zones: React.PropTypes.array,
  filterText: React.PropTypes.string.isRequired,
  onZoneDelete: React.PropTypes.func
};

ZoneList.defaultProps = {
  zones: [],
  filterText: ''
};

export default ZoneList;
