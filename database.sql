-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : mar. 28 mai 2024 à 18:31
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `aurelineauger_projet`
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

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
(139, '2023-07-11', 74, 27),
(140, '2023-06-10', 74, 39),
(144, '2023-08-04', 76, 26),
(145, '2023-08-05', 76, 26),
(148, '2023-09-23', 76, 35),
(149, '2020-02-25', 74, 40),
(150, '2020-09-25', 74, 41),
(151, '2020-09-26', 74, 41),
(153, '2020-10-17', 74, 43),
(155, '2023-10-03', 74, 45),
(156, '2023-10-04', 74, 44),
(157, '2023-10-05', 74, 44),
(158, '2023-10-07', 74, 46),
(159, '2023-10-11', 74, 47),
(160, '2023-10-12', 74, 48),
(161, '2023-10-13', 74, 49),
(163, '2023-11-07', 74, 51),
(164, '2023-11-09', 74, 52),
(165, '2023-11-12', 74, 53),
(166, '2023-11-13', 74, 54),
(168, '2023-11-15', 74, 56),
(176, '2023-11-20', 74, 64),
(177, '2023-11-21', 74, 65),
(178, '2023-11-22', 74, 66),
(179, '2023-11-23', 74, 67),
(180, '2023-11-24', 74, 68),
(181, '2023-11-25', 74, 69),
(182, '2023-11-27', 74, 70),
(183, '2023-11-29', 74, 71),
(185, '2023-12-04', 74, 73),
(186, '2023-12-05', 74, 74),
(187, '2023-12-06', 74, 75),
(188, '2023-12-08', 74, 76),
(189, '2023-12-09', 74, 77),
(190, '2023-12-12', 74, 78),
(191, '2023-12-13', 74, 79),
(192, '2023-12-14', 74, 80),
(193, '2023-11-17', 76, 81),
(194, '2023-08-11', 76, 82),
(195, '2023-08-13', 76, 83),
(196, '2023-08-26', 76, 84),
(199, '2024-02-14', 74, 87),
(200, '2024-02-15', 74, 88),
(201, '2024-02-16', 74, 89),
(202, '2024-02-17', 74, 90),
(204, '2024-01-12', 74, 92),
(205, '2024-01-13', 74, 93),
(206, '2024-01-14', 74, 94),
(207, '2024-01-15', 74, 95),
(208, '2024-01-16', 74, 96),
(209, '2024-01-17', 74, 97),
(210, '2024-01-18', 74, 98),
(211, '2024-01-20', 74, 99),
(212, '2024-01-30', 74, 100),
(213, '2024-01-31', 74, 101),
(214, '2024-02-01', 74, 102),
(215, '2024-02-02', 74, 103),
(216, '2024-02-07', 74, 104),
(217, '2024-02-08', 74, 105),
(218, '2024-02-11', 74, 106),
(219, '2024-02-18', 74, 107),
(220, '2024-02-24', 74, 108),
(221, '2024-02-25', 74, 109),
(222, '2024-02-26', 74, 110),
(223, '2024-02-27', 74, 111),
(224, '2024-02-28', 74, 112),
(225, '2024-02-29', 74, 113),
(227, '2024-03-13', 74, 115),
(228, '2024-03-12', 74, 116),
(229, '2024-03-14', 74, 117),
(230, '2024-03-15', 74, 118),
(231, '2024-03-16', 74, 119),
(232, '2024-03-20', 74, 120),
(233, '2024-03-21', 74, 121),
(234, '2024-03-22', 74, 122),
(235, '2024-03-24', 74, 123),
(236, '2024-03-25', 74, 124),
(238, '2024-03-27', 74, 126),
(239, '2024-03-28', 74, 127),
(240, '2024-02-02', 76, 128),
(241, '2024-03-10', 76, 129),
(242, '2024-03-12', 76, 130),
(243, '2024-03-13', 76, 131),
(244, '2024-03-22', 76, 132),
(246, '2024-04-02', 74, 134),
(247, '2024-04-09', 74, 135),
(248, '2024-04-11', 74, 136),
(249, '2024-04-10', 74, 137),
(250, '2024-04-11', 74, 138),
(251, '2024-04-12', 74, 139),
(253, '2024-04-17', 74, 141),
(254, '2024-04-16', 74, 142),
(255, '2024-04-18', 74, 143),
(256, '2024-04-19', 74, 144),
(257, '2024-05-16', 74, 145),
(259, '2024-05-27', 74, 147),
(260, '2024-05-28', 74, 148),
(261, '2024-05-29', 74, 149),
(262, '2024-05-30', 74, 150),
(263, '2024-05-31', 74, 151),
(264, '2024-06-13', 74, 152),
(266, '2024-06-14', 74, 154);

