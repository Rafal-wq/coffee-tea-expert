export const questions = [
    {
        id: 1,
        question: "Na jaki napój masz dzisiaj ochotę?",
        answerKey: "beverageType",
        options: [
            { value: "kawa", label: "Kawa" },
            { value: "herbata", label: "Herbata" }
        ]
    },
    {
        id: 2,
        question: "Jaki profil smakowy preferujesz?",
        answerKey: "profile",
        showIf: { beverageType: "kawa" },
        options: [
            { value: "gorzki-czekoladowy", label: "Gorzki, czekoladowy" },
            { value: "orzechowy-karmelowy", label: "Orzechowy, karmelowy" },
            { value: "kwaskowaty-owocowy", label: "Kwaskowaty, owocowy" }
        ]
    },
    {
        id: 2,
        question: "Jaki efekt chcesz osiągnąć?",
        answerKey: "effect",
        showIf: { beverageType: "herbata" },
        options: [
            { value: "pobudzenie", label: "Pobudzenie" },
            { value: "relaks", label: "Relaks" },
            { value: "trawienie", label: "Trawienie" }
        ]
    },
    {
        id: 3,
        question: "Jaką metodę parzenia preferujesz?",
        answerKey: "method",
        showIf: { beverageType: "kawa" },
        options: [
            { value: "espresso", label: "Espresso" },
            { value: "z-mlekiem", label: "Z mlekiem (cappuccino, latte)" },
            { value: "przelewowa", label: "Przelewowa/filtrowana" },
            { value: "alternatywna", label: "Alternatywna (cold brew, aeropress)" }
        ]
    },
    {
        id: 3,
        question: "Jaką intensywność smaku preferujesz?",
        answerKey: "intensity",
        showIf: { beverageType: "herbata" },
        options: [
            { value: "delikatna", label: "Delikatna, subtelna" },
            { value: "srednia", label: "Średnia, zrównoważowana" },
            { value: "mocna", label: "Mocna, wyrazista" }
        ]
    },
    {
        id: 4,
        question: "Jaki stopień wypalenia ziarna preferujesz?",
        answerKey: "roast",
        showIf: { beverageType: "kawa" },
        options: [
            { value: "light", label: "Jasne (light roast) - kwaskowate, owocowe" },
            { value: "medium", label: "Średnie (medium roast) - zrównoważowane" },
            { value: "dark", label: "Ciemne (dark roast) - gorzkie, czekoladowe" }
        ]
    },
    {
        id: 4,
        question: "O jakiej porze dnia planujesz pić herbatę?",
        answerKey: "timeOfDay",
        showIf: { beverageType: "herbata" },
        options: [
            { value: "rano", label: "Rano (pobudzenie)" },
            { value: "popoludnie", label: "Popołudnie (przerwa, regeneracja)" },
            { value: "wieczor", label: "Wieczór (relaks przed snem)" }
        ]
    }
];

export const getQuestionById = (id, answers) => {
    const questionsForId = questions.filter(q => q.id === id);

    if (questionsForId.length === 1) {
        return questionsForId[0];
    }

    return questionsForId.find(q => {
        if (!q.showIf) return true;

        return Object.entries(q.showIf).every(
            ([key, value]) => answers[key] === value
        );
    });
};

export const getTotalSteps = () => {
    return 4;
};
