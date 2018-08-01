import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { getSpecializationsForRole, getClassName } from '../../helpers'
import { setSpecialization } from '../../actions/index';

import Header from '../../fragments/header'
import Title from '../../fragments/title'
import Paragraph from '../../fragments/paragraph'
import { SpecializationItem, SpecializationContainer } from '../../fragments/specialization'

const Option = styled.div`
    color: ${props => props.active ? 'red' : 'black'};
    width: 320px;
    height: 240px;
    display: inline-block;
    background-image: url('/dist/assets/images/thumbnails/specializations/${props => props.image}@2x.png');
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

function Specialization({charClass, role, onClick}) {
    const specializations = getSpecializationsForRole(charClass, role)
    if (specializations.length === 1) {
        onClick(specializations[0])
    }

    const renderSpecializations = specializations.map((spec, index) => {
        return (
            <Option image={`${getClassName(charClass).replace(' ', '_')}/${spec.toLowerCase().replace(' ', '_')}`} onClick={() => onClick(spec)} key={index}>
                <Gradient />
                <OptionTitle>{spec}</OptionTitle>
            </Option>
        )
    })

    return (
        <div>
            <Header>
                <Title>What spec do you want to play?</Title>
            </Header>
            <SpecializationContainer>
                {renderSpecializations}
            </SpecializationContainer>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        role: state.apply.answers.role,
        charClass: state.apply.answers.character['class']
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (spec) => {
            dispatch(setSpecialization(spec))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Specialization)
