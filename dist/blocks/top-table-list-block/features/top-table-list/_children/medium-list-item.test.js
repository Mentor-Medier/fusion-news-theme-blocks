"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var config = {
  showOverlineXL: true,
  showHeadlineXL: true,
  // headlinePositionXL: 'below',
  showImageXL: true,
  showDescriptionXL: true,
  showBylineXL: true,
  showDateXL: true,
  showOverlineLG: true,
  showHeadlineLG: true,
  // headlinePositionLG: 'below',
  showImageLG: true,
  showDescriptionLG: true,
  showBylineLG: true,
  showDateLG: true,
  showHeadlineMD: true,
  // headlinePositionMD: 'above',
  showImageMD: true,
  showDescriptionMD: true,
  showBylineMD: true,
  showDateMD: true,
  showHeadlineSM: true,
  // headlinePositionSM: 'below',
  showImageSM: true
}; // const headBelowConfig = {
//   showOverlineXL: true,
//   showHeadlineXL: true,
//   headlinePositionXL: 'below',
//   showImageXL: true,
//   showDescriptionXL: true,
//   showBylineXL: true,
//   showDateXL: true,
//   showOverlineLG: true,
//   showHeadlineLG: true,
//   headlinePositionLG: 'below',
//   showImageLG: true,
//   showDescriptionLG: true,
//   showBylineLG: true,
//   showDateLG: true,
//   showHeadlineMD: true,
//   headlinePositionMD: 'below',
//   showImageMD: true,
//   showDescriptionMD: true,
//   showBylineMD: true,
//   showDateMD: true,
//   showHeadlineSM: true,
//   headlinePositionSM: 'below',
//   showImageSM: true,
// };

