function FindProxyForURL(url, host) {
    var proxySites = [
        "chatgpt.com",
        "youtube.com",
        "googlevideo.com",
        "whatismyipaddress.com"
    ];
    for (var i = 0; i < proxySites.length; i++) {
        if (shExpMatch(host, "*" + proxySites[i])) {
            return "SOCKS5 127.0.0.1:1080";
        }
    }
    return "DIRECT";
}
