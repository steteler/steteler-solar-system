import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import '../css/Missions.css';

class Missions extends React.Component {
  render() {
    return (
      <div className="missionsContainer" data-testid="missions">
        <Title headline="Missões" />
        <section className="missions">
          {
            missions.map(
              (mission, index) => (
                <MissionCard
                  key={ index }
                  name={ mission.name }
                  year={ mission.year }
                  country={ mission.country }
                  destination={ mission.destination }
                />
              ),
            )
          }
        </section>
      </div>
    );
  }
}

export default Missions;
