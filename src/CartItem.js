import React from 'react';

class CartItem extends React.Component {
  constructor () {
    super();
    this.state = {
      price: 999,
      title: 'Mobile Phone',
      qty: 1,
      img: ''
    }
    
  }
  increaseQuantity = () => {
   
    // setState form 1
    // this.setState({
    //   qty: this.state.qty + 1
    // });

    // setState form 2 - if prevState required use this
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1
      }
    });
  }

  decreaseQuantity = () =>{
    this.setState((prevState) => {
      console.log()

      if(prevState.qty > 1){
        return {
          qty: prevState.qty - 1
          }
        }
    });
  }
  render () {
    const { price, title, qty } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons.flaticon.com/png/512/3114/premium/3114793.png?token=exp=1639906417~hmac=2cd9dfe8a1ac7adc716e4418313e6d85"
              onClick={this.increaseQuantity}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
              onClick={this.decreaseQuantity}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;