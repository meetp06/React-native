import {connect} from 'react-redux';
import {HomePage} from '../modules';
import {addToCart} from '../services/actions/Actions';

const mapDispatchToProps = dispatch => ({
  addToCartHandler: data => dispatch(addToCart(data)),
});

const mapStateToProps = state => {};

export default connect(mapDispatchToProps, mapStateToProps)(HomePage);
