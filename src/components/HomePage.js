import React, { Component } from 'react';
import axios from 'axios';
import { API_URL_1 } from '../supports/api-url/apiurl';
import CarouselBro from './CarouselBro';
import image1 from '../images/bdo1.jpg';
import image2 from '../images/bdo2.jpg';
import image3 from '../images/back.jpg';


class HomePage extends Component {

    onEditClick = () => {
        var id = 'HfdPyfh';
        axios.put (API_URL_1 + '/users/' + id, {
            username: "HfdPyfh",
            email: "keko.gallery@yahoo.com",
            password: "test123"
        }).then ((response) =>{
            alert("edit succsess");
            console.log(response);
        }).catch((err) => {
            alert("edit fail");
            console.log(err);
        })
    }

    onDeleteClick= () => {
        var id ="~_EzX8o";
        axios.delete(API_URL_1 + '/users/' + id, {
            username: "~_EzX8o",
            email: "keko.gallery@yahoo.com",
            password: "test123"
        }).then ((response) =>{
            alert("Delete succsess");
            console.log(response);
        }).catch((err) => {
            alert("Delate fail");
            console.log(err);
        })
    }

    render() {
        return (
            <div style={{ marginTop: "80px" }}>
                <CarouselBro 
                    legend1={"BDO Image 1"} 
                    image1={image1} 
                    legend2={"BDO Image 2"} 
                    image2={image2} 
                    legend3={"BDO Image 3"} 
                    image3={image3}
                    munculText={false}
                    textnya={"Hello Bro Coy"}
                />
                <div style={{marginTop:"20px"}}>
                    <input type="button" className="btn btn-active" value="edit" onClick={this.onEditClick}></input>&nbsp;
                    <input type="button" className="btn btn-danger" value="delete" onClick={this.onDeleteClick}></input>
                </div>
            </div>
        );
    }
}

export default HomePage;