-- --------------------------------------------------------

--
-- Structure de la table `contactCategorie`
--

CREATE TABLE `contactCategorie` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `contactCategorie`
--

INSERT INTO `contactCategorie` (`id`, `name`) VALUES
(1, 'artistique'),
(2, 'production et diffusion'),
(3, 'production et administration');

-- --------------------------------------------------------

--
-- Structure de la table `contactDisplay`
--

CREATE TABLE `contactDisplay` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `tel` varchar(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `contactDisplay`
--

INSERT INTO `contactDisplay` (`id`, `name`, `tel`, `email`, `type`) VALUES
(1, 'JEAN COUHET-GUICHOT', '0645878618', 'leshommessensibles@gmail.com', 1),
(2, 'RICK PULFORD', '0760355418', 'rick.pulford@gmail.com', 1),
(3, 'JAOUAD M\'HARRAK', '0681463042', 'j.mharrak@gmail.com', 1),
(4, 'JUSTINE SWYGEDAUW', '0637990871', 'diffusionleshommessensibles@gmail.com', 2),
(5, 'ELISE GIRARD', '0682221807', 'admleshommessensibles@gmail.com', 3);

-- --------------------------------------------------------

--
-- Structure de la table `diff`
--

CREATE TABLE `diff` (
  `id` int(11) NOT NULL,
  `show_id` int(11) NOT NULL,
  `diff_pdf` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Déchargement des données de la table `diff`
--

INSERT INTO `diff` (`id`, `show_id`, `diff_pdf`) VALUES
(24, 74, '9a5d3cc80e9f24f55b610a300.pdf'),
(30, 76, '71440b9ade077517928553100.pdf');

-- --------------------------------------------------------

--
-- Structure de la table `ft`
--

CREATE TABLE `ft` (
  `id` int(11) NOT NULL,
  `ft_show_id` int(11) NOT NULL,
  `ft_pdf` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Déchargement des données de la table `ft`
--

INSERT INTO `ft` (`id`, `ft_show_id`, `ft_pdf`) VALUES
(5, 74, '9a5d3cc80e9f24f55b610a301.pdf'),
(6, 76, 'cf48777abef3716030cddea00.09.23.pdf');

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

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
(43, 'Teatro Centro Cultural La Vaguada', 'https://www.madridcultura.es/entidad/553/centro-cultural-la-vaguada-fuencarral-el-pardo', 'Madrid', '--', 'Espagne'),
(44, 'L\'Astrolabe', 'https://www.astrolabe-grand-figeac.fr/', 'Figeac', '46', 'France'),
(45, 'Decazeville communauté', '', 'Decazeville', '', ''),
(46, 'Association Lucioles', '', 'Fraïsse sur Agout', '', ''),
(47, 'CAL du Clermontois', '', 'Clermont', '60', ''),
(48, 'CAL du Clermontois', '', 'Clermont', '60', ''),
(49, 'L\'Atalante', '', 'Mitry-Mory (77)', '', ''),
(50, 'Théâtre La Colonne', '', 'Miramas', '13', ''),
(51, 'Théâtre La Colonne', '', 'Miramas (13)', '', ''),
(52, 'L\'Alpilium', '', 'St-Rémy-de-Provence (13)', '', ''),
(53, 'Service Culturel', '', 'Gaillac (81)', '', ''),
(54, 'La Faïencerie', '', 'La Tronche (38)', '', ''),
(55, 'La Lune', '', 'New York', '', ''),
(56, 'Centre Municipal Culture et Loisirs', '', 'Gap (05)', '', ''),
(57, 'Théâtre de la Maison du Peuple', '', 'Millau (12)', '', ''),
(58, 'EPIC Hérault Culture', '', 'Fraïsse sur Agout (34)', '', ''),
(59, 'EPIC Hérault Culture', '', 'Cessenon (34)', '', ''),
(60, 'EPIC Hérault Culture', '', 'Aniane (34)', '', ''),
(61, 'EPIC Hérault Culture', '', 'Entre-Vignes (34)', '', ''),
(62, 'EPIC Hérault Culture', '', 'Béziers (34)', '', ''),
(63, 'EPIC Hérault Culture', '', 'Florensac (34)', '', ''),
(64, 'Théâtre de la Maison du Peuple', 'https://maisondupeuplemillau.fr/', 'Millau (12)', '', ''),
(65, 'Théâtre de la Maison du Peuple', 'https://maisondupeuplemillau.fr/', 'Millau (12)', '', ''),
(66, 'EPIC Hérault Culture', '', 'Fraïsse sur Agout (34)', '', ''),
(67, 'EPIC Hérault Culture', '', 'Cessenon (34)', '', ''),
(68, 'EPIC Hérault Culture', '', 'Aniane (34)', '', ''),
(69, 'EPIC Hérault Culture', '', 'Entre-Vignes (34)', '', ''),
(70, 'EPIC Hérault Culture', '', 'Béziers (34)', '', ''),
(71, 'EPIC Hérault Culture', '', 'Florensac (34)', '', ''),
(72, 'Théâtre du Pénitents', '', 'Montbrison 42', '', ''),
(73, 'Théâtre des Pénitents', 'https://www.theatredespenitents.fr/', 'Montbrison (42)', '', ''),
(74, 'Théâtre des Pénitents', 'https://www.theatredespenitents.fr/', 'Montbrison (42)', '', ''),
(75, 'Théâtre des Pénitents', 'https://www.theatredespenitents.fr/', 'Montbrison (42)', '', ''),
(76, 'Théâtre des Pénitents', 'https://www.theatredespenitents.fr/', 'St-Martin-d\'Hères (42)', '', ''),
(77, 'Théâtre des Pénitents', 'https://www.theatredespenitents.fr/', 'St-Martin-d\'Hères (42)', '', ''),
(78, 'Théâtre des possibles', 'https://theatredespossibles.fr/', 'Perpignan (66)', '', ''),
(79, 'Les Ateliers du Vivant', 'https://www.ateliersduvivant.com/', 'Félines-Minervois (34)', '', ''),
(80, 'Les Ateliers du Vivant', 'https://www.ateliersduvivant.com/', 'Félines-Minervois (34)', '', ''),
(81, 'Service Culturel', '', 'Billières (64)', '', ''),
(82, 'Bouillon Cube', 'https://bouilloncube.fr/', 'Causse de la Selle (34)', '', ''),
(83, 'Collectif M', 'https://www.facebook.com/collectifm34/', 'La Salveta sur Agout (34)', '', ''),
(84, 'Association Ré Jouir', 'https://www.facebook.com/rejouir.iledere/', 'L\'Ile de Ré (17)', '', ''),
(85, 'Centre culturel Juliette Drouet', 'https://centreculturel.fougeres-agglo.bzh/le-centre-culturel/les-lieux/centre-culturel-juliette-drou', 'Fougères (35)', '', ''),
(86, 'Centre Culturel Julliette Drouet', 'https://centreculturel.fougeres-agglo.bzh/le-centre-culturel/les-lieux/centre-culturel-juliette-drou', 'Fougères (35)', '', ''),
(87, 'Centre Culturel Juliette Drouet', 'https://centreculturel.fougeres-agglo.bzh/le-centre-culturel/les-lieux/centre-culturel-juliette-drou', 'Fougères (35)', '', ''),
(88, 'Centre Culturel Juliette Drouet', 'https://centreculturel.fougeres-agglo.bzh/le-centre-culturel/les-lieux/centre-culturel-juliette-drou', 'Fougères (35)', '', ''),
(89, 'MJC Ti en dud', 'https://mjc-dz.org/', 'Douarnenez (29)', '', ''),
(90, 'Le Vieux Couvent', 'https://www.facebook.com/levieuxcouvent/', 'Muzillac (56)', '', ''),
(91, 'Théâtre Forum', 'https://www.forum-meyrin.ch/saisons/saison-2022-2023', 'Meyrin (Suisse)', '', ''),
(92, 'Théâtre Forum', 'https://www.forum-meyrin.ch/saisons/saison-2022-2023', 'Meyrin (Suisse)', '', ''),
(93, 'Théâtre Forum', 'https://www.forum-meyrin.ch/saisons/saison-2022-2023', 'Meyrin (Suisse)', '', ''),
(94, 'Théâtre Forum', 'https://www.forum-meyrin.ch/saisons/saison-2022-2023', 'Meyrin (Suisse)', '', ''),
(95, 'Théâtre Forum', 'https://www.forum-meyrin.ch/saisons/saison-2022-2023', 'Meyrin (Suisse)', '', ''),
(96, 'Théâtre Forum', 'https://www.forum-meyrin.ch/saisons/saison-2022-2023', 'Meyrin (Suisse)', '', ''),
(97, 'Théâtre Forum', 'https://www.forum-meyrin.ch/saisons/saison-2022-2023', 'Meyrin (Suisse)', '', ''),
(98, 'Théâtre Forum', 'https://www.forum-meyrin.ch/saisons/saison-2022-2023', 'Meyrin (Suisse)', '', ''),
(99, 'L\'Echandole', 'https://echandole.ch/spectacles/bateau/', 'Yverdon-les-Bains (Suisse)', '', ''),
(100, 'Communauté de Communes du Pays du coquelicot', 'https://www.paysducoquelicot.com/grandir-et-decouvrir/agenda/evenement/bateau?tx_news_pi1%5Bindex%5D', 'Albert (80)', '', ''),
(101, 'Communauté de Communes du Pays du coquelicot', 'https://www.paysducoquelicot.com/grandir-et-decouvrir/agenda/evenement/bateau?tx_news_pi1%5Bindex%5D', 'Albert (80)', '', ''),
(102, 'Le Trait d\'Union', 'https://www.facebook.com/letraitdunionlongueauglisy/events/?id=100063760412515&sk=events', 'Longueau (80)', '', ''),
(103, 'Le Trait d\'Union', 'https://www.facebook.com/letraitdunionlongueauglisy/events/?id=100063760412515&sk=events', 'Longueau (80)', '', ''),
(104, 'Centre Culturel Simone Signoret', 'https://signoret-canejan.fr/spectacle/bateau/', 'Canéjan (33)', '', ''),
(105, 'Centre Culturel Simone Signoret', 'https://signoret-canejan.fr/spectacle/bateau/', 'Canéjan (33)', '', ''),
(106, 'La Parenthèse', 'https://www.laparenthese-ballan-mire.fr/spectacles/agenda/', 'Ballan-Miré (37)', '', ''),
(107, 'Le Préambule', 'https://www.pays-ancenis.com/lagenda/detail-agenda/spectacle-famille-bateau-ligne', 'Ligné (44)', '', ''),
(108, 'Centre Culturel Jacques Duhamel', 'https://www.mairie-vitre.com/-Centre-culturel-Jacques-Duhamel-.html', 'Vitré (35)', '', ''),
(109, 'Espace Culturel Saint-Anne', 'https://www.labaule-guerande.com/billetterie.html', 'St-Lyphard (44)', '', ''),
(110, 'Espace Culturel Saint-Anne', 'https://www.labaule-guerande.com/billetterie.html', 'St-Lyphard (44)', '', ''),
(111, 'Espace Culturel Le Grand lieu', 'https://vostickets.net/Billet/PGE_PRESENTATION_WEB2/hCsAAKFoUpVAAKZNov3UuI7eBUg', 'La Chevrolière (44)', '', ''),
(112, 'L\'Escale Culture', 'https://www.vostickets.net/SUCE_SUR_ERDRE/index.htm', 'Sucé sur Erdre (44)', '', ''),
(113, 'Espace Culturel Léopole Sedar Senghor', 'https://www.espacesenghor.fr/agenda/bateau-cie-les-hommes-sensibles/', 'Le May sur Evre (49)', '', ''),
(114, 'Greniers des Halles', 'https://38.agendaculturel.fr/grenier-des-halles', 'La Tour du Pin (38)', '', ''),
(115, 'Grenier des Halles', 'https://38.agendaculturel.fr/grenier-des-halles', 'La Tour du Pin (38)', '', ''),
(116, 'Grenier des Halles', 'https://38.agendaculturel.fr/grenier-des-halles', 'La Tour du Pin (38)', '', ''),
(117, 'Centre Culturel Communal Charlie Chaplin', 'http://www.centrecharliechaplin.com/saison-2023-2024/bateau', 'Vaulx en Velin (69)', '', ''),
(118, 'Centre Culturel Communal Charlie Chaplin', 'http://www.centrecharliechaplin.com/saison-2023-2024/bateau', 'Vaulx en Velin (69)', '', ''),
(119, 'Centre Culturel Communal Charlie Chaplin', 'http://www.centrecharliechaplin.com/saison-2023-2024/bateau', 'Vaulx en Velin (69)', '', ''),
(120, 'Théâtre Ligéria', 'https://web.digitick.com/bateau-spectacle-theatre-ligeria-sainte-luce-sur-loire-20-mars-2024-css5-vi', 'Ste Luce sur Loire (44)', '', ''),
(121, 'Le kiosque', 'https://billetterie.legilog.fr/lekiosque/', 'Mayenne (53)', '', ''),
(122, 'Le Kiosque', 'https://billetterie.legilog.fr/lekiosque/', 'Mayenne (53)', '', ''),
(123, 'Art\'Rhena', 'https://billetterie.artrhena.eu/', 'Vogelsheim (68)', '', ''),
(124, 'Art\'Rhena', 'https://billetterie.artrhena.eu/', 'Vogelsheim (68)', '', ''),
(125, 'Art\'Rhena', 'https://billetterie.artrhena.eu/', 'Vogelsheim (68)', '', ''),
(126, 'Maison des Associations et de la Culture de Bischwiller', 'https://billetterie.mac-bischwiller.fr/seances/34/bateau', 'Bischwiller (67)', '', ''),
(127, 'Maison des Associations et de la Culture de Bischwiller', 'https://billetterie.mac-bischwiller.fr/seances/34/bateau', 'Bischwiller (67)', '', ''),
(128, 'Théâtre le Périscope', 'https://www.theatreleperiscope.fr/events/sensible/', 'Nîmes (30)', '', ''),
(129, 'Angonia', 'https://www.facebook.com/EspaceCulturelAngonia', 'Martre-Tolosane (31)', '', ''),
(130, 'Association Les Chemins', '', 'Capens (31)', '', ''),
(131, 'Association Les Chemins', '', 'Capens (31)', '', ''),
(132, 'Diversival', 'https://diversival.com/#agenda', 'Vendres (34)', '', ''),
(133, 'Festival LUN.E.S', 'https://creaturescreatrices.com/index.php/bateau/', 'St Jean de Vedas', '34', ''),
(134, 'Festival LUN.E.S', 'https://creaturescreatrices.com/index.php/bateau/', 'St Jean de Vedas (34)', '', ''),
(135, 'Auditorium d\'Evron', '', 'Laval (53)', '', ''),
(136, 'Salle des fêtes de Courcité', '', 'Laval (53)', '', ''),
(137, 'Théâtre Roger ferdinand', 'https://www.saint-lo.fr/decouvrir-bouger/culture/theatre', 'St-Lô (50)', '', ''),
(138, 'Théâtre Roger Ferdinand', 'https://www.saint-lo.fr/decouvrir-bouger/culture/theatre', 'St-Lô (50)', '', ''),
(139, 'Théâtre Roger Ferdinand', 'https://www.saint-lo.fr/decouvrir-bouger/culture/theatre', 'St-Lô (50)', '', ''),
(140, 'Espace Culturel François Mitterand', 'https://ecfm.ville-canteleu.fr/', 'Canteleu (76)', '', ''),
(141, 'Espace Culturel François Mitterrand', 'https://ecfm.ville-canteleu.fr/', 'Canteleu (76)', '', ''),
(142, 'Espace Culturel François Mitterrand', 'https://ecfm.ville-canteleu.fr/', 'Canteleu (76)', '', ''),
(143, 'Palais des Congrès Odysséa', 'https://www.saintjeandemonts.fr/agenda-animation-evenement-saint-jean-de-monts.html', 'St Jean de Monts (85)', '', ''),
(144, 'Palais des Congrès Odysséa', 'https://www.saintjeandemonts.fr/agenda-animation-evenement-saint-jean-de-monts.html', 'St Jean de Monts (85)', '', ''),
(145, 'Centre Culturel Albert Camus', 'https://billetterie.ccacbam-issoudun.fr/agenda', 'Issoudun (36)', '', ''),
(146, 'Salle Dany Boon', '', 'Bray-Dunes 59', '', ''),
(147, 'Salle Dany Boon', '', 'Bray-Dunes (59)', '', ''),
(148, 'Espace Culturel Ronny-Coutteure', 'https://www.ronny-coutteure.fr/evenement/bateau-les-hommes-sensibles/', 'Grenay (62)', '', ''),
(149, 'Espace Culturel Ronny-Coutteure', 'https://www.ronny-coutteure.fr/evenement/bateau-les-hommes-sensibles/', 'Grenay (62)', '', ''),
(150, 'Salle des fêtes Moulin-Neuf', 'https://www.ville-chambly.fr/agenda/bateau', 'Chambly (60)', '', ''),
(151, 'Salle des fêtes Moulin-Neuf', 'https://www.ville-chambly.fr/agenda/bateau', 'Chambly (60)', '', ''),
(152, 'Ecole Maternelle Publique Lakanal', '', 'Toulouse (31)', '', ''),
(153, 'Théâtre Municipal de Cahors', 'https://indiv.themisweb.fr/0060/fChoixSeance.aspx?idstructure=0060&EventId=1251&request=QcE+w0WHSuDv', 'Cahors (46)', '', ''),
(154, 'Salles des fêtes de la Rosière', '', 'Cahors (46)', '', '');

-- --------------------------------------------------------

--
-- Structure de la table `partenaires`
--

CREATE TABLE `partenaires` (
  `id` int(11) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `url` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

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
  `image_selected` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Déchargement des données de la table `pictures`
--

INSERT INTO `pictures` (`id`, `show_id`, `url_pictures`, `image_selected`) VALUES
(130, 74, '4bc535e665310bbec85ac7600.jpg', 0),
(131, 74, '4bc535e665310bbec85ac7601.jpg', 0),
(132, 74, '4bc535e665310bbec85ac7602.jpg', 0),
(133, 74, '4bc535e665310bbec85ac7603.jpg', 0),
(134, 74, '4bc535e665310bbec85ac7604.jpg', 1),
(138, 76, 'ad80af5877c4f92beaf347803.jpg', 1);

-- --------------------------------------------------------

--
-- Structure de la table `profilpictures`
--

CREATE TABLE `profilpictures` (
  `id` int(11) NOT NULL,
  `photo` varchar(250) NOT NULL,
  `team_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Déchargement des données de la table `profilpictures`
--

INSERT INTO `profilpictures` (`id`, `photo`, `team_id`) VALUES
(4, 'e99bc544b2339c24e9aa0b200.jpg', 6),
(5, 'e99bc544b2339c24e9aa0b201.jpg', 7),
(6, 'e99bc544b2339c24e9aa0b202.jpg', 8),
(7, 'e99bc544b2339c24e9aa0b203.jpg', 9),
(8, 'e99bc544b2339c24e9aa0b204.jpg', 10),
(48, 'ab36259d57914242e4d8d2e00.png', 50),
(49, 'ab36259d57914242e4d8d2e01.png', 51),
(54, '170e2c64b024722f98ee6dd00.06.02.png', 56),
(57, '5888fc8959ebad74f7a21f200.jpg', 59),
(58, '5888fc8959ebad74f7a21f201.jpg', 60),
(59, '5888fc8959ebad74f7a21f207.png', 61),
(60, '5888fc8959ebad74f7a21f208.png', 62),
(61, '5888fc8959ebad74f7a21f209.png', 63),
(62, '5888fc8959ebad74f7a21f20a.jpg', 64);

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Déchargement des données de la table `shows`
--

INSERT INTO `shows` (`id`, `title`, `pitch`, `content`, `year_creation`, `url_video`) VALUES
(74, 'Bateau', 'Pour toute la famille, destiné à l\'enfant qui vivait en chacun.\n', 'C’est un bout d’enfant qui est resté coincé dans un adulte et qui s’est accroché à une douce rage de vivre.\n\nL’adulte oublie souvent l’enfant qu’il était, l’enfant qui est en lui. Que reste-t-il de cet enfant ? Du jeu ? Du simple ? Des monstres sous le lit ? De la nostalgie et des rêves ?.. L’émerveillement.\n\nTout cela est enfoui dans une malle en bois, sous le sable d’une plage abandonnée d’une mer polluée. Cette mer accueille notre voyage simple et direct dans notre imaginaire, dans nos émotions et nos sens, nos corps sont l’eau qui la compose.\nSur cette plage abandonnée, subsistent l’enfance, le jeu, la joie, la solitude et la mort.\nL’imaginaire né du manque… sa nécessité.\n\nCe spectacle est la pelle pour déterrer cette malle pleine de souvenirs et se prendre à rêver avec l’être sensible que nous sommes.\nSous une forme poético-punk, il met en scène un adulte dans une chambre d’enfant avec ses objets, sa psychologie d’adulte et ses logiques d’enfant.', '2020', 'https://www.youtube.com/embed/JZlo_dqz1ic'),
(76, 'Sensible', 'Acrobatie tendre - Théâtre intime', '     Après \"Bateau\", Les Hommes Sensibles reprennent le large avec Sensible. Ce nouveau spectacle est un plongeon dans les eaux troubles et limpides de ce qui constitue nos images de l’homme. Nous invitons le public à travers ce spectacle populaire à se confronter à ses propres sensibilités et se questionner sur les masculinités.\n     La question n\'est pas qu\'est ce qu\'un homme, mais plutôt qu\'est-ce que nous voulons qu’il soit. Ainsi, nous proposons une exploration de l\'homme avec un petit \"h\", de l\'absurdité masculine de notre époque et de nos propres constructions. Toujours avec une touche d\'autodérision, \"Sensible\" laisse place à la réflexion, la tendresse, et l\'acceptation de soi.\n\n     Avec cette création nous franchissons une nouvelle étape dans l\'exploration de ce qui a donné le nom à notre compagnie, tout simplement, car nous pensons personnellement que c\'est le moment. Dans cette époque où l\'on reprend conscience que l\'image de l\'homme avec un petit “h” n\'est pas une image figée, mais plutôt un concept évolutif. Nous ne voulons pas nous complaire dans un modèle d\'homme établi, assigné, dans lequel nous ne nous épanouissons pas et ne retrouvons plus notre place.\n     Ce spectacle se veut être la douce clef pour offrir un point de vue et pour ouvrir un dialogue autour de ce thème qui nous semble depuis longtemps dissimulé derrière une porte close. \"Sensible\" est une immersion dans l’exploration de nos masculinités autour desquelles nous nous sommes construits, dans ce que nous sommes de plus terrible et de plus beau. \n', '2022', '');

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
  `phone` varchar(50) NOT NULL,
  `order` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Déchargement des données de la table `team`
--

INSERT INTO `team` (`id`, `prenom`, `nom`, `role`, `mail`, `phone`, `order`) VALUES
(6, 'Jean', 'Couhet-Guichot', 'Directeur Artistique / Artiste', 'leshommessensibles@gmail.com', '06 45 87 86 18', 0),
(7, 'Rick', 'Pulford', 'Artiste', 'rick.pulford@gmail.com', '07 60 35 54 18', 0),
(8, 'Arthur ', 'Amouroux-Rudeaut', 'Artiste', '', '', 0),
(9, 'Justine', 'Swygedauw', 'Production et diffusion', 'diffusionleshommessensibles@gmail.com', '06 37 99 08 71', 0),
(10, 'Robin', 'Socasau', 'Collaborateur Direction Artistique', '', '', 0),
(50, 'Jaouad ', 'M\'Harrak', 'Artiste', '', '06 81 46 30 42', 0),
(51, 'Chiara', 'Luna May', 'Régisseuse générale', '', '', 0),
(56, 'Antoine', 'Toulemonde', 'Artiste', '', '', 0),
(59, 'Jean-Noël', 'Walkowiak', '', '', '07 58 07 38 96', 0),
(60, 'Benjamin', 'Dumas', 'Régisseur', 'techleshommessensibles@gmail.com', '', 0),
(61, 'Léa', 'Nataf', 'Régisseuse', '', '', 0),
(62, 'Prune', 'Lalouette', 'Régisseuse', '', '', 0),
(63, 'Maxime ', 'Guérin', 'Photographe', 'maxguerin.photographie@gmail.com', '', 0),
(64, 'Maria Joanna', 'Börresen', 'Vidéaste', '', '', 0);

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Déchargement des données de la table `textes`
--

INSERT INTO `textes` (`id`, `zone`, `titre`, `text1`, `text2`) VALUES
(1, 'home', 'En bref', 'Les Hommes Sensibles est une compagnie de cirque qui mélange acrobatie , danse, théâtre d’objet, musique, culture Hip-hop et magie (au sens large... très large).\r\n\r\nSes artistes ont comme points communs leurs sensibilités. Bien que différentes, elles se rejoignent et ensemble deviennent force.', ''),
(2, 'compagnie', 'Les Hommes Sensibles', 'Les Hommes Sensibles est une compagnie de cirque qui mélange acrobatie, danse, théâtre d’objet, musique, et culture hip-hop. Née d\'un heureux hasard et d\'une motivation commune, dire et toucher par le rire. Ses artistes ont comme points communs leurs sensibilités. Bien que différentes, elles se rejoignent et ensemble deviennent force, magie et création. \n\n     La compagnie plonge dans le monde du spectacle avec les yeux et le coeur ouverts.  L’Homme Sensible est ce qu\'il est, un homme solidaire, un homme poétique avec toute sa bêtise et toute sa beauté. Il a comme outils le sens puissant et curieux de la déconstruction, et l’envie fragile et certaine de façonner son propre monde. \n\n     Au cœur du travail artistique de la compagnie se trouvent les failles et les doutes de ses artistes interprètes, leur confiance, leur auto-dérision, mais surtout leurs désirs. Désirs de déplacer les esprits, de partager des émotions et de la simplicité, de rire à n\'en plus finir… Faire une pause dans une vie bien agitée. Accepter sa sensibilité et se sentir vivant pour toustes, toutes et tous', 'Au cœur du travail artistique de la compagnie se trouvent les failles et les doutes de ses artistes interprètes, leur confiance, leur auto-dérision, mais surtout leurs désirs. \r\n\r\nDésirs de déplacer les esprits, de partager des émotions et de la simplicité, rire à n\'en plus finir (si possible).\r\n\r\nFaire une pause dans une vie bien agitée.\r\n\r\nAccepter sa sensibilité et se sentir vivant autant pour les femmes, les hommes, les personnes non-binaires, les enfants, les personnes âgées, les personnes ayant un handicap, les super héros, bref, pour tout le monde.');

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `nom`, `prenom`, `email`, `password`) VALUES
(2, 'Auger', 'Laureline', 'laureline.auger@gmail.com', '$2b$10$DcTnjUF7tyWZfSobHSY3Uu7daCnT8sB5W1eatsD0DA..KKQneUG5C'),
(33, 'Swygedauw', 'Justine', 'diffusionleshommessensibles@gmail.com', '$2b$10$UVyrBISk63ROVka33bHWqe2K.AXES43GR8eyTV5eRjRRyhjZuMxVO'),
(34, 'Walkowiak', 'Jean-Noël', 'admleshommessensibles@gmail.com', '$2a$10$6U0pPm4NjyUkAP3jWROz.uq.ExrbJXyP/n7DzWLGfhV4aU6mZaKJW'),
(35, 'Anthony', 'Carreta', 'test@test.com', '$2a$10$MnAnCiCooPEw1CDiWgPWvuhlJhXL8pE2.agwLPQl1CJfmixp2FgqC');

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
-- Index pour la table `contactCategorie`
--
ALTER TABLE `contactCategorie`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `contactDisplay`
--
ALTER TABLE `contactDisplay`
  ADD PRIMARY KEY (`id`),
  ADD KEY `type` (`type`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=267;

--
-- AUTO_INCREMENT pour la table `contactCategorie`
--
ALTER TABLE `contactCategorie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `contactDisplay`
--
ALTER TABLE `contactDisplay`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `diff`
--
ALTER TABLE `diff`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT pour la table `ft`
--
ALTER TABLE `ft`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `lieux`
--
ALTER TABLE `lieux`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=155;

--
-- AUTO_INCREMENT pour la table `partenaires`
--
ALTER TABLE `partenaires`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `pictures`
--
ALTER TABLE `pictures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=139;

--
-- AUTO_INCREMENT pour la table `profilpictures`
--
ALTER TABLE `profilpictures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT pour la table `shows`
--
ALTER TABLE `shows`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT pour la table `team`
--
ALTER TABLE `team`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT pour la table `textes`
--
ALTER TABLE `textes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

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
-- Contraintes pour la table `contactDisplay`
--
ALTER TABLE `contactDisplay`
  ADD CONSTRAINT `contactdisplay_ibfk_1` FOREIGN KEY (`type`) REFERENCES `contactCategorie` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
