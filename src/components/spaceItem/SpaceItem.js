import React from 'react';

const SpaceItem = (props) => {
    let {space} = props;

    if(space.launch_year === '2020'){
        return 0;
    }

    return (
        <div>
            <p>{space.mission_name} -- {space.launch_year}</p>
            <img src = {space.links.mission_patch_small} alt="img"/>
        </div>
    );
};

export default SpaceItem;