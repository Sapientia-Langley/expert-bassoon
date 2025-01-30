function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.youtube.com/") || shExpMatch(host, "*.whatismyipaddress.com/")) {
        return "SOCKS5 45.38.42.76:443";
    }
    return "DIRECT";
}
