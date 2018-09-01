import React, { Component } from 'react';
import axios from 'axios';
import { API_URL_1 } from '../supports/api-url/apiurl';

class MovieManage extends Component {

    onBtnEditClick=() =>{

    }

    onBtnDeleteClick(movieId){

    }

    onBtnAddClick=() =>{

    }
    
    render() {
        return (
            <div style={{paddingTop: "100px"}} className="container">
                <div className="row">
                    <div className="col-xs-12">
                    <div className="box">
                        <div className="box-header">
                        <h3 className="box-title">Movie List</h3>
                        </div>
                        <div className="box-body">
                        <table id="example2" className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>Judul</th>
                                    <th>Deskripsi</th>
                                    <th>Link Browser</th>
                                    <th>Tahun</th>
                                    <th>Gambar</th>  
                                </tr>
                                
                            </thead>
                            <tbody>
                                <tr>
                                <td>Avenger</td>
                                <td>kdjklaj dajdklaj djdkaj djakj</td>
                                <td a href="https://www.imdb.com/title/tt2975590/">#movie1</td>
                                <td>2010</td>
                                <td><div style={{marginTop:"2px"}}>
                                    <input type="button" className="btn btn-active" value="edit" onClick={this.onEditClick}></input>&nbsp;&nbsp;
                                    <input type="button" className="btn btn-danger" value="delete" onClick={this.onDeleteClick}></input>
                                </div></td>
                                </tr>
                                <tr>
                                <td>Spedahman</td>
                                <td>kdjklaj dajdklaj djdkaj djakj</td>
                                <td a href="https://www.imdb.com/title/tt2975590/">#movie2</td>
                                <td>2023</td>
                                <td><div style={{marginTop:"2px"}}>
                                    <input type="button" className="btn btn-active" value="edit" onClick={this.onEditClick}></input>&nbsp;&nbsp;
                                    <input type="button" className="btn btn-danger" value="delete" onClick={(()=>{this.onBnDeleteClick})}></input>
                                </div></td>
                                </tr>
                            
                            </tbody>
                            <tfoot>
                                <tr>
                                <th><td></td>
                                    </th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <td><div style={{marginTop:"2px"}}>
                                    <input type="button" className="btn btn-active" value="add" onClick={this.onBtnAddClick}></input>&nbsp;
                                </div></td>
                                </tr>
                            </tfoot>
                            
                            </table>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieManage;