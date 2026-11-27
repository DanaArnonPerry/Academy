---
title: GitHub
---

> נרשם: 2026-11-27 · עודכן: 2026-11-27

## טפסי Issue ותבניות
> נרשם: 2026-11-27 · מקור רשמי: [Configuring issue templates](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository), [Syntax for issue forms](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms) · עלות: חינם

**מה זה:** קבצים בתיקייה `.github/ISSUE_TEMPLATE/`. כשפותחים Issue חדש מופיע מסך בחירה, למשל "באג" או "פיצ'ר".

שני סוגים:
- **Issue Forms (‏YAML):** טופס אמיתי עם שדות, רשימות בחירה ושדות חובה. זה המומלץ.
- **תבנית Markdown:** טקסט מוכן עם כותרות למילוי.

טופס יכול להוסיף לבד תוויות, שיוך ופרויקט. לתבנית PR יש קובץ נפרד: `.github/pull_request_template.md`.

**יתרונות:**
- סוכני AI (Claude Code, Copilot) מקבלים Issue עם צעדים לשחזור ומה ציפית, ומבינים מה לתקן בלי לנחש.
- תווית ולוח מתמלאים לבד.
- שדות חובה מונעים שכחה, למשל באיזה מסך ובאיזה דפדפן.
- משתמשים ושותפים מקבלים טופס ברור במקום דף ריק.

**איך רואים דוגמה:**
- בכל ריפו: Settings ← General ← Features ← Issues ← Set up templates (תצוגה מקדימה בלי לשמור).
- [מסך הבחירה של VS Code](https://github.com/microsoft/vscode/issues/new/choose) ו[קבצי התבניות שלהם](https://github.com/microsoft/vscode/tree/main/.github/ISSUE_TEMPLATE).


## Projects ושלבי עבודה
> נרשם: 2026-11-27 · מקור רשמי: [About Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects), [Built-in automations](https://docs.github.com/en/issues/planning-and-tracking-with-projects/automating-your-project/using-the-built-in-automations) · עלות: חינם

תהליך פיצ'ר בשלבים (בקשה, תכנון, פיתוח, בדיקה, שחרור) בנוי משלושה כלים:
1. **לוח Projects:** שדה Status עם השלבים. ב-New project יש תבניות מוכנות כמו Kanban, Feature release, Iterative development ו-Roadmap, עם Todo, In progress ו-Done.
2. **Workflows בלוח:** מזיזים כרטיס לבד. Issue חדש נכנס ל"בקשה", PR שנפתח מעביר ל"בבדיקה", ומיזוג ל"נעשה".
3. **צ'קליסט או Sub-issues בתוך ה-Issue:** אפיון, תכנון, מימוש, בדיקה. GitHub מציג פס התקדמות כמו "3 מתוך 5".

אין תבנית מוכנה לתהליך פיצ'ר מלא. משנים שמות של שלבים בתבנית קיימת, בערך 10 דקות. התבניות מופיעות במסך New project.


## עוד כלים שימושיים
> נרשם: 2026-11-27

| כלי | מה הוא נותן | מקור רשמי |
| --- | --- | --- |
| Actions | מריץ בנייה ובדיקות לבד על כל שינוי, לפני שהוא נכנס | [docs](https://docs.github.com/en/actions) |
| Branch protection / rulesets | חוסם מיזוג ל-main בלי PR ובדיקה שעברה | [docs](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets) |
| Dependabot | מעדכן ספריות ומתריע על פרצות | [docs](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain) |
| Pages | אחסון חינמי לאתר סטטי, למשל דמו או תיעוד | [docs](https://docs.github.com/en/pages) |
| Releases ו-Milestones | גרסאות עם רשימת שינויים אוטומטית | [docs](https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases) |
| Codespaces | סביבת פיתוח בדפדפן | [docs](https://docs.github.com/en/codespaces/about-codespaces/what-are-codespaces) |
| Discussions | רעיונות ושאלות שעוד לא הבשילו ל-Issue | [docs](https://docs.github.com/en/discussions) |

## Copilot והחבילה לסטודנטים
> נרשם: 2026-11-21 · מקור רשמי: [Copilot plans](https://docs.github.com/en/copilot/get-started/plans), [Student Developer Pack](https://education.github.com/pack)

- Copilot Student כולל השלמות, צ'אט, agent mode, cloud agent, code review ו-MCP.
- בחירת מודל: רק Auto. יש מגבלות שימוש ומכסת AI Credits, וגם code review צורך ממנה.
- ⏱️ Frontend Masters ל-6 חודשים: השעון מתחיל בהפעלה.
- Vercel ו-Supabase לא בחבילה.
