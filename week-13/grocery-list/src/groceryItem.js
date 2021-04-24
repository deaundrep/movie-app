import React, { useContext } from 'react'
import { GroceryItemContext } from './context/context'

function GroceryItem() {
    const {
        groceryItem: { id, grocery }
    } = useContext(GroceryItemContext)
    useContext(GroceryItemContext);
    // console.log(groceryItem);
    return (
        <div>
            {grocery}
            <button>Done</button>
            <button>Delete</button>
        </div>
    );
}

export default GroceryItem;