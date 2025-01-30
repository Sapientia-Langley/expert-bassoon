function FindProxyForURL(url, host) {
    var proxySites = [
        "whatismyipaddress.com",
        "chatgpt.com",
        "youtube.com",
        "googlevideo.com",
        "soundcloud.com",
        "lyrics-pesni.com",
        "rutracker.org",
        "rockstargames.com",
        "facebook.com",
        "fb.com",
        "messenger.com",
        "facebook.net",
        "instagram.com",
        "cdninstagram.com",
        "twitter.com",
        "t.co",
        "twimg.com",
        "x.com",
        "discord.com",
        "discordapp.com",
        "discord.gg"
    ];
    for (var i = 0; i < proxySites.length; i++) {
        if (shExpMatch(host, "*" + proxySites[i])) {
            return "SOCKS5 127.0.0.1:1080";
        }
    }
    return "DIRECT";
}
