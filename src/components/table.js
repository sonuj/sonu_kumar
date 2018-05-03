import React from 'react';
import {Grid, Cell,Textfield} from 'react-mdl';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import myData from '../helper/detail.json';

export default class Task extends React.Component {
    constructor(){
        super();
        this.state = {
            products : myData.characters,
            searchText:'',
            sortVal:-1
        }
        this.handleChange = this.handleChange.bind(this)
    }
    _drawDom(){
        let {products,searchText,sortVal} = this.state;
        if(sortVal == '1')
            this._sortDropdown(products,'characterName')
        else if(sortVal == '2')
            this._sortDropdown(products,'houseName')
        return products.map((ev,i)=>{
            if(ev.characterName.toLowerCase().search(searchText.toLowerCase()) !== -1)            
                return(
                        <Cell col = {3} key ={i+'dom'}>
                            <div>Name:- {ev.characterName}</div>
                            <div>House name:- {ev.houseName}</div>
                            <img src = {ev.characterImageFull} style = {{width:40,height:40}}/>
                            {ev.parents ? 
                                <div>parents:- {this._getFilterItem(Array.isArray(ev.parents) ? ev.parents.join() : ev.parents)}</div>
                            :null}
                            {ev.killedBy ? 
                                <div>Killed by:- {this._getFilterItem(Array.isArray(ev.killedBy) ? ev.killedBy.join() : ev.killedBy)}</div>
                            :null}
                        </Cell>
                    )
        })
    }
    _getFilterItem(killedItem){
        let {products} = this.state,arr = [];
        for(let i in products){
            if(killedItem){
                for(let y in killedItem.split(',')){
                    if(products[i].characterName == killedItem.split(',')[y]){
                        arr.push(
                                <div className = "killed">
                                    <div>{products[i].characterName}</div>
                                    <div>{products[i].houseName}</div>
                                    <img src = {products[i].characterImageFull} style = {{width:40,height:40}}/>
                                    {products[i].parents ? 
                                        <div>parents:- {Array.isArray(products[i].parents) ? products[i].parents.join() : products[i].parents}</div>
                                    :null}
                                </div>
                            )
                    }
                }
            }
        }
        return arr;
    }
    _sortDropdown(list,param){
        list.sort(function compare(a,b) {
            if (a[param].toUpperCase() < b[param].toUpperCase())
                return -1;
            if (a[param].toUpperCase() > b[param].toUpperCase())
                return 1;
            return 0;
        });
        return list;
    }
    handleChange(event,index,value){
        let {products} = this.state
        this.setState({
            sortVal:value
        })
    }
    _searchFilter(event,value){
        this.setState({
            searchText:event.target.value
        })
    }
    
    render() {
        let {searchText,sortVal} = this.state
        return (
            <div className = "main-div">
                <Grid>
                    <Cell col= {2} className ="filter">Filter:- </Cell>
                    <Cell col= {3}>
                        <Textfield
                            onChange={this._searchFilter.bind(this)}
                            label="Search by anything"
                            value= {searchText||''}
                            style={{width: '200px'}}
                        />
                    </Cell>
                    <Cell col= {3} className = "select">
                        <SelectField
                            floatingLabelText="Sort by Name"
                            value={sortVal||''}
                            onChange={this.handleChange}
                        >
                            <MenuItem value={-1} primaryText="Please select field" />
                            <MenuItem value={1} primaryText="Sort by characters name" />
                            <MenuItem value={2} primaryText="Sort by house name" />
                        </SelectField>
                    </Cell>
                </Grid>
                <Grid>{this._drawDom()}</Grid>
            </div>
        );
    }
}