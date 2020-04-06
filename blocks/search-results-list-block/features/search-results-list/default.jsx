import React from 'react';
import PropTypes from 'prop-types';
import CustomSearchResultsList from './_children/custom-content';
import GlobalContentSearch from './_children/global-content';

const SearchResultsListContainer = (
  {
    customFields: {
      inheritGlobalContent = true,
    } = {},
  } = {},
) => {
  if (inheritGlobalContent) {
    // console.log('using gc');
    return <GlobalContentSearch />;
  }

  return <CustomSearchResultsList />;
};


SearchResultsListContainer.label = 'Search Results ListYee – Arc Block';

SearchResultsListContainer.propTypes = {
  customFields: PropTypes.shape({
    searchContentConfig: PropTypes.contentConfig().tag({
      group: 'Configure Content',
      label: 'Display Content Info',
    }),
    inheritGlobalContent: PropTypes.bool.tag({
      group: 'Configure Content',
    }),
  }),
};

export default SearchResultsListContainer;
