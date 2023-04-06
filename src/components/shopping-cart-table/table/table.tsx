import React from "react";

import { TableHead } from "./table-head";
import { TableBody } from "./table-body";

import { TableProps } from "../../types";

export const Table: React.FC<TableProps> = ({ cartItems }): JSX.Element => {
    return (
        <table className="table">
            <TableHead />
            <TableBody cartItems={cartItems} />
        </table>
    );
}