
# Matematika 5. Osztály - Interaktív Kvíz Alkalmazás

Ez egy modern, mobil-optimalizált React-alapú oktatási alkalmazás, amely segít az 5. osztályos tanulóknak a matematikai alapok elmélyítésében.

## 📚 Oktatási Tartalom

A feladatbank (150+ kérdés) az alábbi fő kategóriákat fedi le:
1. Egész számok, 2. Helymeghatározás, 3. Törtszámok, 4. Természetes számok, 5. Geometriai alapismeretek, 6. Szögek, 7. Kerület/Terület/Térfogat, 8. Tizedes törtek, 9. Mértékegységek.

## 🎮 Játékmechanika
Pontozás nehézség szerint, sorozat-szorzók, időbónusz és egyedi tipprendszer.

## 🌐 Online Működés (Google Apps Script)

A statisztikák és a ranglista mentéséhez egy Google Táblázatot használunk háttérként.

### Telepítési lépések (GAS):

1. **Táblázat előkészítése:** Hozz létre egy Google Táblázatot két munkalappal: `SessionLog` és `Leaderboard`.
2. **Szkript megnyitása:** Extensions -> Apps Script.
3. **Kód beillesztése:** Másold be az alábbi kódot.
4. **Módosítások élesítése (Kritikus lépés):**
   - Kattints a **Deploy** -> **New deployment** gombra.
   - Válaszd a **Web app** típust.
   - *Execute as:* **Me**
   - *Who has access:* **Anyone** (Ez kell az adatok fogadásához!)
   - Kattints a **Deploy**-ra, hagyd jóvá az engedélyeket.
   - A kapott **Web app URL**-t másold be a projekt `types.ts` fájljába a `GAS_URL` helyére.
5. **Frissítés:** Ha később módosítod a szkriptet, **mindig csinálj egy "New deployment"-et**, különben nem lépnek életbe a változások!

### Google Apps Script kód:

```javascript
const ss = SpreadsheetApp.getActiveSpreadsheet();

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const logSheet = ss.getSheetByName("SessionLog");
    const lbSheet = ss.getSheetByName("Leaderboard");
    
    // Adatok naplózása a statisztikához
    logSheet.appendRow([
      new Date(),
      data.name,
      data.score,
      data.correctAnswers,
      data.totalQuestions,
      JSON.stringify(data.history)
    ]);
    
    // Név és pontszám mentése a ranglistához
    lbSheet.appendRow([data.name, data.score, new Date()]);
    
    return ContentService.createTextOutput(JSON.stringify({"status": "success"}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({"status": "error", "message": err.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  const action = e.parameter.action;
  
  if (action === "getLeaderboard") {
    const sheet = ss.getSheetByName("Leaderboard");
    const values = sheet.getDataRange().getValues();
    values.shift(); // Header eltávolítása
    const entries = values.map(row => ({
      name: row[0],
      score: row[1],
      date: row[2]
    })).sort((a, b) => b.score - a.score).slice(0, 10);
    return ContentService.createTextOutput(JSON.stringify(entries)).setMimeType(ContentService.MimeType.JSON);
  }
  
  if (action === "getStats") {
    const logSheet = ss.getSheetByName("SessionLog");
    const data = logSheet.getDataRange().getValues();
    data.shift();

    let catStats = {};
    let typeStats = {};
    let questionStats = {};
    let totalScore = 0;

    data.forEach(row => {
      totalScore += Number(row[2]);
      let history = [];
      try { history = JSON.parse(row[5] || "[]"); } catch(e) {}
      
      history.forEach(h => {
        // Kategória statisztika
        if (!catStats[h.cat]) catStats[h.cat] = { total: 0, correct: 0 };
        catStats[h.cat].total++;
        if (h.correct) catStats[h.cat].correct++;

        // Típus statisztika
        let typeName = h.type || "Egyéb";
        if (!typeStats[typeName]) typeStats[typeName] = { total: 0, correct: 0 };
        typeStats[typeName].total++;
        if (h.correct) typeStats[typeName].correct++;

        // Kérdés nehézség statisztika
        if (!questionStats[h.id]) questionStats[h.id] = { text: h.text || h.id, total: 0, fails: 0 };
        questionStats[h.id].total++;
        if (!h.correct) questionStats[h.id].fails++;
      });
    });

    const categorySuccess = {};
    for (let cat in catStats) {
      categorySuccess[cat] = Math.round((catStats[cat].correct / catStats[cat].total) * 100);
    }
    
    const typeSuccess = {};
    for (let t in typeStats) {
      typeSuccess[t] = Math.round((typeStats[t].correct / typeStats[t].total) * 100);
    }

    const difficultQuestions = Object.values(questionStats)
      .map(q => ({ text: q.text, failRate: Math.round((q.fails / q.total) * 100) }))
      .filter(q => q.failRate > 0)
      .sort((a, b) => b.failRate - a.failRate)
      .slice(0, 5);

    return ContentService.createTextOutput(JSON.stringify({
      totalCompletions: data.length,
      avgScore: data.length > 0 ? Math.round(totalScore / data.length) : 0,
      categorySuccess: categorySuccess,
      typeSuccess: typeSuccess,
      difficultQuestions: difficultQuestions
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

---
*Verzió: 1.0.4 | Fejlesztve oktatási célokra, telepítési útmutatóval.*
