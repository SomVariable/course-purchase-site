import React, { useContext } from 'react'
import { AppContext } from '../../context/app.context';

function Menu() {
    const { menu, setMenu, firstCategory } = useContext(AppContext);

    return (
        <div>
            <ul>
				{menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
			</ul>
        </div>
    )
}

export default Menu