Voglio creare un sito web da hostare su github, per un torneo di softair. Il sito deve riguardare una finta compagnia di trasporti e logistica ed essere realistico.

La compagnia di logistica è una multinazionale che opera in tutto il mondo con sede in un paradiso fiscale.

Non inserire nessun rifertimento al softair o agli scicacalli, deve essere un sito realistico.

Deve avere una login con username e password, e la combinazione corretta può anche essere hardcoded nel codice.

Usa html, css, javascipt e jquery improtando i cdn e tenendo le dimensioni del sito più contenute possibili, non fare uso di librerie esterne o frameworks pesanti. Fa solo uso di quelle che ti ho chiesto, puoi tranquillamente scriverle a mano o trovarle online.

Considera che il file raggiunto in partenza dai progetti su Github è index.html al di fuori di ogni cartella.

Vorrei tenere una struttura di progetto ordinata con gli html in una cartella, i js in un'altra e i css in altra ancora. Considera che dovrà essere hostata su hithub quindi attenzione alle dipendenze e ai path relativi o assoluti.

La login deve portare ad una landing-page con le sezioni: 
- chi siamo
- obiettivi
- dove operiamo
- contatti

Inoltre deve avere un menu laterale che porta ad altre sezioni del sito:
- area utenti: mostra una tabella con finti utenti, popolati da un json in una cartella /data
- area ordini: mostra una tabella con finti ordini, popolati da un json in una cartella /data
- area mezzi: mostra una tabella con finti mezzi, popolati da un json in una cartella /data
- area depositi: mostra una tabella con finti depositi, popolati da un json in una cartella /data
- area container: mostra una tabella con finti container, popolati da un json in una cartella /data con del contenuto di ogni container.
- area partenze: mostra le partenze dei vari mezzi con indirizzi, città, cap, stato e nazioneù
- area destinazioni: mostra le destinazioni dei vari mezzi con indirizzi, città, cap, stato e nazione

Crea degli schemi json per ciascuna categoria in una cartella /data.
