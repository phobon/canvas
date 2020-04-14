import React from "react";
import { Text } from '@phobon/base';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import PropTypes from 'prop-types';

dayjs.extend(relativeTime);

const LastSaved = ({ scheduled, completed, lastSaved, ...props }) => {
  let date;

  if (completed) {
    date = `Done ${dayjs().to(completed)}`;
  } else {
    if (lastSaved) {
      date = `Saved ${dayjs().to(lastSaved)}`;
    } else {
      date = dayjs().from(scheduled);
    }
  }

  return (
    <Text {...props}>{date}</Text>
  );
};

LastSaved.displayName = 'LastSaved';

LastSaved.propTypes = {
  scheduled: PropTypes.string,
  completed: PropTypes.string,
  lastSaved: PropTypes.string,
};

LastSaved.defaultProps = {
  scheduled: null,
  completed: null,
  lastSaved: null,
  color: 'grayscale.3',
  fontSize: 0,
};

export default LastSaved;