import React from 'react';
import styled from 'styled-components';

const AppContentStyled = styled.div`
    height: 100%;
    background-color: white;
    padding: 0;
`;

const AppContent = (props) => {
    return (
        <AppContentStyled className='offset-md-2 col-md-8'>
            {props.children}
        </AppContentStyled>
    );
};

export default AppContent;