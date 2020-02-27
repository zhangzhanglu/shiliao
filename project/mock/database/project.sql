-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2020-02-25 03:12:30
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project`
--

-- --------------------------------------------------------

--
-- 表的结构 `physicalsymptoms`
--

CREATE TABLE `physicalsymptoms` (
  `id` int(11) NOT NULL,
  `content` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `physicalsymptoms`
--

INSERT INTO `physicalsymptoms` (`id`, `content`) VALUES
(1, '嗓子痛'),
(2, '手脚冰凉发麻'),
(3, '口腔溃疡'),
(4, '脚脖子疼'),
(5, '声音沙哑肿痛'),
(6, '流行性感冒');

-- --------------------------------------------------------

--
-- 表的结构 `target`
--

CREATE TABLE `target` (
  `id` int(11) NOT NULL,
  `content` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `target`
--

INSERT INTO `target` (`id`, `content`) VALUES
(1, '吃早饭'),
(2, '早睡早起'),
(3, '按时吃饭'),
(4, '八杯水'),
(5, '排便'),
(6, '健走3000步');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `physicalsymptoms`
--
ALTER TABLE `physicalsymptoms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `target`
--
ALTER TABLE `target`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `physicalsymptoms`
--
ALTER TABLE `physicalsymptoms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- 使用表AUTO_INCREMENT `target`
--
ALTER TABLE `target`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
