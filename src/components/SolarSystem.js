import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import '../css/SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="planetsContainer" data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planets">
          {
            planets.map(
              (planet, index) => (
                <PlanetCard
                  key={ index }
                  planetName={ planet.name }
                  planetImage={ planet.image }
                />
              ),
            )
          }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
