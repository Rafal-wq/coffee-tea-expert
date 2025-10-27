const Question = ({ question, onAnswer, onBack, canGoBack }) => {

    const handleAnswer = (value) => {
        onAnswer(question.answerKey, value);
    };

    return (
        <div className="question-container">
            <h2 className="question-text">{question.question}</h2>

            <div className="options-container">
                {question.options.map((option) => (
                    <button
                        key={option.value}
                        className="option-button"
                        onClick={() => handleAnswer(option.value)}
                        type="button"
                    >
                        {option.label}
                    </button>
                ))}
            </div>

            {canGoBack && (
                <button
                    className="back-button"
                    onClick={onBack}
                    type="button"
                >
                    ← Cofnij
                </button>
            )}
        </div>
    );
};

export default Question;
