import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { translate, Trans } from 'react-i18next';
import styled, { css } from 'styled-components';
import './Ejemplares.css';

const Wrapper = styled.section`
        	padding: 4em;
	        background: blue;
`;

const Title = styled.h1`
            font-size: 1.5em;
            text-align: center;
            color: yellow;
        `;


class Ejemplares extends Component {

    render () {

        const { t } = this.props;


        return (
            <Wrapper>
                <Title>
                    Styled title.
                </Title>

            </Wrapper>
        );
    }
}

export default translate('translations')(Ejemplares);





