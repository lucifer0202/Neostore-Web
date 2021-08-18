import React, { useState } from 'react'
import { useProductContext } from '../../contexts/ProductContext';

export default function Category() {
    const [list, setList] = React.useState([]);
    const { categoryState } = useProductContext();

    React.useEffect(() => {
        if (categoryState.data) {
            setList(categoryState.data)
        }
        console.log("categories", categoryState)
    }, [categoryState.data])

    return (
        <div>
            <ul>
                {
                    list.map((item, key) => {
                        return (
                            <>
                                <li id={key}>
                                    {item.name}
                                </li>
                            </>
                        )
                    })
                }
            </ul>
        </div>
    )
}
