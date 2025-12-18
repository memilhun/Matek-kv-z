
# Matematika 5. Osztály - Interaktív Kvíz Alkalmazás

Ez egy modern, mobil-optimalizált React-alapú oktatási alkalmazás, amely segít az 5. osztályos tanulóknak a matematikai alapok elmélyítésében.

## 📚 Oktatási Tartalom

A feladatbank (150+ kérdés) az alábbi fő kategóriákat fedi le:

1.  **Egész számok**: Összeadás, kivonás, abszolút érték, ellentett és számegyenes.
2.  **Helymeghatározás**: Interaktív koordináta-rendszer (SVG), tengelyek, síknegyedek, pontok koordinátái, tükrözés.
3.  **Törtszámok**: Fogalmak, egyszerűsítés, bővítés, összehasonlítás, alapműveletek, törtrész számítás.
4.  **Természetes számok**: Helyiérték, kerekítés, római számok, műveleti sorrend.
5.  **Geometriai alapismeretek**: Vonalak, kör részei, sokszögek tulajdonságai.
6.  **Szögek**: Szögfajták, mérés, háromszögek belső szögei, pótszögek.
7.  **Kerület, Terület, Térfogat**: Síkidomok és testek (téglatest, kocka) mértékei, mértékegység-átváltás.
8.  **Tizedes törtek**: Írásmód, összehasonlítás, alapműveletek, szorzás/osztás 10-zel/100-zal.
9.  **Mértékegységek**: Hosszúság, tömeg, űrtartalom, idő és hőmérséklet.

## 🎮 Játékmechanika és Pontozás

Az alkalmazás egy összetett pontozási algoritmust használ a motiváció fenntartása érdekében:

-   **Alappontok**: Nehézség szerint skálázódik (Könnyű: 50, Közepes: 100, Nehéz: 200).
-   **Részpontszám**: Párosítós feladatoknál a helyesen megtalált párok arányában jár a pont.
-   **Sorozat (Streak)**: Egymás utáni helyes válaszok esetén szorzó jár (2 helyes: 1.2x, 3+ helyes: 1.5x).
-   **Időbónusz**: A megmaradt idő minden másodperce 0.5 bónuszpontot ér.
-   **Anti-Guessing (Tippelés elleni védelem)**: Közepes és Nehéz feladatoknál, ha a válasz 2 másodpercen belül érkezik, az időbónusz érvényét veszti.
-   **Tipprendszer**: Segítség kérhető (magyarázat vagy opció eliminálás), de ez a megszerezhető pontszámot 50%-kal csökkenti.

## 🌐 Online Működés és Google Sheets Integráció

Az alkalmazás képes hálózati módban is működni egy Google Apps Script (GAS) háttérrendszeren keresztül:

-   **Globális Ranglista**: Az eredmények egy központi Google Táblázatba mentődnek, így a tanulók összevethetik teljesítményüket másokkal is.
-   **Hálózati Statisztika**: A Statisztika menüpont "Globális Teljesítmény" füle a táblázatból kinyert adatok alapján mutatja az összesített átlagpontszámot és a kategóriák közötti valós nehézségi eloszlást.
-   **Automatikus Mentés**: Ha a felhasználó nem ad meg nevet vagy idő előtt elhagyja az eredményjelző oldalt, az alkalmazás "Anonymous" néven automatikusan archiválja a teljesítményt a statisztikai elemzésekhez.
-   **Hibás Válasz Analízis**: A rendszer rögzíti, mely kérdések okozzák a legtöbb nehézséget a közösségnek, segítve ezzel a tanári munkát.

## 🛠 Technikai Jellemzők

-   **SVG Koordináta-rendszer**: Egyedi fejlesztésű, reszponzív koordináta-háló, amely támogatja a pontok kiemelését és animált visszajelzést ad.
-   **Adatvezérelt Statisztika**: A Statisztika menüpont valós idejű elemzést ad a feladatbank összetételéről (nehézség, típus és kategória eloszlás).
-   **Hibrid Input**: Támogatja a numerikus (pl. 3,5 vagy 1/2) és a szöveges bevitelt is, automatikus normalizálással (szóközök, vesszők kezelése).
-   **Offline Működés**: Hálózati kapcsolat hiányában az alkalmazás a böngésző helyi tárolóját (LocalStorage) használja tartalékként.

## 📱 Mobil Optimalizáció

-   `touch-action: manipulation` a nem kívánt nagyítás megelőzésére.
-   Reszponzív rácsszerkezet (grid) és rugalmas méretezés minden kijelzőméretre.
-   Gyors frissítésű időzítő (250ms tick rate) a sima vizuális élményért.

---
*Verzió: 1.0.2 | Fejlesztve oktatási célokra, Google Sheets támogatással.*
