import React from 'react';
import Zone from './Zone';
import CSSModules from 'react-css-modules';
import styles from './table.scss';

class ZoneList extends React.Component {
  static propTypes = {
    zones: React.PropTypes.array.isRequired,
    filterText: React.PropTypes.string.isRequired,
    onZoneDelete: React.PropTypes.func.isRequired
  };

  static defaultProps = {
    zones: [],
    filterText: ''
  };

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
            <th styleName='text'>Domain</th>
            <th>Type</th>
            <th>DNSSEC</th>
          </tr>
        </thead>
        <tbody>{zoneRows}</tbody>
      </table>
    );
  }

}

export default CSSModules(ZoneList, styles);
