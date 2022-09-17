import React from 'react';

const Userinfo = (props) => {
    let {info} = props;
    return (
        <div>
            email:
            {info?.email}
            <br/>
            phone:
            {info?.phone}
            <br/>
            address:
            <br/>
            street:{info?.address.street}
            <br/>
            city:{info?.address.city}
        </div>
    );
};

export default Userinfo;