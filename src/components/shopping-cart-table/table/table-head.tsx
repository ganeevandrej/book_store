import React from "react";

export const TableHead: React.FC = (): JSX.Element => {
    return (
        <thead>
            <tr>
                <th className="cntr">#</th>
                <th className="cntr">Item</th>
                <th className="cntr">Count</th>
                <th className="cntr">Price</th>
                <th className="cntr">Action</th>
            </tr>
        </thead>
    );
}