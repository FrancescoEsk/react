# Installazione di Typescript nel progetto

`npm install --save-dev typescript` esegue l'installazione di typescript **solamente nella cartella corrente**.

> L’opzione --save-dev indica a npm di aggiungere il pacchetto (in questo caso, typescript) come una dipendenza di sviluppo nel file package.json del tuo progetto.

La differenza sta nel fatto che ciò che mettiamo --save-dev sono le librerie che servono solo a me che devo creare il progetto, mentre i pacchetti installati senza il --save-dev, sono quei pacchetti per cui il progetto, senza di essi, non può funzionare. Ovvero, ciò che il cliente finale deve installare obbligatoriamente per far funzionare il tutto.

D'ora in poi, per utilizzare il comando tsc devo sempre anteporre `npx` prima di ogni comando che utilizza tsc, ad esempio

`npx tsc`

## Per iniziare il progetto, invece

`npm init` ti chiede come compilare il file package.json, gli dai quello che chiede (se non vuoi dare risposta, basta premere invio senza scrivere nulla).

`npx tsc --init` invece impsota bene il file *package.json*

E quindi, viene impostato correttamente il progetto.

Nel mentre è consigliato cambiare una riga, togliendo il commento, al file *tsconfig.json*

`"outDir": "./dist"`

**ciò farà si che tutti i file compilati da typescript a javascript, finiranno nella cartella *./dist***, senza intasare il nostro progetto di file che a noi non interessano.

# Introduzione a tsx

Comando salva vita che rende il tuo coding molto più fluido. In sostanza, **è un comando che ti permette di compilare da typescript a javascript ed eseguire il javascript, in una sola riga.**

Installazione: `npm install --save-dev tsx`

Esecuzione di un file typescript tramite tsx: `tsx src/index.ts`

Ed ora, **il comando salva vita**: `tsx --watch src/index.ts`

Fatto ciò, il file .ts fornito verrà ri-eseguito ogni volta che in tale file viene salvata una modifica.

> Per terminare questo, premere crtl + c
