import React from 'react';
import PropType from 'prop-types';
import '../css/Title.css';

class Title extends React.Component {
  render() {
    const { headline } = this.props;

    return (
      <h2 className="title">{ headline }</h2>
    );
  }
}

Title.propTypes = {
  headline: PropType.string,
};

Title.defaultProps = {
  headline: 'titulo',
};

export default Title;
