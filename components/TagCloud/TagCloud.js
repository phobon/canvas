import React from 'react';

import {
  BoxList,
  BoxListItem,
} from '@phobon/base';
import { Tag } from '@phobon/grimoire';

const TagCloud = ({ tags, maxShown, color, bg, ...props }) => {
  const shownTags = [];
  if (!tags) {
    shownTags.push('No tags to show');
  } else if (tags.length > maxShown) {
    shownTags.push(...tags.slice(0, maxShown), `+${tags.length - maxShown}`);
  } else {
    shownTags.push(...tags);
  }

  return (
    <BoxList flexDirection="row" flexWrap="wrap" {...props}>
      {shownTags.map(t => (
        <BoxListItem key={t}>
          <Tag color={color} bg={bg}>{t}</Tag>
        </BoxListItem>
      ))}
    </BoxList>
  );
};

TagCloud.defaultProps = {
  maxShown: 3,
  color: 'grayscale.3',
  bg: 'grayscale.8',
  space: 2,
};

export default TagCloud;