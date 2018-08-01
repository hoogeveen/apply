import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Title from '../../fragments/title'
import Paragraph from '../../fragments/paragraph'

function Overview({role, character, specialization, alternative_specialization}) {
    return (
        <div>
            <Paragraph><strong>Role:</strong> {role}</Paragraph>
            <Paragraph><strong>Character:</strong> {character.name} {character.realm}</Paragraph>
            <Paragraph><strong>Specialization:</strong> {specialization}</Paragraph>
            <Paragraph><strong>Alternative Specialization:</strong> {alternative_specialization ? alternative_specialization : 'N/A'}</Paragraph>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        role: state.apply.answers.role,
        character: state.apply.answers.character,
        specialization: state.apply.answers.specialization,
        alternative_specialization: state.apply.answers.alternative_specialization
    }
}

export default connect(mapStateToProps)(Overview)