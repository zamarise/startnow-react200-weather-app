import { connect } from 'react-redux';
import search from './Search';

function mapStoreToProps(store) {
  return {
    name: store.search.name
  };
}

export default connect(mapStoreToProps)(search);
