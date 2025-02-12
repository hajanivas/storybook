export {
  storiesOf,
  setAddon,
  addDecorator,
  addParameters,
  configure,
  getStorybook,
  forceReRender,
  raw,
} from './preview';

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}

// TODO: disable HMR and do full page loads because of customElements.define
