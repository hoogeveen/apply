import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { setCharacter } from '../../actions'
import { getAvailableClassesForRole, getCharactersForClasses,  getClassName, getRaceName, getClassColor } from '../../helpers'

import Header from '../../fragments/header'
import Title from '../../fragments/title'
import Paragraph from '../../fragments/paragraph'

const CharactersContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Character = styled.div`
    flex: initial;
    width: 320px;
    height: 240px;
    display: inline-block;
    background-image: url('http://render-eu.worldofwarcraft.com/character/${props => props.image}');
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
    bottom: 35px;
    left: 20px;
    text-shadow: 2px 2px 2px rgba(0,0,0,0.5);
`

const OptionSubtitle = styled.span.attrs({
        classColor: props => getClassColor(props.charClass)
    })`
    color: ${(props) => props.classColor };
    font-family: ${({ theme }) => theme.fontBold };
    font-size: 0.75em;
    position: absolute;
    bottom: 20px;
    left: 20px;
    text-transform: capitalize;
    text-shadow: 2px 2px 2px rgba(0,0,0,0.5);
`

const RealmName = styled.span`
    font-size: 0.9em;
    margin-left: 10px;
    color: #ccc;
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

function Characters({ characters, selectedCharacter, onClick }) {
    console.log(characters)
    const renderCharacters = characters.map((character, index) => {
        return (
            <Character image={character.thumbnail.replace('avatar', 'main')} active={`${selectedCharacter.name}${selectedCharacter.realm}` === `${character.name}${character.realm}`} onClick={() => onClick(character)} key={index}>
                <Gradient />
                <OptionTitle>{character.name}</OptionTitle>
                <OptionSubtitle charClass={character['class']}>
                    {getRaceName(character.race)} {getClassName(character['class'])}
                    <RealmName>{character.realm}</RealmName>
                </OptionSubtitle>
            </Character>
        )
    })

    return (
        <div>
             <Header>
                <Title>Com que character queres fazer apply?</Title>
                <Paragraph>Recrutamos todas as classes, mas de momento prioritizamos ranged dps e healers.</Paragraph>
            </Header>
            <CharactersContainer>
                {renderCharacters}
            </CharactersContainer>
        </div>
    )
}

const mapStateToProps = state => {
    const classesForRole = getAvailableClassesForRole(state.apply.answers.role)
    console.log(classesForRole)
    return {
        characters: getCharactersForClasses(classesForRole, state.characters),
        selectedCharacter: state.apply.answers.character || {}
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (character) => {
            dispatch(setCharacter(character))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters)
