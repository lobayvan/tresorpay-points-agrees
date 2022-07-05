# Démarrer le module test trésorpay points agrées

Veuillez à bien exécuter dans l'ordre l'ensemble des commandes ci-dessous


## Prérequis 

Assurez vous d'avoir <a href=""> NodeJs v14.17.0 </a>  ou <a href=""> Docker </a> installé.


## Installer les dépendences

Installer l'ensemble des packages en exécutant la commande suivante

### `npm install`

## Démarrer le module avec NodeJs

Si vous avez <a href=""> NodeJs v14.17.0 </a> installé, démarrer le module en exécutant la commande suivante

### `npm run start`

## Démarrer le module avec Docker

Si vous avez <a href=""> Docker v14.17.0 </a> installé, démarrer le module en exécutant les commandes suivantes

```
docker build -t tresorpay-carte-point-agrees .
docker run --name tresorpay-carte-points-agrees -p 3001:3000 -d tresorpay-carte-point-agrees
```