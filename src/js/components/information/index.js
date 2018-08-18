import { connect } from 'react-redux';
import information from './Information';

function mapStoreToProps(store) {
  return {
    information: store.search.selected
  };
}

export default connect(mapStoreToProps)(information);
