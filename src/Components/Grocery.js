import { useState } from "react";

function Grocery () {

    const [grocitem , setGrocItem] = useState([]);
    const [newGroc , setNewGroc] = useState('');
 
    function addItem() {
        if (newGroc === "") return;
        setNewGroc ([...grocitem, { name: newGroc, checked: false }]);
        setNewItem("");

    }

    function toggleCheck(index) {
        const updatedGroc = [...grocitem];
        updatedGroc[index].checked = !updatedGroc[index].checked;
        setGrocItem(updatedGroc);
    }

    function deleteGroc(index) {
        const updatedGroc = [...grocitem];
        updatedGroc.splice(index , 1);
        setGrocItem(updatedGroc);
    }


    return (
        <div>
            
        </div>
    )
}

export default Grocery;