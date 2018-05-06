import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { thereAreMoreSpecsWithTheSameRoll } from '../../helpers'

import Role from '../role'
import Character from '../character'
import Specialization from '../specialization'
import AlternativeSpecialization from '../alternative_specialization'
import Overview from '../overview'

import StepBar from '../stepBar'

const MainWrapper = styled.div`
    max-width: 1280px;
    margin: 70px auto;
`

const steps = [
    {
        label: 'What role do you want to play?',
        component: <Role />
    },
    {
        label: 'What character do you want to play?',
        component: <Character />
    },
    {
        label: 'What specialization do you want to play?',
        component: <Specialization />
    },
    {
        label: 'What alternative specialization do you want to play?',
        component: <AlternativeSpecialization />
    },
    {
        label: 'Overview',
        component: <Overview />
    }
]

function App({ step }) {
    const renderStepsBar = <StepBar labels={steps.map((s) => s.label)} />
    return (
        <MainWrapper>
            {steps[step].component}
            {renderStepsBar}
        </MainWrapper>
    )
}

const mapStateToProps = state => {
    return {
      step: state.apply.step,
      character: state.apply.role
    }
}

export default connect(mapStateToProps)(App)