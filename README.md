```markdown
# ☕🍵 Kawa lub herbata na miarę

System ekspercki do doboru napojów - Inteligentne rekomendacje kawy i herbaty dopasowane do Twoich preferencji.

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://coffee-tea-expert.netlify.app/)

## 🌐 Demo na żywo

**👉 [https://coffee-tea-expert.netlify.app/](https://coffee-tea-expert.netlify.app/)**

### 📱 Zeskanuj kod QR:

<div align="center">
  <img src="./frame.png" alt="QR Code" width="200"/>
  <p><i>Zeskanuj, aby otworzyć aplikację na telefonie</i></p>
</div>

---

## 📖 O projekcie

System ekspercki wykorzystujący **drzewo decyzyjne** do rekomendacji idealnego napoju na podstawie preferencji użytkownika. Aplikacja zadaje 4 pytania, które prowadzą do jednej z 54 unikalnych rekomendacji (36 kaw + 27 herbat).

### 🎯 Cel projektu

Stworzenie prostego, intuicyjnego systemu ekspertowego, który:
- Pomaga użytkownikom odkryć nowe smaki kawy i herbaty
- Eliminuje przytłoczenie zbyt dużą ilością opcji
- Dostarcza spersonalizowane rekomendacje w przejrzysty sposób

---

## ✨ Funkcjonalności

- ✅ **4-etapowy proces decyzyjny** - szybkie i efektywne dotarcie do wyniku
- ✅ **54 unikalne rekomendacje** - bogaty katalog napojów
- ✅ **Inteligentne eliminowanie opcji** - dynamiczne pytania zależne od wcześniejszych wyborów
- ✅ **Pasek postępu** - wizualizacja aktualnego kroku
- ✅ **Możliwość cofnięcia** - elastyczność w zmianie decyzji
- ✅ **Zapisywanie sesji** - kontynuacja po odświeżeniu strony (LocalStorage)
- ✅ **Responsywny design** - działa na desktop, tablet i mobile
- ✅ **Szybkie działanie** - client-side only, bez backendu

---

## 🤖 Metody sztucznej inteligencji

### Drzewo Decyzyjne (Decision Tree)

Projekt wykorzystuje klasyczną metodę AI - **drzewo decyzyjne** z wnioskowaniem w przód (forward chaining).

**Struktura drzewa:**
```
START (Kawa/Herbata)
├─ KAWA
│  ├─ Profil smakowy (3 opcje)
│  ├─ Metoda parzenia (4 opcje)
│  └─ Stopień wypalenia (3 opcje)
└─ HERBATA
   ├─ Efekt (3 opcje)
   ├─ Intensywność (3 opcje)
   └─ Pora dnia (3 opcje)
