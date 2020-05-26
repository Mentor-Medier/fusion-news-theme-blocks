/* eslint-disable camelcase */
import React, { Component } from 'react';
import { EventEmitter } from '@wpmedia/engine-theme-sdk';
import './event.scss';


/**
 * @file EventTester is a React Class Component
 * @summary Used for testing the event emitter.  When new events are created, they should be
 * subscribed to in this component in the constructor.
 * @extends Component
 */

class EventTester extends Component {
  constructor(props) {
    super(props);
    EventEmitter.subscribe('galleryImageNext', (event) => this.galleryHandler(event));
    EventEmitter.subscribe('galleryImagePrevious', (event) => this.galleryHandler(event));
  }

  // eslint-disable-next-line class-methods-use-this
  galleryHandler(event) {
    console.log('\n\nEvent: event.eventName caught: ', event);
  }

  render() {
    return (
      <div className="no-display"> </div>
    );
  }
}

export default EventTester;
