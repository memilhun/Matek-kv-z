
# Matematika 5. Osztály - Interaktív Kvíz Alkalmazás (v1.3.0)

Ez egy modern, mobil-optimalizált React-alapú oktatási alkalmazás, amely segít az 5. osztályos tanulóknak a matematikai alapok elmélyítésében interaktív és játékos formában.

## 📚 Oktatási Tartalom

A feladatbank (150+ kérdés) az alábbi fő kategóriákat fedi le:
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

## 🎮 10 Interaktív Feladattípus

Az alkalmazás változatos beviteli módokat kínál a figyelem fenntartásához:
- **MCQ**: Négyválasztós feleletválasztó.
- **TF**: Igaz/Hamis állítások.
- **Short/Shortnum**: Szöveges vagy numerikus válasz beírása.
- **Ordering**: Elemek sorrendbe rendezése (növekvő, csökkenő, időrend).
- **Matching**: Fogalompárok összekötése.
- **Set Placement**: Elemek besorolása halmazábrába (A, B, Mindkettő, Egyik sem).
- **Estimation**: Érték becslése interaktív csúszkával.
- **Plan Selector**: Szöveges feladathoz tartozó műveleti terv kiválasztása.
- **Coordinate Picker**: Kattintás a pontos koordinátára egy interaktív SVG hálón.
- **Visual MCQ**: Koordináta-rendszerben kijelölt pontok azonosítása.

## 🏆 Játékmechanika és Pontozás

Az algoritmus jutalmazza a sebességet és a pontosságot:
- **Alappont**: A feladat nehézségétől függ (50-250 pont).
- **Streak-szorzó**: 3 helyes válasz után 1.5x szorzó jár.
- **Időbónusz**: A hátralévő másodpercek után extra pontok.
- **Tipprendszer**: A "Tipp" gomb segít (pl. felezi a lehetőségeket), de 50%-os pontlevonással jár.

## 🛠 Technikai Jellemzők

- **Mobil UX**: Az `Ordering` feladatnál bevezetett **Undo (Visszavonás)** gomb és az ID-alapú követés megakadályozza a véletlen kattintásokból eredő hibákat.
- **Precíziós Koordináta-rendszer**: SVG alapú háló, amely figyelembe veszi a képernyő skálázását és görgetését, valamint a javítás után megmutatja a helyes célpontot.
- **Teljesítmény**: A `useTimer` hook optimalizált, csak másodpercenként egyszer frissíti a UI-t, elkerülve a felesleges re-rendereket.
- **Statisztika**: 
    - *Lokális*: A feladatbank aktuális eloszlásának elemzése.
    - *Globális*: Felhőalapú adatok a legnehezebb kérdésekről és az országos átlagról.

## 🌐 Online Működés (Google Apps Script)

Az alkalmazás képes hálózati ranglista és statisztika kezelésére. A beállításhoz kövesse a `types.ts` fájlban található `GAS_URL` konfigurációt a README alján található script segítségével.

---
*Verzió: 1.3.0 | Matematika Gyakorló Alkalmazás*
