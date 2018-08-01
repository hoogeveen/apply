import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { setStep } from '../../actions'

const StepBarContainer = styled.div`
    margin-top: 70px;
    display: flex;
    justify-content: center;
`

const StepContainer = styled.div.attrs({
    borderStatus: props => props.status === 'active' ? '#DDA024' : props.status === 'disabled' ? '#262626' : '#494949',
    stepStatus: props => props.status === 'active' ? '#494949' : props.status === 'disabled' ? '#262626' : '#494949',
    background: props => props.status === 'active' ? '#DDA024' : 'transparent'
})`

    margin: 20px;
    display: inline-block;
    position: relative;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: ${(props) => props.background };
    border: 3px solid ${(props) => props.borderStatus };
    &:hover {
        cursor: ${(props) => props.status !== 'disabled' ? 'pointer;' : 'not-allowed'};
        border-color: ${(props) => props.status !== 'disabled' ? '#DDA024;' : ''}
        & ${Step}{
            color: ${(props) => props.status === 'active' ? '' : '#DDA024;'}
        }
    }
    & ${Step}{
        color: ${(props) => props.stepStatus};
    }
`

const Step = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 22px;
    font-family: ${({ theme }) => theme.fontBold };
`

function StepBar({ step, maxStep, labels, onClick }) {
    const renderSteps = Array(labels.length).fill().map((_, index) => {
        const status = index === step ? 'active'
                     : index <= maxStep ? '' : 'disabled'
        return (
            <StepContainer key={index} status={status} alt={labels[index]} onClick={() => index <= maxStep ? onClick(index) : null }>
                <Step>{index+1}</Step>
            </StepContainer>
        )
    })
    return (
        <StepBarContainer>
            {renderSteps}
        </StepBarContainer>
    )
}

const mapStateToProps = state => {
    return {
        step: state.apply.step,
        maxStep: state.apply.maxStep
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (step) => {
            dispatch(setStep(step))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(StepBar)
