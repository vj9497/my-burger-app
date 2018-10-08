
import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const items = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
    <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
        {
            items.map(item => <BuildControl key={item.label} label={item.label} disabled={props.disabled[item.type]} removed={()=>props.removeIncredient(item.type)} added={()=>props.addIncredient(item.type)}/>)
        }
    <button className={classes.OrderButton} disabled={!props.purchasable}>Order Now</button>
    </div>
)

export default BuildControls;