const ProgressBar = ({ currentStep, totalSteps }) => {
    const percentage = (currentStep / totalSteps) * 100;

    return (
        <div className="progress-container">
            <div className="progress-text">
                Pytanie {currentStep} z {totalSteps}
            </div>
            <div className="progress-bar-background">
                <div
                    className="progress-bar-fill"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
};

export default ProgressBar;
