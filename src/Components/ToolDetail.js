import React from 'react';
import { useParams } from 'react-router-dom';

const ToolDetail = () => {
    const {id} = useParams();

    return (
        <div>
            <h1>Hello from toll detail {id}</h1>
        </div>
    );
};

export default ToolDetail;