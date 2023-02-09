import {BaseSerializer} from '@mile-hi-labs/react-data';

class AppSerializer extends BaseSerializer {
  constructor(store, props) {
    super(store, props);
  }

  get attrs() {
    return {
      ...super.attrs,
      icon: {serialize: false},
      createdAt: {serialize: false},
      updatedAt: {serialize: false},
    };
  }

  // Methods
  serializeAttr(data, key) {
    let formattedKey = super.serializeAttr(data, key);
    return formattedKey;
  }
}

export default AppSerializer;
