-- phpMyAdmin SQL Dump
-- version 4.0.10.12
-- http://www.phpmyadmin.net
--
-- Host: 127.9.66.2:3306
-- Generation Time: Sep 30, 2017 at 02:33 PM
-- Server version: 5.5.52
-- PHP Version: 5.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `dfims`
--

-- --------------------------------------------------------

--
-- Table structure for table `t_areas`
--

CREATE TABLE IF NOT EXISTS `t_areas` (
  `area_id` int(11) NOT NULL AUTO_INCREMENT,
  `area_name` varchar(50) NOT NULL,
  `area_zipcode` varchar(7) NOT NULL,
  `area_min_citizen` int(11) NOT NULL,
  `area_max_citizen` int(11) NOT NULL,
  PRIMARY KEY (`area_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `t_areas`
--

INSERT INTO `t_areas` (`area_id`, `area_name`, `area_zipcode`, `area_min_citizen`, `area_max_citizen`) VALUES
(1, 'SectorV', '700091', 10000, 80000),
(2, 'ParkStreet', '700016', 15000, 65000),
(3, 'CamacStreet', '700016', 12000, 35000),
(4, 'Sector5', '700091', 10000, 80000),
(5, 'Bantala', '743502', 3000, 9000);

-- --------------------------------------------------------

--
-- Table structure for table `t_audits`
--

CREATE TABLE IF NOT EXISTS `t_audits` (
  `audit_id` int(11) NOT NULL AUTO_INCREMENT,
  `audit_name` varchar(50) DEFAULT NULL,
  `audit_cmt` varchar(150) DEFAULT NULL,
  `audit_date` datetime NOT NULL,
  `building_id` int(11) DEFAULT NULL,
  `evac_time_min` int(11) DEFAULT NULL,
  `disaster_type_id` int(11) NOT NULL,
  `seismic` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`audit_id`),
  KEY `t_audits_fk0` (`building_id`),
  KEY `t_audits_fk1` (`disaster_type_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `t_audits`
--

INSERT INTO `t_audits` (`audit_id`, `audit_name`, `audit_cmt`, `audit_date`, `building_id`, `evac_time_min`, `disaster_type_id`, `seismic`) VALUES
(1, 'S524JUN1601', 'Fire Drill done', '2017-06-24 00:00:00', 1, 360, 1, '0'),
(2, 'S524JUN1603', 'Earthqauke Testing done', '2017-06-24 00:00:00', 2, 1050, 3, '1'),
(3, 'S505JAN1601', 'Fire Drill done', '2017-01-05 00:00:00', 3, 1080, 1, '0'),
(4, 'S510JUL1601', 'Fire Drill done', '2017-07-10 00:00:00', 4, 180, 1, '0');

-- --------------------------------------------------------

--
-- Table structure for table `t_block_points`
--

CREATE TABLE IF NOT EXISTS `t_block_points` (
  `block_seq_id` int(11) NOT NULL AUTO_INCREMENT,
  `block_date` datetime NOT NULL,
  `block_lat` varchar(50) NOT NULL,
  `block_long` varchar(50) NOT NULL,
  `incident_id` int(50) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`block_seq_id`),
  KEY `t_block_points_fk0` (`incident_id`),
  KEY `t_block_points_fk1` (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `t_block_points`
--

INSERT INTO `t_block_points` (`block_seq_id`, `block_date`, `block_lat`, `block_long`, `incident_id`, `user_id`) VALUES
(1, '2017-07-24 06:14:05', '22.577997831310938', '88.4353306889534', 2, 2),
(2, '2017-07-24 06:14:05', '22.581071305295193', '88.4368920698762', 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `t_buildings`
--

CREATE TABLE IF NOT EXISTS `t_buildings` (
  `building_id` int(11) NOT NULL AUTO_INCREMENT,
  `building_name` varchar(50) NOT NULL,
  `building_address` varchar(150) NOT NULL,
  `building_poc_name` varchar(50) NOT NULL,
  `building_poc_mobile` varchar(15) NOT NULL,
  `building_poc_email` varchar(50) DEFAULT NULL,
  `building_citizen_count` int(11) NOT NULL,
  `area_id` int(11) NOT NULL,
  `building_lat` varchar(50) DEFAULT NULL,
  `building_long` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`building_id`),
  KEY `t_buildings_fk0` (`area_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `t_buildings`
--

INSERT INTO `t_buildings` (`building_id`, `building_name`, `building_address`, `building_poc_name`, `building_poc_mobile`, `building_poc_email`, `building_citizen_count`, `area_id`, `building_lat`, `building_long`) VALUES
(1, 'SDF', 'GP Block, Sector V, Salt Lake City, Kolkata, West Bengal 700091', 'Sanjoy', '+918335012659', 'Sanjoy.Chowdhury2@cognizant.com', 1500, 1, '22.5687', '88.4316'),
(2, 'Technopolis', 'BP Block, Sector V, Salt Lake City, Kolkata, West Bengal 700091', 'Sanjoy', '+918335012659', 'Sanjoy.Chowdhury2@cognizant.com', 2100, 1, '22.5801', '88.4381'),
(3, 'Webel', 'GP Block, Sector V, Salt Lake City, Kolkata, West Bengal 700091', 'Sanjoy', '+918335012659', 'Sanjoy.Chowdhury2@cognizant.com', 800, 1, '22.5718', '88.4324'),
(4, 'Vardaan Market', 'No. 25A, Camac Street, Park Street area, Kolkata, West Bengal 700016', 'Sanjoy', '+918335012659', 'Sanjoy.Chowdhury2@cognizant.com', 1100, 2, '22.5483', '88.3536'),
(5, 'Cognizant GTP', 'COGNIZANT, KOLKATA IT PARK, (PLOT NO. IT-27, MOUZA - GANGAPUR, J.L.NO.35,, KOLKATA LEATHER COMPLEX, DISTRICT', 'Sanjoy', '+918335012659', 'Sanjoy.Chowdhury2@cognizant.com', 6000, 5, '22.504197', '88.517221');

-- --------------------------------------------------------

--
-- Table structure for table `t_comm`
--

CREATE TABLE IF NOT EXISTS `t_comm` (
  `comm_id` int(11) NOT NULL AUTO_INCREMENT,
  `comm_cmt` varchar(150) NOT NULL,
  `comm_type` char(1) DEFAULT NULL,
  `incident_id` int(11) NOT NULL,
  `sender_role_id` int(11) NOT NULL,
  `user_mobile` varchar(12) DEFAULT NULL,
  PRIMARY KEY (`comm_id`),
  KEY `t_comm_fk0` (`incident_id`),
  KEY `t_comm_fk1` (`sender_role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `t_curr`
--

CREATE TABLE IF NOT EXISTS `t_curr` (
  `curr_id` int(11) NOT NULL AUTO_INCREMENT,
  `curr_cde` varchar(50) NOT NULL,
  `curr_name` varchar(50) NOT NULL,
  PRIMARY KEY (`curr_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `t_disaster_support_types`
--

CREATE TABLE IF NOT EXISTS `t_disaster_support_types` (
  `disaster_type_id` int(11) NOT NULL,
  `support_type_id` int(11) NOT NULL,
  KEY `t_disaster_support_types_fk0` (`disaster_type_id`),
  KEY `t_disaster_support_types_fk1` (`support_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `t_disaster_support_types`
--

INSERT INTO `t_disaster_support_types` (`disaster_type_id`, `support_type_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(2, 3),
(2, 4),
(3, 1),
(3, 2),
(3, 3),
(3, 4),
(4, 2),
(4, 3),
(4, 4),
(5, 1),
(5, 2),
(5, 3),
(5, 5),
(5, 9),
(5, 10),
(6, 1),
(6, 2),
(6, 3),
(6, 5),
(6, 9),
(6, 10),
(2, 8);

-- --------------------------------------------------------

--
-- Table structure for table `t_disaster_types`
--

CREATE TABLE IF NOT EXISTS `t_disaster_types` (
  `disaster_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `disaster_type_name` varchar(50) NOT NULL,
  `disaster_type_desc` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`disaster_type_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `t_disaster_types`
--

INSERT INTO `t_disaster_types` (`disaster_type_id`, `disaster_type_name`, `disaster_type_desc`) VALUES
(1, 'Fire', 'Fire'),
(2, 'Flood', 'Flood'),
(3, 'Earthquake', 'Earthquake'),
(4, 'Storm', 'Storm'),
(5, 'Bomb', 'Bomb'),
(6, 'Terrorist', 'Terrorist'),
(7, 'WaterLog', 'WaterLog');

-- --------------------------------------------------------

--
-- Table structure for table `t_evac_areas`
--

CREATE TABLE IF NOT EXISTS `t_evac_areas` (
  `evac_area_seq_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `evac_seq_id` int(11) NOT NULL,
  `area_id` int(11) NOT NULL,
  PRIMARY KEY (`evac_area_seq_id`),
  KEY `t_evac_areas_fk0` (`evac_seq_id`),
  KEY `t_evac_areas_fk1` (`area_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=68 ;

--
-- Dumping data for table `t_evac_areas`
--

INSERT INTO `t_evac_areas` (`evac_area_seq_id`, `evac_seq_id`, `area_id`) VALUES
(31, 144, 1),
(32, 145, 1),
(33, 146, 1),
(34, 147, 1),
(35, 148, 1),
(36, 149, 1),
(37, 150, 1),
(38, 151, 1),
(39, 152, 1),
(40, 153, 1),
(41, 154, 1),
(42, 155, 1),
(43, 156, 1),
(44, 157, 1),
(45, 158, 1),
(46, 159, 1),
(47, 160, 1),
(48, 161, 1),
(49, 162, 1),
(50, 163, 1),
(51, 164, 1),
(52, 165, 1),
(53, 166, 1),
(54, 167, 1),
(55, 168, 5),
(56, 169, 5),
(57, 170, 5),
(58, 171, 5),
(59, 172, 5),
(60, 173, 5),
(61, 174, 5),
(62, 175, 5),
(63, 176, 5),
(64, 177, 5),
(65, 178, 5),
(66, 179, 5),
(67, 180, 5);

-- --------------------------------------------------------

--
-- Table structure for table `t_evac_buildings`
--

CREATE TABLE IF NOT EXISTS `t_evac_buildings` (
  `evac_building_seq_id` int(11) NOT NULL AUTO_INCREMENT,
  `building_id` int(11) NOT NULL,
  `evac_seq_id` int(11) NOT NULL,
  PRIMARY KEY (`evac_building_seq_id`),
  KEY `t_evac_buildings_fk0` (`building_id`),
  KEY `t_evac_buildings_fk1` (`evac_seq_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=147 ;

--
-- Dumping data for table `t_evac_buildings`
--

INSERT INTO `t_evac_buildings` (`evac_building_seq_id`, `building_id`, `evac_seq_id`) VALUES
(36, 1, 46),
(37, 1, 47),
(38, 1, 48),
(39, 1, 49),
(40, 1, 50),
(41, 1, 51),
(42, 1, 52),
(43, 1, 53),
(44, 1, 54),
(45, 1, 55),
(46, 1, 56),
(47, 1, 57),
(48, 1, 58),
(49, 1, 59),
(50, 1, 60),
(51, 1, 61),
(52, 1, 62),
(53, 3, 63),
(54, 3, 64),
(55, 3, 65),
(56, 3, 66),
(57, 3, 67),
(58, 3, 68),
(59, 3, 69),
(60, 3, 70),
(61, 3, 71),
(62, 3, 72),
(63, 3, 73),
(64, 3, 74),
(65, 3, 75),
(66, 3, 76),
(67, 3, 77),
(68, 3, 78),
(69, 3, 79),
(70, 2, 80),
(71, 2, 81),
(72, 2, 82),
(73, 2, 83),
(74, 2, 84),
(75, 2, 85),
(76, 2, 86),
(77, 2, 87),
(78, 2, 88),
(79, 2, 89),
(80, 2, 90),
(81, 2, 91),
(82, 2, 92),
(83, 2, 93),
(84, 2, 94),
(85, 2, 95),
(86, 2, 96),
(87, 2, 97),
(88, 2, 98),
(89, 2, 99),
(90, 2, 100),
(91, 2, 101),
(92, 2, 102),
(93, 2, 103),
(94, 1, 104),
(95, 1, 105),
(96, 1, 106),
(97, 1, 107),
(98, 1, 108),
(99, 1, 109),
(100, 1, 110),
(101, 1, 111),
(102, 1, 112),
(103, 1, 113),
(104, 1, 114),
(105, 3, 115),
(106, 3, 116),
(107, 3, 117),
(108, 3, 118),
(109, 3, 119),
(110, 3, 120),
(111, 3, 121),
(112, 3, 122),
(113, 3, 123),
(114, 3, 124),
(115, 3, 125),
(116, 3, 126),
(117, 2, 127),
(118, 2, 128),
(119, 2, 129),
(120, 2, 130),
(121, 2, 131),
(122, 2, 132),
(123, 2, 133),
(124, 2, 134),
(125, 2, 135),
(126, 2, 136),
(127, 2, 137),
(128, 2, 138),
(129, 2, 139),
(130, 2, 140),
(131, 2, 141),
(132, 2, 142),
(133, 2, 143),
(134, 5, 168),
(135, 5, 169),
(136, 5, 170),
(137, 5, 171),
(138, 5, 172),
(139, 5, 173),
(140, 5, 174),
(141, 5, 175),
(142, 5, 176),
(143, 5, 177),
(144, 5, 178),
(145, 5, 179),
(146, 5, 180);

-- --------------------------------------------------------

--
-- Table structure for table `t_evac_points`
--

CREATE TABLE IF NOT EXISTS `t_evac_points` (
  `evac_seq_id` int(11) NOT NULL AUTO_INCREMENT,
  `lst_upd_date` datetime NOT NULL,
  `evac_lat` varchar(50) NOT NULL,
  `evac_long` varchar(50) NOT NULL,
  `disaster_type_id` int(11) NOT NULL,
  PRIMARY KEY (`evac_seq_id`),
  KEY `t_evac_points_fk0` (`disaster_type_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=181 ;

--
-- Dumping data for table `t_evac_points`
--

INSERT INTO `t_evac_points` (`evac_seq_id`, `lst_upd_date`, `evac_lat`, `evac_long`, `disaster_type_id`) VALUES
(46, '2017-08-03 20:49:05', '22.569841', '88.431313', 1),
(47, '2017-08-03 20:49:05', '22.570901', '88.431860', 1),
(48, '2017-08-03 20:49:05', '22.571901', '88.432391', 1),
(49, '2017-08-03 20:49:06', '22.569236', '88.433035', 1),
(50, '2017-08-03 20:49:06', '22.568894', '88.433668', 1),
(51, '2017-08-03 20:49:06', '22.570871', '88.426120', 1),
(52, '2017-08-03 20:49:06', '22.573080', '88.429945', 1),
(53, '2017-08-03 20:49:06', '22.574011', '88.427837', 1),
(54, '2017-08-03 20:49:06', '22.567730', '88.433013', 1),
(55, '2017-08-03 20:49:06', '22.573069', '88.421139', 1),
(56, '2017-08-03 20:49:06', '22.574685', '88.433786', 1),
(57, '2017-08-03 20:49:24', '22.571901', '88.432391', 2),
(58, '2017-08-03 20:49:24', '22.574011', '88.427837', 2),
(59, '2017-08-03 20:49:25', '22.573069', '88.421139', 2),
(60, '2017-08-03 20:49:25', '22.576744', '88.429229', 2),
(61, '2017-08-03 20:49:25', '22.573932', '88.433480', 2),
(62, '2017-08-03 20:49:25', '22.574685', '88.433786', 2),
(63, '2017-08-03 20:49:42', '22.570726', '88.435241', 1),
(64, '2017-08-03 20:49:42', '22.571371', '88.433802', 1),
(65, '2017-08-03 20:49:42', '22.571916', '88.432316', 1),
(66, '2017-08-03 20:49:42', '22.571064', '88.434070', 1),
(67, '2017-08-03 20:49:42', '22.570173', '88.433448', 1),
(68, '2017-08-03 20:49:42', '22.569236', '88.432981', 1),
(69, '2017-08-03 20:49:42', '22.568840', '88.433689', 1),
(70, '2017-08-03 20:49:42', '22.568805', '88.430669', 1),
(71, '2017-08-03 20:49:42', '22.573935', '88.433436', 1),
(72, '2017-08-03 20:49:42', '22.567095', '88.436084', 1),
(73, '2017-08-03 20:49:42', '22.572692', '88.438262', 1),
(74, '2017-08-03 20:49:42', '22.567759', '88.432973', 1),
(75, '2017-08-03 20:49:55', '22.571916', '88.432316', 2),
(76, '2017-08-03 20:49:55', '22.568805', '88.430669', 2),
(77, '2017-08-03 20:49:55', '22.573935', '88.433436', 2),
(78, '2017-08-03 20:49:55', '22.567759', '88.432973', 2),
(79, '2017-08-03 20:49:55', '22.574685', '88.433786', 2),
(80, '2017-08-03 20:50:12', '22.580353', '88.438029', 1),
(81, '2017-08-03 20:50:12', '22.580842', '88.437616', 1),
(82, '2017-08-03 20:50:12', '22.580936', '88.436892', 1),
(83, '2017-08-03 20:50:12', '22.582942', '88.433083', 1),
(84, '2017-08-03 20:50:12', '22.583725', '88.433239', 1),
(85, '2017-08-03 20:50:12', '22.583274', '88.433689', 1),
(86, '2017-08-03 20:50:12', '22.581129', '88.430041', 1),
(87, '2017-08-03 20:50:12', '22.578148', '88.435588', 1),
(88, '2017-08-03 20:50:12', '22.579208', '88.440014', 1),
(89, '2017-08-03 20:50:12', '22.580367', '88.440545', 1),
(90, '2017-08-03 20:50:12', '22.580971', '88.440958', 1),
(91, '2017-08-03 20:50:12', '22.580094', '88.441763', 1),
(92, '2017-08-03 20:50:12', '22.580451', '88.442991', 1),
(93, '2017-08-03 20:50:12', '22.576774', '88.438713', 1),
(94, '2017-08-03 20:50:12', '22.576259', '88.439754', 1),
(95, '2017-08-03 20:50:13', '22.576645', '88.434851', 1),
(96, '2017-08-03 20:50:13', '22.574685', '88.433786', 1),
(97, '2017-08-03 20:50:23', '22.582942', '88.433083', 2),
(98, '2017-08-03 20:50:23', '22.581129', '88.430041', 2),
(99, '2017-08-03 20:50:23', '22.578148', '88.435588', 2),
(100, '2017-08-03 20:50:23', '22.579208', '88.440014', 2),
(101, '2017-08-03 20:50:23', '22.580971', '88.440958', 2),
(102, '2017-08-03 20:50:23', '22.576774', '88.438713', 2),
(103, '2017-08-03 20:50:23', '22.574685', '88.433786', 2),
(104, '2017-08-03 20:55:24', '22.569841', '88.431313', 3),
(105, '2017-08-03 20:55:24', '22.570901', '88.431860', 3),
(106, '2017-08-03 20:55:24', '22.571901', '88.432391', 3),
(107, '2017-08-03 20:55:24', '22.569236', '88.433035', 3),
(108, '2017-08-03 20:55:24', '22.568894', '88.433668', 3),
(109, '2017-08-03 20:55:24', '22.570871', '88.426120', 3),
(110, '2017-08-03 20:55:24', '22.573080', '88.429945', 3),
(111, '2017-08-03 20:55:24', '22.574011', '88.427837', 3),
(112, '2017-08-03 20:55:24', '22.567730', '88.433013', 3),
(113, '2017-08-03 20:55:24', '22.573069', '88.421139', 3),
(114, '2017-08-03 20:55:24', '22.574685', '88.433786', 3),
(115, '2017-08-03 20:55:39', '22.570726', '88.435241', 3),
(116, '2017-08-03 20:55:39', '22.571371', '88.433802', 3),
(117, '2017-08-03 20:55:39', '22.571916', '88.432316', 3),
(118, '2017-08-03 20:55:39', '22.571064', '88.434070', 3),
(119, '2017-08-03 20:55:39', '22.570173', '88.433448', 3),
(120, '2017-08-03 20:55:39', '22.569236', '88.432981', 3),
(121, '2017-08-03 20:55:39', '22.568840', '88.433689', 3),
(122, '2017-08-03 20:55:40', '22.568805', '88.430669', 3),
(123, '2017-08-03 20:55:40', '22.573935', '88.433436', 3),
(124, '2017-08-03 20:55:40', '22.567095', '88.436084', 3),
(125, '2017-08-03 20:55:40', '22.572692', '88.438262', 3),
(126, '2017-08-03 20:55:40', '22.567759', '88.432973', 3),
(127, '2017-08-03 20:55:55', '22.580353', '88.438029', 3),
(128, '2017-08-03 20:55:55', '22.580842', '88.437616', 3),
(129, '2017-08-03 20:55:55', '22.580936', '88.436892', 3),
(130, '2017-08-03 20:55:55', '22.582942', '88.433083', 3),
(131, '2017-08-03 20:55:55', '22.583725', '88.433239', 3),
(132, '2017-08-03 20:55:55', '22.583274', '88.433689', 3),
(133, '2017-08-03 20:55:55', '22.581129', '88.430041', 3),
(134, '2017-08-03 20:55:55', '22.578148', '88.435588', 3),
(135, '2017-08-03 20:55:55', '22.579208', '88.440014', 3),
(136, '2017-08-03 20:55:55', '22.580367', '88.440545', 3),
(137, '2017-08-03 20:55:55', '22.580971', '88.440958', 3),
(138, '2017-08-03 20:55:55', '22.580094', '88.441763', 3),
(139, '2017-08-03 20:55:55', '22.580451', '88.442991', 3),
(140, '2017-08-03 20:55:55', '22.576774', '88.438713', 3),
(141, '2017-08-03 20:55:55', '22.576259', '88.439754', 3),
(142, '2017-08-03 20:55:55', '22.576645', '88.434851', 3),
(143, '2017-08-03 20:55:55', '22.574685', '88.433786', 3),
(144, '2017-08-03 21:05:10', '22.573039', '88.421139', 1),
(145, '2017-08-03 21:05:10', '22.574446', '88.421440', 1),
(146, '2017-08-03 21:05:10', '22.583758', '88.433209', 1),
(147, '2017-08-03 21:05:10', '22.583510', '88.434121', 1),
(148, '2017-08-03 21:05:10', '22.580350', '88.442865', 1),
(149, '2017-08-03 21:05:10', '22.576239', '88.439818', 1),
(150, '2017-08-03 21:05:10', '22.579419', '88.426332', 1),
(151, '2017-08-03 21:05:10', '22.580152', '88.428445', 1),
(152, '2017-08-03 21:05:10', '22.581153', '88.429969', 1),
(153, '2017-08-03 21:05:10', '22.574685', '88.433786', 1),
(154, '2017-08-03 21:05:23', '22.573039', '88.421139', 2),
(155, '2017-08-03 21:05:23', '22.574446', '88.421440', 2),
(156, '2017-08-03 21:05:23', '22.583758', '88.433209', 2),
(157, '2017-08-03 21:05:23', '22.583510', '88.434121', 2),
(158, '2017-08-03 21:05:23', '22.580350', '88.442865', 2),
(159, '2017-08-03 21:05:24', '22.576239', '88.439818', 2),
(160, '2017-08-03 21:05:24', '22.579419', '88.426332', 2),
(161, '2017-08-03 21:05:38', '22.573039', '88.421139', 3),
(162, '2017-08-03 21:05:38', '22.574446', '88.421440', 3),
(163, '2017-08-03 21:05:38', '22.583758', '88.433209', 3),
(164, '2017-08-03 21:05:38', '22.583510', '88.434121', 3),
(165, '2017-08-03 21:05:39', '22.580350', '88.442865', 3),
(166, '2017-08-03 21:05:39', '22.576239', '88.439818', 3),
(167, '2017-08-03 21:05:39', '22.579419', '88.426332', 3),
(168, '2017-08-24 16:33:38', '22.504012', '88.517980', 1),
(169, '2017-08-24 16:33:38', '22.503338', '88.516709', 1),
(170, '2017-08-24 16:33:38', '22.5038581', '88.515615', 1),
(171, '2017-08-24 16:33:38', '22.504210', '88.516231', 1),
(172, '2017-08-24 16:33:51', '22.504012', '88.517980', 3),
(173, '2017-08-24 16:33:51', '22.503338', '88.516709', 3),
(174, '2017-08-24 16:33:51', '22.5038581', '88.515615', 3),
(175, '2017-08-24 16:33:51', '22.504210', '88.516231', 3),
(176, '2017-08-24 16:34:02', '22.504377', '88.510950', 2),
(177, '2017-08-24 16:34:02', '22.504258', '88.518546', 2),
(178, '2017-08-24 16:34:02', '22.502246', '88.510897', 2),
(179, '2017-08-24 16:34:02', '22.502078', '88.514619', 2),
(180, '2017-08-24 16:34:02', '22.502064', '88.518463', 2);

-- --------------------------------------------------------

--
-- Table structure for table `t_incidents`
--

CREATE TABLE IF NOT EXISTS `t_incidents` (
  `incident_id` int(11) NOT NULL AUTO_INCREMENT,
  `incident_lat` varchar(50) DEFAULT NULL,
  `incident_long` varchar(50) DEFAULT NULL,
  `incident_msg` varchar(150) DEFAULT NULL,
  `incident_status` char(1) DEFAULT NULL,
  `disaster_type_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `incident_date` datetime NOT NULL,
  `close_date` datetime DEFAULT NULL,
  `close_cmt` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`incident_id`),
  KEY `t_incidents_fk0` (`disaster_type_id`),
  KEY `t_incidents_fk1` (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `t_incidents`
--

INSERT INTO `t_incidents` (`incident_id`, `incident_lat`, `incident_long`, `incident_msg`, `incident_status`, `disaster_type_id`, `user_id`, `incident_date`, `close_date`, `close_cmt`) VALUES
(2, '22.503804', '88.5172117', 'Fire in Sector 5', 'O', 1, 1, '2017-09-22 07:05:55', NULL, NULL),
(3, '22.573531', '88.433119', 'earthquake in sectorv reported through chatbot', 'O', 3, 2, '2017-09-22 07:20:00', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `t_incidents_areas`
--

CREATE TABLE IF NOT EXISTS `t_incidents_areas` (
  `inc_area_seq_id` int(11) NOT NULL AUTO_INCREMENT,
  `area_id` int(11) NOT NULL,
  `incident_id` int(11) NOT NULL,
  PRIMARY KEY (`inc_area_seq_id`),
  KEY `t_incidents_areas_fk0` (`area_id`),
  KEY `t_incidents_areas_fk1` (`incident_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `t_incidents_areas`
--

INSERT INTO `t_incidents_areas` (`inc_area_seq_id`, `area_id`, `incident_id`) VALUES
(2, 1, 2),
(3, 1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `t_incident_buildings`
--

CREATE TABLE IF NOT EXISTS `t_incident_buildings` (
  `inc_build_seq_id` int(11) NOT NULL AUTO_INCREMENT,
  `building_id` int(11) NOT NULL,
  `incident_id` int(11) NOT NULL,
  PRIMARY KEY (`inc_build_seq_id`),
  KEY `t_incident_buildings_fk0` (`building_id`),
  KEY `t_incident_buildings_fk1` (`incident_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `t_incident_sos`
--

CREATE TABLE IF NOT EXISTS `t_incident_sos` (
  `incident_sos_seq_id` int(11) NOT NULL AUTO_INCREMENT,
  `incident_id` int(11) NOT NULL,
  `sos_id` int(11) NOT NULL,
  PRIMARY KEY (`incident_sos_seq_id`),
  KEY `t_incident_sos_fk0` (`incident_id`),
  KEY `t_incident_sos_fk1` (`sos_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `t_incident_sos`
--

INSERT INTO `t_incident_sos` (`incident_sos_seq_id`, `incident_id`, `sos_id`) VALUES
(2, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `t_mark_safe`
--

CREATE TABLE IF NOT EXISTS `t_mark_safe` (
  `safe_seq_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `incident_id` int(11) NOT NULL,
  `status` char(1) NOT NULL,
  `mark_safe_date` datetime DEFAULT NULL,
  PRIMARY KEY (`safe_seq_id`),
  KEY `t_mark_safe_fk0` (`user_id`),
  KEY `t_mark_safe_fk1` (`incident_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `t_mark_safe`
--

INSERT INTO `t_mark_safe` (`safe_seq_id`, `user_id`, `incident_id`, `status`, `mark_safe_date`) VALUES
(2, 2, 2, 'S', '2017-09-22 07:13:43'),
(3, 1, 2, 'S', '2017-09-22 07:14:06');

-- --------------------------------------------------------

--
-- Table structure for table `t_messages`
--

CREATE TABLE IF NOT EXISTS `t_messages` (
  `msg_id` int(11) NOT NULL AUTO_INCREMENT,
  `support_type_id` int(11) NOT NULL,
  `msg` varchar(150) NOT NULL,
  `disaster_type_id` int(11) NOT NULL,
  PRIMARY KEY (`msg_id`),
  KEY `t_messages_fk0` (`support_type_id`),
  KEY `t_messages_fk1` (`disaster_type_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

--
-- Dumping data for table `t_messages`
--

INSERT INTO `t_messages` (`msg_id`, `support_type_id`, `msg`, `disaster_type_id`) VALUES
(1, 1, 'Fire personal please respond to the disaster due to fire.', 1),
(9, 2, 'Police personal please respond to the disaster due to fire.', 1),
(10, 3, 'Hospital personal please be ready to attend the disaster due to fire.', 1),
(11, 4, 'Traffic personal please ensure that fire fighting services does not get stuck in traffic', 1),
(12, 1, 'Fire personal please respond to the disaster due to flood.', 2),
(13, 2, 'Police personal please respond to the disaster due to flood.', 2),
(14, 3, 'Hospital personal please be ready to attend the disaster due to flood.', 2),
(15, 4, 'Traffic personal please ensure that flood fighting services does not get stuck in traffic', 2),
(16, 8, 'Please arrange water pumps and attend to crisis arise due to flood.', 2);

-- --------------------------------------------------------

--
-- Table structure for table `t_predictions`
--

CREATE TABLE IF NOT EXISTS `t_predictions` (
  `prediction_id` int(11) NOT NULL AUTO_INCREMENT,
  `detection_date` datetime NOT NULL,
  `severity_level` decimal(10,0) NOT NULL,
  `prediction_status` char(1) DEFAULT NULL,
  `area_id` int(11) NOT NULL,
  `disaster_type_id` int(11) NOT NULL,
  `close_date` datetime DEFAULT NULL,
  `close_cmt` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`prediction_id`),
  KEY `t_predictions_fk0` (`area_id`),
  KEY `t_predictions_fk1` (`disaster_type_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=41 ;

--
-- Dumping data for table `t_predictions`
--

INSERT INTO `t_predictions` (`prediction_id`, `detection_date`, `severity_level`, `prediction_status`, `area_id`, `disaster_type_id`, `close_date`, `close_cmt`) VALUES
(1, '2017-09-26 00:00:00', '4', 'O', 4, 2, NULL, NULL),
(2, '2017-09-23 12:00:00', '1', 'O', 4, 2, NULL, NULL),
(3, '2017-09-24 21:00:00', '1', 'O', 4, 2, NULL, NULL),
(4, '2017-09-27 06:00:00', '1', 'O', 4, 2, NULL, NULL),
(5, '2017-09-25 06:00:00', '1', 'O', 4, 2, NULL, NULL),
(6, '2017-09-23 21:00:00', '1', 'O', 4, 2, NULL, NULL),
(7, '2017-09-24 03:00:00', '1', 'O', 4, 2, NULL, NULL),
(8, '2017-09-25 15:00:00', '1', 'O', 4, 2, NULL, NULL),
(9, '2017-09-23 15:00:00', '1', 'O', 4, 2, NULL, NULL),
(10, '2017-09-22 15:00:00', '1', 'O', 4, 2, NULL, NULL),
(11, '2017-09-25 03:00:00', '1', 'O', 4, 2, NULL, NULL),
(12, '2017-09-23 18:00:00', '1', 'O', 4, 2, NULL, NULL),
(13, '2017-09-24 15:00:00', '1', 'O', 4, 2, NULL, NULL),
(14, '2017-09-24 09:00:00', '1', 'O', 4, 2, NULL, NULL),
(15, '2017-09-27 09:00:00', '1', 'O', 4, 2, NULL, NULL),
(16, '2017-09-26 18:00:00', '1', 'O', 4, 2, NULL, NULL),
(17, '2017-09-23 03:00:00', '1', 'O', 4, 2, NULL, NULL),
(18, '2017-09-26 12:00:00', '1', 'O', 4, 2, NULL, NULL),
(19, '2017-09-25 21:00:00', '1', 'O', 4, 2, NULL, NULL),
(20, '2017-09-25 00:00:00', '1', 'O', 4, 2, NULL, NULL),
(21, '2017-09-22 12:00:00', '1', 'O', 4, 2, NULL, NULL),
(22, '2017-09-23 06:00:00', '1', 'O', 4, 2, NULL, NULL),
(23, '2017-09-27 03:00:00', '1', 'O', 4, 2, NULL, NULL),
(24, '2017-09-22 21:00:00', '1', 'O', 4, 2, NULL, NULL),
(25, '2017-09-25 09:00:00', '1', 'O', 4, 2, NULL, NULL),
(26, '2017-09-25 18:00:00', '1', 'O', 4, 2, NULL, NULL),
(27, '2017-09-26 06:00:00', '1', 'O', 4, 2, NULL, NULL),
(28, '2017-09-23 09:00:00', '1', 'O', 4, 2, NULL, NULL),
(29, '2017-09-24 18:00:00', '1', 'O', 4, 2, NULL, NULL),
(30, '2017-09-27 00:00:00', '1', 'O', 4, 2, NULL, NULL),
(31, '2017-09-24 00:00:00', '1', 'O', 4, 2, NULL, NULL),
(32, '2017-09-26 03:00:00', '1', 'O', 4, 2, NULL, NULL),
(33, '2017-09-26 09:00:00', '1', 'O', 4, 2, NULL, NULL),
(34, '2017-09-22 18:00:00', '1', 'O', 4, 2, NULL, NULL),
(35, '2017-09-23 00:00:00', '1', 'O', 4, 2, NULL, NULL),
(36, '2017-09-25 12:00:00', '1', 'O', 4, 2, NULL, NULL),
(37, '2017-09-24 06:00:00', '1', 'O', 4, 2, NULL, NULL),
(38, '2017-09-26 15:00:00', '1', 'O', 4, 2, NULL, NULL),
(39, '2017-09-24 12:00:00', '1', 'O', 4, 2, NULL, NULL),
(40, '2017-09-26 21:00:00', '1', 'O', 4, 2, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `t_predictions_history`
--

CREATE TABLE IF NOT EXISTS `t_predictions_history` (
  `prediction_id` int(11) NOT NULL,
  `wind_speed` double NOT NULL,
  `cloud_percent` int(11) NOT NULL,
  `rain_prcption` double NOT NULL,
  `area_lat` varchar(50) NOT NULL,
  `area_long` varchar(50) NOT NULL,
  PRIMARY KEY (`prediction_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `t_predictions_history`
--

INSERT INTO `t_predictions_history` (`prediction_id`, `wind_speed`, `cloud_percent`, `rain_prcption`, `area_lat`, `area_long`) VALUES
(1, 0.96, 0, 0, '22.5368712', '88.4386298'),
(2, 2.01, 80, 0.905, '22.5368712', '88.4386298'),
(3, 1.41, 44, 0, '22.5368712', '88.4386298'),
(4, 2.21, 24, 0, '22.5368712', '88.4386298'),
(5, 2.05, 32, 0, '22.5368712', '88.4386298'),
(6, 2.56, 8, 0, '22.5368712', '88.4386298'),
(7, 1.97, 64, 0, '22.5368712', '88.4386298'),
(8, 1.02, 24, 0, '22.5368712', '88.4386298'),
(9, 2.71, 24, 7.115, '22.5368712', '88.4386298'),
(10, 4.46, 0, 0, '22.5368712', '88.4386298'),
(11, 2.01, 8, 0, '22.5368712', '88.4386298'),
(12, 3.17, 12, 0, '22.5368712', '88.4386298'),
(13, 1.31, 64, 0, '22.5368712', '88.4386298'),
(14, 2.27, 12, 7.53, '22.5368712', '88.4386298'),
(15, 1.97, 32, 0, '22.5368712', '88.4386298'),
(16, 1.36, 68, 0, '22.5368712', '88.4386298'),
(17, 2.96, 8, 0, '22.5368712', '88.4386298'),
(18, 1.96, 24, 2.84, '22.5368712', '88.4386298'),
(19, 1.36, 8, 0, '22.5368712', '88.4386298'),
(20, 1.31, 44, 0.18, '22.5368712', '88.4386298'),
(21, 3.41, 88, 0, '22.5368712', '88.4386298'),
(22, 2.06, 24, 0, '22.5368712', '88.4386298'),
(23, 2.01, 64, 6.64, '22.5368712', '88.4386298'),
(24, 2.67, 0, 0, '22.5368712', '88.4386298'),
(25, 2.06, 64, 0, '22.5368712', '88.4386298'),
(26, 1.41, 12, 0, '22.5368712', '88.4386298'),
(27, 2.02, 12, 0, '22.5368712', '88.4386298'),
(28, 2.07, 24, 0, '22.5368712', '88.4386298'),
(29, 1.42, 56, 0, '22.5368712', '88.4386298'),
(30, 1.96, 80, 1.97, '22.5368712', '88.4386298'),
(31, 2.02, 24, 0, '22.5368712', '88.4386298'),
(32, 1.86, 0, 0, '22.5368712', '88.4386298'),
(33, 1.96, 48, 0, '22.5368712', '88.4386298'),
(34, 3.36, 8, 0, '22.5368712', '88.4386298'),
(35, 2.75, 0, 0, '22.5368712', '88.4386298'),
(36, 1.38, 56, 0, '22.5368712', '88.4386298'),
(37, 1.92, 20, 0, '22.5368712', '88.4386298'),
(38, 1.17, 80, 4.7, '22.5368712', '88.4386298'),
(39, 1.05, 48, 1.48, '22.5368712', '88.4386298'),
(40, 1.41, 80, 0, '22.5368712', '88.4386298');

-- --------------------------------------------------------

--
-- Table structure for table `t_roles`
--

CREATE TABLE IF NOT EXISTS `t_roles` (
  `role_id` int(11) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(50) NOT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

--
-- Dumping data for table `t_roles`
--

INSERT INTO `t_roles` (`role_id`, `role_name`) VALUES
(1, 'Citizen'),
(2, 'Disaster Management Team'),
(3, 'Fire Brigade'),
(4, 'Police Station'),
(5, 'Hospital'),
(6, 'Traffic Control'),
(7, 'Anti Terrorist Sqad'),
(8, 'NGO'),
(9, 'Social Service Org'),
(10, 'Water Pumping Station'),
(11, 'Para Military'),
(12, 'Military'),
(13, 'CMO'),
(14, 'District Magistrate'),
(15, 'PMO'),
(16, 'Building POC');

-- --------------------------------------------------------

--
-- Table structure for table `t_sos`
--

CREATE TABLE IF NOT EXISTS `t_sos` (
  `sos_id` int(11) NOT NULL AUTO_INCREMENT,
  `sos_date` datetime NOT NULL,
  `sos_lat` varchar(50) DEFAULT NULL,
  `sos_long` varchar(50) DEFAULT NULL,
  `sos_msg` varchar(150) DEFAULT NULL,
  `sos_status` char(1) DEFAULT NULL,
  `disastertype_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `close_date` datetime DEFAULT NULL,
  `close_cmt` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`sos_id`),
  KEY `t_sos_fk0` (`disastertype_id`),
  KEY `t_sos_fk1` (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `t_sos`
--

INSERT INTO `t_sos` (`sos_id`, `sos_date`, `sos_lat`, `sos_long`, `sos_msg`, `sos_status`, `disastertype_id`, `user_id`, `close_date`, `close_cmt`) VALUES
(1, '2017-08-03 13:15:09', '22.578658', '88.426702', 'Fire on 4th Floor', 'A', 1, 1, NULL, NULL),
(2, '2017-09-22 07:05:29', '22.503804', '88.5172117', 'Fire in Sector 5', 'A', 1, 2, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `t_sos_areas`
--

CREATE TABLE IF NOT EXISTS `t_sos_areas` (
  `sos_area_seq_id` int(11) NOT NULL AUTO_INCREMENT,
  `sos_id` int(11) NOT NULL,
  `area_id` int(11) NOT NULL,
  PRIMARY KEY (`sos_area_seq_id`),
  KEY `t_sos_areas_fk0` (`sos_id`),
  KEY `t_sos_areas_fk1` (`area_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `t_sos_areas`
--

INSERT INTO `t_sos_areas` (`sos_area_seq_id`, `sos_id`, `area_id`) VALUES
(1, 1, 1),
(2, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `t_sos_buildings`
--

CREATE TABLE IF NOT EXISTS `t_sos_buildings` (
  `sos_build_seq_id` int(11) NOT NULL AUTO_INCREMENT,
  `sos_id` int(11) NOT NULL,
  `building_id` int(11) NOT NULL,
  PRIMARY KEY (`sos_build_seq_id`),
  KEY `t_sos_buildings_fk0` (`sos_id`),
  KEY `t_sos_buildings_fk1` (`building_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `t_supports`
--

CREATE TABLE IF NOT EXISTS `t_supports` (
  `support_id` int(11) NOT NULL AUTO_INCREMENT,
  `support_name` varchar(50) NOT NULL,
  `support_mobile` varchar(15) NOT NULL,
  `support_email` varchar(50) NOT NULL,
  `support_lat` varchar(50) DEFAULT NULL,
  `support_long` varchar(50) DEFAULT NULL,
  `support_address` varchar(150) NOT NULL,
  `area_id` int(11) NOT NULL,
  `support_type_id` int(11) NOT NULL,
  `actual_mobile` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`support_id`),
  KEY `t_supports_fk0` (`area_id`),
  KEY `t_supports_fk1` (`support_type_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=28 ;

--
-- Dumping data for table `t_supports`
--

INSERT INTO `t_supports` (`support_id`, `support_name`, `support_mobile`, `support_email`, `support_lat`, `support_long`, `support_address`, `area_id`, `support_type_id`, `actual_mobile`) VALUES
(1, 'Electronics Complex Police Station', '+919674669440', 'subhodeep4u@gmail.com', '22.5770', '88.4300', 'Salt Lake, DN Block, Sector V, Kolkata, West Bengal 700091', 1, 2, '+919674669440'),
(2, 'Fire Station Bidhan Nagar', '+919831178623', 'TAPANAYAN.MANNA@cognizant.com', '22.5681', '88.4327', 'GP Block, Salt Lake, Salt Lake City, Kolkata, West Bengal 700091', 1, 1, '+919674669440'),
(3, 'Columbia Asia Hospital', '+918335012659', 'TAPANAYAN.MANNA@cognizant.com', '22.5724', '88.4127', 'IB 193, Salt Lake City Sector 5, Kolkata - 700091, Near Saltlake Stadium, Sector 3', 1, 3, '+918335012659'),
(4, 'Anandalok Hospital', '+918335012659', 'TAPANAYAN.MANNA@cognizant.com', '22.5848', '88.4230', 'Dk 7/3, Salt Lake City Sector 2, Kolkata - 700091, Near Karunamoyee', 1, 3, '+918335012659'),
(5, 'Bidhan Nagar Traffic Police', '+919674669440', 'TAPANAYAN.MANNA@cognizant.com', '22.583979', '88.415482', 'BP Block, Sector V, Salt Lake City, Kolkata, West Bengal 700091', 1, 4, '+919674669440'),
(6, 'Bidhannagar Municipal Corporation', '+919674669440', 'TAPANAYAN.MANNA@cognizant.com', '22.583979', '88.415482', 'Poura Bhawan, FD - 415A, Sector - III, Salt Lake City, West Bengal 700106', 1, 8, '+919674669440'),
(7, 'Army (Bihar Regiment)', '+919674669440', 'TAPANAYAN.MANNA@cognizant.com', '22.576442', '88.433506', 'BN Block, Sector V, Salt Lake City, Kolkata, West Bengal 700091', 1, 10, '+919674669440'),
(8, 'Park Street Police Station', '+919674669440', 'TAPANAYAN.MANNA@cognizant.com', '22.57687', '88.35047', '89, Park Street, Taltala, Kolkata, West Bengal 700016', 2, 2, '+919674669440'),
(9, 'Topsia Police Station', '+919674669440', 'TAPANAYAN.MANNA@cognizant.com', '22.5458', '88.3479', '106A, Park St, Park Circus, Beniapukur, Kolkata, West Bengal 700017', 2, 2, '+919674669440'),
(10, 'Fire Station Head Office', '+919831178623', 'TAPANAYAN.MANNA@cognizant.com', '22.55788', '88.35468', '13 D, Mirza Galib Street, Kolkata - 700016', 2, 1, '+919674669440'),
(11, 'Belle Vue Clinic', '+918335012659', 'TAPANAYAN.MANNA@cognizant.com', '22.5425', '88.3549', 'Circus Avenue, Kolkata - 700017, Near Minto Park', 2, 3, '+918335012659'),
(12, 'Park Street Police Station', '+919674669440', 'TAPANAYAN.MANNA@cognizant.com', '22.57687', '88.35047', '89, Park Street, Taltala, Kolkata, West Bengal 700016', 3, 2, '+919674669440'),
(13, 'Topsia Police Station', '+919674669440', 'TAPANAYAN.MANNA@cognizant.com', '22.5458', '88.3479', '106A, Park St, Park Circus, Beniapukur, Kolkata, West Bengal 700017', 3, 2, '+919674669440'),
(14, 'Fire Station Head Office', '+919674669440', 'TAPANAYAN.MANNA@cognizant.com', '22.55788', '88.35468', '13 D, Mirza Galib Street, Kolkata - 700016', 3, 1, '+919674669440'),
(15, 'Mercy Hospital', '+918335012659', 'TAPANAYAN.MANNA@cognizant.com', '22.5478', '88.3602', '125/1, Park Street, Mullick Bazar, Park Street area, Kolkata, West Bengal 700017', 3, 3, '+918335012659'),
(16, 'Belle Vue Clinic', '+918335012659', 'TAPANAYAN.MANNA@cognizant.com', '22.5425', '88.3549', 'Circus Avenue, Kolkata - 700017, Near Minto Park', 3, 3, '+918335012659'),
(17, 'Electronics Complex Police Station', '+919674669440', 'TAPANAYAN.MANNA@cognizant.com', '22.5770', '88.4300', 'Salt Lake, DN Block, Sector V, Kolkata, West Bengal 700091', 4, 2, '+919674669440'),
(18, 'Fire Station Bidhan Nagar', '+919831178623', 'TAPANAYAN.MANNA@cognizant.com', '22.5681', '88.4327', 'GP Block, Salt Lake, Salt Lake City, Kolkata, West Bengal 700091', 4, 1, '+919674669440'),
(19, 'Columbia Asia Hospital', '+918335012659', 'TAPANAYAN.MANNA@cognizant.com', '22.5724', '88.4127', 'IB 193, Salt Lake City Sector 5, Kolkata - 700091, Near Saltlake Stadium, Sector 3', 4, 3, '+918335012659'),
(20, 'Anandalok Hospital', '+918335012659', 'TAPANAYAN.MANNA@cognizant.com', '22.5848', '88.4230', 'Dk 7/3, Salt Lake City Sector 2, Kolkata - 700091, Near Karunamoyee', 4, 3, '+918335012659'),
(21, 'Bidhan Nagar Traffic Police', '+919674669440', 'TAPANAYAN.MANNA@cognizant.com', '22.583979', '88.415482', 'BP Block, Sector V, Salt Lake City, Kolkata, West Bengal 700091', 4, 4, '+919674669440'),
(22, 'Bidhannagar Municipal Corporation', '+919674669440', 'TAPANAYAN.MANNA@cognizant.com', '22.583979', '88.415482', 'Poura Bhawan, FD - 415A, Sector - III, Salt Lake City, West Bengal 700106', 4, 8, '+919674669440'),
(23, 'Army (Bihar Regiment)', '+919674669440', 'TAPANAYAN.MANNA@cognizant.com', '22.576442', '88.433506', 'BN Block, Sector V, Salt Lake City, Kolkata, West Bengal 700091', 4, 10, '+919674669440'),
(24, 'Apollo Gleneagles ', '+918335012659', 'TAPANAYAN.MANNA@cognizant.com', '22.574852', '88.401566', '58, Canal Circular Road, Kadapara, Kolkata, West Bengal 700054', 5, 3, '+919674669440'),
(25, 'Pragati Maidan Fire Station', '+919831178623', 'TAPANAYAN.MANNA@cognizant.com', '22.535474', '88.397248', 'Dhapa, Kolkata, West Bengal 70010', 5, 1, '+919674669440'),
(26, 'Parama Island Police Station', '+919674669440', 'TAPANAYAN.MANNA@cognizant.com', '22.541708', '88.398933', 'Maa Flyover, East Topsia, Dhapa, Kolkata, West Bengal 700105', 5, 2, '+919674669440'),
(27, 'Army (Bihar Regiment)', '+919674669440', 'TAPANAYAN.MANNA@cognizant.com', '22.576442', '88.433506', 'BN Block, Sector V, Salt Lake City, Kolkata, West Bengal 700091', 5, 10, '+919674669440');

-- --------------------------------------------------------

--
-- Table structure for table `t_support_types`
--

CREATE TABLE IF NOT EXISTS `t_support_types` (
  `support_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `support_type_name` varchar(50) NOT NULL,
  PRIMARY KEY (`support_type_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `t_support_types`
--

INSERT INTO `t_support_types` (`support_type_id`, `support_type_name`) VALUES
(1, 'Fire Station'),
(2, 'Police Station'),
(3, 'Hospital'),
(4, 'Traffic Control'),
(5, 'Anti Terrorist Sqad'),
(6, 'NGO'),
(7, 'Social Service Org'),
(8, 'Water Pumping Station'),
(9, 'Para Military'),
(10, 'Military');

-- --------------------------------------------------------

--
-- Table structure for table `t_users`
--

CREATE TABLE IF NOT EXISTS `t_users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) DEFAULT NULL,
  `user_password` varchar(50) DEFAULT NULL,
  `user_email` varchar(50) DEFAULT NULL,
  `user_mobile` varchar(13) DEFAULT NULL,
  `user_gcmkey` varchar(150) DEFAULT NULL,
  `role_id` int(11) NOT NULL,
  `user_create_date` datetime DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  KEY `t_users_fk0` (`role_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `t_users`
--

INSERT INTO `t_users` (`user_id`, `user_name`, `user_password`, `user_email`, `user_mobile`, `user_gcmkey`, `role_id`, `user_create_date`) VALUES
(1, 'Subhodeep', 'subhodeep', 'subhodeep4u@gmail.com', '+919830318917', NULL, 2, NULL),
(2, 'Shams', 'shams', 'shamsnezami@gmail.com', '+919831178623', NULL, 1, NULL),
(3, 'Pinku', 'pinku', 'roy.pinku@gmail.com', '+918017878166', NULL, 1, NULL),
(5, 'Tapanayan', 'tapanayan', 'TAPANAYAN.MANNA@hotmail.com', '+919674669440', NULL, 4, NULL),
(6, 'Sanjoy', 'sanjoy', 'Sanjoy.Chowdhury2@cognizant.com', '+918335012659', NULL, 5, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `t_user_interest_area`
--

CREATE TABLE IF NOT EXISTS `t_user_interest_area` (
  `user_id` int(11) NOT NULL,
  `area_id` int(11) NOT NULL,
  KEY `t_user_interest_area_fk0` (`user_id`),
  KEY `t_user_interest_area_fk1` (`area_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `t_vulnerability`
--

CREATE TABLE IF NOT EXISTS `t_vulnerability` (
  `vulnerability_id` int(11) NOT NULL AUTO_INCREMENT,
  `detection_date` datetime NOT NULL,
  `disaster_type_id` int(11) NOT NULL,
  `area_id` int(11) NOT NULL,
  `vulenrability_status` char(1) DEFAULT NULL,
  `close_date` datetime DEFAULT NULL,
  `close_cmt` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`vulnerability_id`),
  KEY `t_vulnerability_fk0` (`disaster_type_id`),
  KEY `t_vulnerability_fk1` (`area_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `t_vulnerability_building`
--

CREATE TABLE IF NOT EXISTS `t_vulnerability_building` (
  `vulnerability_id` int(11) NOT NULL,
  `building_id` int(11) NOT NULL,
  `vulnerability_level` decimal(10,0) DEFAULT NULL,
  KEY `t_vulnerability_building_fk0` (`vulnerability_id`),
  KEY `t_vulnerability_building_fk1` (`building_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `t_audits`
--
ALTER TABLE `t_audits`
  ADD CONSTRAINT `t_audits_fk0` FOREIGN KEY (`building_id`) REFERENCES `t_buildings` (`building_id`),
  ADD CONSTRAINT `t_audits_fk1` FOREIGN KEY (`disaster_type_id`) REFERENCES `t_disaster_types` (`disaster_type_id`);

--
-- Constraints for table `t_block_points`
--
ALTER TABLE `t_block_points`
  ADD CONSTRAINT `t_block_points_fk0` FOREIGN KEY (`incident_id`) REFERENCES `t_incidents` (`incident_id`),
  ADD CONSTRAINT `t_block_points_fk1` FOREIGN KEY (`user_id`) REFERENCES `t_users` (`user_id`);

--
-- Constraints for table `t_buildings`
--
ALTER TABLE `t_buildings`
  ADD CONSTRAINT `t_buildings_fk0` FOREIGN KEY (`area_id`) REFERENCES `t_areas` (`area_id`);

--
-- Constraints for table `t_comm`
--
ALTER TABLE `t_comm`
  ADD CONSTRAINT `t_comm_fk0` FOREIGN KEY (`incident_id`) REFERENCES `t_incidents` (`incident_id`),
  ADD CONSTRAINT `t_comm_fk1` FOREIGN KEY (`sender_role_id`) REFERENCES `t_roles` (`role_id`);

--
-- Constraints for table `t_disaster_support_types`
--
ALTER TABLE `t_disaster_support_types`
  ADD CONSTRAINT `t_disaster_support_types_fk0` FOREIGN KEY (`disaster_type_id`) REFERENCES `t_disaster_types` (`disaster_type_id`),
  ADD CONSTRAINT `t_disaster_support_types_fk1` FOREIGN KEY (`support_type_id`) REFERENCES `t_support_types` (`support_type_id`);

--
-- Constraints for table `t_evac_areas`
--
ALTER TABLE `t_evac_areas`
  ADD CONSTRAINT `t_evac_areas_fk0` FOREIGN KEY (`evac_seq_id`) REFERENCES `t_evac_points` (`evac_seq_id`),
  ADD CONSTRAINT `t_evac_areas_fk1` FOREIGN KEY (`area_id`) REFERENCES `t_areas` (`area_id`);

--
-- Constraints for table `t_evac_buildings`
--
ALTER TABLE `t_evac_buildings`
  ADD CONSTRAINT `t_evac_buildings_fk0` FOREIGN KEY (`building_id`) REFERENCES `t_buildings` (`building_id`),
  ADD CONSTRAINT `t_evac_buildings_fk1` FOREIGN KEY (`evac_seq_id`) REFERENCES `t_evac_points` (`evac_seq_id`);

--
-- Constraints for table `t_evac_points`
--
ALTER TABLE `t_evac_points`
  ADD CONSTRAINT `t_evac_points_fk0` FOREIGN KEY (`disaster_type_id`) REFERENCES `t_disaster_types` (`disaster_type_id`);

--
-- Constraints for table `t_incidents`
--
ALTER TABLE `t_incidents`
  ADD CONSTRAINT `t_incidents_fk0` FOREIGN KEY (`disaster_type_id`) REFERENCES `t_disaster_types` (`disaster_type_id`),
  ADD CONSTRAINT `t_incidents_fk1` FOREIGN KEY (`user_id`) REFERENCES `t_users` (`user_id`);

--
-- Constraints for table `t_incidents_areas`
--
ALTER TABLE `t_incidents_areas`
  ADD CONSTRAINT `t_incidents_areas_fk0` FOREIGN KEY (`area_id`) REFERENCES `t_areas` (`area_id`),
  ADD CONSTRAINT `t_incidents_areas_fk1` FOREIGN KEY (`incident_id`) REFERENCES `t_incidents` (`incident_id`);

--
-- Constraints for table `t_incident_buildings`
--
ALTER TABLE `t_incident_buildings`
  ADD CONSTRAINT `t_incident_buildings_fk0` FOREIGN KEY (`building_id`) REFERENCES `t_buildings` (`building_id`),
  ADD CONSTRAINT `t_incident_buildings_fk1` FOREIGN KEY (`incident_id`) REFERENCES `t_incidents` (`incident_id`);

--
-- Constraints for table `t_incident_sos`
--
ALTER TABLE `t_incident_sos`
  ADD CONSTRAINT `t_incident_sos_fk0` FOREIGN KEY (`incident_id`) REFERENCES `t_incidents` (`incident_id`),
  ADD CONSTRAINT `t_incident_sos_fk1` FOREIGN KEY (`sos_id`) REFERENCES `t_sos` (`sos_id`);

--
-- Constraints for table `t_mark_safe`
--
ALTER TABLE `t_mark_safe`
  ADD CONSTRAINT `t_mark_safe_fk0` FOREIGN KEY (`user_id`) REFERENCES `t_users` (`user_id`),
  ADD CONSTRAINT `t_mark_safe_fk1` FOREIGN KEY (`incident_id`) REFERENCES `t_incidents` (`incident_id`);

--
-- Constraints for table `t_messages`
--
ALTER TABLE `t_messages`
  ADD CONSTRAINT `t_messages_fk0` FOREIGN KEY (`support_type_id`) REFERENCES `t_support_types` (`support_type_id`),
  ADD CONSTRAINT `t_messages_fk1` FOREIGN KEY (`disaster_type_id`) REFERENCES `t_disaster_types` (`disaster_type_id`);

--
-- Constraints for table `t_predictions`
--
ALTER TABLE `t_predictions`
  ADD CONSTRAINT `t_predictions_fk0` FOREIGN KEY (`area_id`) REFERENCES `t_areas` (`area_id`),
  ADD CONSTRAINT `t_predictions_fk1` FOREIGN KEY (`disaster_type_id`) REFERENCES `t_disaster_types` (`disaster_type_id`);

--
-- Constraints for table `t_sos`
--
ALTER TABLE `t_sos`
  ADD CONSTRAINT `t_sos_fk0` FOREIGN KEY (`disastertype_id`) REFERENCES `t_disaster_types` (`disaster_type_id`),
  ADD CONSTRAINT `t_sos_fk1` FOREIGN KEY (`user_id`) REFERENCES `t_users` (`user_id`);

--
-- Constraints for table `t_sos_areas`
--
ALTER TABLE `t_sos_areas`
  ADD CONSTRAINT `t_sos_areas_fk0` FOREIGN KEY (`sos_id`) REFERENCES `t_sos` (`sos_id`),
  ADD CONSTRAINT `t_sos_areas_fk1` FOREIGN KEY (`area_id`) REFERENCES `t_areas` (`area_id`);

--
-- Constraints for table `t_sos_buildings`
--
ALTER TABLE `t_sos_buildings`
  ADD CONSTRAINT `t_sos_buildings_fk0` FOREIGN KEY (`sos_id`) REFERENCES `t_sos` (`sos_id`),
  ADD CONSTRAINT `t_sos_buildings_fk1` FOREIGN KEY (`building_id`) REFERENCES `t_buildings` (`building_id`);

--
-- Constraints for table `t_supports`
--
ALTER TABLE `t_supports`
  ADD CONSTRAINT `t_supports_fk0` FOREIGN KEY (`area_id`) REFERENCES `t_areas` (`area_id`),
  ADD CONSTRAINT `t_supports_fk1` FOREIGN KEY (`support_type_id`) REFERENCES `t_support_types` (`support_type_id`);

--
-- Constraints for table `t_users`
--
ALTER TABLE `t_users`
  ADD CONSTRAINT `t_users_fk0` FOREIGN KEY (`role_id`) REFERENCES `t_roles` (`role_id`);

--
-- Constraints for table `t_user_interest_area`
--
ALTER TABLE `t_user_interest_area`
  ADD CONSTRAINT `t_user_interest_area_fk0` FOREIGN KEY (`user_id`) REFERENCES `t_users` (`user_id`),
  ADD CONSTRAINT `t_user_interest_area_fk1` FOREIGN KEY (`area_id`) REFERENCES `t_areas` (`area_id`);

--
-- Constraints for table `t_vulnerability`
--
ALTER TABLE `t_vulnerability`
  ADD CONSTRAINT `t_vulnerability_fk0` FOREIGN KEY (`disaster_type_id`) REFERENCES `t_disaster_types` (`disaster_type_id`),
  ADD CONSTRAINT `t_vulnerability_fk1` FOREIGN KEY (`area_id`) REFERENCES `t_areas` (`area_id`);

--
-- Constraints for table `t_vulnerability_building`
--
ALTER TABLE `t_vulnerability_building`
  ADD CONSTRAINT `t_vulnerability_building_fk0` FOREIGN KEY (`vulnerability_id`) REFERENCES `t_vulnerability` (`vulnerability_id`),
  ADD CONSTRAINT `t_vulnerability_building_fk1` FOREIGN KEY (`building_id`) REFERENCES `t_buildings` (`building_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
