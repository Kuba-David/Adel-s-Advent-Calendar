# Kniha výprav – advent 2026

Mobilní „quest log“ k fyzické mapě Carcassonne. Adresa (po zapnutí GitHub Pages):
**https://kuba-david.github.io/Adel-s-Advent-Calendar/2026/**

## Jak to funguje
- Den N se odemkne **N. prosince o půlnoci madeirského času**. Starší dny zůstávají otevřené, takže se dají dohnat.
- Adél vidí zadání. Po splnění jí řekneš heslo, ona ho zadá a appka jí ukáže **skrýš** kartičky.
- Splněné dny si pamatuje prohlížeč v jejím telefonu.
- Heslo nerozlišuje velká a malá písmena, diakritiku ani interpunkci: `Strelície!` = `strelicie`.

## Úpravy za pochodu (všechno je v `data.json`)
Na GitHubu otevři `2026/data.json` → ikonka tužky → přepiš text → **Commit changes**.
Na webu se změna projeví zhruba za 1–5 minut (GitHub ji musí nasadit a chvíli drží cache).

Jeden den vypadá takhle:
```json
{
  "den": 6,
  "nazev": "Botanický úlovek",
  "ukol": "Text úkolu…",
  "alternativa": { "nazev": "Masážní směna", "ukol": "Text plánu B…" },
  "heslo": "strelicie",
  "skrys": "Pod kořenkou s oreganem"
}
```
- `alternativa` je nepovinná. Když ji smažeš, tlačítko „Plán B“ zmizí.
- `"milnik": true` přidá dni zlatou pečeť.
- `heslo` může být i víc možností: `"heslo": ["sofi", "pejsek"]`.
- `zasobnik` dole v souboru appka nezobrazuje. Jsou tam úkoly do zásoby (na návštěvu), které můžeš zkopírovat do libovolného dne.

**Pozor na syntaxi:** každý text musí být v uvozovkách a mezi položkami musí být čárky. Když se soubor rozbije, appka u Adél použije poslední funkční verzi uloženou v telefonu. Nové změny ale neuvidí, dokud chybu neopravíš. Po každé úpravě proto stránku radši otevři a zkontroluj.

## Testování
- `…/2026/?den=6` předstírá, že je 6. prosince. Pokrok se v tomhle režimu ukládá zvlášť, takže Adél nic nerozbiješ ani na jejím telefonu.
- Testovací pokrok smažeš tak, že vymažeš data webu v prohlížeči.

## Ikonka na plochu
- **iPhone (Safari):** Sdílet → Přidat na plochu.
- **Android (Chrome):** menu ⋮ → Přidat na plochu / Instalovat aplikaci.
