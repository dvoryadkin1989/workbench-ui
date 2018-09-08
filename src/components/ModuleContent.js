import React from 'react';
import styled from 'styled-components';

const ModuleContentStyled = styled.div`
    height: 100%;
    background-color: white;
    padding: 0;
`;

const ModuleContent = (props) => {
    return (
        <ModuleContentStyled className='offset-md-2 col-md-8'>
            {props.children}
        </ModuleContentStyled>
    );
};

export default ModuleContent;