```

---

## 🛠️ Technologie

### Frontend
- **React 18.x** - biblioteka UI
- **JavaScript ES6+** - język programowania
- **CSS3** - stylowanie z CSS Variables
- **Vite 7.x** - build tool i dev server
- **LocalStorage API** - przechowywanie stanu sesji

### Narzędzia
- **npm** - package manager
- **ESLint** - linting kodu
- **Git** - version control

### Deployment
- **Netlify** - hosting, CDN, CI/CD
- **GitHub** - repository

### Architektura
- **Single Page Application (SPA)** - bez routingu
- **Component-based architecture** - modularne komponenty React
- **JAMstack** - statyczna strona, client-side rendering

---

## 📂 Struktura projektu

```
coffee-tea-expert/
├── public/              # Pliki statyczne
├── src/
│   ├── components/      # Komponenty React
│   │   ├── Header.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── Question.jsx
│   │   ├── Result.jsx
│   │   └── ResetButton.jsx
│   ├── data/            # Dane aplikacji
│   │   ├── beverages.json    # Baza 54 napojów
│   │   └── questions.js      # Definicje pytań
│   ├── utils/           # Funkcje pomocnicze
│   │   ├── sessionManager.js     # Zarządzanie localStorage
│   │   └── filterBeverages.js    # Logika filtrowania
│   ├── App.jsx          # Główny komponent
│   ├── App.css          # Style aplikacji
│   ├── index.css        # Globalne style
│   └── main.jsx         # Entry point
├── .gitignore
├── package.json
├── vite.config.js
├── frame.png            # Kod QR do aplikacji
└── README.md
```

---

## 🚀 Instalacja i uruchomienie

### Wymagania
- **Node.js** 18.x lub nowszy
- **npm** 9.x lub nowszy

### Krok po kroku

1. **Sklonuj repozytorium:**
```bash
git clone https://github.com/Rafal-wq/coffee-tea-expert.git
cd coffee-tea-expert
```

2. **Zainstaluj zależności:**
```bash
npm install
```

3. **Uruchom serwer deweloperski:**
```bash
npm run dev
```

4. **Otwórz w przeglądarce:**
```
http://localhost:5173/
```

### Budowanie wersji produkcyjnej

```bash
npm run build
```

Pliki produkcyjne znajdą się w folderze `dist/`.

### Preview buildu

```bash
npm run preview
```

---

## 📊 Baza danych napojów

Aplikacja zawiera **54 starannie dobranych napojów**:

### Kawy (36):
- **Gorzkie, czekoladowe** - 12 wariantów (Etiopia Yirgacheffe, Brazylia Santos, Włoska mieszanka, etc.)
- **Orzechowe, karmelowe** - 12 wariantów (Kostaryka Honey Process, Jamajka Blue Mountain, Hawaje Kona, etc.)
- **Kwaskowate, owocowe** - 12 wariantów (Etiopia Sidamo, Panama Geisha, Kenia Nyeri, etc.)

### Herbaty (27):
- **Pobudzenie** - 9 wariantów (Matcha, Yerba Mate, Assam TGFOP, etc.)
- **Relaks** - 9 wariantów (Rumianek, Melisa, Waleriana, etc.)
- **Trawienie** - 9 wariantów (Pu-erh, Herbata miętowa, Imbirowa, etc.)

**Format danych (JSON):**
```json
{
  "id": "coffee-1",
  "name": "Etiopia Yirgacheffe",
  "type": "kawa",
  "profile": "gorzki-czekoladowy",
  "method": "espresso",
  "roast": "light",
  "description": "Kwaskowate, jagodowe nuty z goryczką"
}
```

---

## 🎨 Design

### Paleta kolorów
- **Primary (Coffee):** `#6f4e37` - brązowy kawa
- **Secondary:** `#8b7355` - jasny brąz
- **Accent (Tea):** `#4a7c59` - zielona herbata
- **Background:** `#f5f5f0` - kremowy
- **Text:** `#333333` - ciemnoszary

### Typografia
- **Font family:** System fonts (-apple-system, Segoe UI, Roboto)
- **Responsywne rozmiary:** od 1.5rem (mobile) do 2.5rem (desktop)

---

## 🔮 Możliwości rozwoju

### 🎯 Priorytety krótkoterminowe:
- [ ] Historia rekomendacji użytkownika
- [ ] System ulubieńców
- [ ] Eksport wyniku do PDF/obrazu
- [ ] Udostępnianie w social media

### 🚀 Rozwój średnioterminowy:
- [ ] Rozbudowa bazy do 100+ napojów
- [ ] Dodatkowe filtry (cena, dostępność)
- [ ] Integracja z API sklepów
- [ ] Progressive Web App (PWA)
- [ ] Tryb ciemny (dark mode)

### 💡 Wizja długoterminowa:
- [ ] Konta użytkowników (autentykacja)
- [ ] Backend (Node.js + PostgreSQL)
- [ ] Collaborative filtering (AI/ML)
- [ ] Aplikacja mobilna (React Native)
- [ ] Gamifikacja (odznaki, punkty)
- [ ] Mapa kawiarni/herbaciarni
- [ ] Wersje językowe (i18n)

---

### Jak dodać nowy napój?

1. Otwórz `src/data/beverages.json`
2. Dodaj nowy obiekt według schematu:
```json
{
  "id": "unique-id",
  "name": "Nazwa napoju",
  "type": "kawa" | "herbata",
  "profile": "..." (dla kawy) | "effect": "..." (dla herbaty),
  "method": "..." (dla kawy) | "intensity": "..." (dla herbaty),
  "roast": "..." (dla kawy) | "timeOfDay": "..." (dla herbaty),
  "description": "Opis smaku i charakterystyki"
}

---

## 📝 Licencja

**MIT License** - możesz swobodnie używać, modyfikować i dystrybuować ten projekt.

---

## 👨‍💻 Autor

**Rafał** - Student Collegium Witelona  
Projekt z przedmiotu: **Metody Sztucznej Inteligencji**  
Semestr V, 2025


---

## 📞 Kontakt

- 🌐 **Demo:** [coffee-tea-expert.netlify.app](https://coffee-tea-expert.netlify.app/)
- 💻 **GitHub:** [https://github.com/Rafal-wq/coffee-tea-expert.git](https://github.com/Rafal-wq/coffee-tea-expert.git)
- 📧 **Email:** rafal.wilczewski@studenci.collegiumwitelona.pl

