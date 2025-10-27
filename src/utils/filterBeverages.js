/**
 * Znajduje rekomendowany napój na podstawie odpowiedzi użytkownika
 * @param {Object} answers - Obiekt z odpowiedziami użytkownika
 * @param {Array} beverages - Tablica wszystkich napojów z bazy
 * @returns {Object|null} - Znaleziony napój lub null
 */
export const findRecommendation = (answers, beverages) => {
    if (!answers || !beverages || beverages.length === 0) {
        return null;
    }

    if (answers.beverageType === 'kawa') {
        return beverages.find(beverage =>
            beverage.type === 'kawa' &&
            beverage.profile === answers.profile &&
            beverage.method === answers.method &&
            beverage.roast === answers.roast
        );
    }

    if (answers.beverageType === 'herbata') {
        return beverages.find(beverage =>
            beverage.type === 'herbata' &&
            beverage.effect === answers.effect &&
            beverage.intensity === answers.intensity &&
            beverage.timeOfDay === answers.timeOfDay
        );
    }

    return null;
};

/**
 * Sprawdza czy użytkownik udzielił wszystkich wymaganych odpowiedzi
 * @param {Object} answers - Obiekt z odpowiedziami użytkownika
 * @returns {boolean} - True jeśli wszystkie odpowiedzi są kompletne
 */
export const areAnswersComplete = (answers) => {
    if (!answers || !answers.beverageType) {
        return false;
    }

    if (answers.beverageType === 'kawa') {
        return !!(
            answers.profile &&
            answers.method &&
            answers.roast
        );
    }

    if (answers.beverageType === 'herbata') {
        return !!(
            answers.effect &&
            answers.intensity &&
            answers.timeOfDay
        );
    }

    return false;
};

/**
 * Pobiera listę podobnych napojów (opcjonalnie - na przyszłość)
 * @param {Object} recommendation - Główna rekomendacja
 * @param {Array} beverages - Tablica wszystkich napojów
 * @param {number} limit - Maksymalna liczba podobnych napojów
 * @returns {Array} - Lista podobnych napojów
 */
export const getSimilarBeverages = (recommendation, beverages, limit = 3) => {
    if (!recommendation || !beverages) {
        return [];
    }

    return beverages
        .filter(beverage =>
            beverage.id !== recommendation.id &&
            beverage.type === recommendation.type &&
            (
                (beverage.type === 'kawa' && (
                    beverage.profile === recommendation.profile ||
                    beverage.method === recommendation.method
                )) ||
                (beverage.type === 'herbata' && (
                    beverage.effect === recommendation.effect ||
                    beverage.intensity === recommendation.intensity
                ))
            )
        )
        .slice(0, limit);
};

/**
 * Formatuje etykietę do wyświetlenia
 * @param {string} key - Klucz odpowiedzi
 * @param {string} value - Wartość odpowiedzi
 * @returns {string} - Sformatowana etykieta
 */
export const formatAnswerLabel = (key, value) => {
    const labels = {
        beverageType: {
            kawa: 'Kawa',
            herbata: 'Herbata'
        },
        profile: {
            'gorzki-czekoladowy': 'Gorzki, czekoladowy',
            'orzechowy-karmelowy': 'Orzechowy, karmelowy',
            'kwaskowaty-owocowy': 'Kwaskowaty, owocowy'
        },
        method: {
            'espresso': 'Espresso',
            'z-mlekiem': 'Z mlekiem',
            'przelewowa': 'Przelewowa',
            'alternatywna': 'Alternatywna'
        },
        roast: {
            'light': 'Jasne',
            'medium': 'Średnie',
            'dark': 'Ciemne'
        },
        effect: {
            'pobudzenie': 'Pobudzenie',
            'relaks': 'Relaks',
            'trawienie': 'Trawienie'
        },
        intensity: {
            'delikatna': 'Delikatna',
            'srednia': 'Średnia',
            'mocna': 'Mocna'
        },
        timeOfDay: {
            'rano': 'Rano',
            'popoludnie': 'Popołudnie',
            'wieczor': 'Wieczór'
        }
    };

    return labels[key]?.[value] || value;
};
