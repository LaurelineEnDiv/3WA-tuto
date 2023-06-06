-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : db.3wa.io
-- Généré le : mer. 31 mai 2023 à 13:41
-- Version du serveur :  5.7.33-0ubuntu0.18.04.1-log
-- Version de PHP : 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `laurelineauger_projet`
--

-- --------------------------------------------------------

--
-- Structure de la table `agenda`
--

CREATE TABLE `agenda` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `show_id` int(11) NOT NULL,
  `lieu_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `agenda`
--

INSERT INTO `agenda` (`id`, `date`, `show_id`, `lieu_id`) VALUES
(119, '2022-01-07', 74, 17),
(120, '2022-01-22', 74, 4),
(121, '2022-01-30', 74, 18),
(122, '2022-02-15', 74, 19),
(123, '2022-02-22', 74, 21),
(124, '2022-02-23', 74, 21),
(125, '2022-02-24', 74, 21),
(126, '2022-02-25', 74, 21),
(127, '2022-02-26', 74, 21),
(128, '2021-06-03', 74, 12),
(129, '2021-06-11', 74, 13),
(130, '2021-06-26', 74, 14),
(131, '2021-06-30', 74, 15),
(132, '2023-05-25', 74, 37),
(133, '2023-05-26', 74, 37),
(134, '2023-06-01', 74, 38),
(135, '2023-06-02', 74, 38),
(136, '2023-06-03', 74, 38),
(137, '2023-06-09', 76, 25),
(138, '2023-07-01', 76, 34),
(139, '2023-07-11', 74, 27),
(140, '2023-06-10', 74, 39),
(142, '2023-06-10', 75, 39),
(143, '2023-07-08', 76, 28),
(144, '2023-08-04', 76, 26),
(145, '2023-08-05', 76, 26),
(147, '2023-08-06', 76, 26),
(148, '2023-09-23', 76, 35),
(149, '2020-02-25', 74, 40),
(150, '2020-09-25', 74, 41),
(151, '2020-09-26', 74, 41),
(153, '2020-10-17', 74, 43);

-- --------------------------------------------------------

--
-- Structure de la table `diff`
--

CREATE TABLE `diff` (
  `id` int(11) NOT NULL,
  `show_id` int(11) NOT NULL,
  `diff_pdf` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `diff`
--

INSERT INTO `diff` (`id`, `show_id`, `diff_pdf`) VALUES
(24, 74, '9a5d3cc80e9f24f55b610a300.pdf'),
(29, 77, 'd17d7ea57770748536de84d00.pdf'),
(30, 76, '71440b9ade077517928553100.pdf');

-- --------------------------------------------------------

--
-- Structure de la table `ft`
--

CREATE TABLE `ft` (
  `id` int(11) NOT NULL,
  `ft_show_id` int(11) NOT NULL,
  `ft_pdf` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `ft`
--

INSERT INTO `ft` (`id`, `ft_show_id`, `ft_pdf`) VALUES
(5, 74, '9a5d3cc80e9f24f55b610a301.pdf');

-- --------------------------------------------------------

--
-- Structure de la table `lieux`
--

CREATE TABLE `lieux` (
  `id` int(11) NOT NULL,
  `nom_lieu` varchar(100) NOT NULL,
  `site_web` varchar(100) NOT NULL,
  `ville` varchar(100) NOT NULL,
  `departement` varchar(2) NOT NULL,
  `pays` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `lieux`
--

INSERT INTO `lieux` (`id`, `nom_lieu`, `site_web`, `ville`, `departement`, `pays`) VALUES
(3, 'La Cave Poèsie', 'http://www.cave-poesie.com/', 'Toulouse', '31', 'France'),
(4, 'Le Lido', 'https://circolido.fr/', 'Toulouse', '31', 'France'),
(5, 'Cenre Culturel Renan', 'https://www.facebook.com/centreculturelrenan/', 'Toulouse', '31', 'France'),
(12, 'Maison de la Vallée', 'https://www.maisondelavallee.org/', 'Luz Saint Sauveur', '65', 'France'),
(13, 'Com. de com. Sud Hérault', 'https://www.cc-sud-herault.fr/', 'Pierrerue', '34', 'France'),
(14, 'Association NACEL', 'http://www.nacelculture.fr/', 'Genillé', '37', 'France'),
(15, 'La Brique Rouge', 'https://labriquedetoulouse.fr/', 'Toulouse', '31', 'France'),
(16, 'Happy Culture', 'https://www.happy-culture.com/', 'Verdun sur Garonne', '82', 'France'),
(17, 'Région en Scène', 'https://www.reseau-pyramid.org/', 'Pézenas', '34', 'France'),
(18, 'Festival du livre jeunesse', 'https://festival-livre-jeunesse.fr/', 'St-Orens', '31', 'France'),
(19, 'Festival au Fil de la Marionnette', 'https://www.jeliote.hautbearn.fr/aufildelamarionnette', 'Tourville-la-Rivière', '76', 'France'),
(20, 'Théâtre municipal', 'https://www.ville-castres.fr/fr/saison-culturelle', 'Castres', '81', 'France'),
(21, 'Théâtre du Grand Rond', 'https://www.grand-rond.org/', 'Toulouse', '31', 'France'),
(22, 'Le Bascala', 'https://www.le-bascala.com/', 'Bruguières', '31', 'France'),
(23, 'Service Culturel', '', 'Pézenas', '34', 'France'),
(24, 'Théâtre Jérôme Savary', 'https://www.villeneuvelesmaguelone.fr/culture-sport-loisirs/billetterie/', 'Villeneuve lès Maguelone', '34', 'France'),
(25, 'L\'été de Vaour', 'http://www.etedevaour.org/', 'Vaour', '81', 'France'),
(26, 'Festival MIMA', 'https://www.mima.artsdelamarionnette.com/', 'Mirepoix', '9', 'France'),
(27, 'Escpace Culturel Philippe Torreton', 'https://www.facebook.com/EspaceculturelPhilippeTorreton/?locale=fr_FR', 'Saint-Pierre-lès-Elbeuf', '27', 'France'),
(28, 'Bouillon Cube', 'https://bouilloncube.fr/', 'Causse de la Selle', '34', 'France'),
(29, 'Théâtre de l\'Albarède', 'https://www.facebook.com/TheatreAlbaredeGanges/', 'Ganges', '34', 'France'),
(30, 'Théâtre Allégro', 'https://www.theatreallegro.fr/', 'Miribel', '69', 'France'),
(31, 'Collectif M', 'https://www.facebook.com/collectifm34/?paipv=0&eav=AfYS39EZEzsxTZuqKYlUinLDokmUrHlSEZjvoiSFn0MMX48lA', 'La Salvetat sur Agout', '34', 'France'),
(32, 'Service Culturel', '', 'Tonneins', '31', 'France'),
(33, 'Melando', 'https://www.grandpicsaintloup-tourisme.fr/saison-artistique-de-melando', 'Buzignargues', '34', 'France'),
(34, 'PAJIP', 'https://paajip.fr/', 'Risle-Lèze', '9', 'France'),
(35, 'Arène Théâtre', 'https://www.arenetheatre.fr/', 'Coutures', '82', 'France'),
(37, 'Festival Brik  à Brak', 'https://festival-brikabrak.fr/', 'La Bugue', '24', 'France'),
(38, 'Des artistes à la campagne', 'https://www.artistesalacampagne.fr/page/1105941-accueil', 'Dammartin-les-Templiers', '25', 'France'),
(39, 'Le Kiasma', 'https://www.lekiasma.fr/', 'Castelnau-le-Lez', '34', 'France'),
(40, 'Cabaret 2000', 'https://cirquepetitesnatures.fr/', 'Toulouse', '31', 'France'),
(41, 'Tout un Monde', 'https://www.toutunmonde.eu/', 'Toulouse', '31', 'France'),
(43, 'Teatro Centro Cultural La Vaguada', 'https://www.madridcultura.es/entidad/553/centro-cultural-la-vaguada-fuencarral-el-pardo', 'Madrid', '--', 'Espagne');

-- --------------------------------------------------------

--
-- Structure de la table `partenaires`
--

CREATE TABLE `partenaires` (
  `id` int(11) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `url` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `partenaires`
--

INSERT INTO `partenaires` (`id`, `nom`, `url`) VALUES
(1, 'La Commanderie - L\'Eté de Vaour\r\n', 'http://www.etedevaour.org/'),
(2, 'CIRCA, Pôle National Cirque - Auch', 'http://www.circa.auch.fr'),
(3, 'La Cave Poésie - Toulouse', 'http://www.cave-poesie.com/'),
(4, 'Bouillon Cube - Causse de la Selle', 'https://bouilloncube.fr/');

-- --------------------------------------------------------

--
-- Structure de la table `pictures`
--

CREATE TABLE `pictures` (
  `id` int(11) NOT NULL,
  `show_id` int(11) NOT NULL,
  `url_pictures` varchar(100) NOT NULL,
  `image_selected` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `pictures`
--

INSERT INTO `pictures` (`id`, `show_id`, `url_pictures`, `image_selected`) VALUES
(130, 74, '4bc535e665310bbec85ac7600.jpg', 0),
(131, 74, '4bc535e665310bbec85ac7601.jpg', 0),
(132, 74, '4bc535e665310bbec85ac7602.jpg', 0),
(133, 74, '4bc535e665310bbec85ac7603.jpg', 0),
(134, 74, '4bc535e665310bbec85ac7604.jpg', 1),
(135, 75, 'ad80af5877c4f92beaf347800.jpg', 0),
(136, 75, 'ad80af5877c4f92beaf347801.jpg', 0),
(137, 75, 'ad80af5877c4f92beaf347802.jpg', 1),
(138, 76, 'ad80af5877c4f92beaf347803.jpg', 1),
(139, 77, 'ad80af5877c4f92beaf347804.jpg', 1);

-- --------------------------------------------------------

--
-- Structure de la table `profilpictures`
--

CREATE TABLE `profilpictures` (
  `id` int(11) NOT NULL,
  `photo` varchar(250) NOT NULL,
  `team_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `profilpictures`
