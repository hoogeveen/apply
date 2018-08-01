import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { setRole } from '../../actions'

import { getAvailableRoles } from '../../helpers'

import Header from '../../fragments/header'
import Title from '../../fragments/title'
import Paragraph from '../../fragments/paragraph'

const OptionsContainer = styled.div`
    display: flex;
`

const Option = styled.div`
    color: ${props => props.active ? 'red' : 'black'};
    width: 320px;
    height: 240px;
    display: inline-block;
    background-image: url('/dist/assets/images/thumbnails/roles/${props => props.image}@2x.png');
    background-size: cover;

    opacity: ${props => props.active ? 1 : 0.5};
    transition: opacity ease-in-out 0.3s;
    position: relative;
    &:hover {
        opacity: 1;
    }
`

const OptionTitle = styled.span`
    color: ${({ theme }) => theme.textColor };
    font-family: ${({ theme }) => theme.fontBold };
    font-size: 2em;
    position: absolute;
    bottom: 20px;
    left: 20px;
    text-shadow: 2px 2px 2px rgba(0,0,0,0.5);
`

const Gradient = styled.div`
    background-image: url('/static/gradient@2x.png');
    background-size: fit;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 143px;
`

function Role({ onClick, availableRoles, selectedRole }) {
    const options =  availableRoles.map((role, index) => {
        return (
            <Option image={role.toLowerCase()} active={role === selectedRole} key={index} onClick={() => onClick(role)} role={role}>
                <Gradient />
                <OptionTitle>
                    {role}
                </OptionTitle>
            </Option>
        )
    })

    return (
        <div>
            <Header>
                <Title>Qual role pretendes jogar?</Title>
                <Paragraph>Recrutamos todas as classes, mas de momento prioritizamos ranged dps e healers.</Paragraph>
            </Header>
            <OptionsContainer>
                {options}
            </OptionsContainer>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(getAvailableRoles(state.characters.map(char => char.class)))
    return {
        selectedRole: state.apply.answers.role,
        availableRoles: getAvailableRoles(state.characters.map(char => char.class))
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (role) => {
            dispatch(setRole(role))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Role)
