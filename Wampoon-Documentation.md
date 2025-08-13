# Wampoon - Portable Windows Development Environment

## Overview

Wampoon is a portable Windows development environment that bundles Apache, MariaDB (MySQL), PHP, and phpMyAdmin into a complete local web development stack. It provides developers with a ready-to-use LAMP-like environment (WAMP - Windows, Apache, MySQL, PHP) that requires no installation and can be run from any directory.

## Key Features

- **Portable**: No installation required - runs from any directory
- **Complete Stack**: Includes Apache HTTP Server, MariaDB database, PHP runtime, and phpMyAdmin
- **Web Dashboard**: Custom management interface for monitoring and configuration
- **Windows Optimized**: Specifically designed for Windows development environments
- **Service Management**: Integrated control application for managing all services

## Architecture & Components

### Core Services

#### 1. Apache HTTP Server
- **Version**: Latest stable Apache 2.4.x
- **Purpose**: Web server for hosting PHP applications

#### 2. MariaDB Database Server
- **Version**: Latest stable MariaDB
- **Purpose**: MySQL-compatible database server

#### 3. PHP Runtime
- **Version**: PHP 8.x
- **Purpose**: Server-side scripting language

#### 4. phpMyAdmin
- **Version**: Latest stable release
- **Purpose**: Web-based MySQL/MariaDB administration

#### 5. Wampoon Dashboard
- **Purpose**: Custom web-based control panel

## Directory Structure

```
Wampoon/
├── WampoonControl.exe            # Main control application
├── CLAUDE.md                     # Development guidelines
├── Docs/                         # Documentation directory
├── apps/                         # Core application stack
│   ├── apache/                   # Apache HTTP Server
│   ├── mariadb/                  # MariaDB Database Server
│   ├── php/                      # PHP Runtime Environment
│   ├── phpmyadmin/               # Database Administration Interface
│   └── wampoon-dashboard/        # Custom Control Panel
├── htdocs/                       # Web application root
└── wampoon-logs/                 # Centralized logging
```

## Configuration Files

### Apache Configuration
- **Main Config**: `Wampoon\apps\apache\conf\httpd.conf`
- **Virtual Hosts**: `Wampoon\apps\apache\conf\extra\wampoon-vhosts.conf`
- **SSL Settings**: `Wampoon\apps\apache\conf\extra\httpd-ssl.conf`
- **Custom Paths**: `Wampoon\apps\apache\conf\wampoon-custom-path.conf`

### MariaDB Configuration
- **Main Config**: `Wampoon\apps\mariadb\data\my.ini`
- **Data Directory**: `Wampoon\apps\mariadb\data\`
- **Plugin Directory**: `Wampoon\apps\mariadb\lib\plugin\`

### PHP Configuration
- **Main Config**: `Wampoon\apps\php\php.ini`
- **Extensions Directory**: `Wampoon\apps\php\ext\`
- **Session Storage**: `Wampoon\apps\php\sessions\`
- **Log Directory**: `Wampoon\apps\php\logs\`

### Dashboard Configuration
- **Main Config**: `Wampoon\apps\wampoon-dashboard\includes\config.php`
- **Version Info**: `Wampoon\apps\wampoon-dashboard\includes\versions.php`

## Service Management

### Starting Services
Services are managed through the main control application:
```
WampoonControl.exe
```

### Service Ports
- **Apache HTTP**: Port 80 (configurable)
- **Apache HTTPS**: Port 443 (if SSL enabled)
- **MariaDB**: Port 3306 (standard MySQL port)

### Log Files
- **Apache Access**: `apps/apache/logs/access.log`
- **Apache Error**: `apps/apache/logs/error.log`
- **MariaDB Error**: `apps/mariadb/data/[hostname].err`
- **PHP Error**: `apps/php/logs/php_errors.log`
- **Application Logs**: `wampoon-logs/`

## Development Workflow

### 1. Starting Development
1. Launch `WampoonControl.exe`
2. Start Apache and MariaDB services
3. Access dashboard at `http://localhost/`
4. Begin development in `htdocs/` directory

### 2. Project Structure
- Place web projects in `htdocs/` directory
- Each project can have its own subdirectory
- Configure virtual hosts for complex projects

### 3. Database Management
- Access phpMyAdmin at `http://localhost/phpmyadmin/`
- Create databases and users as needed
- Use standard MySQL connection parameters

### 4. PHP Development
- PHP files automatically processed by Apache
- Error logs available in `apps/php/logs/`
- Extensions can be enabled in `php.ini`

## Advanced Features

### Virtual Hosts
Configure additional domains in `wampoon-vhosts.conf`:
```apache
<VirtualHost *:80>
    DocumentRoot "C:/path/to/project"
    ServerName project.local
</VirtualHost>
```

### SSL Configuration
Enable HTTPS by configuring `httpd-ssl.conf` and generating certificates.

### Custom PHP Extensions
Add `.dll` files to `apps/php/ext/` and enable in `php.ini`.

### Database Optimization
Modify `my.ini` for performance tuning based on development needs.

## Troubleshooting

### Common Issues

1. **Port Conflicts**: Ensure ports 80 and 3306 are available
2. **Service Startup**: Check logs in respective `logs/` directories
3. **PHP Errors**: Review `php_errors.log` for script issues
4. **Database Connection**: Verify MariaDB service is running

### Log Locations
- Apache: `apps/apache/logs/`
- MariaDB: `apps/mariadb/data/`
- PHP: `apps/php/logs/`
- System: `wampoon-logs/`

## Version Management

All component versions are centrally managed in:
```
apps/wampoon-dashboard/includes/versions.php
```

This file contains version information for Apache, MariaDB, PHP, phpMyAdmin, and the Wampoon dashboard itself.

## Security Considerations

- **Development Only**: Not intended for production deployment
- **Local Access**: Services bound to localhost by default
- **Default Passwords**: Change default database passwords
- **File Permissions**: Ensure proper file system permissions

## Backup and Maintenance

### Database Backup
Use MariaDB tools for database backup:
```bash
apps/mariadb/bin/mariadb-dump.exe -u root -p database_name > backup.sql
```

### Configuration Backup
Original configurations are preserved in:
```
apps/apache/conf/original/
```

### Project Backup
Back up entire `htdocs/` directory for project preservation.

---

*This documentation covers the Wampoon portable development environment. For specific configuration details, refer to the individual component documentation and configuration files.*