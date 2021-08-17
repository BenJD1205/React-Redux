import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Carts from '../components/Carts';
import CartItem from '../components/CartItem';
import * as Message from '../constants/Message';
import CartResult from '../components/CartResult';
import {actRemoveProductInCart, actChangeMessage , actUpdateProductInCart} from '../actions/index';

class CartContainer extends Component {
    render() {
        let {cart} = this.props;
        return(
           <Carts >
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
           </Carts>
        )
    }

    showCartItem = (cart) => {
        var {onDeleteProductInCart, onChangeMessage, onUpdateQuantity} = this.props;
        var result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
        if(cart.length >0){
            result = cart.map((item,index) => {
                return (
                    <CartItem 
                        key={index}
                        item={item}
                        index={index}
                        onDeleteProductInCart={onDeleteProductInCart}
                        onChangeMessage={onChangeMessage}
                        onUpdateQuantity={onUpdateQuantity}
                    />
                )
            })
        }
        return result;
    }

    showTotalAmount = (cart) => {
        var result = null;
        if(cart.length > 0){
            result = <CartResult cart={cart} />
        }
        return result;
    }

}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }).isRequired, 
            quantity: PropTypes.number.isRequired
        })
    ).isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onDeleteProductInCart: PropTypes.func.isRequired,
    onUpdateQuantity: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        cart:state.cart
    }
} 

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actRemoveProductInCart(product));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        },
        onUpdateQuantity: (product,quantity) => {
            dispatch(actUpdateProductInCart(product,quantity));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);