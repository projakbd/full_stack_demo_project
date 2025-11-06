-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 06, 2025 at 07:13 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `demo_app_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `adonis_schema`
--

CREATE TABLE `adonis_schema` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  `migration_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `adonis_schema`
--

INSERT INTO `adonis_schema` (`id`, `name`, `batch`, `migration_time`) VALUES
(1, 'database/migrations/1762432621393_create_users_table', 1, '2025-11-06 13:06:42'),
(2, 'database/migrations/1762432621395_create_access_tokens_table', 1, '2025-11-06 13:06:42'),
(3, 'database/migrations/1762434053907_create_mock_data_table', 1, '2025-11-06 13:06:42');

-- --------------------------------------------------------

--
-- Table structure for table `adonis_schema_versions`
--

CREATE TABLE `adonis_schema_versions` (
  `version` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `adonis_schema_versions`
--

INSERT INTO `adonis_schema_versions` (`version`) VALUES
(2);

-- --------------------------------------------------------

--
-- Table structure for table `auth_access_tokens`
--

CREATE TABLE `auth_access_tokens` (
  `id` int(10) UNSIGNED NOT NULL,
  `tokenable_id` int(10) UNSIGNED NOT NULL,
  `type` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `hash` varchar(255) NOT NULL,
  `abilities` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `mock_data`
--

CREATE TABLE `mock_data` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `value` double DEFAULT 0,
  `category` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mock_data`
--

INSERT INTO `mock_data` (`id`, `title`, `value`, `category`, `created_at`, `updated_at`) VALUES
(1, 'Monthly Revenue', 12500.5, 'finance', '2025-11-06 07:14:20', '2025-11-06 07:14:20'),
(2, 'User Registrations', 245, 'users', '2025-11-06 07:14:20', '2025-11-06 07:14:20'),
(3, 'Server Uptime', 99.8, 'infrastructure', '2025-11-06 07:14:20', '2025-11-06 07:14:20'),
(4, 'Pending Orders', 12, 'orders', '2025-11-06 07:14:20', '2025-11-06 07:14:20'),
(5, 'Completed Tasks', 89, 'productivity', '2025-11-06 07:14:20', '2025-11-06 07:14:20'),
(6, 'Customer Satisfaction', 94.5, 'feedback', '2025-11-06 07:14:20', '2025-11-06 07:14:20'),
(7, 'Active Sessions', 156, 'analytics', '2025-11-06 07:14:20', '2025-11-06 07:14:20'),
(8, 'API Response Time', 125.3, 'performance', '2025-11-06 07:14:20', '2025-11-06 07:14:20'),
(9, 'Database Queries', 2347, 'performance', '2025-11-06 07:14:20', '2025-11-06 07:14:20'),
(10, 'Storage Usage', 76.2, 'infrastructure', '2025-11-06 07:14:20', '2025-11-06 07:14:20');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `email` varchar(254) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `email`, `password`, `created_at`, `updated_at`) VALUES
(1, 'Test User', 'test@example.com', '$scrypt$n=16384,r=8,p=1$zVkWbG0+AKdSIaCZJtDLvg$pm87lizVYmYcC1QgWxHf/Y5aFhmtPXrj736uoO8f3Jq9+ZtXq69y5PLsjvoK36OR6325vtmycsnGgHCxvJNmrw', '2025-11-06 07:14:20', '2025-11-06 07:14:20'),
(2, 'Admin User', 'admin@example.com', '$scrypt$n=16384,r=8,p=1$FgYCG8hWQ0yZ0pdGzEfHaA$Ss32+oj2x+PHRSttNOrv9XMOjXTxafbQHHskCTYhE/o+rReP13zBoGe6HUuJ9H9vzf7wYHYlMwFDsm3nbamWBQ', '2025-11-06 07:14:20', '2025-11-06 07:14:20'),
(3, 'John Doe', 'john.doe@example.com', '$scrypt$n=16384,r=8,p=1$UTqzoviOK/eAbZRuo55x/A$968fzOW6EBJqHtmfSLtBfvNKfsF26CmgcMwWidJkz3+kuCmHG7hQr29TWXefQGH1rUo6y9sliVOHRkcqLMU7/w', '2025-11-06 07:14:20', '2025-11-06 07:14:20'),
(4, 'Jane Smith', 'jane.smith@example.com', '$scrypt$n=16384,r=8,p=1$VZnYDcL1b/ZHymDnErrxQg$e6jXfnxtdUSic+EaC6v/Ec9JRiSNkh0cPOwMdLOqXR/Wt7z16zaVShjlQ375K7YMqXzA0ZO+xJoKkrne2WwX+A', '2025-11-06 07:14:20', '2025-11-06 07:14:20'),
(5, 'Demo User', 'demo@example.com', '$scrypt$n=16384,r=8,p=1$paVGdYMwrtI+yCQoCdHwXw$Z5huIMi+kxyYVZqJmY+CMpwszU+fc1Ri4i75gSKrl0cbIYV2/fl3lry5K6KxhOEkEwRrMAJWhiRz86xdYoILeg', '2025-11-06 07:14:20', '2025-11-06 07:14:20'),
(6, 'Test User2', 'test2@example.com', '$scrypt$n=16384,r=8,p=1$/P3NuGe5D0/vSGd9+1sEeg$IZWatxozeYKUm5l83jgj83SGphQQPGzTNDZuZqDiG1gP2mCsp2J+R7J67emknRAoZMrVD0fM7igXgNhOyOBd+A', '2025-11-06 07:26:38', '2025-11-06 07:26:38'),
(7, 'Test User3', 'test3@example.com', '$scrypt$n=16384,r=8,p=1$NQtzSNsIGizZw+6iVIzt6A$ugnKzLCJ8Bcp30VVpksqBsZv/oDWaRgN6EHF+nnlbthkftBi3sTpSEXdoX5jVi5k2wVyKo7729exkMuU4FoTgQ', '2025-11-06 08:53:36', '2025-11-06 08:53:36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adonis_schema`
--
ALTER TABLE `adonis_schema`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `adonis_schema_versions`
--
ALTER TABLE `adonis_schema_versions`
  ADD PRIMARY KEY (`version`);

--
-- Indexes for table `auth_access_tokens`
--
ALTER TABLE `auth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `auth_access_tokens_tokenable_id_foreign` (`tokenable_id`);

--
-- Indexes for table `mock_data`
--
ALTER TABLE `mock_data`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adonis_schema`
--
ALTER TABLE `adonis_schema`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `auth_access_tokens`
--
ALTER TABLE `auth_access_tokens`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `mock_data`
--
ALTER TABLE `mock_data`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `auth_access_tokens`
--
ALTER TABLE `auth_access_tokens`
  ADD CONSTRAINT `auth_access_tokens_tokenable_id_foreign` FOREIGN KEY (`tokenable_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