describe('medium list item', function () {
  beforeAll(function () {
    jest.mock('fusion:themes', function () {
      return jest.fn(function () {
        return {};
      });
    });
    jest.mock('@wpmedia/engine-theme-sdk', function () {
      return {
        Image: function Image() {
          return /*#__PURE__*/_react["default"].createElement("img", {
            alt: "placeholder"
          });
        }
      };
    });
    jest.mock('fusion:properties', function () {
      return jest.fn(function () {
        return {
          fallbackImage: 'placeholder.jpg'
        };
      });
    });
    jest.mock('fusion:context', function () {
      return {
        useFusionContext: jest.fn(function () {
          return {
            arcSite: 'the-sun',
            globalContent: {}
          };
        })
      };
    });
  });
  afterAll(function () {
    jest.resetModules();
  });
  it('renders title and image with full props', function () {
    var imageURL = 'pic';
    var constructedURL = 'url';
    var itemTitle = 'title';
    var descriptionText = 'description';
    var primaryFont = 'arial';
    var secondaryFont = 'Georgia';
    var by = ['jack'];
    var element = {
      credits: {
        by: []
      }
    };
    var displayDate = '';
    var id = 'test';

    var _require = require('./medium-list-item'),
        MediumListItem = _require["default"];

    var subTypeClassName = 'subtype_longread'; // eslint-disable-next-line no-unused-vars

    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(MediumListItem, {
      imageURL: imageURL,
      constructedURL: constructedURL,
      itemTitle: itemTitle,
      descriptionText: descriptionText,
      primaryFont: primaryFont,
      secondaryFont: secondaryFont,
      by: by,
      element: element,
      displayDate: displayDate,
      id: id,
      customFields: config,
      subType: subTypeClassName
    })); // placeholder

    expect(wrapper.find('.top-table-med-image-placeholder').length).toBe(0); // doesn't find spacer
    // expect(wrapper.find('.headline-description-spacing').length).toBe(0);
    // finds description text

    expect(wrapper.find('p.description-text').text()).toBe(descriptionText);
    expect(wrapper.find('MediumListItem > hr').length).toBe(1);
    expect(wrapper.find('MediumListItem > article').hasClass(subTypeClassName)).toBe(true);
  }); // it('headline has class headline-above when headline position is above', () => {
  //   const imageURL = 'pic';
  //   const constructedURL = 'url';
  //   const itemTitle = 'title';
  //   const descriptionText = 'description';
  //   const primaryFont = 'arial';
  //   const secondaryFont = 'Georgia';
  //   const by = ['jack'];
  //   const element = { credits: { by: [] } };
  //   const displayDate = '';
  //   const id = 'test';
  //   const { default: MediumListItem } = require('./medium-list-item');
  //   // eslint-disable-next-line no-unused-vars
  //   const wrapper = mount(<MediumListItem
  //     imageURL={imageURL}
  //     constructedURL={constructedURL}
  //     itemTitle={itemTitle}
  //     descriptionText={descriptionText}
  //     primaryFont={primaryFont}
  //     secondaryFont={secondaryFont}
  //     by={by}
  //     element={element}
  //     displayDate={displayDate}
  //     id={id}
  //     customFields={config}
  //   />);
  //   expect(wrapper.find('.headline-above').length).toBe(1);
  //   expect(wrapper.find('.headline-below').length).toBe(0);
  // });
  // it('headline has class headline-below when headline position is below', () => {
  //   const imageURL = 'pic';
  //   const constructedURL = 'url';
  //   const itemTitle = 'title';
  //   const descriptionText = 'description';
  //   const primaryFont = 'arial';
  //   const secondaryFont = 'Georgia';
  //   const by = ['jack'];
  //   const element = { credits: { by: [] } };
  //   const displayDate = '';
  //   const id = 'test';
  //   const { default: MediumListItem } = require('./medium-list-item');
  //   // eslint-disable-next-line no-unused-vars
  //   const wrapper = mount(<MediumListItem
  //     imageURL={imageURL}
  //     constructedURL={constructedURL}
  //     itemTitle={itemTitle}
  //     descriptionText={descriptionText}
  //     primaryFont={primaryFont}
  //     secondaryFont={secondaryFont}
  //     by={by}
  //     element={element}
  //     displayDate={displayDate}
  //     id={id}
  //     customFields={headBelowConfig}
  //   />);
  //   expect(wrapper.find('.headline-below').length).toBe(1);
  //   expect(wrapper.find('.headline-above').length).toBe(0);
  // });

  it('renders image placeholder with empty props', function () {
    var _require2 = require('./medium-list-item'),
        MediumListItem = _require2["default"];

    var imageURL = '';
    var constructedURL = 'url';
    var itemTitle = '';
    var descriptionText = '';
    var primaryFont = 'arial';
    var secondaryFont = 'Georgia';
    var by = [];
    var element = {};
    var displayDate = '';
    var id = 'test';
    var subTypeClassName = 'subtype_longread'; // eslint-disable-next-line no-unused-vars

    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(MediumListItem, {
      imageURL: imageURL,
      constructedURL: constructedURL,
      itemTitle: itemTitle,
      descriptionText: descriptionText,
      primaryFont: primaryFont,
      secondaryFont: secondaryFont,
      by: by,
      element: element,
      displayDate: displayDate,
      id: id,
      customFields: config,
      subType: subTypeClassName
    }));
    var placeholderImage = wrapper.find('img'); // There should be no imag present

    expect(placeholderImage.length).toBe(1);
    expect(placeholderImage.html()).toBe('<img alt="placeholder">'); // doesn't find a headline

    expect(wrapper.find('a.md-promo-headline').length).toBe(0);
    expect(wrapper.find('MediumListItem > hr').length).toBe(1);
    expect(wrapper.find('MediumListItem > article').hasClass(subTypeClassName)).toBe(true);
  });
  it('renders image placeholder with empty props with bottom border', function () {
    var _require3 = require('./medium-list-item'),
        MediumListItem = _require3["default"];

    var imageURL = '';
    var constructedURL = 'url';
    var itemTitle = '';
    var descriptionText = '';
    var primaryFont = 'arial';
    var secondaryFont = 'Georgia';
    var by = [];
    var element = {};
    var displayDate = '';
    var id = 'test';
    config.showBottomBorderMD = true; // eslint-disable-next-line no-unused-vars

    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(MediumListItem, {
      imageURL: imageURL,
      constructedURL: constructedURL,
      itemTitle: itemTitle,
      descriptionText: descriptionText,
      primaryFont: primaryFont,
      secondaryFont: secondaryFont,
      by: by,
      element: element,
      displayDate: displayDate,
      id: id,
      customFields: config
    }));
    var placeholderImage = wrapper.find('img'); // There should be no imag present

    expect(placeholderImage.length).toBe(1);
    expect(placeholderImage.html()).toBe('<img alt="placeholder">'); // doesn't find a headline

    expect(wrapper.find('a.md-promo-headline').length).toBe(0);
    expect(wrapper.find('hr').length).toBe(1);
    expect(wrapper.find('hr').hasClass('hr-borderless')).toBe(false);
    expect(wrapper.find('MediumListItem > hr').length).toBe(1);
  });
  it('renders image placeholder with empty props without bottom border', function () {
    var _require4 = require('./medium-list-item'),
        MediumListItem = _require4["default"];

    var imageURL = '';
    var constructedURL = 'url';
    var itemTitle = '';
    var descriptionText = '';
    var primaryFont = 'arial';
    var secondaryFont = 'Georgia';
    var by = [];
    var element = {};
    var displayDate = '';
    var id = 'test';
    config.showBottomBorderMD = false; // eslint-disable-next-line no-unused-vars

    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(MediumListItem, {
      imageURL: imageURL,
      constructedURL: constructedURL,
      itemTitle: itemTitle,
      descriptionText: descriptionText,
      primaryFont: primaryFont,
      secondaryFont: secondaryFont,
      by: by,
      element: element,
      displayDate: displayDate,
      id: id,
      customFields: config
    }));
    var placeholderImage = wrapper.find('img'); // There should be no imag present

    expect(placeholderImage.length).toBe(1);
    expect(placeholderImage.html()).toBe('<img alt="placeholder">'); // doesn't find a headline

    expect(wrapper.find('a.md-promo-headline').length).toBe(0);
    expect(wrapper.find('hr').hasClass('hr-borderless')).toBe(true);
    expect(wrapper.find('MediumListItem > hr').length).toBe(1);
  });
});