
import React, { Component } from 'react'
// import Loader from 'react-loader-spinner'
import ShowProduct from './components/products/ShowProduct'
import Datas from './datas.json'
import Header from './components/products/Header'
import Empty from './components/products/Empty'
import Footer from './components/products/Footer'

class App3 extends Component {

    state = {
        total: 0,
        products: Datas,
        productFillter: Datas,
        arrCart: [],
        keyWord: '',
        countItem: 0,
        isEmpty: false,
        isDelete: false,
        isChange: false,
        value: true
    }

    isChange = () => {
        this.setState({
            isChange: true
        })
    }

    setInputTotal = (index, value) => {
        let newArr = this.state.productFillter;
        newArr[index].value = value;
        this.setState({
            productFillter: newArr
        })
    }

    handleIncre = (index, inputValue) => {
        if (inputValue !== '' && this.state.isChange) {
            let newArr = this.state.productFillter;
            newArr[index].count = inputValue;
            this.setState({
                productFillter: newArr,
                isChange: false
            })
        }
        let count = parseInt(this.state.productFillter[index].count) + 1;
        let newArr = this.state.productFillter;
        newArr[index].count = count;
        this.setState({
            productFillter: newArr,
            value: true
        })
    }

    handleDecre = (index, inputValue) => {
        if (inputValue !== '' && this.state.isChange) {
            let newArr = this.state.productFillter;
            newArr[index].count = inputValue;
            this.setState({
                productFillter: newArr,
                isChange: false,
            })
        }
        let count = parseInt(this.state.productFillter[index].count) - 1;
        count = count === 0 ? 1 : count;
        let newArr = this.state.productFillter;
        newArr[index].count = count;
        this.setState({
            productFillter: newArr,
            value: true
        })
    }

    handleChange = keyWord => {
        this.setState({
            keyWord
        }, () => {
            this.search(keyWord)
        })
    }

    search = (keyWord) => {
        const newArr = this.state.products.filter(data => data.name.toLowerCase().includes(keyWord.toLowerCase()))
        let isEmpty = newArr.length === 0 ? true : false

        this.setState({
            productFillter: newArr,
            isEmpty
        })
    }

    getValue = (name, index, inputValue) => {
        if (inputValue !== '') {
            this.state.productFillter[index].count = inputValue;
        }
        let item = this.state.products.find(item => item.name === name);
        if (!this.state.arrCart.find(item => item.name === name)) {
            this.state.arrCart.push(item)
            this.setState({
                countItem: this.state.countItem + 1
            })
        }
        const thuancute = parseInt(this.state.productFillter[index].cost * this.state.productFillter[index].count);
        this.setState({
            total: this.state.total + thuancute
        })
    }

    handleDelete = (name) => {
        let index;
        let newArr = this.state.arrCart.filter(item => item.name !== name);
        for (let i = 0; i < this.state.products.length; i++) {
            if (this.state.products[i].name === name) {
                index = i; break;
            }
        }
        const thuancute = parseInt(this.state.productFillter[index].cost * this.state.productFillter[index].count);
        this.setState({
            countItem: this.state.countItem - 1,
            total: this.state.total - thuancute,
            arrCart: newArr
        })
    }

    disable = () => {
        this.setState({
            value: false
        })
    }

    render() {
        const { productFillter, keyWord, arrCart, total, value, countItem } = this.state;

        return (
            <div>
                <div>
                    <Header
                        countItem={countItem}
                        total={total}
                        arrCart={arrCart}
                        handleDelete={this.handleDelete}
                        products={this.state.productFillter}
                        handleChange={this.handleChange}
                        search={this.search}
                    />
                    {!this.state.isEmpty ?
                        <ShowProduct
                            value={value}
                            products={productFillter}
                            keyWord={keyWord}
                            isChange={this.isChange}
                            disable={this.disable}
                            handleChangeTotal={this.handleChangeTotal}
                            setInputTotal={this.setInputTotal}
                            handleDecre={this.handleDecre}
                            handleIncre={this.handleIncre}
                            getValue={this.getValue}
                        />
                        : <Empty />}
                    <Footer />
                </div>
            </div>
        )
    }
}

export default App3