--

INSERT INTO `profilpictures` (`id`, `photo`, `team_id`) VALUES
(4, 'e99bc544b2339c24e9aa0b200.jpg', 6),
(5, 'e99bc544b2339c24e9aa0b201.jpg', 7),
(6, 'e99bc544b2339c24e9aa0b202.jpg', 8),
(7, 'e99bc544b2339c24e9aa0b203.jpg', 9),
(8, 'e99bc544b2339c24e9aa0b204.jpg', 10),
(9, '790f1dabc6710af63282a9c00.jpg', 11);

-- --------------------------------------------------------

--
-- Structure de la table `shows`
--

CREATE TABLE `shows` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `pitch` tinytext NOT NULL,
  `content` longtext NOT NULL,
  `year_creation` year(4) NOT NULL,
  `url_video` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `shows`
--

INSERT INTO `shows` (`id`, `title`, `pitch`, `content`, `year_creation`, `url_video`) VALUES
(74, 'Bateau', 'Pour toute la famille, destiné à l\'enfant qui vivait en chacun.\n', 'C’est un bout d’enfant qui est resté coincé dans un adulte et qui s’est accroché à une douce rage de vivre.\n\nL’adulte oublie souvent l’enfant qu’il était, l’enfant qui est en lui. Que reste-t-il de cet enfant ? Du jeu ? Du simple ? Des monstres sous le lit ? De la nostalgie et des rêves ?.. L’émerveillement.\n\nTout cela est enfoui dans une malle en bois, sous le sable d’une plage abandonnée d’une mer polluée. Cette mer accueille notre voyage simple et direct dans notre imaginaire, dans nos émotions et nos sens, nos corps sont l’eau qui la compose.\nSur cette plage abandonnée, subsistent l’enfance, le jeu, la joie, la solitude et la mort.\nL’imaginaire né du manque… sa nécessité.\n\nCe spectacle est la pelle pour déterrer cette malle pleine de souvenirs et se prendre à rêver avec l’être sensible que nous sommes.\nSous une forme poético-punk, il met en scène un adulte dans une chambre d’enfant avec ses objets, sa psychologie d’adulte et ses logiques d’enfant.', 2020, 'https://www.youtube.com/embed/JZlo_dqz1ic'),
(75, 'Douce Solitude', 'Mélange entre chanson, poésie, rap et musique instrumentale.', 'L’instrument principal est le banjo 5 cordes accompagné de ma voix.\nTout cela accompagné d’un petit synthétiseur, d’un strumstick (instrument from USA à 3 cordes) et d’une ribambelle de pédale d’effet, de loop et de rythmes.\n\nA travers mes chansons je viens parler de la mort, de la vie, de mon poisson rouge, du désir de s’évader, mon grand-père, la poésie, la vulve (interdit aux moins de 18ans) etc.\nTout ces textes sont un reflet de l’homme que je suis, de ce que j’ai vécu, de ce que je vis là, maintenant.\nC’est du tout public à part un passage de la chanson « Les portes de la vie ». Mais je préviendrais pour que les enfants se bouchent les oreilles.\n\nCe spectacle est dans la continuité de « Bateau » dans un registre poético-comico et parfois mélancolico-positif.\nDe par ma formation de circassien (Lido), le concert est parsemé de surprise de situation et d’humour, tout cela dans un acte d’amour et de tranquillité.\n\nLe public sera plutôt assis ou même allongé, pour profiter de ce moment calme, une pause dans une vie bien agitée.', 2022, 'https://www.youtube.com/embed/5JWHJZvMdFE'),
(76, 'Sensible', 'Projet en cours de création...', '', 2022, ''),
(77, 'One', 'Projet en cours de création...', '', 2022, '');

