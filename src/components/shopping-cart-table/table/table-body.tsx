import React from "react";

import { TableProps } from "../../types";
import {BlockButtons} from "./block-buttons";

export const TableBody: React.FC<TableProps> = ({ cartItems }): JSX.Element => {
    const renderItemCart = cartItems.map((
        {id, total, title, count}, idx) => {
        return  (
            <tr key={id}>
                <td className="cntr">{ idx + 1 }</td>
                <td className="cntr">{ title }</td>
                <td className="cntr">{ count }</td>
                <td className="cntr">${ total }</td>
                <td>
                    <BlockButtons id={id} />
                </td>
            </tr>
        );
    })

    return (
        <tbody>
        { renderItemCart }
        </tbody>
    );
}