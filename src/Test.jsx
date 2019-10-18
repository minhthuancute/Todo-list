
import React, { Component } from 'react'
import axios from 'axios'
import './test.scss'

class Test extends Component {

    state = {
        inputValue: "",
        datas: []
    }

    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleSearch = async (e) => {
        e.preventDefault();
        const keyWords = this.state.inputValue;
        const header = {
            "content-type": 'application/x-www-form-urlencoded',
            "Access-Control-Allow-Origin": "*"
        }
        const url = `https://itunes.apple.com/search?media=music&term=${keyWords}`;

        const res_api = await axios.post(url, header);
        const datas = res_api.data.results;
        this.setState({ datas });

        console.log(this.state.datas);
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <form onSubmit={this.handleSearch}>
                        <input onChange={this.handleChange} placeholder="Name of song"></input><br></br>
                        <button onClick={this.handleSearch} className="ml-3 btn btn-success">Search</button>
                    </form>
                    <div className="list-song">
                        {this.state.datas &&
                            this.state.datas.map((item, index) => (
                                <div key={index} className="item">
                                    <div className="left">
                                        <a href={item.collectionViewUrl} target="_blank">
                                            <img src={item.artworkUrl60} alt={item.trackName}></img>
                                        </a>
                                        <div className="text">
                                            <a href={item.collectionViewUrl} target="_blank">
                                                <h2>{item.trackName}</h2>
                                            </a>
                                            <p>{item.artistName}</p>
                                        </div>
                                    </div>

                                    <div className="right">
                                        <a className="view" href={item.collectionViewUrl} target="_blank">Preview</a>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Test;