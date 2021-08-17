
import React,{Component} from 'react'; 
import Header from './components/Header';
import ProductContainer from './containers/ProductContainer';
import CartContainer from './containers/CartContainer';
import Footer from './components/Footer';
import MessageContainer from './containers/MessageContainer';
// import {Header,Products,Carts,Message} from './components';

class App extends React.Component {
    render() {
      return (
        <div>
            {/* Header*/}
            <Header/>
            
            <main id="mainContainer">
                <div className="container">
                    {/* Product*/}
                    <ProductContainer />
                    {/* Message*/}
                    <MessageContainer />
                    {/* Cart */}
                    {/* <Carts /> */}
                    <CartContainer/>
                </div>
            </main>
            {/* Footer*/}
            <Footer />
        </div>
      );
    } 
}
export default App;
