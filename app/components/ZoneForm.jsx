import React from 'react';

class ZoneForm extends React.Component {
  static propTypes = {
    onZoneSubmit: React.PropTypes.func.isRequired
  };

  state = {
    id: '',
    kind: 'Master',
    dnssec: 0
  };

  constructor() {
    super();
    this.handleDomainChange = this.handleDomainChange.bind(this);
    this.handleKindChange = this.handleKindChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDomainChange(e) {
    this.setState({id: e.target.value});
  }

  handleKindChange(e) {
    this.setState({kind: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const domain = this.state.id.trim();
    const kind = this.state.kind.trim();
    if (!domain || !kind) {
      return
    }
    this.props.onZoneSubmit({id: domain, kind: kind, dnssec: 0});
    this.setState({id: '', kind: 'Master', dnssec: 0});
  }

  render() {
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
}

export default ZoneForm;
