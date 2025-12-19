
# Matematika 5. Osztály - Interaktív Kvíz Alkalmazás (v1.3.0)

Ez egy modern, mobil-optimalizált React-alapú oktatási alkalmazás, amely segít az 5. osztályos tanulóknak a matematikai alapok elmélyítésében interaktív és játékos formában.

## 📚 Oktatási Tartalom

A feladatbank (150+ statikus kérdés + végtelen dinamikus variáció) az alábbi fő kategóriákat fedi le:
1. **Természetes számok** (Helyiérték, kerekítés, római számok)
2. **Geometriai alapismeretek** (Vonalak, kör, sokszögek)
3. **Mérés, statisztika** (Mértékegységek, becslés, átlagszámítás)
4. **Szögek** (Szögfajták, háromszög belső szögei, óramutatók)
5. **Törtszámok** (Bővítés, egyszerűsítés, összeadás, törtrész számítás)
6. **Téglalap** (Kerület, terület, mértékegység váltás)
7. **Téglatest** (Élek, lapok, felszín és térfogat)
8. **Tizedes törtek** (Összehasonlítás, alapműveletek, szorzás 10/100-zal)
9. **Egész számok** (Abszolút érték, ellentett, összeadás és kivonás a negatív tartományban)
10. **Helymeghatározás** (Koordináta-rendszer, tükrözés, síknegyedek)

## 🎲 Dinamikus Feladatgenerálás (ÚJ)

Az alkalmazás egy intelligens generátort (`dynamicGenerator`) használ, amely minden 10 kérdéses körben **legalább 2 teljesen egyedi feladatot** szúr be. Ez biztosítja, hogy a tanulók ne csak bemagolják a válaszokat, hanem valóban értsék a műveleteket.

Dinamikus generálás az alábbi témakörökben érhető el:
- **Számolás:** Alapműveletek, kerekítés, római számok, egész számok összeadása.
- **Mérés:** Véletlenszerű mértékegység-átváltások (hossz, tömeg, űrtartalom).
- **Geometria:** Háromszög hiányzó szögei, téglalap kerület/terület számítás.
- **Törtek:** Törtrész kiszámítása, egyszerűsítés.
- **Koordináták:** Pontok tükrözése az x és y tengelyre.

## 🎮 10 Interaktív Feladattípus

Az alkalmazás változatos beviteli módokat kínál a figyelem fenntartásához:
- **MCQ**: Négyválasztós feleletválasztó.
- **TF**: Igaz/Hamis állítások.
- **Short/Shortnum**: Szöveges vagy numerikus válasz beírása (beépített törtvonal gombbal).
- **Ordering**: Elemek sorrendbe rendezése.
- **Matching**: Fogalompárok összekötése.
- **Set Placement**: Elemek besorolása halmazábrába.
- **Estimation**: Érték becslése interaktív csúszkával.
- **Plan Selector**: Szöveges feladathoz tartozó műveleti terv kiválasztása.
- **Coordinate Picker**: Kattintás a pontos koordinátára egy interaktív SVG hálón.
- **Visual MCQ**: Koordináta-rendszerben kijelölt pontok azonosítása.

## 🏆 Játékmechanika és Pontozás

A pontszámítás (`scoreCalculator.ts`) jutalmazza a pontosságot, a sorozatokat és a gyorsaságot:
- **Alappont**: 50 - 250 pont (nehézségtől függően).
- **Streak-szorzó**: 
    - 2 egymást követő helyes válasz: **1.2x szorzó**.
    - 3 vagy több helyes válasz: **1.5x szorzó**.
- **Időbónusz**: Minden hátralévő másodperc **+0.15 pontot** ér.
- **Tipprendszer**: A "Tipp" gomb segít, de az adott feladatra járó **összpontszámot felezi (50% levonás)**.

## 🛠 Technikai Jellemzők

- **Dinamikus Injekció**: A `getShuffledQuestions` algoritmus kategória-specifikusan választ generátort, így a témakörökön belüli gyakorlás is változatos marad.
- **Mobil UX**: 
    - Az `Ordering` feladatnál **Undo (Visszavonás)** funkció.
    - Speciális `inputMode="decimal"` a numerikus bevitelnél mobil billentyűzethez.
    - Törtvonal (/) gyorsbillentyű a beviteli mező mellett.
- **Precíziós Koordináta-rendszer**: SVG alapú háló, amely hiba esetén megmutatja a helyes célpontot.
- **Statisztika**: 
    - *Bank*: A feladatbank statikus és dinamikus eloszlásának elemzése.
    - *Globális*: Felhőalapú adatok (Google Sheets) a legnehezebb kérdésekről.

---
*Verzió: 1.3.0 | Matematika Gyakorló Alkalmazás*
