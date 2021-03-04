"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _storySizeConstants = require("../shared/storySizeConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-classes-per-file */
const config = {
  showOverlineXL: true,
  showHeadlineXL: true,
  showImageXL: true,
  showDescriptionXL: true,
  showBylineXL: true,
  showDateXL: true,
  showOverlineLG: true,
  showHeadlineLG: true,
  showImageLG: true,
  showDescriptionLG: true,
  showBylineLG: true,
  showDateLG: true,
  showHeadlineMD: true,
  showImageMD: true,
  showDescriptionMD: true,
  showBylineMD: true,
  showDateMD: true,
  showHeadlineSM: true,
  showImageSM: true
};
describe('conditional story item', () => {
  beforeAll(() => {
    jest.mock('./small-list-item', () => class SmallListItem {});
    jest.mock('./medium-list-item', () => class MediumListItem {});
    jest.mock('./horizontal-overline-image-story-item', () => class HorizontalOverlineImageStoryItem {});
    jest.mock('./vertical-overline-image-story-item', () => class VerticalOverlineImageStoryItem {});
    jest.mock('fusion:themes', () => jest.fn(() => ({})));
  });
  afterAll(() => {
    jest.resetModules();
  });
  it('renders a small component if small passed in', () => {
    const {
      default: ConditionalStoryItem
    } = require('./conditional-story-item');

    const storySize = _storySizeConstants.SMALL;
    const wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(ConditionalStoryItem, {
      storySize: storySize,
      customFields: config
    }));
    expect(wrapper.is('SmallListItem')).toBeTruthy();
  });
  it('renders a medium component if small passed in', () => {
    const {
      default: ConditionalStoryItem
    } = require('./conditional-story-item');

    const storySize = _storySizeConstants.MEDIUM;
    const wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(ConditionalStoryItem, {
      storySize: storySize,
      customFields: config
    }));
    expect(wrapper.is('MediumListItem')).toBeTruthy();
  });
  it('renders a large component if small passed in', () => {
    const {
      default: ConditionalStoryItem
    } = require('./conditional-story-item');

    const storySize = _storySizeConstants.LARGE;
    const wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(ConditionalStoryItem, {
      storySize: storySize,
      customFields: config
    }));
    expect(wrapper.is('HorizontalOverlineImageStoryItem')).toBeTruthy();
  });
  it('renders a extra large component if small passed in', () => {
    const {
      default: ConditionalStoryItem
    } = require('./conditional-story-item');

    const storySize = _storySizeConstants.EXTRA_LARGE;
    const wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(ConditionalStoryItem, {
      storySize: storySize,
      customFields: config
    }));
    expect(wrapper.is('VerticalOverlineImageStoryItem')).toBeTruthy();
  });
});