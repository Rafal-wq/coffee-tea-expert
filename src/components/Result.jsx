const Result = ({ recommendation, onRestart }) => {

    if (!recommendation) {
        return (
            <div className="result-container">
                <div className="result-error">
                    <h2>Nie znaleziono dopasowania 😔</h2>
                    <p>Spróbuj ponownie z innymi opcjami.</p>
                    <button
                        className="restart-button"
                        onClick={onRestart}
                        type="button"
                    >
                        🔄 Spróbuj ponownie
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="result-container">
            <div className="result-success">
                <h2 className="result-title">Twoja idealna rekomendacja:</h2>

                <div className="result-card">
                    <h3 className="beverage-name">{recommendation.name}</h3>

                    {recommendation.roast && (
                        <p className="beverage-roast">
                            Stopień wypalenia: <strong>{recommendation.roast}</strong>
                        </p>
                    )}

                    <p className="beverage-description">
                        {recommendation.description}
                    </p>

                    <div className="beverage-details">
            <span className="beverage-type">
              {recommendation.type === 'kawa' ? '☕ Kawa' : '🍵 Herbata'}
            </span>
                    </div>
                </div>

                <button
                    className="restart-button"
                    onClick={onRestart}
                    type="button"
                >
                    🔄 Rozpocznij od nowa
                </button>
            </div>
        </div>
    );
};

export default Result;
