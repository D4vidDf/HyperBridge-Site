---
title: "Changelog"
description: "Release history and updates for HyperBridge (Français)."
layout: "simple"
---

Follow the latest updates, features, and release history for **HyperBridge**.


---

### v0.5.7: Performance & Sync Update `Latest` *(English)*

**Optimizations & Fixes**

- **Code Optimization:** Upgraded to the latest Android Gradle Plugin and enabled R8 code shrinking for a smaller, faster app.

- **Stability:** Improved notification synchronization and fixed an issue where original notifications were sometimes prematurely dismissed (PR #258).

---

### v0.5.6: Landscape Hide & Stability Fixes *(English)*

**Fixes & Improvements**

- **System UI Stability:** Validated highlightColor before passing to SystemUI to prevent crashes.

- **Permanent Island Behavior:** Fixed an issue where the permanent island disappeared after notifications or unlock.

- **Landscape Mode:** Added an option to hide the Permanent Island in landscape orientation.

---

### v0.5.5: Messaging & Update Fixes *(English)*

**Live Updates & Islands**

- **Icons:** Fixed an issue where the original app icon wouldn't display properly on Android 16 Live Updates.

- **Inline Replies:** You can now use inline replies directly from Live Update notifications.

- **Island Removal:** Fixed an issue where islands were not being properly removed when dismissed.


**Messaging Grouping Overhaul**

- **Deduplication:** Completely reworked how messaging-style notifications (like WhatsApp) are grouped to prevent duplicated islands.


**Fixes & Stability**

- **Update Migration:** Fixed a critical bug where updating the app wouldn't trigger the proper database migration logic.

- **Defaults:** Disabled "Show in shade" by default on the onboarding screen.

- **Localization:** Resolved broken characters in translated strings.

---

### v0.5.2: Réponse intégrée, performance & stabilité

**Nouvelle fonctionnalité de réponse intégrée !**

- **Réponse intégrée :** Vous pouvez désormais répondre aux messages directement depuis la notification sans ouvrir l'application !

- **Personnalisation :** Personnalisez entièrement l'apparence du nouvel éditeur de réponse intégrée, soit globalement, soit par application.

- **Paramètres généraux :** Accédez à la nouvelle section de personnalisation des réponses directement depuis Paramètres généraux -> Réponse intégrée.



**Correction de crash du Play Store & Stabilité**

- **Créateur de thème :** Correction d'un plantage lors de l'analyse d'un grand nombre d'actifs personnalisés.

- **Performances :** Résolution d'un problème d’application qui ne répond plus (ANR) sur l’écran initial de bienvenue.

- **Widget Picker:** Elimination de plantages et d'erreurs Out-Of-Memory (OOM) causés par une prévisualisation de Widget extremement large.

- **Dispositions de l'interface utilisateur :** Correction des exceptions sur les contraintes de mise en page de composition de Jetpack qui plantaient l'application lors du redimensionnement de certains menus.

- **Sauvegardes :** Erreurs OOM corrigées lors de l'importation de gros fichiers de sauvegarde en optimisant l'analyse JSON.

- **Démarrage chaud :** Amélioration significative des vitesses de lancement des applications et élimination du blocage des piles d'interface utilisateur sur les appareils de milieu de gamme.

- **Service d'arrière-plan :** Révision complète de l'architecture du traitement d'écoute, chute de la charge en arrière-plan à 0 % et amélioration de la durée de vie de la batterie.

---

### v0.5.1: Corrections & Affinements

**Corrections & stabilité**

Correction des doublons WhatsApp : résolution d'un problème qui entraînait l'affichage de notifications WhatsApp en double.

Correction du scintillement des notifications & des plantages : correction d'un plantage provoqué par la réception de plusieurs notifications en peu de temps. L'application met désormais à jour les notifications normalement et en toute sécurité, ce qui élimine le scintillement des notifications et améliore la stabilité.

Restauration des intentions de notification : correction d'un problème où cliquer sur une notification mise en avant redirigeait à tort vers l'écran de dépannage au lieu de l'application d'origine.


**Fonctionnalités & améliorations**

Suppression de l'îlot lors de la fermeture : ajout d'une nouvelle option permettant de supprimer automatiquement l'îlot si la notification système d'origine est fermée.

Diagnostic des notifications en vedette : ajout d'un nouvel écran de vérification lors de la configuration initiale pour vérifier si votre appareil Xiaomi prend en charge les notifications en vedette et si les autorisations requises sont activées.

Intégration à l'état de la configuration : l'état des autorisations pour les notifications en vedette est désormais surveillé en continu et affiché dans l'écran d'état de la configuration.

Écran de dépannage : ajout d'un écran de dépannage dédié qui guide les utilisateurs sur la manière d'activer les autorisations système cachées nécessaires (ou d'utiliser Shizuku) pour que les bulles de notifications fonctionnent sur les ROM Xiaomi strictes.

Terminologie plus claire : la section « Mises à jour en direct » du menu des paramètres a été renommée « Gestion des notifications » afin de mieux refléter

Polissage de l'Interface utilisateur : rétablissement des coins arrondis qui manquaient dans l'option « bulles permanentes » de la liste des paramètres généraux.

Traductions en espagnol : ajout de traductions complètes en espagnol pour toutes les nouvelles boîtes de dialogue de dépannage, les contrôles d'intégrité de la configuration et les paramètres de gestion des notifications.

---

### v0.5.0: La mise à jour "Live Update"

**Support ROM CN**

- Utilisez Sui & Shizuku pour profiter des notifications Hyper Islands sur vos appareils exécutant des ROM HyperOS CN (chinois) sans prise en charge native.


**Améliorations du moteur de thème**

- Sélection du moteur : vous pouvez désormais choisir le moteur d'animation par application ou global.

- Solution de contournement Shizuku : option ajoutée directement à l'onglet Moteur de l'éditeur de thème.

- Contrôles de comportement : les délais d'attente personnalisés et la logique contextuelle sont désormais entièrement pris en charge.


**Île permanente intelligente**

- Toujours visible : gardez la notification à l'écran même sans notifications actives.

- Masquer automatiquement : l'îlot permanent se cache désormais automatiquement chaque fois qu'un widget actif est affiché à l'écran.


**Teinture intelligente des icônes**

- Le nouveau système de détection analyse automatiquement les icônes de notification extraites et les teinte intelligemment en blanc si elles sont sombres ou monochromes.


**Téléchargements & progression**

- Nouvelle présentation de téléchargement dédiée : présentations de téléchargement et de progression séparés avec des conceptions visuelles dédiées.

- Prise en charge de la progression du texte : pourcentage sous forme de texte (par exemple "12 %") pour les mises à jour d'applications, même sans barres de progression natives.

- Filtrage intelligent : vérification de la progression basée sur du texte pour stocker et télécharger le programme d'installation afin d'éviter de faux déclenchements sur d'autres notifications d'état.


**Corrections de messagerie**

- Correction des avatars d'expéditeur manquants dans des applications comme Telegram (extrait désormais correctement les données "sender_person").

- Problèmes résolus avec les notifications groupées (résumés de discussion) ne déclenchant pas les notifications.

- Correction de bugs de disparition des notifications causés par des conditions de mise à jour des notifications.


**Système & Intégration**

- Nouvel écran d'intégration : tout nouveau processus de configuration plus simple pour les autorisations critiques.

- Correctif de démarrage : le service démarre désormais immédiatement et de manière fiable après le redémarrage.

- Alertes plus intelligentes : les téléchargements et les médias sont mis à jour silencieusement, tandis que les mises à jour de messagerie déclenchent de manière fiable des animations contextuelles.

- Navigation : transitions d'applications plus rapides et plus fluides.

---

### v0.4.2: Mise à jour de corrections de bugs

- **Correction d'un crash :** Résolution d'un problème critique qui faisait planter l'application lors de l'ouverture du menu des paramètres en chinois traditionnel.

- **Corrections diverses :** Corrections générales de bugs pour améliorer la stabilité et la fluidité de l'application.

---

### v0.4.0: La version de la personnalisation

**Système de thèmes 🎨**

La plus grande mise à jour ! Vous pouvez maintenant personnaliser pleinement l'expérience visuelle des bulles de notification.

- **Créateur de Thèmes :** Concevez des thèmes directement sur votre téléphone avec un aperçu en temps réel.

- **Paramétrage plus fin:**; Choisissez exactement comment les icônes sont affichées, personnalisez les couleurs et les formes des notifications, et configurer les remplacements des applications individuelles.

- **Couleurs intelligentes:**; Extraction automatique des couleurs des icônes d'application.

- **Personnalisation par action (Bêta):**; Ajustement de l'apparence de certaines notifications d'actions spécifiques.

- **Partage :** Exportez et importez des thèmes au format <i>hbr</i> .



**Support des widget 🧩**

Verrouillez les widgets standard d'Android pour un accès rapide — même sur votre **écran verrouillé**!

- Choisissez entre les modes **interractifs** pour la vitesse ou **instantané** pour l'efficacité de la batterie.



**Moteur de notification 2.0⚡**

Réécriture complète du moteur pour une meilleure stabilité:

- **Analyse intelligente : ** Résolutions de problèmes où les notifications affichaient les noms des paquets (par ex. : com.whatsapp) au lieu du contenu du message.

- **Anti-scintillement :** La vérification de contenu empêche les notifications redondantes et les saccades.

- **Correction des fantômes :** Résolution d'un problème où les notifications persistaient après leur suppression.



**Rafraîchissement visuel ✨**

- Onglet "Design" redessiné pour plus de fluidité avec des blocs dynamiques.

- Nouveaux boutons de textes pour des actions de notification plus claires.

- Ajout du support pour l'indonésien 🇮🇩 et le turque 🇹🇷.



<i>Note : Cette version comprend des changements architecturaux importants. Veuillez signaler tout bug sur GitHub !</i>

---

### v0.3.1: Sauvegarde & langues

**Sauvegarde & Restauration 📦**

Nouvelle fonctionnalité utilisateur ! Exportez vos paramètres, listes de blocage et priorités d'applications en toute sécurité vers un fichier .hbr et restaurez les à tout moment.


**Nouvelles Langues 🌍**

Support Ajouté pour :

- :Allemagne : Allemand

- :Russie : Russe

- 🇺🇦 Ukrainien (Imprové)

<i>Plus : Un nouveau sélecteur de langue a été intégré pour changer de Langue sans toucher aux paramètres  système.</i>



**Mise à jour visuelle 🎨**

L'application a été mise à jour avec **Material 3 Expressive** . Appréciez des en-têtes plus grands, des formes arrondies et une expérience plus agréable.


**Confidentialité & Configuration 🛡️**

- Amélioration de l'intégration avec une page consacrée à la protection de la vie privée qui clarifie l'architecture hors ligne.

- Des contrôles de compatibilité plus stricts pour assurer la meilleure expérience sur HyperOS 3.0.



**Corrections 🛠️**

- Correction d'un problème critique où les paramètres étaient perdus après le redémarrage de l'appareil (migré vers la base de données).

- <Correction du bouton "Quitter" sur les bulles de navigation s'affichant sous la forme d'une icône au lieu du texte.

- Correction de l'icône de chargement dans les paramètres.

---

### v0.3.0: La version "Globale"

**Notification masquée 👻**

Nouvelle option pour masquer les notifications du panneau système tout en gardant les bulles active. Vérifiez les paramètres généraux!


**Nouvelles langues 🌍**

Un merci spécial à notre communauté pour ces traductions :

- 🇧🇷 portugais (Brésil)

- 🇵🇱 polonais

- 🇰🇷 coréen


- 🇺🇦 ukrainien


**Personnalisation de la navigation 🧭**

Vous pouvez maintenant choisir les informations qui apparaissent sur les côtés gauche et droit de la bulle de navigation (distance, ETA, instruction).


**Protection contre les spoilers 🛡️**

Nouvelle fonctionnalité « termes bloqués ». Définissez des mots globalement ou par application pour empêcher l'affichage de notifications spécifiques.


**Améliorations des appels 📞**

Logique de détection améliorée pour prendre en charge une plus grande gamme d'applications VoIP et de clavier.


**Corrections et & améliorations 🛠️**

- Correction d'un bug critique qui empêchait le chargement de l'application après un redémarrage.

- Correction des notifications affichant parfois les noms bruts des packages (par exemple, "com.google...") au lieu du contenu.

- Feuille de configuration de l'application repensée pour une meilleure convivialité.

- Écran de vérification de compatibilité amélioré avec des informations détaillées sur l'appareil

---

### v0.2.0: La version de l'information

- **Progression avancée:** Ajout d'étapes de progressions (par ex. 1 sur 3) et de barres de progression avec icônes dans la bulle de notification.

- **Système de priorité :** Nouveaux paramètres « Comportement des bulles de notification. Choisissez entre "Les plus récents", "Premier arrivé" ou une liste personnalisée "Priorité des applications".

- ** Filtrage intelligent :** Détection améliorée des notifications en double et des téléchargements groupés.

- **Améliorations visuelles :** Correction de problèmes de mise en page avec les instructions de navigation.

- **Configuration par application :** Personnalisez le comportement du délai d'attente et du flottement par application.

---

### v0.1.0: La version expressive

- **Révision majeure de l'interface utilisateur :** Nouveau design "Material 3 expressive" avec des animations plus fluides.

- ** Meilleure bulle:** Le texte apparaît maintenant sur le côté droit. Ajout d'une coche verte pour les téléchargements terminés.

- **Configuration par application :** Sélectionnez les types de notifications spécifiques (Musique, Plans, Appels) par application.

- **Filtres intelligents :** Bloque les notifications en double et économise la batterie.

- **Nouvelle bibliothèque :** Filtrer les applications par catégorie et ordre de tri.

- **Localisation :** Ajout de la langue espagnole
