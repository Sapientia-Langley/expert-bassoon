function FindProxyForURL(url, host) {
    var proxySites = [
        "whatismyipaddress.com",
        "chatgpt.com",
        "grok.com",
        "youtube.com",
        "googlevideo.com",
        "ytimg.com",
        "youtu.be",
        "ggpht.com",
        "googleapis.com",
        "googleusercontent.com",
        "gstatic.com",
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
        "discord.gg",
        "discordapp.net",
        "162.159.128.233",
        "162.159.138.232",
        "162.159.137.232",
        "162.159.135.232",
        "162.159.136.232",
        "x.ai",
        "microsoft.com",
        "proton.me",
        "digitalocean.com",
        "getoutline.org",
        "windscribe.com"
    ];
    for (var i = 0; i < proxySites.length; i++) {
        if (shExpMatch(host, "*" + proxySites[i])) {
            return "SOCKS5 127.0.0.1:1080";
        }
    }
    return "DIRECT";
}
