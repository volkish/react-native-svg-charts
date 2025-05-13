import React from 'react';
import PropTypes from 'prop-types';
import { G, Line } from 'react-native-svg';

// Direction enum using object constants
const Direction = {
  VERTICAL: 'VERTICAL',
  HORIZONTAL: 'HORIZONTAL',
  BOTH: 'BOTH',
};

// Converted to functional component (was already functional, just modernized syntax)
const Horizontal = ({ ticks = [], y, svg }) => (
  <G>
    {ticks.map((tick) => (
      <Line
        key={tick}
        x1="0%"
        x2="100%"
        y1={y(tick)}
        y2={y(tick)}
        strokeWidth={1}
        stroke="rgba(0,0,0,0.2)"
        {...svg}
      />
    ))}
  </G>
);

Horizontal.propTypes = {
  y: PropTypes.func,
  ticks: PropTypes.array,
  svg: PropTypes.object,
};

// Converted to functional component with modern arrow function syntax
const Vertical = ({ ticks = [], x, svg }) => (
  <G>
    {ticks.map((tick, index) => (
      <Line
        key={index}
        y1="0%"
        y2="100%"
        x1={x(tick)}
        x2={x(tick)}
        strokeWidth={1}
        stroke="rgba(0,0,0,0.2)"
        {...svg}
      />
    ))}
  </G>
);

Vertical.propTypes = {
  x: PropTypes.func,
  ticks: PropTypes.array,
  svg: PropTypes.object,
};

// Simplified component using modern arrow function syntax
const Both = (props) => (
  <G>
    <Horizontal {...props} />
    <Vertical {...props} />
  </G>
);

Both.propTypes = {
  x: PropTypes.func,
  y: PropTypes.func,
  ticks: PropTypes.array,
  svg: PropTypes.object,
};

// Main Grid component using arrow function with destructuring
const Grid = ({
  direction = Direction.HORIZONTAL,
  belowChart = true,
  ...props
}) => {
  // Using early returns instead of if/else chain
  if (direction === Direction.VERTICAL) {
    return <Vertical {...props} />;
  }

  if (direction === Direction.HORIZONTAL) {
    return <Horizontal {...props} />;
  }

  if (direction === Direction.BOTH) {
    return <Both {...props} />;
  }

  return null;
};

// Attaching Direction enum to Grid for external use
Grid.Direction = Direction;

Grid.propTypes = {
  direction: PropTypes.oneOf(Object.values(Direction)),
  belowChart: PropTypes.bool,
  svg: PropTypes.object,
  x: PropTypes.func,
  y: PropTypes.func,
  ticks: PropTypes.array,
};

export default Grid;
