---
title: תהליכי עבודה
---

> נרשם: 2026-11-27 · עודכן: 2026-11-27

איך הכלים מתחברים לתהליך אחד, מבקשה ועד פרסום. כל שלב מקשר לדף הכלי ולמקור הרשמי.

## מבקשה ועד פרסום
1. **בקשה:** פותחים Issue מטופס (Issue Form) עם שדות חובה. הטופס מוסיף תווית ומכניס ללוח. ← [GitHub](../github/), [Syntax for issue forms](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms)
2. **תכנון:** הכרטיס בלוח Projects עם שדה Status לפי השלבים, ו-Sub-issues לכל חלק. ← [About Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)
3. **פיתוח:** עובדים בענף נפרד, ופותחים PR שמקושר ל-Issue. אוטומציות הלוח מעבירות את הכרטיס לשלב הבא. ← [Built-in automations](https://docs.github.com/en/issues/planning-and-tracking-with-projects/automating-your-project/using-the-built-in-automations)
4. **בדיקה:** Actions מריצים בנייה ובדיקות. Copilot code review מעיר על ה-PR. פריסת Preview מאפשרת לראות את השינוי חי. ← [Actions](https://docs.github.com/en/actions), [Copilot code review](https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/configure-code-review), [Vercel environments](https://vercel.com/docs/deployments/environments)
5. **מיזוג:** ruleset על main חוסם מיזוג בלי PR ובדיקות שעברו. ← [About rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets)
6. **פרסום:** מיזוג ל-main מפרסם ל-Production. Release מסכם את השינויים. ← [About releases](https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases)

## הגדרות שכדאי שיהיו בכל ריפו
| הגדרה | למה | מקור רשמי | עלות |
| --- | --- | --- | --- |
| ruleset על main: חובת PR ובדיקות | סוכן או טעות לא נכנסים ל-main בלי בדיקה | [About rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets) | חינם |
| Dependabot alerts ו-security updates | התראה ו-PR אוטומטי על ספרייה פגיעה | [Dependabot](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain) | חינם |
| סקירת Copilot אוטומטית לכל PR | בודק שני על כל שינוי, גם של סוכן | [Configure code review](https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/configure-code-review) | Copilot, צורך ממכסה |
| טפסי Issue ותבנית PR | כל בקשה מגיעה עם כל המידע | [Issue templates](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository) | חינם |
| CLAUDE.md בריפו | Claude Code מכיר את כללי הפרויקט בכל סשן | [Memory](https://code.claude.com/docs/en/memory) | חינם |
| RLS על כל טבלה ב-Supabase | הנתונים מוגנים גם כשהגישה מהדפדפן | [Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security) | חינם |

## עבודה עם סוכני AI
- Issue מובנה (טופס עם צעדים ותוצאה צפויה) הוא הקלט הטוב ביותר לסוכן. ← [GitHub](../github/)
- הוראות קבועות לסוכן נשמרות בקובץ בריפו: CLAUDE.md ל-Claude Code. ← [Memory](https://code.claude.com/docs/en/memory)
- הליך שחוזר על עצמו הופך ל-Skill במקום להדביק אותו כל פעם. ← [Skills](https://code.claude.com/docs/en/skills)
- כל שינוי של סוכן עובר PR, בדיקות וסקירה לפני מיזוג.
