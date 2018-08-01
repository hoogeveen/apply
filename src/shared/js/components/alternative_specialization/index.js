import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { getAlternativeSpecializations, getClassName } from '../../helpers'
import { setAlternativeSpecialization } from '../../actions'
import Header from '../../fragments/header'
import Footer from '../../fragments/footer'
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

const Button = styled.button`
    background: transparent;
    border: 3px solid #494949;
    padding: 10px;
    border-radius: 15px;
    font-family: ${({ theme }) => theme.fontBold };
    color: #494949;
    font-size: 16px;
    &:hover {
        color: #DDA024;
        border-color: #DDA024;
    }
`

function AlternativeSpecialization({ alternativeSpecializations, charClass, onClick }) {
    const renderSpecializations = alternativeSpecializations.map((spec, index) => {
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
                <Title>What alternative specialization would you like to play?</Title>
            </Header>
            <SpecializationContainer>
                {renderSpecializations}
            </SpecializationContainer>
            <Footer>
                <Button onClick={() => onClick(false)}>Nao jogo nenhuma offspec</Button>
            </Footer>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        charClass: state.apply.answers.character['class'],
        alternativeSpecializations: getAlternativeSpecializations(state.apply.answers.character.class, state.apply.answers.specialization)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (specialization) => {
            dispatch(setAlternativeSpecialization(specialization))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlternativeSpecialization)
