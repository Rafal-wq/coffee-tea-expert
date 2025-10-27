const ResetButton = ({ onReset }) => {
    const handleReset = () => {
        if (window.confirm('Czy na pewno chcesz zacząć od nowa?')) {
            onReset();
        }
    };

    return (
        <button
            className="reset-button"
            onClick={handleReset}
            type="button"
        >
            🔄 Nowy użytkownik
        </button>
    );
};

export default ResetButton;
