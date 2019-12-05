var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+KeepSolid VPN Unlimited", {
    "+KeepSolid VPN Unlimited": function(url, host, scheme) {
        "use strict";
        return "HTTPS us-sf.vpnunlimitedapp.com:3129";
    }
});
