# מאגר ידע

אתר מאגר הידע, בנוי ב-[Starlight](https://starlight.astro.build/) (Astro): תפריט צד, חיפוש מובנה (Pagefind) ותמיכה מלאה בעברית מימין לשמאל.

## איך מעדכנים
- כל דף הוא קובץ Markdown ב-`src/content/docs/`. עדכון = commit.
- כל נושא כולל שורת "נרשם" עם תאריך וקישור למקור רשמי.
- דף חדש: קובץ חדש בתיקייה, ושורה בתפריט ב-`astro.config.mjs` (`sidebar`).
- אין כאן מידע פרטי ואין מידע על אפליקציות ספציפיות.

## פיתוח מקומי
```bash
npm install
npm run dev      # http://localhost:4321/Academy/
npm run build    # בונה ל-dist/ כולל אינדקס החיפוש
```

## פרסום
כל מיזוג ל-`main` מפרסם את האתר ב-GitHub Pages דרך `.github/workflows/deploy.yml` ([התיעוד של Astro](https://docs.astro.build/en/guides/deploy/github/)).
