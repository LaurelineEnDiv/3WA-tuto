Projet React + Node.js avec Docker Compose sur un serveur Debian
Ce Readme fournit des instructions sur la configuration et l'exécution d'un projet React et Node.js à l'aide de Docker Compose sur un serveur Debian. Il explique également comment exécuter le code en local, vérifier les PID des conteneurs Docker, les arrêter et les relancer.

Prérequis
Assurez-vous d'avoir les éléments suivants installés sur votre système :

Docker
Docker Compose
Node.js
npm (Node Package Manager)
Configuration du projet
Clonez le référentiel Git du projet dans votre répertoire local :

```
git clone <URL_DU_RÉFÉRENTIEL_GIT>
```

Accédez au répertoire du projet :

```
cd nom-du-projet
```

Installez les dépendances du projet :

```
npm install
```

Exécution en local
Pour exécuter le projet en local, utilisez la commande suivante :

```
npm start
```

Cela lancera le serveur Node.js et le client React simultanément.

Accédez à l'URL suivante dans votre navigateur :
arduino

http://localhost:3000
Vous devriez maintenant voir l'application React en cours d'exécution.

Utilisation de Docker Compose
Le projet est également configuré pour être exécuté à l'aide de Docker Compose. Vous pouvez exécuter les conteneurs Docker sur votre serveur Debian à l'aide des étapes suivantes :

Assurez-vous que Docker et Docker Compose sont installés sur votre serveur Debian.

À partir du répertoire racine du projet, exécutez la commande suivante pour construire les images Docker :

```
docker-compose build
```

Une fois la construction terminée, exécutez la commande suivante pour lancer les conteneurs :

```
docker-compose up -d
```

Les conteneurs Docker pour le serveur Node.js et le client React seront maintenant en cours d'exécution.

Accédez à l'URL suivante dans votre navigateur :
arduino

http://localhost:3000
Vous devriez voir l'application React fonctionnant dans les conteneurs Docker.

Vérification et gestion des conteneurs Docker
Pour vérifier les PID des conteneurs Docker en cours d'exécution, utilisez la commande suivante :

```
docker ps
```

Cela affichera une liste des conteneurs actifs avec leurs ID et autres détails.

Pour arrêter les conteneurs Docker, utilisez la commande suivante :

```
docker-compose down
```

Cela arrêtera tous les conteneurs liés au projet.

Pour relancer les conteneurs Docker après les avoir arrêtés, exécutez la commande suivante :
```
docker-compose up -d
```

Les conteneurs Docker seront relancés et accessibles à nouveau.

N'hésitez pas à explorer davantage Docker et Docker Compose pour en apprendre davantage sur la gestion des conteneurs et des images dans un environnement de production.

C'est tout ! Vous êtes prêt à exécuter le projet React et Node.js à l'aide de Docker Compose sur votre serveur Debian. Profitez de votre développement et de votre déploiement facilités grâce à Docker !

Il est à noté  qu'une fois sur votre serveur vous devez absolument arrêter les containers de docker afin d'appliquer une mise à jour du code source. Pour cela il faut utiliser la commande suivante :

```
docker kill <pid> || docker kill <nom_du_container>
```

Puis ensuite relancer le doker-compose

P.S : Il existe des environnements oû il faut lancer docker-compose up au lieu de docker compose up.

Si aucun changement n'est fait assurez-vous d'avoir pull votre projet puis kill le container et kill l'image associé que ce soit back / front et procéder à nouveau au docker compose up.

Afin de faire tourner votre projet en local, veuillez installer mysql sur votre machine. Rendez-vous dans votre fichier .env et liser le commentaire afin de commenter/décommenter la bonne ligne. Ensuite procéder au lancement de votre projet en local.

Si vous n'arrivez pas à voir les changements que vous effectuer directement en local. il faut docker compose up  à chaque fois en supprimant l'image associé afin de les voir. 

Il n'est pas recommandé d'utiliser cette solution car celle-ci rajoute du temps de dev inutilement. Il vaut mieux dev directement en local sans passer par docker puis à la fin recompiler pour que les 3 services (Front, Back, DB) soient liés ensemble.

Recommandation :
- Ne développez jamais sur la Branche Master, celle-ci doit représenter la version fonctionnelle. Si celle-ci se casse aucun retour en arrière ne sera possible.