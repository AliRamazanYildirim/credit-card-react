# Kredi Kartı Giriş Formu

## Projektbeschreibung

Diese Anwendung ist eine interaktive React-Komponente zur Eingabe von Kreditkarteninformationen. Die Benutzeroberfläche ermöglicht eine benutzerfreundliche Erfassung von Kreditkartendetails mit Echtzeitvorschau.

## Funktionen

- Dynamische Kreditkartenvorschau in Echtzeit
- Eingabefelder für:
  - Kartennummer
  - Karteninhaber-Name
  - Gültigkeitsdatum
  - CVC-Code
- Fokus-basierte Hervorhebung der Eingabefelder
- Responsive Design mit Bootstrap

## Technologien

- React
- React Hooks (useState)
- Bootstrap
- react-credit-cards-2 Bibliothek

## Installation

1. Projektabhängigkeiten installieren:

```bash
npm install react react-credit-cards-2 bootstrap
```

1. Erforderliche Importiere in den Komponenten:

```jsx
import "react-credit-cards-2/dist/es/styles-compiled.css"
import "bootstrap/dist/css/bootstrap.min.css"
```

## Verwendung

Die Komponente `CreditCardForm` kann einfach in andere React-Anwendungen importiert und verwendet werden.

```jsx
import CreditCardForm from './components/CreditCardForm'

function App() {
  return <CreditCardForm />;
}
```

## Komponentenstruktur

- Zustandsverwaltung mit `useState`
- Eingabe-Event-Handler für Kartendaten
- Dynamische Kartenvorschau mit `react-credit-cards-2`

## Hinweise

- Alle Felder sind Pflichtfelder
- Die Kartennummer wird als Zahlenfeld validiert
- Das Ablaufdatum sollte im Format MM/JJ eingegeben werden
- Der CVC-Code muss 3-4 Ziffern enthalten

## Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert. Weitere Informationen finden Sie in der Datei.`LICENSE`
