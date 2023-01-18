import React from 'react';
import PropTypes from 'prop-types';
import { LineWave } from 'react-loader-spinner';

const Spinner = (props) => {
  const {
    wrapperClass, wrapperStyle, visible,
    firstLineColor, middleLineColor, lastLineColor,
    color, height, width, containerStyle,
  } = props;

  return (
    <div className="flex items-center justify-center" style={containerStyle}>
      <LineWave
        height={height}
        width={width}
        color={color}
        ariaLabel="line-wave"
        wrapperStyle={wrapperStyle}
        wrapperClass={wrapperClass}
        visible={visible}
        firstLineColor={firstLineColor}
        middleLineColor={middleLineColor}
        lastLineColor={lastLineColor}
      />
    </div>
  );
};

Spinner.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  color: PropTypes.string,
  wrapperClass: PropTypes.string,
  wrapperStyle: PropTypes.shape(),
  visible: PropTypes.bool,
  firstLineColor: PropTypes.string,
  middleLineColor: PropTypes.string,
  lastLineColor: PropTypes.string,
  containerStyle: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

Spinner.defaultProps = {
  height: '100',
  width: '100',
  color: '#272935',
  wrapperClass: '',
  wrapperStyle: {},
  visible: true,
  firstLineColor: '',
  middleLineColor: '',
  lastLineColor: '',
  containerStyle: {
    width: '100%',
    height: '100%',
  },
};

export default Spinner;
