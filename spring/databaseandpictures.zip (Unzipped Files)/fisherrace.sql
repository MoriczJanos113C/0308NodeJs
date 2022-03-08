-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2021. Dec 11. 07:10
-- Kiszolgáló verziója: 10.4.11-MariaDB
-- PHP verzió: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `fisherrace`
--
CREATE DATABASE IF NOT EXISTS `fisherrace` DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
USE `fisherrace`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `catch`
--

CREATE TABLE `catch` (
  `id` int(3) NOT NULL,
  `fisher` int(3) NOT NULL,
  `fish` int(3) NOT NULL,
  `weight` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `catch`
--

INSERT INTO `catch` (`id`, `fisher`, `fish`, `weight`) VALUES
(1, 95, 1, 1190),
(2, 108, 4, 390),
(3, 48, 3, 1560),
(4, 108, 2, 630),
(5, 95, 3, 4020),
(6, 15, 2, 365),
(7, 48, 5, 75),
(8, 108, 1, 745),
(9, 95, 2, 3380),
(10, 108, 6, 115),
(11, 48, 2, 430),
(12, 95, 5, 745),
(13, 95, 4, 1480),
(14, 12, 4, 5000),
(15, 15, 7, 237000),
(16, 108, 3, 415),
(17, 12, 5, 90),
(18, 15, 6, 200),
(19, 48, 3, 300),
(20, 12, 4, 50);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `fish`
--

CREATE TABLE `fish` (
  `id` int(3) NOT NULL,
  `race` varchar(40) COLLATE utf8_hungarian_ci NOT NULL,
  `picture` varchar(40) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `fish`
--

INSERT INTO `fish` (`id`, `race`, `picture`) VALUES
(1, 'ponty', 'ponty.jpg'),
(2, 'harcsa', 'harcsa.jpg'),
(3, 'csuka', 'csuka.jpg'),
(4, 'keszeg', 'keszeg.jpg'),
(5, 'sügér', 'suger.jpg'),
(6, 'béka', 'beka.jpg'),
(7, 'Loch Ness-i szörny', 'lochnessi.jpg'),
(8, 'tonhal', 'tonhal.jpg'),
(9, 'tonhal', 'tonhal.jpg');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `fisher`
--

CREATE TABLE `fisher` (
  `start_number` int(3) NOT NULL,
  `name` varchar(40) COLLATE utf8_hungarian_ci NOT NULL,
  `country` varchar(40) COLLATE utf8_hungarian_ci NOT NULL,
  `picture` varchar(40) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `fisher`
--

INSERT INTO `fisher` (`start_number`, `name`, `country`, `picture`) VALUES
(12, 'Kovács Anna', 'Erdély', 'fisher1.jpg'),
(15, 'Jack Bryant', 'Egyesült Államok', 'fisher5.jpg'),
(48, 'Elias Karjalainen', 'Finnország', 'fisher4.jpg'),
(95, 'Simon Wroblewski és családja', 'Lengyelország', 'fisher2.jpg'),
(108, 'Francois Dubois', 'Franciaország', 'fisher3.jpg');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `catch`
--
ALTER TABLE `catch`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fisher` (`fisher`),
  ADD KEY `fish` (`fish`);

--
-- A tábla indexei `fish`
--
ALTER TABLE `fish`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `fisher`
--
ALTER TABLE `fisher`
  ADD PRIMARY KEY (`start_number`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `catch`
--
ALTER TABLE `catch`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT a táblához `fish`
--
ALTER TABLE `fish`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
