
import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INCREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component{

    state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice : 4,
        isPurchasable : false
    }

    updatePurchaseHandle = (ingredients) =>{
        console.log(ingredients);
        const sum = Object.keys(ingredients)
        .map(key => ingredients[key])
        .reduce((sum, el) => {
            return sum+el;
        }, 0);

        console.log(sum);
        this.setState({isPurchasable : sum > 0});
    }

    addIncredient = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updateIncredients = {
            ...this.state.ingredients
        };
        updateIncredients[type] = updateCount;

        const itemPrice = INCREDIENT_PRICES[type];
        const totalPrice = this.state.totalPrice;
        const newPrice = totalPrice + itemPrice;
        this.setState({ingredients: updateIncredients, totalPrice: newPrice});
        this.updatePurchaseHandle(updateIncredients);

    }

    removeIncredient = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <=0) {
            return true;
        } 
        const updateCount = oldCount-1;
        const updateIncredients = {
            ...this.state.ingredients
        };
        updateIncredients[type] = updateCount;
       
        const itemPrice = INCREDIENT_PRICES[type];
        const totalPrice = this.state.totalPrice;
        const newPrice = totalPrice - itemPrice;

        this.setState({ingredients : updateIncredients, totalPrice : newPrice});
        this.updatePurchaseHandle(updateIncredients);
    }

    render(){

        const ingredientsInfo = {...this.state.ingredients};
        for(let key in ingredientsInfo){
            ingredientsInfo[key] = ingredientsInfo[key] <=0;
        }
        console.log(this.state.isPurchasable);
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls addIncredient={this.addIncredient} removeIncredient = {this.removeIncredient} price={this.state.totalPrice} disabled ={ingredientsInfo} purchasable={this.state.isPurchasable}/>
            </Aux>
        )
    }

}

export default BurgerBuilder;