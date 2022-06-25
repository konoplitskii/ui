import React from 'react';
import ContainerBox from "./style";


const Container = ({children}) => {
    return (
        <ContainerBox>
            {children}
        </ContainerBox>
    );
};

export default Container;