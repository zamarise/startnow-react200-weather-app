import { connect } from 'react-redux';
import history from './history';

function mapStoreToProps(store) {
  return {
    history: store.search.all
  };
}

export default connect(mapStoreToProps)(history);
