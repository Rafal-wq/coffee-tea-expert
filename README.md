# ☕🍵 Kawa lub herbata na miarę

System ekspercki do doboru napojów - Inteligentne rekomendacje kawy i herbaty dopasowane do Twoich preferencji.

## 🌐 Demo na żywo

**👉 [https://coffee-tea-expert.netlify.app/](https://coffee-tea-expert.netlify.app/)**

### 📱 Zeskanuj kod QR:



<p align="center">
  <img src="./public/frame.png" alt="QR Code" width="200"/>
  <br>
  <i>Zeskanuj, aby otworzyć aplikację na telefonie</i>
</p>

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

## 🤖 Metoda sztucznej inteligencji

### Drzewo Decyzyjne (Decision Tree)

Projekt wykorzystuje klasyczną metodę AI - **drzewo decyzyjne** z wnioskowaniem w przód (forward chaining).

**Zalety zastosowanego podejścia:**
- 🎯 **Deterministyczne wyniki** - jedna konkretna rekomendacja
- 🚀 **Efektywna eliminacja** - pomija nieistotne pytania (np. po wyborze kawy nie pyta o herbatę)
- 🔍 **Przejrzystość logiki** - użytkownik rozumie ścieżkę prowadzącą do wyniku
- ⚡ **Wydajność** - brak potrzeby uczenia maszynowego czy dużych zbiorów danych

**Struktura drzewa:**
```
START (Kawa/Herbata)
│
├── KAWA
│   ├── Profil smakowy (3 opcje)
│   ├── Metoda parzenia (4 opcje)
│   └── Stopień wypalenia (3 opcje)
│
└── HERBATA
    ├── Efekt (3 opcje)
    ├── Intensywność (3 opcje)
    └── Pora dnia (3 opcje)
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
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── Question.jsx
│   │   ├── Result.jsx
│   │   └── ResetButton.jsx
│   │
│   ├── data/
│   │   ├── beverages.json
│   │   └── questions.js
│   │
│   ├── utils/
│   │   ├── sessionManager.js
│   │   └── filterBeverages.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── package.json
├── vite.config.js
├── frame.png
└── README.md
```

---

## 🚀 Instalacja i uruchomienie

### Wymagania
- Node.js 18.x lub nowszy
- npm 9.x lub nowszy

### Krok po kroku

**1. Sklonuj repozytorium:**
```bash
git clone https://github.com/twoja-nazwa/coffee-tea-expert.git
cd coffee-tea-expert
```

**2. Zainstaluj zależności:**
```bash
npm install
```

**3. Uruchom serwer deweloperski:**
```bash
npm run dev
```

**4. Otwórz w przeglądarce:**
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

### Kawy (36)
- **Gorzkie, czekoladowe** - 12 wariantów
  - Etiopia Yirgacheffe, Brazylia Santos, Włoska mieszanka, Kolumbia Supremo, Gwatemala Antigua, Sumatra Mandheling, Kenia AA, Kostaryka Tarrazu, Nikaragua Maragogipe, Rwanda Bourbon, Honduras Marcala, Indie Monsooned Malabar

- **Orzechowe, karmelowe** - 12 wariantów
  - Kostaryka Honey Process, Brazylia Yellow Bourbon, Peru Dark Roast, Kolumbia Huila, Gwatemala Huehuetenango, Brazylia Cerrado, Panama Boquete, El Salvador Pacamara, Tanzania Peaberry, Burundi, Jamajka Blue Mountain, Hawaje Kona

- **Kwaskowate, owocowe** - 12 wariantów
  - Etiopia Sidamo, Kenia Nyeri, Jemen Mokha, Rwanda, Etiopia Limu, Burundi Dark, Etiopia Guji, Panama Geisha, Papua Nowa Gwinea, Etiopia Natural, Kostaryka Medium, Tanzania AA Dark

### Herbaty (27)
- **Pobudzenie** - 9 wariantów
  - Biała herbata Silver Needle, Zielona herbata Sencha, Jaśminowa zielona, Yerba Mate, Zielona herbata Gunpowder, Oolong Tie Guan Yin, Assam TGFOP, Matcha, Pu-erh

- **Relaks** - 9 wariantów
  - Biała herbata Pai Mu Tan, Rumianek, Melisa, Jaśminowa perła, Lawenda, Ashwagandha, Oolong Da Hong Pao, Waleriana, Pasiflora (męczennica)

- **Trawienie** - 9 wariantów
  - Zielona herbata z miętą, Herbata owocowa z pigwą, Rumianek z melisą, Herbata miętowa, Imbirowa, Herbata z kopru włoskiego, Pu-erh Trawienie, Yerba mate z miętą, Herbata z senesu

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
| Kolor | Hex | Zastosowanie |
|-------|-----|--------------|
| Coffee Brown | `#6f4e37` | Główny kolor (Primary) |
| Light Brown | `#8b7355` | Drugorzędny (Secondary) |
| Tea Green | `#4a7c59` | Akcent (Accent) |
| Cream | `#f5f5f0` | Tło (Background) |
| Dark Gray | `#333333` | Tekst (Text) |

### Typografia
- **Font family:** System fonts (-apple-system, Segoe UI, Roboto)
- **Responsywne rozmiary:** od 1.5rem (mobile) do 2.5rem (desktop)

---

## 🔮 Możliwości rozwoju

### 🎯 Priorytety krótkoterminowe
- [ ] Historia rekomendacji użytkownika
- [ ] System ulubieńców
- [ ] Eksport wyniku do PDF/obrazu
- [ ] Udostępnianie w social media

### 🚀 Rozwój średnioterminowy
- [ ] Rozbudowa bazy do 100+ napojów
- [ ] Dodatkowe filtry (cena, dostępność)
- [ ] Integracja z API sklepów
- [ ] Progressive Web App (PWA)
- [ ] Tryb ciemny (dark mode)

### 💡 Wizja długoterminowa
- [ ] Konta użytkowników (autentykacja)
- [ ] Backend (Node.js + PostgreSQL)
- [ ] Collaborative filtering (AI/ML)
- [ ] Aplikacja mobilna (React Native)
- [ ] Gamifikacja (odznaki, punkty)
- [ ] Mapa kawiarni/herbaciarni
- [ ] Wersje językowe (i18n)

---

## 🤝 Współpraca

Projekt otwarty na:
- 🐛 Zgłoszenia błędów (Issues)
- 💡 Propozycje nowych funkcji
- 🔀 Pull requesty
- ⭐ Gwiazdki na GitHubie!

### Jak dodać nowy napój?

1. Otwórz `src/data/beverages.json`
2. Dodaj nowy obiekt według schematu:
```json
{
  "id": "unique-id",
  "name": "Nazwa napoju",
  "type": "kawa",
  "profile": "gorzki-czekoladowy",
  "method": "espresso",
  "roast": "light",
  "description": "Opis smaku i charakterystyki"
}
```

3. Zapisz i przetestuj!

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

---

<p align="center">
  <b>Zrobione z ☕ i 🍵</b>
  <br>
  <i>Projekt akademicki - Metody Sztucznej Inteligencji</i>
</p>
