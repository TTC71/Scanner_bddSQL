# Application Scan Produits (version SQL)

Cette application permet de scanner des codes produits et récupérer les informations en direct de la base SQL MariaDB.

## Fonctionnalités

- Chargement des produits depuis MariaDB (via API PHP)
- Affichage produit, quantité, prix
- Mode scanner (simulation clavier pour tests)
- 100% hébergé sur NAS Synology

## Installation

1. Copiez tous les fichiers dans `/volume1/web` sur votre NAS.
2. Vérifiez que MariaDB tourne sur le NAS et que la table `produits` est remplie.
3. Visitez http://votre_ip_nas/index.html pour utiliser l'application.

## Configuration

Modifiez `api/produits.php` pour ajuster le mot de passe et les infos SQL.

## Bonus

Peut être publié sur GitHub et adapté pour un usage mobile.
