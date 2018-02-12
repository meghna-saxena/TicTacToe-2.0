import React from 'react';

const Cell = (props) => {
    const pos = props.row + "-" + props.column
    return (
        <button key={pos} className="cell">
            {pos}
        </button>
    );
}

export default Cell;