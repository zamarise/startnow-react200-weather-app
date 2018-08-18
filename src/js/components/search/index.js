import { connect } from 'react-redux';
import search from './search';

function mapStoreToProps(store) {
  return {
    name: store.search.name
  };
}

export default connect(mapStoreToProps)(search);
