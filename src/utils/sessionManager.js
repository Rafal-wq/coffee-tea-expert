const SESSION_KEY = 'coffeeTeaExpertSession';

export const getSession = () => {
    try {
        const session = localStorage.getItem(SESSION_KEY);
        return session ? JSON.parse(session) : null;
    } catch (error) {
        console.error('Błąd podczas odczytu sesji:', error);
        return null;
    }
};

export const getAnswers = () => {
    const session = getSession();
    return session?.answers || {};
};

export const getCurrentStep = () => {
    const session = getSession();
    return session?.currentStep || 1;
};

export const saveAnswer = (answerKey, value) => {
    const session = getSession() || { answers: {}, currentStep: 1 };

    session.answers[answerKey] = value;
    session.timestamp = new Date().toISOString();

    try {
        localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    } catch (error) {
        console.error('Błąd podczas zapisywania odpowiedzi:', error);
    }
};

export const setCurrentStep = (step) => {
    const session = getSession() || { answers: {}, currentStep: 1 };

    session.currentStep = step;
    session.timestamp = new Date().toISOString();

    try {
        localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    } catch (error) {
        console.error('Błąd podczas zapisywania kroku:', error);
    }
};

export const goBackStep = (answerKeyToRemove) => {
    const session = getSession();
    if (!session) return;

    if (answerKeyToRemove && session.answers[answerKeyToRemove]) {
        delete session.answers[answerKeyToRemove];
    }

    if (session.currentStep > 1) {
        session.currentStep -= 1;
    }

    session.timestamp = new Date().toISOString();

    try {
        localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    } catch (error) {
        console.error('Błąd podczas cofania kroku:', error);
    }
};

export const resetSession = () => {
    try {
        localStorage.removeItem(SESSION_KEY);
    } catch (error) {
        console.error('Błąd podczas resetowania sesji:', error);
    }
};

export const hasSession = () => {
    return getSession() !== null;
};

export const isSessionExpired = (maxAgeMinutes = 30) => {
    const session = getSession();
    if (!session || !session.timestamp) return false;

    const sessionTime = new Date(session.timestamp);
    const now = new Date();
    const diffMinutes = (now - sessionTime) / (1000 * 60);

    return diffMinutes > maxAgeMinutes;
};