-- --------------------------------------------------------

--
-- Structure de la table `team`
--

CREATE TABLE `team` (
  `id` int(11) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `role` varchar(50) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `phone` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `team`
--

INSERT INTO `team` (`id`, `prenom`, `nom`, `role`, `mail`, `phone`) VALUES
(6, 'Jean', 'Couhet-Guichot', 'Artiste', 'leshommessensibles@gmail.com', '06 45 87 86 18'),
(7, 'Rick', 'Pulford', 'Artiste', 'rick.pulford@gmail.com', '07 60 35 54 18'),
(8, 'Arthur ', 'Amouroux', 'Artiste', '', ''),
(9, 'Justine', 'Swygedauw', 'Diffusion', 'diffusionleshommessensibles@gmail.com', '06 37 99 08 71'),
(10, 'Robin', 'Socasau', 'Regard extérieur', '', ''),
(11, 'Elise', 'Girard', 'Administration', 'admleshommessensibles@gmail.com', '06 82 22 18 07');

-- --------------------------------------------------------

--
-- Structure de la table `textes`
--

CREATE TABLE `textes` (
  `id` int(11) NOT NULL,
  `zone` varchar(100) NOT NULL,
  `titre` varchar(100) NOT NULL,
  `text1` longtext NOT NULL,
  `text2` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `textes`
--

INSERT INTO `textes` (`id`, `zone`, `titre`, `text1`, `text2`) VALUES
(1, 'home', 'En bref', 'Les Hommes Sensibles est une compagnie de cirque qui mélange acrobatie , danse, théâtre d’objet, musique, culture Hip-hop et magie (au sens large... très large).\r\n\r\nSes artistes ont comme points communs leurs sensibilités. Bien que différentes, elles se rejoignent et ensemble deviennent force.', ''),
(2, 'compagnie', 'Les Hommes Sensibles', 'Les Hommes Sensibles est une compagnie de cirque qui mélange acrobatie, danse, théâtre d’objet, musique, culture Hip-hop et magie (au sens large... très large).\r\n\r\nSes artistes ont comme points communs leurs sensibilités. Bien que différentes, elles se rejoignent et ensemble deviennent force.\r\n\r\nReprésentant ainsi l\'évolution contemporaine de la virilité, où l\'homme, en crise identitaire, redevient simplement un homme de sens, poétique, un Homme Sensible.\r\n\r\nLoin d’être masculiniste ou révolutionnaire, l’Homme Sensible est ce qu\'il est, un homme nouveau, avec toute sa bêtise et toute sa beauté.', 'Au cœur du travail artistique de la compagnie se trouvent les failles et les doutes de ses artistes interprètes, leur confiance, leur auto-dérision, mais surtout leurs désirs. \r\n\r\nDésirs de déplacer les esprits, de partager des émotions et de la simplicité, rire à n\'en plus finir (si possible).\r\n\r\nFaire une pause dans une vie bien agitée.\r\n\r\nAccepter sa sensibilité et se sentir vivant autant pour les femmes, les hommes, les personnes non-binaires, les enfants, les personnes âgées, les personnes ayant un handicap, les super héros, bref, pour tout le monde.');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `prenom` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `nom`, `prenom`, `email`, `password`) VALUES
(2, 'Auger', 'Laureline', 'laureline.auger@gmail.com', '$2b$10$DcTnjUF7tyWZfSobHSY3Uu7daCnT8sB5W1eatsD0DA..KKQneUG5C'),
(33, 'Swygedauw', 'Justine', 'diffusionleshommessensibles@gmail.com', '$2b$10$UVyrBISk63ROVka33bHWqe2K.AXES43GR8eyTV5eRjRRyhjZuMxVO');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `agenda`
--
ALTER TABLE `agenda`
  ADD PRIMARY KEY (`id`),
  ADD KEY `show_id` (`show_id`),
  ADD KEY `lieu_id` (`lieu_id`);

--
-- Index pour la table `diff`
--
ALTER TABLE `diff`
  ADD PRIMARY KEY (`id`),
  ADD KEY `show_id` (`show_id`);

--
-- Index pour la table `ft`
--
ALTER TABLE `ft`
  ADD PRIMARY KEY (`id`),
  ADD KEY `show_id` (`ft_show_id`);

--
-- Index pour la table `lieux`
--
ALTER TABLE `lieux`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `partenaires`
--
ALTER TABLE `partenaires`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `pictures`
--
ALTER TABLE `pictures`
  ADD PRIMARY KEY (`id`),
  ADD KEY `show_id` (`show_id`);

--
-- Index pour la table `profilpictures`
--
ALTER TABLE `profilpictures`
  ADD PRIMARY KEY (`id`),
  ADD KEY `team_id` (`team_id`);

--
-- Index pour la table `shows`
--
ALTER TABLE `shows`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `textes`
--
ALTER TABLE `textes`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `agenda`
--
ALTER TABLE `agenda`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=154;

--
-- AUTO_INCREMENT pour la table `diff`
--
ALTER TABLE `diff`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT pour la table `ft`
--
ALTER TABLE `ft`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `lieux`
--
ALTER TABLE `lieux`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT pour la table `partenaires`
--
ALTER TABLE `partenaires`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `pictures`
--
ALTER TABLE `pictures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=146;

--
-- AUTO_INCREMENT pour la table `profilpictures`
--
ALTER TABLE `profilpictures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `shows`
--
ALTER TABLE `shows`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT pour la table `team`
--
ALTER TABLE `team`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `textes`
--
ALTER TABLE `textes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `agenda`
--
ALTER TABLE `agenda`
  ADD CONSTRAINT `agenda_ibfk_1` FOREIGN KEY (`show_id`) REFERENCES `shows` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `agenda_ibfk_2` FOREIGN KEY (`lieu_id`) REFERENCES `lieux` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `diff`
--
ALTER TABLE `diff`
  ADD CONSTRAINT `diff_ibfk_1` FOREIGN KEY (`show_id`) REFERENCES `shows` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `ft`
--
ALTER TABLE `ft`
  ADD CONSTRAINT `ft_ibfk_1` FOREIGN KEY (`ft_show_id`) REFERENCES `shows` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `pictures`
--
ALTER TABLE `pictures`
  ADD CONSTRAINT `pictures_ibfk_1` FOREIGN KEY (`show_id`) REFERENCES `shows` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `profilpictures`
--
ALTER TABLE `profilpictures`
  ADD CONSTRAINT `profilpictures_ibfk_1` FOREIGN KEY (`team_id`) REFERENCES `team` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
