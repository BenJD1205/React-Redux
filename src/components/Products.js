import React,{Component} from 'react';

class Products extends Component {
    render() {
        return(
            <div>
                {/* Product*/}
                <section className="section">
                    <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                    <div className="row">
                        {/* Product*/}
                        {
                            this.props.children
                        }
                    </div>
                </section>
            </div>
        )
    }

    
}


export default Products;