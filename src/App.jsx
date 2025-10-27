import { useState, useEffect } from 'react';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import Question from './components/Question';
import Result from './components/Result';
import ResetButton from './components/ResetButton';
import { getQuestionById, getTotalSteps } from './data/questions.js';
import {
    getAnswers,
    getCurrentStep,
    saveAnswer,
    setCurrentStep,
    goBackStep,
    resetSession
} from './utils/sessionManager';
import { findRecommendation, areAnswersComplete } from './utils/filterBeverages';
import beveragesData from './data/beverages.json';
const beverages = beveragesData.beverages;
import './App.css';

function App() {
    const [answers, setAnswers] = useState({});
    const [currentStep, setCurrentStepState] = useState(1);
    const [recommendation, setRecommendation] = useState(null);
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        const savedAnswers = getAnswers();
        const savedStep = getCurrentStep();

        setAnswers(savedAnswers);
        setCurrentStepState(savedStep);

        if (areAnswersComplete(savedAnswers)) {
            const result = findRecommendation(savedAnswers, beverages);
            setRecommendation(result);
            setShowResult(true);
        }
    }, []);

    const currentQuestion = getQuestionById(currentStep, answers);
    const totalSteps = getTotalSteps();

    const handleAnswer = (answerKey, value) => {
        const newAnswers = { ...answers, [answerKey]: value };
        setAnswers(newAnswers);
        saveAnswer(answerKey, value);

        const nextStep = currentStep + 1;

        if (nextStep > totalSteps) {
            const result = findRecommendation(newAnswers, beverages);
            setRecommendation(result);
            setShowResult(true);
            setCurrentStep(totalSteps);
        } else {
            setCurrentStepState(nextStep);
            setCurrentStep(nextStep);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            const previousStep = currentStep - 1;
            const previousQuestion = getQuestionById(previousStep, answers);

            const newAnswers = { ...answers };
            delete newAnswers[previousQuestion.answerKey];

            setAnswers(newAnswers);
            goBackStep(previousQuestion.answerKey);
            setCurrentStepState(previousStep);
        }
    };

    const handleRestart = () => {
        resetSession();
        setAnswers({});
        setCurrentStepState(1);
        setRecommendation(null);
        setShowResult(false);
    };

    return (
        <div className="app">
            <Header />

            <div className="app-content">
                <ResetButton onReset={handleRestart} />

                {!showResult ? (
                    <>
                        <ProgressBar
                            currentStep={currentStep}
                            totalSteps={totalSteps}
                        />

                        {currentQuestion && (
                            <Question
                                question={currentQuestion}
                                onAnswer={handleAnswer}
                                onBack={handleBack}
                                canGoBack={currentStep > 1}
                            />
                        )}
                    </>
                ) : (
                    <Result
                        recommendation={recommendation}
                        onRestart={handleRestart}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
