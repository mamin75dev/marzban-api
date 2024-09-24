function body(user) {
    return {
        username: user.userName,
        proxies: {
            vless: {
                id: user.userId,
            }
        },
        inbounds: {
            vmess: [],
            vless: [
                "VLESS + TCP",
                "VLESS TCP Header NoTLS"
            ]
        },
        expire: null,
        data_limit: 5368709120,
        data_limit_reset_strategy: "no_reset",
        status: "on_hold",
        note: "",
        on_hold_timeout: null,
        on_hold_expire_duration: 604800
    };
}

export { body }