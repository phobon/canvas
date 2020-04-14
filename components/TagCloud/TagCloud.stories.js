import React from 'react';

import TagCloud from './TagCloud';

export default {
  component: TagCloud,
  title: 'Components/TagCloud',
};

export const withDefaultProps = () => <TagCloud />;

export const withTags = () => {
  const tags = ['tag1', 'tag2', 'tag3'];
  return (
    <TagCloud tags={tags} />
  );
};

export const withOverflow = () => {
  const tags = ['tag1', 'tag2', 'tag3', 'tag4', 'tag5'];
  return (
    <TagCloud tags={tags} />
  );
};

export const withDifferentMaxShown = () => {
  const tags = ['tag1', 'tag2', 'tag3'];
  return (
    <TagCloud tags={tags} maxShown={1} />
  );
};