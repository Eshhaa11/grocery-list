import { useState } from "react";

function Grocery () {

    const [grocitem , setGrocItem] = useState([]);
    const [newGroc , setNewGroc] = useState('');
 
    function addItem() {
        if (newGroc === "") return;
        setNewGroc ([...grocitem, { name: newGroc, checked: false }]);
        setNewItem("");

    }











    return (
        <div>
            
        </div>
    )
}

export default Grocery;