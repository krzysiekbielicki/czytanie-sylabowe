import { useState } from 'react';
import { Card, CardHeader, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

export function Editable({text, editComponent, displayComponent}) {
    
    const [isEditing, setEditing] = useState(false);
    const [value, setValue] = useState(text);

    function handleChange(event) {
        setValue(event.target.value);
    }

    function toggleEdit() {
        setEditing(!isEditing);
    }

    function renderComponent() {
        if (isEditing) {
            return editComponent({text: value, onChange: handleChange})
        } else {
            return displayComponent({text: value})
        }
    }

    return (
        <Card>
        <CardHeader action={<IconButton onClick={toggleEdit}><EditIcon/></IconButton> } className="no-print"/>
        {renderComponent()}
        </Card>
    )
}
