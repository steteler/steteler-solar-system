import React from 'react';
import PropType from 'prop-types';
import '../css/MissionCard.css';

class MissionCard extends React.Component {
  render() {
    const {
      name,
      year,
      country,
      destination,
    } = this.props;
    return (
      <div className="missionCard" data-testid="mission-card">
        <p data-testid="mission-name">{ name }</p>
        <p data-testid="mission-year">{ year }</p>
        <p data-testid="mission-country">{ country }</p>
        <p data-testid="mission-destination">{ destination }</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropType.string.isRequired,
  year: PropType.string.isRequired,
  country: PropType.string.isRequired,
  destination: PropType.string.isRequired,
};

export default MissionCard;
