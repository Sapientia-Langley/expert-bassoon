function FindProxyForURL(url, host) {
    // Перенаправляем трафик для определенных сайтов через прокси
    if (shExpMatch(host, "*.youtube.com/") || shExpMatch(host, "*.whatismyipaddress.com/")) {
        return "SOCKS5 45.38.42.76:443"; // Порт должен совпадать с настройками Shadowsocks
    }
    // Все остальные запросы идут напрямую
    return "DIRECT";
}