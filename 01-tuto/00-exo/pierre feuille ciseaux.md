# Pierre Papier Ciseaux

1. Créer une fonction appelée `getComputerChoice` qui renverra au hasard soit `'pierre'`, `'papier'` ou `'ciseaux'`. Nous utiliserons cette fonction dans le jeu pour retourner le choix de l'ordinateur

2. Écrire une fonction qui joue une seule manche de "Pierre Papier Ciseaux". La fonction doit prendre deux paramètres - `playerSelection` et `computerSelection` - puis renvoyer une chaîne qui déclare le vainqueur du tour comme suit : `"Vous avez gagné !"`

- Rendre le paramètre `playerSelection` de la fonction insensible à la casse (afin que les utilisateurs puissent saisir pierre, pIERRE, pierrE ou toute autre variante).

```js
function playRound(playerSelection, computerSelection) {
  // Le code
}

const playerSelection = 'pierre';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
```

3. Écrire une NOUVELLE fonction appelée `game()`. Appeler la fonction `playRound` à l'intérieur de celle-ci pour jouer 5 manches qui enregistre le score et signale un gagnant ou un perdant à la fin.

- À ce stade, on utilisera `console.log()` pour afficher les résultats de chaque tour et le gagnant à la fin.

- Utiliser `prompt()` pour obtenir l'entrée de l'utilisateur
