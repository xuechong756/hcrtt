require = function o(n, l, c) {
    function r(e, t) {
        if (!l[e]) {
            if (!n[e]) {
                var i = "function" == typeof require && require;
                if (!t && i)
                    return i(e, !0);
                if (h)
                    return h(e, !0);
                var s = new Error("Cannot find module '" + e + "'");
                throw s.code = "MODULE_NOT_FOUND",
                s
            }
            var a = l[e] = {
                exports: {}
            };
            n[e][0].call(a.exports, function(t) {
                return r(n[e][1][t] || t)
            }, a, a.exports, o, n, l, c)
        }
        return l[e].exports
    }
    for (var h = "function" == typeof require && require, t = 0; t < c.length; t++)
        r(c[t]);
    return r
}({
    1: [function(t, e, i) {
        e.exports = {
            O_RDONLY: 0,
            O_WRONLY: 1,
            O_RDWR: 2,
            S_IFMT: 61440,
            S_IFREG: 32768,
            S_IFDIR: 16384,
            S_IFCHR: 8192,
            S_IFBLK: 24576,
            S_IFIFO: 4096,
            S_IFLNK: 40960,
            S_IFSOCK: 49152,
            O_CREAT: 512,
            O_EXCL: 2048,
            O_NOCTTY: 131072,
            O_TRUNC: 1024,
            O_APPEND: 8,
            O_DIRECTORY: 1048576,
            O_NOFOLLOW: 256,
            O_SYNC: 128,
            O_SYMLINK: 2097152,
            O_NONBLOCK: 4,
            S_IRWXU: 448,
            S_IRUSR: 256,
            S_IWUSR: 128,
            S_IXUSR: 64,
            S_IRWXG: 56,
            S_IRGRP: 32,
            S_IWGRP: 16,
            S_IXGRP: 8,
            S_IRWXO: 7,
            S_IROTH: 4,
            S_IWOTH: 2,
            S_IXOTH: 1,
            E2BIG: 7,
            EACCES: 13,
            EADDRINUSE: 48,
            EADDRNOTAVAIL: 49,
            EAFNOSUPPORT: 47,
            EAGAIN: 35,
            EALREADY: 37,
            EBADF: 9,
            EBADMSG: 94,
            EBUSY: 16,
            ECANCELED: 89,
            ECHILD: 10,
            ECONNABORTED: 53,
            ECONNREFUSED: 61,
            ECONNRESET: 54,
            EDEADLK: 11,
            EDESTADDRREQ: 39,
            EDOM: 33,
            EDQUOT: 69,
            EEXIST: 17,
            EFAULT: 14,
            EFBIG: 27,
            EHOSTUNREACH: 65,
            EIDRM: 90,
            EILSEQ: 92,
            EINPROGRESS: 36,
            EINTR: 4,
            EINVAL: 22,
            EIO: 5,
            EISCONN: 56,
            EISDIR: 21,
            ELOOP: 62,
            EMFILE: 24,
            EMLINK: 31,
            EMSGSIZE: 40,
            EMULTIHOP: 95,
            ENAMETOOLONG: 63,
            ENETDOWN: 50,
            ENETRESET: 52,
            ENETUNREACH: 51,
            ENFILE: 23,
            ENOBUFS: 55,
            ENODATA: 96,
            ENODEV: 19,
            ENOENT: 2,
            ENOEXEC: 8,
            ENOLCK: 77,
            ENOLINK: 97,
            ENOMEM: 12,
            ENOMSG: 91,
            ENOPROTOOPT: 42,
            ENOSPC: 28,
            ENOSR: 98,
            ENOSTR: 99,
            ENOSYS: 78,
            ENOTCONN: 57,
            ENOTDIR: 20,
            ENOTEMPTY: 66,
            ENOTSOCK: 38,
            ENOTSUP: 45,
            ENOTTY: 25,
            ENXIO: 6,
            EOPNOTSUPP: 102,
            EOVERFLOW: 84,
            EPERM: 1,
            EPIPE: 32,
            EPROTO: 100,
            EPROTONOSUPPORT: 43,
            EPROTOTYPE: 41,
            ERANGE: 34,
            EROFS: 30,
            ESPIPE: 29,
            ESRCH: 3,
            ESTALE: 70,
            ETIME: 101,
            ETIMEDOUT: 60,
            ETXTBSY: 26,
            EWOULDBLOCK: 35,
            EXDEV: 18,
            SIGHUP: 1,
            SIGINT: 2,
            SIGQUIT: 3,
            SIGILL: 4,
            SIGTRAP: 5,
            SIGABRT: 6,
            SIGIOT: 6,
            SIGBUS: 10,
            SIGFPE: 8,
            SIGKILL: 9,
            SIGUSR1: 30,
            SIGSEGV: 11,
            SIGUSR2: 31,
            SIGPIPE: 13,
            SIGALRM: 14,
            SIGTERM: 15,
            SIGCHLD: 20,
            SIGCONT: 19,
            SIGSTOP: 17,
            SIGTSTP: 18,
            SIGTTIN: 21,
            SIGTTOU: 22,
            SIGURG: 16,
            SIGXCPU: 24,
            SIGXFSZ: 25,
            SIGVTALRM: 26,
            SIGPROF: 27,
            SIGWINCH: 28,
            SIGIO: 23,
            SIGSYS: 12,
            SSL_OP_ALL: 2147486719,
            SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: 262144,
            SSL_OP_CIPHER_SERVER_PREFERENCE: 4194304,
            SSL_OP_CISCO_ANYCONNECT: 32768,
            SSL_OP_COOKIE_EXCHANGE: 8192,
            SSL_OP_CRYPTOPRO_TLSEXT_BUG: 2147483648,
            SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: 2048,
            SSL_OP_EPHEMERAL_RSA: 0,
            SSL_OP_LEGACY_SERVER_CONNECT: 4,
            SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: 32,
            SSL_OP_MICROSOFT_SESS_ID_BUG: 1,
            SSL_OP_MSIE_SSLV2_RSA_PADDING: 0,
            SSL_OP_NETSCAPE_CA_DN_BUG: 536870912,
            SSL_OP_NETSCAPE_CHALLENGE_BUG: 2,
            SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: 1073741824,
            SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: 8,
            SSL_OP_NO_COMPRESSION: 131072,
            SSL_OP_NO_QUERY_MTU: 4096,
            SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: 65536,
            SSL_OP_NO_SSLv2: 16777216,
            SSL_OP_NO_SSLv3: 33554432,
            SSL_OP_NO_TICKET: 16384,
            SSL_OP_NO_TLSv1: 67108864,
            SSL_OP_NO_TLSv1_1: 268435456,
            SSL_OP_NO_TLSv1_2: 134217728,
            SSL_OP_PKCS1_CHECK_1: 0,
            SSL_OP_PKCS1_CHECK_2: 0,
            SSL_OP_SINGLE_DH_USE: 1048576,
            SSL_OP_SINGLE_ECDH_USE: 524288,
            SSL_OP_SSLEAY_080_CLIENT_DH_BUG: 128,
            SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: 0,
            SSL_OP_TLS_BLOCK_PADDING_BUG: 512,
            SSL_OP_TLS_D5_BUG: 256,
            SSL_OP_TLS_ROLLBACK_BUG: 8388608,
            ENGINE_METHOD_DSA: 2,
            ENGINE_METHOD_DH: 4,
            ENGINE_METHOD_RAND: 8,
            ENGINE_METHOD_ECDH: 16,
            ENGINE_METHOD_ECDSA: 32,
            ENGINE_METHOD_CIPHERS: 64,
            ENGINE_METHOD_DIGESTS: 128,
            ENGINE_METHOD_STORE: 256,
            ENGINE_METHOD_PKEY_METHS: 512,
            ENGINE_METHOD_PKEY_ASN1_METHS: 1024,
            ENGINE_METHOD_ALL: 65535,
            ENGINE_METHOD_NONE: 0,
            DH_CHECK_P_NOT_SAFE_PRIME: 2,
            DH_CHECK_P_NOT_PRIME: 1,
            DH_UNABLE_TO_CHECK_GENERATOR: 4,
            DH_NOT_SUITABLE_GENERATOR: 8,
            NPN_ENABLED: 1,
            RSA_PKCS1_PADDING: 1,
            RSA_SSLV23_PADDING: 2,
            RSA_NO_PADDING: 3,
            RSA_PKCS1_OAEP_PADDING: 4,
            RSA_X931_PADDING: 5,
            RSA_PKCS1_PSS_PADDING: 6,
            POINT_CONVERSION_COMPRESSED: 2,
            POINT_CONVERSION_UNCOMPRESSED: 4,
            POINT_CONVERSION_HYBRID: 6,
            F_OK: 0,
            R_OK: 4,
            W_OK: 2,
            X_OK: 1,
            UV_UDP_REUSEADDR: 4
        }
    }
    , {}],
    GameApplication: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "9e389U3blpJ6KqjVmHPCn6O", "GameApplication");
        var s = t("../UI/GameView")
          , a = t("../GameLogic/SoundManager");
        cc.Class({
            extends: cc.Component,
            properties: {
                soundManager: {
                    default: null,
                    type: a
                },
                gameView: s,
                beginView: {
                    default: null,
                    type: cc.Node
                },
                modelView: {
                    default: null,
                    type: cc.Node
                },
                dollsView: {
                    default: null,
                    type: cc.Node
                },
                shareHeartView: {
                    default: null,
                    type: cc.Node
                },
                heartView: {
                    default: null,
                    type: cc.Node
                },
                diamondView: {
                    default: null,
                    type: cc.Node
                },
                overView: {
                    default: null,
                    type: cc.Node
                },
                reviveView: {
                    default: null,
                    type: cc.Node
                },
                fbFailView: {
                    default: null,
                    type: cc.Node
                },
                uiSpriteView: {
                    default: null,
                    type: cc.Node
                },
                isQuit: !1,
                timestamp: {
                    default: 0,
                    type: cc.Integer
                },
                manualDisconnect: !1
            },
            onLoad: function() {
                SDK().init(),
                this.soundManager.playBg(),
                (this.gameView.gameApplication = this).gameView.viewManager.showView(this.beginView, .3, !0, null)
            }
        }),
        cc._RF.pop()
    }
    , {
        "../GameLogic/SoundManager": "SoundManager",
        "../UI/GameView": "GameView"
    }],
    GameView: [function(t, e, i) {
        "use strict";
        var s;
        cc._RF.push(e, "ad1486Y64JPcJZ6gziQS7s4", "GameView");
        t("constants");
        function a(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i,
            t
        }
        var c = 130
          , r = 12
          , o = 300
          , n = 130
          , l = [0, 50, 150, 250, 800, 1e3]
          , h = 0
          , u = t("../GameLogic/ViewManager")
          , p = t("../UI/SpriteAnimation")
          , d = [0, 200, 300, 400, 500, 600]
          , m = 100
          , f = ["Speed Up!", "Go Go Go ~", "Hurry Jump!!", "Perfect!", "Nice~", "Well Done!!", "Good Job!~", "WOW!!!"];
        cc.Class({
            extends: cc.Component,
            properties: (s = {
                gameApplication: null,
                viewManager: u,
                unLockProgress: {
                    default: null,
                    type: cc.ProgressBar
                },
                reviveTime: {
                    default: null,
                    type: cc.Label
                },
                yellowLable: {
                    default: null,
                    type: cc.Label
                },
                bg0: {
                    default: null,
                    type: cc.Sprite
                },
                bg1: {
                    default: null,
                    type: cc.Sprite
                },
                bg2: {
                    default: null,
                    type: cc.Sprite
                },
                muteBtn: {
                    default: null,
                    type: cc.Sprite
                },
                dollsName: {
                    default: null,
                    type: cc.Sprite
                },
                dollsMain: {
                    default: null,
                    type: cc.Node
                },
                myDoll: {
                    default: null,
                    type: cc.Node
                },
                myDollAnim: {
                    default: null,
                    type: p
                },
                floor: {
                    default: null,
                    type: cc.Node
                },
                curFloorBottom: {
                    default: null,
                    type: cc.Node,
                    visible: !1
                },
                rewardNodes: {
                    default: null,
                    type: cc.Node,
                    visible: !1
                },
                myUnLockModel: {
                    default: 0,
                    type: cc.Integer,
                    visible: !1
                },
                bgStatus: {
                    default: 0,
                    type: cc.Integer,
                    visible: !1
                },
                gameModel: {
                    default: 0,
                    type: cc.Integer,
                    visible: !1
                },
                myStatus: {
                    default: 0,
                    type: cc.Integer,
                    visible: !1
                },
                status: {
                    default: 0,
                    type: cc.Integer,
                    visible: !1
                },
                myCell: {
                    default: 0,
                    type: cc.Integer,
                    visible: !1
                },
                myDollIdx: {
                    default: 0,
                    type: cc.Integer,
                    visible: !1
                },
                shopDollIdx: {
                    default: 0,
                    type: cc.Integer,
                    visible: !1
                },
                showBuyCount: {
                    default: 0,
                    type: cc.Float,
                    visible: !1
                },
                curWidth: {
                    default: 500,
                    type: cc.Float,
                    visible: !1
                },
                isRevived: {
                    default: !1,
                    visible: !1
                },
                isReviveCount: {
                    default: !1,
                    visible: !1
                },
                lastPosY: {
                    default: 9,
                    type: cc.Float,
                    visible: !1
                },
                isBack: {
                    default: !1,
                    visible: !1
                },
                playerDetail: {
                    default: [],
                    visible: !1
                },
                topBars: {
                    default: [],
                    type: [cc.Node]
                },
                topNums: {
                    default: [],
                    type: [cc.Label]
                },
                fbFailTitel: {
                    default: [],
                    type: [cc.Node]
                },
                dollsPick: {
                    default: [],
                    type: [cc.Node]
                },
                dollsBtns: {
                    default: [],
                    type: [cc.Node]
                },
                overNums: {
                    default: [],
                    type: [cc.Label]
                },
                doubleUpStyleBtn: {
                    default: [],
                    type: [cc.Node]
                },
                rewardDoubleObj: {
                    default: [],
                    type: [cc.Node],
                    visible: !1
                },
                unLockSprite: {
                    default: [],
                    type: [cc.Node]
                },
                LockSprite: {
                    default: [],
                    type: [cc.Node]
                },
                floorNodes: {
                    default: [],
                    visible: !1
                },
                vidioBtn: {
                    default: [],
                    type: [cc.Node]
                },
                mapLimit: {
                    default: [],
                    type: [cc.Integer]
                },
                floorFrame: {
                    default: null,
                    type: cc.SpriteFrame
                },
                callBack: {
                    default: null,
                    visible: !1
                },
                beginAtlas: {
                    default: null,
                    type: cc.SpriteAtlas
                },
                dollsAtlas: {
                    default: null,
                    type: cc.SpriteAtlas
                },
                gameAtlas: {
                    default: null,
                    type: cc.SpriteAtlas
                },
                commonAtlas: {
                    default: null,
                    type: cc.SpriteAtlas
                }
            },
            a(s, "gameAtlas", {
                default: null,
                type: cc.SpriteAtlas
            }),
            a(s, "floor_prefab", {
                default: null,
                type: cc.Prefab
            }),
            a(s, "_playTimes", {
                default: 0,
                type: cc.Integer
            }),
            a(s, "playTimes", {
                get: function() {
                    return this._playTimes
                },
                set: function(t) {
                    this._playTimes = t,
                    (this._playTimes % SDK().getInterstitialCount() == 0 && this._playTimes >= SDK().getInterstitialCount() || SDK().getInterstitialCount() <= 1) && (console.log("播放插屏广告"),
                    SDK().showInterstitialAd(function(t) {
                        console.log("播放Done")
                    }))
                }
            }),
            s),
            onLoad: function() {
				
                this.shopDollIdx = 0;
                for (var t = this.myDollIdx = 0; t < 8; t += 1)
                    switch (t) {
                    case 0:
                    case 1:
                    case 2:
                        SDK().getItem(t, function(t, e) {
                            this.playerDetail[e] = parseInt(t),
                            this.topNums[e].string = parseInt(t)
                        }
                        .bind(this));
                        break;
                    case 3:
                        SDK().getItem(t, function(t, e) {
                            t = 0 == t || null == t ? "200001" : "" + t,
                            this.playerDetail[e] = [];
                            for (var i = 0; i < this.dollsPick.length; i += 1)
                                this.playerDetail[e][i] = isNaN(parseInt(t.charAt(i))) ? 0 : parseInt(t.charAt(i)),
                                0 == this.playerDetail[e][i] ? (i <= m && (m = i),
                                this.dollsPick[i].color = cc.color(0, 0, 0, 255)) : this.dollsPick[i].color = cc.color(255, 255, 255, 255),
                                0 == i && (this.dollsPick[i].color = cc.color(255, 255, 255, 255),
                                this.playerDetail[e][i] = 2)
                        }
                        .bind(this));
                        break;
                    case 4:
                        SDK().getItem(t, function(t, e) {
                            this.myUnLockModel = parseInt(t),
                            0 == this.myUnLockModel ? (this.unLockSprite[0].active = !1,
                            this.unLockSprite[1].active = !1,
                            this.LockSprite[0].active = !0,
                            this.LockSprite[1].active = !0) : 1 == this.myUnLockModel && (this.unLockSprite[0].active = !0,
                            this.unLockSprite[1].active = !0,
                            this.LockSprite[0].active = !1,
                            this.LockSprite[1].active = !1)
                        }
                        .bind(this));
                        break;
                    case 5:
                        SDK().getItem(t, function(t, e) {
                            this.playerDetail[e] = parseInt(t)
                        }
                        .bind(this));
                        break;
                    case 7:
                        SDK().getItem(t, function(t, e) {
                            0 != t && null != t || (this.playerDetail[0] = this.playerDetail[0] + 15,
                            this.topNums[0].string = this.playerDetail[0],
                            SDK().setItem({
                                0: this.playerDetail[0]
                            }),
                            SDK().setItem({
                                7: 1
                            }))
                        }
                        .bind(this))
                    }
                this.node.on(cc.Node.EventType.TOUCH_START, function(t) {
                    this.onMouseDown(t)
                }, this),
                this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
                    this.onMouseMove(t)
                }, this),
                this.node.on(cc.Node.EventType.TOUCH_END, function(t) {
                    this.onMouseUp(t)
                }, this),
                this.node.on(cc.Node.EventType.TOUCH_CANCEL, function(t) {
                    this.onMouseUp(t)
                }, this)
				
				//修改。适应屏幕
				var overView = cc.find("Canvas/OverView");
				overView.removeComponent(cc.Widget);	
            },
            onMouseDown: function(t) {
                this.isTouching = !0,
                this.clickTime = 0,
                this.touchPos = t.getLocation(),
                350 < this.touchPos.y && this.touchPos.y < 850 && (this.isSelect = !0)
            },
            onMouseMove: function(t) {
                if (this.isTouching && this.gameApplication.dollsView.active && this.isSelect) {
                    var e = t.currentTouch._point.x - this.touchPos.x;
                    this.dollsMain.x = this.dollsMain.x + e,
                    this.touchPos = t.getLocation();
                    for (var i = 0; i < this.dollsPick.length; i += 1) {
                        var s = this.dollsPick[i].x - Math.abs(this.dollsMain.x);
                        this.dollsPick[i].scale = s <= 300 && 0 <= s ? cc.v2(.8 + .2 * (300 - s) / 300, .8 + .2 * (300 - s) / 300) : cc.v2(.8, .8)
                    }
                }
            },
            onMouseUp: function(t) {
                this.isTouching = !1,
                this.gameApplication.dollsView.active && this.dTypeChange(),
                this.clickTime < .5 && 1 == this.status && this.JumpAction(this.myDoll)
            },
            dTypeChange: function() {
                var t = -(this.dollsMain.x + 1) / 300
                  , e = -(this.dollsMain.x + 1) % 300
                  , i = Math.ceil(t) + (150 < e ? 0 : -1);
                switch (0 <= this.dollsMain.x ? i = this.dollsMain.x = 0 : this.dollsMain.x < -300 * (this.dollsPick.length - 1) ? (this.dollsMain.x = -300 * (this.dollsPick.length - 1),
                i = this.dollsPick.length - 1) : this.dollsMain.x = -300 * i,
                this.shopDollIdx = i,
                this.playerDetail[3][i]) {
                case 0:
                    this.dollsBtns[0].active = !0,
                    this.dollsBtns[1].active = !1,
                    this.dollsBtns[2].active = !1,
                    this.dollsBtns[4].active = !1,
                    this.dollsName.spriteFrame = this.beginAtlas.getSpriteFrame("lockName");
                    break;
                case 1:
                    this.dollsBtns[0].active = !1,
                    5 == i ? (this.dollsBtns[1].active = !1,
                    this.dollsBtns[4].active = !0) : (this.dollsBtns[1].active = !0,
                    this.dollsBtns[4].active = !1),
                    this.dollsBtns[2].active = !1,
                    this.dollsBtns[3].getComponent(cc.Label).string = l[i],
                    this.dollsName.spriteFrame = this.beginAtlas.getSpriteFrame(this.shopDollIdx + "Name");
                    break;
                case 2:
                    this.dollsBtns[0].active = !1,
                    this.dollsBtns[1].active = !1,
                    this.dollsBtns[2].active = !0,
                    this.dollsBtns[4].active = !1,
                    this.dollsName.spriteFrame = this.beginAtlas.getSpriteFrame(this.shopDollIdx + "Name")
                }
                for (var s = 0; s < this.dollsPick.length; s += 1) {
                    var a = this.dollsPick[s].x - Math.abs(this.dollsMain.x);
                    this.dollsPick[s].scale = a <= 300 && 0 <= a ? cc.v2(1 + .2 * (300 - a) / 300, 1 + .2 * (300 - a) / 300) : cc.v2(.8, .8)
                }
                this.isSelect = !1
            },
            useDType: function() {
                this.myDollIdx != this.shopDollIdx && (this.myDollIdx = this.shopDollIdx)
            },
            touchGuide: function(t) {
                var e = this;
                if (t) {
                    this.guideFinger.node.active = !0;
                    var i = cc.callFunc(function() {
                        e.guideFinger.spriteFrame = e.spriteAtlas.getSpriteFrame("finger_1")
                    }, this)
                      , s = cc.callFunc(function() {
                        e.guideFinger.spriteFrame = e.spriteAtlas.getSpriteFrame("finger_3")
                    }, this)
                      , a = cc.callFunc(function() {
                        e.guideFinger.spriteFrame = e.spriteAtlas.getSpriteFrame("finger_2")
                    }, this);
                    this.guideFinger.node.runAction(cc.repeatForever(cc.sequence(i, cc.delayTime(.2), s, cc.delayTime(.2), i, cc.delayTime(.2), a, cc.delayTime(.2))))
                } else
                    this.guideFinger.node.active = !1,
                    this.guideFinger.node.stopAllActions()
            },
            menuClick: function(t, e) {
				//修改
				//console.log(t.target);
                if (!this.isChangingView)
                    if (this.moveProgress = !1,
                    "Buy" == e)
                        if (this.playerDetail[2] >= l[this.shopDollIdx]) {
                            this.playerDetail[2] = this.playerDetail[2] - l[this.shopDollIdx],
                            this.topNums[2].string = this.playerDetail[2],
                            SDK().setItem({
                                2: this.playerDetail[2]
                            }, null),
                            this.playerDetail[3][this.shopDollIdx] = 2;
                            for (var i = "", s = 0; s < this.dollsPick.length; s += 1)
                                i += this.playerDetail[3][s];
                            SDK().setItem({
                                3: parseInt(i)
                            }),
                            this.dollsBtns[1].active = !1,
                            this.dollsBtns[2].active = !0,
                            this.useDType()
                        } else
                            this.viewManager.showView(this.gameApplication.diamondView, .3, !0, !1);
                    else if ("Go" == e)
                        this.useDType(),
                        this.topBars[0].active = !0,
                        this.topBars[1].active = !0,
                        this.status = 10,
                        this.viewManager.showView(this.gameApplication.modelView, .3, !0);
                    else if ("ShareGet" == e)
                        SDK().share(this.topNums[1].string, function(t) {
                            if (t) {
                                this.playerDetail[3][5] = 2;
                                for (var e = "", i = 0; i < this.dollsPick.length; i += 1)
                                    e += this.playerDetail[3][i];
                                SDK().setItem({
                                    3: parseInt(e)
                                }),
                                this.dollsBtns[4].active = !1,
                                this.dollsBtns[2].active = !0
                            } else
                                this.fbFail(2)
                        }
                        .bind(this));
                    else if ("GetDiamond" == e)
                        SDK().showVideoAd(function(t) {
                            null == t ? console.log("没有观看成功") : t ? (null == this.rewardDoubleObj[1] && (this.rewardDoubleObj[1] = cc.instantiate(this.floor_prefab),
                            this.rewardDoubleObj[1].parent = this.gameApplication.uiSpriteView,
                            this.rewardDoubleObj[1].getComponent(cc.Sprite).spriteFrame = this.commonAtlas.getSpriteFrame("redDiamond"),
                            this.rewardDoubleObj[1].active = !1),
                            this.rewardDoubleObj[1].active = !0,
                            this.rewardDoubleObj[1].position = cc.v2(0, 0),
                            this.rewardDoubleObj[1].runAction(cc.sequence(cc.scaleTo(.5, 2), cc.scaleTo(.5, 0))),
                            this.rewardDoubleObj[1].runAction(cc.sequence(cc.delayTime(.5), cc.moveTo(.5, this.topBars[2].position), cc.callFunc(function() {
                                this.gameApplication.soundManager.playSound("reward"),
                                this.playerDetail[2] = this.playerDetail[2] + 20,
                                this.topNums[2].string = this.playerDetail[2],
                                SDK().setItem({
                                    2: this.playerDetail[2]
                                }, null)
                            }
                            .bind(this), this))),
                            this.viewManager.showView(this.gameApplication.diamondView, .3, !1, !1)) : this.fbFail(1)
                        }
                        .bind(this));
                    else if ("NoGetDaimond" == e)
                        this.viewManager.showView(this.gameApplication.diamondView, .3, !1, !1);
                    else if ("Revive" == e)
                        SDK().showVideoAd(function(t) {
                            null == t ? console.log("没有观看成功") : t ? (this.isReviveCount = !1,
                            this.isRevived = !0,
                            null != this.safeBottom && (this.lastPosY = this.safeBottom.y + 9,
                            this.floor.runAction(cc.sequence(cc.moveBy(.5, cc.v2(0, this.deadPosY - this.lastPosY)), cc.callFunc(function() {
                                this.starGame(3)
                            }
                            .bind(this), this)))),
                            this.starGame(3),
                            this.viewManager.showView(this.gameApplication.reviveView, .3, !1),
                            this.myDoll.stopAllActions(),
                            this.myDoll.position = cc.v2(0, this.lastPosY)) : this.fbFail(1)
                        }
                        .bind(this));
                    else if ("NoRevive" == e)
                        this.isReviveCount = !1,
                        this.initOverData(),
                        this.viewManager.showView(this.gameApplication.overView, .3, !0, !0, 1.5),
                        this.playTimes++;
                    else if ("NormalGo" == e)
                        10 == this.status && (1 <= this.playerDetail[0] ? this.starGame(1) : SDK().hasVideoAd() ? this.viewManager.showView(this.gameApplication.heartView, .3, !0, !1) : this.viewManager.showView(this.gameApplication.shareHeartView, .3, !0, !1));
                    else if ("FlashGo" == e) {
                        if (10 == this.status) {
                            if (0 == this.myUnLockModel)
                                return void SDK().showVideoAd(function(t) {
                                    null == t ? console.log("没有观看成功") : t ? (this.myUnLockModel = 1,
                                    SDK().setItem({
                                        4: 1
                                    }, null),
                                    this.unLockSprite[0].active = !0,
                                    this.unLockSprite[1].active = !0,
                                    this.LockSprite[0].active = !1,
                                    this.LockSprite[1].active = !1) : this.fbFail(1)
                                }
                                .bind(this));
                            1 <= this.playerDetail[0] ? this.starGame(2) : SDK().hasVideoAd() ? this.viewManager.showView(this.gameApplication.heartView, .3, !0, !1) : this.viewManager.showView(this.gameApplication.shareHeartView, .3, !0, !1)
                        }
                    } else if ("GetShareHeart" == e)
                        SDK().share(this.topNums[1].string, function(t) {
                            t ? (null == this.rewardDoubleObj[0] && (this.rewardDoubleObj[0] = cc.instantiate(this.floor_prefab),
                            this.rewardDoubleObj[0].parent = this.gameApplication.uiSpriteView,
                            this.rewardDoubleObj[0].getComponent(cc.Sprite).spriteFrame = this.commonAtlas.getSpriteFrame("redHeart"),
                            this.rewardDoubleObj[0].active = !1),
                            this.rewardDoubleObj[0].active = !0,
                            this.rewardDoubleObj[0].position = cc.v2(0, 0),
                            this.rewardDoubleObj[0].runAction(cc.sequence(cc.scaleTo(.5, 2), cc.scaleTo(.5, 0))),
                            this.rewardDoubleObj[0].runAction(cc.sequence(cc.delayTime(.5), cc.moveTo(.5, this.topBars[0].position), cc.callFunc(function() {
                                this.gameApplication.soundManager.playSound("reward"),
                                this.playerDetail[0] = this.playerDetail[0] + 15,
                                this.topNums[0].string = this.playerDetail[0],
                                SDK().setItem({
                                    0: this.playerDetail[0]
                                }, null)
                            }
                            .bind(this), this))),
                            this.viewManager.showView(this.gameApplication.shareHeartView, .3, !1)) : this.fbFail(2)
                        }
                        .bind(this));
                    else if ("NoGetShareHeart" == e)
                        this.viewManager.showView(this.gameApplication.shareHeartView, .3, !1);
                    else if ("GetHeart" == e)
                        SDK().showVideoAd(function(t) {
                            null == t ? console.log("没有观看成功") : t ? (null == this.rewardDoubleObj[0] && (this.rewardDoubleObj[0] = cc.instantiate(this.floor_prefab),
                            this.rewardDoubleObj[0].parent = this.gameApplication.uiSpriteView,
                            this.rewardDoubleObj[0].getComponent(cc.Sprite).spriteFrame = this.commonAtlas.getSpriteFrame("redHeart"),
                            this.rewardDoubleObj[0].active = !1),
                            this.rewardDoubleObj[0].active = !0,
                            this.rewardDoubleObj[0].position = cc.v2(0, 0),
                            this.rewardDoubleObj[0].runAction(cc.sequence(cc.scaleTo(.5, 2), cc.scaleTo(.5, 0))),
                            this.rewardDoubleObj[0].runAction(cc.sequence(cc.delayTime(.5), cc.moveTo(.5, this.topBars[0].position), cc.callFunc(function() {
                                this.gameApplication.soundManager.playSound("reward"),
                                this.playerDetail[0] = this.playerDetail[0] + 15,
                                this.topNums[0].string = this.playerDetail[0],
                                SDK().setItem({
                                    0: this.playerDetail[0]
                                }, null)
                            }
                            .bind(this), this))),
                            this.viewManager.showView(this.gameApplication.heartView, .3, !1)) : this.fbFail(1)
                        }
                        .bind(this));
                    else if ("NoGetHeart" == e)
                        this.viewManager.showView(this.gameApplication.heartView, .3, !1);
                    else if ("BuyDiamond" == e)
                        this.viewManager.showView(this.gameApplication.diamondView, .3, !0, !1);
                    else if ("BuyHeart" == e) {
                        if (1 == this.status)
                            return;
                        SDK().hasVideoAd() ? this.viewManager.showView(this.gameApplication.heartView, .3, !0, !1) : this.viewManager.showView(this.gameApplication.shareHeartView, .3, !0, !1)
                    } else if ("Role" == e)
                        this.topBars[0].active = !1,
                        this.topBars[1].active = !1,
                        this.viewManager.showView(this.gameApplication.dollsView, .3, !0),
                        this.dTypeChange();
                    else if ("Begin" == e)
                        this.viewManager.showView(this.gameApplication.modelView, .3, !0);
                    else if ("Mute" == e) {
                        var a = this.beginAtlas.getSpriteFrame("musicOn")
                          , o = this.beginAtlas.getSpriteFrame("musicOff");
                        this.muteBtn.spriteFrame == o ? (this.gameApplication.soundManager.setIsOpen(!0),
                        this.muteBtn.spriteFrame = a) : this.muteBtn.spriteFrame == a && (this.gameApplication.soundManager.setIsOpen(!1),
                        this.muteBtn.spriteFrame = o)
                    } else
                        "Replay" == e ? 1 <= this.playerDetail[0] ? this.replayGame(this.gameModel) : SDK().hasVideoAd() ? this.viewManager.showView(this.gameApplication.heartView, .3, !0, !1) : this.viewManager.showView(this.gameApplication.shareHeartView, .3, !0, !1) : "BackHome" == e ? (this.LoadGame(),
                        this.topBars[0].active = !0,
                        this.topBars[1].active = !0,
                        this.viewManager.showView(this.gameApplication.beginView, .3, !0)) : "DoubleUpVideo" == e ? SDK().showVideoAd(function(t) {
                            null == t ? console.log("没有观看成功") : t ? this.DoubleUpAnim() : this.fbFail(1)
                        }
                        .bind(this)) : "DoubleUpShare" == e ? SDK().share(this.topNums[1].string, function(t) {
                            t ? this.DoubleUpAnim() : this.fbFail(2)
                        }
                        .bind(this)) : "CloseCurView" == e && this.viewManager.CloseCurView()
            },
            fbFail: function(t) {
                1 == t ? (this.fbFailTitel[0].active = !0,
                this.fbFailTitel[1].active = !1) : (this.fbFailTitel[0].active = !1,
                this.fbFailTitel[1].active = !0),
                this.viewManager.showView(this.gameApplication.fbFailView, .3, !0, !1)
            },
            DoubleUpAnim: function() {
                null != this.rewardDoubleObj[0] && null != this.rewardDoubleObj[1] || (0 < this.playerDetail[6] && (this.rewardDoubleObj[0] = cc.instantiate(this.floor_prefab),
                this.rewardDoubleObj[0].parent = this.gameApplication.overView,
                this.rewardDoubleObj[0].getComponent(cc.Sprite).spriteFrame = this.commonAtlas.getSpriteFrame("redHeart"),
                this.rewardDoubleObj[0].active = !1),
                0 < this.playerDetail[7] && (this.rewardDoubleObj[1] = cc.instantiate(this.floor_prefab),
                this.rewardDoubleObj[1].parent = this.gameApplication.overView,
                this.rewardDoubleObj[1].getComponent(cc.Sprite).spriteFrame = this.commonAtlas.getSpriteFrame("redDiamond"),
                this.rewardDoubleObj[1].active = !1)),
                this.vidioBtn[3].getComponent(cc.Button).interactable = !1,
                this.vidioBtn[4].getComponent(cc.Button).interactable = !1,
                this.gameApplication.soundManager.playSound("reward"),
                0 < this.playerDetail[6] && (this.rewardDoubleObj[0].active = !0,
                this.rewardDoubleObj[0].position = cc.v2(-200, -200),
                this.rewardDoubleObj[0].runAction(cc.sequence(cc.scaleTo(.5, 2), cc.scaleTo(.5, 0), cc.callFunc(function() {
                    this.rewardDoubleObj[0].active = !1,
                    this.playerDetail[0] = this.playerDetail[0] + this.playerDetail[6],
                    this.topNums[0].string = this.playerDetail[0],
                    SDK().setItem({
                        0: this.playerDetail[0]
                    }, null)
                }
                .bind(this), this))),
                this.rewardDoubleObj[0].runAction(cc.sequence(cc.delayTime(.5), cc.moveTo(.5, this.topBars[0].position)))),
                0 < this.playerDetail[7] && (this.rewardDoubleObj[1].active = !0,
                this.rewardDoubleObj[1].position = cc.v2(200, -200),
                this.rewardDoubleObj[1].runAction(cc.sequence(cc.scaleTo(.5, 2), cc.scaleTo(.5, 0), cc.callFunc(function() {
                    this.rewardDoubleObj[1].active = !1,
                    this.playerDetail[2] = this.playerDetail[2] + this.playerDetail[7],
                    this.topNums[2].string = this.playerDetail[2],
                    SDK().setItem({
                        2: this.playerDetail[2]
                    }, null)
                }
                .bind(this), this))),
                this.rewardDoubleObj[1].runAction(cc.sequence(cc.delayTime(.5), cc.moveTo(.5, this.topBars[2].position))))
            },
            LoadGame: function() {
                this.myDollAnim.reSet(),
                this.status = 10,
                this.myStatus = 0,
                this.isRevived = !1,
                this.gameModel = 0,
                this.curWidth = 500,
                this.topNums[3].string = 0,
                this.topNums[3].node.active = !1,
                this.bgColorChange(0),
                h = r = 0,
                n = 130,
                o = 300,
                this.mapLimit[0] = 0;
                for (var t = this.mapLimit[1] = 0; t < 21; t += 1)
                    this.roadPainting(t);
                this.myDoll.y = 9,
                this.lastPosY = 9,
                this.myDoll.position = cc.v2(0, this.lastPosY),
                this.floor.y = this.lastPosY - 9,
                this.playerDetail[6] = 0,
                this.playerDetail[7] = 0,
                this.myDoll.active = !0
            },
            starGame: function(t) {
                if (3 != t) {
                    var e;
                    if (this.gameModel = t,
                    this.gameApplication.modelView.active ? (e = 1 == t ? this.doubleUpStyleBtn[5].position : this.doubleUpStyleBtn[6].position,
                    this.doubleUpStyleBtn[5].getComponent(cc.Button).interactable = !1,
                    this.doubleUpStyleBtn[6].getComponent(cc.Button).interactable = !1) : this.gameApplication.overView.active && (e = cc.v2(190, -300),
                    this.doubleUpStyleBtn[4].getComponent(cc.Button).interactable = !1),
                    null == this.rewardDoubleObj[2])
                        this.rewardDoubleObj[2] = cc.instantiate(this.floor_prefab),
                        this.rewardDoubleObj[2].getComponent(cc.Sprite).spriteFrame = this.commonAtlas.getSpriteFrame("redHeart"),
                        this.rewardDoubleObj[2].parent = this.gameApplication.uiSpriteView;
                    this.rewardDoubleObj[2].position = this.topBars[0].position,
                    this.rewardDoubleObj[2].scale = 1,
                    this.rewardDoubleObj[2].active = !0,
                    this.rewardDoubleObj[2].runAction(cc.sequence(cc.scaleTo(.1, 1.2), cc.scaleTo(.3, .2))),
                    this.rewardDoubleObj[2].runAction(cc.sequence(cc.delayTime(.1), cc.moveTo(.3, e), cc.callFunc(function() {
                        if (this.rewardDoubleObj[2].active = !1,
                        this.gameApplication.modelView.active ? this.viewManager.showView(this.gameApplication.modelView, .3, !1) : this.gameApplication.overView.active && this.viewManager.showView(this.gameApplication.overView, .3, !1),
                        1 == this.gameModel) {
                            if (!(1 <= this.playerDetail[0]))
                                return void (SDK().hasVideoAd() ? this.viewManager.showView(this.gameApplication.heartView, .3, !0, !1) : this.viewManager.showView(this.gameApplication.shareHeartView, .3, !0, !1));
                            this.playerDetail[0] = this.playerDetail[0] - 1
                        } else if (2 == this.gameModel) {
                            if (!(1 <= this.playerDetail[0]))
                                return void (SDK().hasVideoAd() ? this.viewManager.showView(this.gameApplication.heartView, .3, !0, !1) : this.viewManager.showView(this.gameApplication.shareHeartView, .3, !0, !1));
                            this.playerDetail[0] = this.playerDetail[0] - 1
                        }
                        this.topNums[0].string = this.playerDetail[0],
                        this.topNums[3].node.active = !0,
                        SDK().setItem({
                            0: this.playerDetail[0]
                        }, null),
                        this.status = 1,
                        this.myStatus = 1,
                        this.myDollAnim.playRun(this.myDollIdx, null),
                        this.myDoll.rotation = 0
                    }
                    .bind(this), this)))
                } else
                    this.topNums[0].string = this.playerDetail[0],
                    this.topNums[3].node.active = !0,
                    SDK().setItem({
                        0: this.playerDetail[0]
                    }, null),
                    this.status = 1,
                    this.myStatus = 1,
                    this.myDollAnim.playRun(this.myDollIdx, null),
                    this.myDoll.rotation = 0
            },
            deadAnim: function() {
                this.deadPosY = this.myDoll.y,
                this.topNums[3].node.active = !1;
                var t = parseInt(this.topNums[3].string) + 1;
                parseInt(this.topNums[1].string) <= t && SDK().setItem({
                    1: t
                }),
                SDK().setItem({
                    5: this.playerDetail[5]
                }),
                1 != this.myDollIdx ? this.gameApplication.soundManager.playSound("dead") : this.gameApplication.soundManager.playSound("girlDead"),
                this.myDoll.runAction(cc.moveBy(1, cc.v2(50 * this.myDoll.scaleX, 0))),
                this.myDollAnim.playDead(this.myDollIdx, null),
                this.isRevived ? (this.initOverData(),
                this.viewManager.showView(this.gameApplication.overView, .3, !0, !0, 1.5)) : (this.reviveTime.string = "05",
                this.reviveTimeVal = 5.1,
                this.viewManager.showView(this.gameApplication.reviveView, .3, !0, !0, 0, function() {
                    this.isReviveCount = !0
                }
                .bind(this)))
            },
            initOverData: function() {
                cc.random0To1() < .5 ? (this.doubleUpStyleBtn[0].active = !0,
                this.doubleUpStyleBtn[1].active = !1) : (this.doubleUpStyleBtn[0].active = !1,
                this.doubleUpStyleBtn[1].active = !0),
                this.moveProgress = !0,
                this.gameApplication.soundManager.playSound("progress"),
                this.countVal = 0,
                this.overNums[0].string = this.topNums[3].string,
                this.overNums[1].string = this.topNums[1].string,
                this.overNums[2].string = Math.ceil((this.myCell - 10) / 20),
                this.overNums[3].string = d[m],
                this.overNums[4].string = "/" + this.playerDetail[6],
                this.overNums[5].string = "/" + this.playerDetail[7]
            },
            replayGame: function(t) {
                this.LoadGame(),
                this.starGame(t)
            },
            CollisionEnter: function(t, e) {
                if (-11 != e.tag || 100 != t.tag && 110 != t.tag || (e.tag = 1),
                3 != this.myStatus && 0 != this.myStatus) {
                    if (1 == e.tag) {
                        if (11 == t.tag || 21 == t.tag) {
                            if (this.myDoll.scaleX < 0 && 21 == t.tag || 0 < this.myDoll.scaleX && 11 == t.tag)
                                return;
                            this.myDoll.scaleX = -this.myDoll.scaleX,
                            this.myDoll.x = this.myDoll.x + (this.myDoll.scaleX < 0 ? -10 : 10)
                        }
                        100 != t.tag && 110 != t.tag || 110 == t.tag && (this.safeBottom = t.node)
                    }
                    if (2 == e.tag) {
                        if (11 == t.tag || 21 == t.tag) {
                            if (this.myDoll.scaleX < 0 && 21 == t.tag || 0 < this.myDoll.scaleX && 11 == t.tag)
                                return;
                            this.myDoll.scaleX = -this.myDoll.scaleX,
                            this.myDoll.x = this.myDoll.x + (this.myDoll.scaleX < 0 ? -10 : 10),
                            this.myDoll.stopAllActions(),
                            this.myDoll.runAction(cc.sequence(cc.moveBy(.2, cc.v2(0, this.lastPosY - this.myDoll.y)).easing(cc.easeIn(3)), cc.callFunc(function() {
                                this.myStatus = 1,
                                this.myDollAnim.playRun(this.myDollIdx, null),
                                this.myDoll.y = Math.ceil((this.myDoll.y - 20) / c) * c + 9
                            }
                            .bind(this), this))),
                            1 == this.gameModel && this.floor.runAction(cc.moveBy(.5, cc.v2(0, c))),
                            this.isBack = !0
                        } else
                            3 == t.tag ? this.getReward(1, t) : 4 == t.tag && this.getReward(2, t);
                        5 == t.tag && this.floor.runAction(cc.moveBy(1, cc.v2(0, -c)))
                    }
                    200 == e.tag && (110 != t.tag && 100 != t.tag || this.roadPainting(this.myCell + 1))
                }
            },
            CollisionStay: function(t, e) {
                1 == e.tag && (110 != t.tag && 100 != t.tag || (this.curFloorBottom = t.node))
            },
            CollisionExit: function(t, e) {
                1 == e.tag && (100 != t.tag && 110 != t.tag || (e.tag = -11))
            },
            getReward: function(t, e) {
                this.gameApplication.soundManager.playSound("reward"),
                this.viewManager.GetUIPosition(e.node, this.floor, this.gameApplication.uiSpriteView),
                1 == t ? (this.topNums[0].node.runAction(cc.sequence(cc.delayTime(1), cc.scaleTo(.1, 1.2), cc.scaleTo(.1, 1), cc.callFunc(function() {
                    this.playerDetail[0] = this.playerDetail[0] + 1,
                    this.topNums[0].string = this.playerDetail[0],
                    this.playerDetail[6] = this.playerDetail[6] + 1,
                    SDK().setItem({
                        0: this.playerDetail[0]
                    }, null)
                }
                .bind(this), this))),
                e.node.runAction(cc.sequence(cc.scaleTo(.5, 2), cc.scaleTo(.5, 1), cc.callFunc(function() {
                    e.node.active = !1
                }
                .bind(this), this))),
                e.node.runAction(cc.sequence(cc.delayTime(.5), cc.moveTo(.5, this.topBars[0].position)))) : 2 == t && (this.topNums[2].node.runAction(cc.sequence(cc.delayTime(1), cc.scaleTo(.1, 1.2), cc.scaleTo(.1, 1), cc.callFunc(function() {
                    this.playerDetail[2] = this.playerDetail[2] + 1,
                    this.topNums[2].string = this.playerDetail[2],
                    this.playerDetail[7] = this.playerDetail[7] + 1,
                    SDK().setItem({
                        2: this.playerDetail[2]
                    }, null)
                }
                .bind(this), this))),
                e.node.runAction(cc.sequence(cc.scaleTo(.5, 2), cc.scaleTo(.5, .2), cc.callFunc(function() {
                    e.node.active = !1
                }
                .bind(this), this))),
                e.node.runAction(cc.sequence(cc.delayTime(.5), cc.moveTo(.5, this.topBars[2].position)))),
                e.tag = -30
            },
            JumpAction: function(t) {
                if (0 != this.status) {
                    if (t == this.myDoll) {
                        if (2 == this.myStatus)
                            return;
                        this.myStatus = 2,
                        1 == this.gameModel && this.floor.runAction(cc.moveBy(.5, cc.v2(0, -c)))
                    }
                    this.lastPosY = this.myDoll.y;
                    var e = parseInt(this.topNums[3].string) + 1;
                    this.topNums[3].string = e,
                    parseInt(this.topNums[1].string) < e && this.topNums[1].node.runAction(cc.sequence(cc.scaleTo(0, 1.2), cc.callFunc(function() {
                        this.topNums[1].string = e,
                        SDK().setItem({
                            5: e
                        })
                    }
                    .bind(this), this), cc.scaleTo(.1, 1))),
                    this.gameApplication.soundManager.playSound("jump"),
                    this.myDollAnim.playJump(this.myDollIdx, null),
                    t.runAction(cc.sequence(cc.moveBy(.25, cc.v2(0, 170)).easing(cc.easeOut(3)), cc.moveBy(.15, cc.v2(0, -40)).easing(cc.easeIn(3)), cc.callFunc(function() {
                        3 != this.myStatus && (this.myDollAnim.playRun(this.myDollIdx, null),
                        2 == this.myStatus && (this.myStatus = 1,
                        this.isBack || (this.playerDetail[5] = this.playerDetail[5] + 1),
                        this.isBack = !1,
                        this.myDoll.y = Math.ceil((this.myDoll.y - 20) / c) * c + 9))
                    }
                    .bind(this), this)))
                }
            },
            bgColorChange: function(t) {
                0 == this.bg1.node.active ? (this.bg1.fillStart = 1,
                this.bg1.node.active = !0,
                this.bg0.spriteFrame = this.bg2.spriteFrame,
                this.bg2.node.active = !1,
                this.bgStatus = 1,
                this.bg1.spriteFrame = this.commonAtlas.getSpriteFrame("bg_" + t)) : 0 == this.bg2.node.active && (this.bg2.fillStart = 1,
                this.bg2.node.active = !0,
                this.bg0.spriteFrame = this.bg1.spriteFrame,
                this.bg1.node.active = !1,
                this.bgStatus = 2,
                this.bg2.spriteFrame = this.commonAtlas.getSpriteFrame("bg_" + t))
            },
            yellowAnim: function() {
                var t = Math.ceil(7 * cc.random0To1());
                this.yellowLable.string = f[t],
                this.yellowLable.node.active = !0,
                this.yellowLable.node.scale = 1,
                this.yellowLable.node.opacity = 255,
                this.yellowLable.node.runAction(cc.scaleTo(2, 6)),
                this.yellowLable.node.runAction(cc.sequence(cc.fadeOut(2), cc.callFunc(function() {
                    this.yellowLable.node.active = !1
                }
                .bind(this), this)))
            },
            roadPainting: function(t) {
                var e = (t - 9) / 20;
                (t - 9) % 20 == 0 && (e < 8 ? (this.bgColorChange(e),
                0 < e && this.yellowAnim(),
                o *= 1.1,
                n *= 1.1) : this.bgColorChange(7));
                var i = {}
                  , s = h - 1 == -1 ? 25 : h - 1;
                if (0 == h)
                    i.left = 1,
                    i.right = 1,
                    this.mapLimit[0] = 0,
                    this.mapLimit[1] = 0;
                else if (0 == this.floorNodes[s].left.active && 0 == this.floorNodes[s].right.active)
                    i.left = 1,
                    i.right = 1,
                    this.mapLimit[0] = 0,
                    this.mapLimit[1] = 0;
                else if (0 == this.floorNodes[s].left.active || 0 == this.floorNodes[s].right.active) {
                    if (0 == this.floorNodes[s].left.active)
                        (a = 100 * cc.random0To1()) < 60 ? (i.left = 0,
                        i.right = 1) : 60 < a && a < 80 ? (i.left = 1,
                        i.right = 0) : 80 < a && a < 90 ? (i.left = 0,
                        i.right = 0) : (i.left = 1,
                        i.right = 1),
                        1 == i.left ? this.mapLimit[0] = 0 : (this.mapLimit[0] = this.mapLimit[0] + 1,
                        4 <= this.mapLimit[0] && (i.left = 1)),
                        1 == i.right ? this.mapLimit[1] = 0 : (this.mapLimit[1] = this.mapLimit[1] + 1,
                        4 <= this.mapLimit[1] && (i.right = 1));
                    if (0 == this.floorNodes[s].right.active)
                        (a = 100 * cc.random0To1()) < 60 ? (i.left = 1,
                        i.right = 0) : 60 < a && a < 80 ? (i.left = 0,
                        i.right = 1) : 80 < a && a < 90 ? (i.left = 0,
                        i.right = 0) : (i.left = 1,
                        i.right = 1),
                        1 == i.left ? this.mapLimit[0] = 0 : (this.mapLimit[0] = this.mapLimit[0] + 1,
                        4 <= this.mapLimit[0] && (i.left = 1)),
                        1 == i.right ? this.mapLimit[1] = 0 : (this.mapLimit[1] = this.mapLimit[1] + 1,
                        4 <= this.mapLimit[1] && (i.right = 1))
                } else {
                    var a;
                    (a = 100 * cc.random0To1()) < 15 ? (i.left = 0,
                    i.right = 0) : 15 < a && a < 85 ? (i.left = 100 * cc.random0To1() < 50 ? 0 : 1,
                    0 == i.left ? i.right = 1 : i.right = 0) : (i.left = 1,
                    i.right = 1),
                    1 == i.left ? this.mapLimit[0] = 0 : 0 == i.left && (this.mapLimit[0] = this.mapLimit[0] + 1,
                    4 <= this.mapLimit[0] && (i.left = 1)),
                    1 == i.right ? this.mapLimit[1] = 0 : (this.mapLimit[1] = this.mapLimit[1] + 1,
                    4 <= this.mapLimit[1] && (i.right = 1))
                }
                120 == t && (this.curWidth = this.curWidth - 100),
                i.width = this.curWidth,
                i.mission = t,
                this.produceLinePart(i)
            },
            produceLinePart: function(t) {
                var e, i, s, a = t.mission * c, o = {};
                if (null != this.floorNodes[h] ? (e = this.floorNodes[h].bottom,
                i = this.floorNodes[h].left,
                s = this.floorNodes[h].right) : ((e = cc.instantiate(this.floor_prefab)).getComponent(cc.Sprite).spriteFrame = this.gameAtlas.getSpriteFrame("floor"),
                (i = cc.instantiate(this.floor_prefab)).getComponent(cc.Sprite).spriteFrame = this.gameAtlas.getSpriteFrame("floor"),
                (s = cc.instantiate(this.floor_prefab)).getComponent(cc.Sprite).spriteFrame = this.gameAtlas.getSpriteFrame("floor")),
                o.bottom = e,
                o.left = i,
                o.right = s,
                e.parent = this.floor,
                120 == t.mission ? e.width = t.width + 100 + 20 : e.width = t.width + 20,
                e.height = 10,
                null == (l = e.getComponent(cc.BoxCollider)) && (l = e.addComponent(cc.BoxCollider)),
                l.size.width = e.width,
                l.size.height = e.height,
                l.offset = cc.v2(0, e.height / 2),
                e.anchorY = 0,
                e.y = a,
                e.x = 0,
                l.tag = 100,
                1 == t.left && 1 == t.right && (l.tag = 110),
                0 == t.mission && (this.safeBottom = e),
                i.parent = this.floor,
                i.width = 10,
                i.height = c,
                null == (l = i.getComponent(cc.BoxCollider)) && (l = i.addComponent(cc.BoxCollider)),
                l.size.width = i.width,
                l.size.height = i.height / 2,
                l.offset = cc.v2(i.width / -2, i.height / 4),
                l.tag = 11,
                i.anchorX = 1,
                i.anchorY = 0,
                i.x = t.width / -2,
                i.y = a,
                1 != t.left ? (i.active = !1,
                l.tag = 10) : 1 == t.left && (i.active = !0,
                l.tag = 11),
                s.parent = this.floor,
                s.width = 10,
                s.height = c,
                null == (l = s.getComponent(cc.BoxCollider)) && (l = s.addComponent(cc.BoxCollider)),
                l.size.width = s.width,
                l.size.height = s.height / 2,
                l.offset = cc.v2(s.width / 2, s.height / 4),
                l.tag = 21,
                s.anchorX = 0,
                s.anchorY = 0,
                s.x = t.width / 2,
                s.y = a,
                1 != t.right ? (s.active = !1,
                l.tag = 20) : 1 == t.right && (l.tag = 21,
                s.active = !0),
                this.floorNodes[h] = o,
                h += 1,
                0 == r) {
                    var n, l;
                    if (r = 12,
                    null == this.rewardNodes ? (l = (n = cc.instantiate(this.floor_prefab)).addComponent(cc.BoxCollider),
                    this.rewardNodes = n) : l = (n = this.rewardNodes).getComponent(cc.BoxCollider),
                    n.parent = this.floor,
                    1 == (90 < 100 * cc.random0To1() ? 1 : 0))
                        n.getComponent(cc.Sprite).spriteFrame = this.commonAtlas.getSpriteFrame("redHeart"),
                        l.tag = 3;
                    else
                        n.getComponent(cc.Sprite).spriteFrame = this.commonAtlas.getSpriteFrame("redDiamond"),
                        l.tag = 4;
                    n.scale = 1,
                    l.size.width = n.width,
                    l.size.height = n.height,
                    n.y = a + 40,
                    n.x = cc.randomMinus1To1() * this.curWidth / 2,
                    n.active = !0
                } else
                    r -= 1;
                26 == h && (h = 0),
                this.myCell = t.mission
            },
            start: function() {
                this.LoadGame();
                for (var t = 0; t < this.vidioBtn.length; t += 1)
                    this.vidioBtn[t].runAction(cc.repeatForever(cc.sequence(cc.rotateTo(.2, -3), cc.rotateTo(.4, 3), cc.rotateTo(.4, -3), cc.rotateTo(.2, 0), cc.delayTime(1))))

			},
            update: function(t) {
                if (null != this.moveProgress && this.moveProgress)
                    if (5 < m)
                        this.playerDetail[5] = 0,
                        SDK().setItem({
                            5: this.playerDetail[5]
                        }),
                        this.overNums[6].string = "",
                        this.unLockProgress.progress = 1,
                        this.countVal = this.countVal + this.playerDetail[5] * (t / 1.5);
                    else if (this.countVal < this.playerDetail[5]) {
                        if (this.overNums[3].string = d[m],
                        this.countVal = this.countVal + this.playerDetail[5] * (t / 1.5),
                        this.countVal > d[m]) {
                            this.countVal = this.countVal - d[m],
                            this.playerDetail[3][m] = 1;
                            for (var e = "", i = 0; i < this.dollsPick.length; i += 1)
                                e += this.playerDetail[3][i];
                            SDK().setItem({
                                3: parseInt(e)
                            }),
                            this.playerDetail[5] = this.playerDetail[5] - d[m],
                            SDK().setItem({
                                5: this.playerDetail[5]
                            }),
                            m += 1,
                            this.overNums[3].string = d[m],
                            this.topBars[0].active = !1,
                            this.topBars[1].active = !1,
                            this.dollsPick[m - 1].color = cc.color(255, 255, 255),
                            this.dollsMain.x = -300 * (m - 1),
                            this.dTypeChange(),
                            this.LoadGame(),
                            this.viewManager.showView(this.gameApplication.dollsView, .3, !0)
                        }
                        this.overNums[6].string = Math.ceil(this.countVal) + "/" + d[m],
                        this.unLockProgress.progress = Math.ceil(this.countVal) / d[m]
                    } else
                        this.moveProgress = !1;
                this.isReviveCount && (0 < this.reviveTimeVal ? (this.reviveTime.string = "0" + (Math.ceil(this.reviveTimeVal) - 1),
                this.reviveTimeVal = this.reviveTimeVal - t) : (this.isReviveCount = !1,
                this.reviveTime.string = "00",
                this.initOverData(),
                this.viewManager.showView(this.gameApplication.overView, .3, !0, !0, 1.5),
                this.playTimes++)),
                0 != this.bgStatus && (1 == this.bgStatus ? 0 < this.bg1.fillStart ? this.bg1.fillStart = this.bg1.fillStart - t : (this.bg1.fillStart = 0,
                this.bg2.node.active = !1,
                this.bgStatus = 0) : 2 == this.bgStatus && (0 < this.bg2.fillStart ? this.bg2.fillStart = this.bg2.fillStart - t : (this.bg2.fillStart = 0,
                this.bg1.node.active = !1,
                this.bgStatus = 0))),
                3 == this.myStatus ? this.status = 0 : 1 == this.status && Math.abs(this.myDoll.x) > this.curFloorBottom.width / 2 && (this.myStatus = 3,
                this.deadAnim()),
                2 == this.gameModel && 1 == this.status && (568 < Math.abs(this.floor.y) - this.myDoll.y && (this.status = 3,
                this.deadAnim()),
                this.floor.runAction(cc.moveBy(t, cc.v2(0, -n * t)))),
                0 != this.myStatus && 1 == this.status && (0 < this.myDoll.scaleX ? this.myDoll.runAction(cc.moveBy(t, cc.v2(o * t, 0))) : this.myDoll.runAction(cc.moveBy(t, cc.v2(-o * t, 0)))),
                0 == this.status && Math.abs(this.floor.y) - this.myDoll.y < 568 && this.myDoll.runAction(cc.moveBy(t, cc.v2(0, -o * t)))
            }
        }),
        cc._RF.pop()
    }
    , {
        "../GameLogic/ViewManager": "ViewManager",
        "../UI/SpriteAnimation": "SpriteAnimation",
        constants: 1
    }],
    LanguageData: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "61de062n4dJ7ZM9/Xdumozn", "LanguageData");
        var s = t("polyglot.min")
          , a = null;
        function o(t) {
            return window.i18n.languages[t]
        }
        function n(t) {
            t && (a ? a.replace(t) : a = new s({
                phrases: t,
                allowMissing: !0
            }))
        }
        window.i18n || (window.i18n = {
            languages: {},
            curLang: ""
        }),
        e.exports = {
            init: function(t) {
                if (t !== window.i18n.curLang) {
                    var e = o(t) || {};
                    window.i18n.curLang = t,
                    n(e),
                    this.inst = a
                }
            },
            t: function(t, e) {
                if (a)
                    return a.t(t, e)
            },
            inst: a,
            updateSceneRenderers: function() {
                for (var t = cc.director.getScene().children, e = [], i = 0; i < t.length; ++i) {
                    var s = t[i].getComponentsInChildren("LocalizedLabel");
                    Array.prototype.push.apply(e, s)
                }
                for (var a = 0; a < e.length; ++a) {
                    e[a].updateLabel()
                }
                for (var o = [], n = 0; n < t.length; ++n) {
                    var l = t[n].getComponentsInChildren("LocalizedSprite");
                    Array.prototype.push.apply(o, l)
                }
                for (var c = 0; c < o.length; ++c) {
                    o[c].updateSprite(window.i18n.curLang)
                }
            }
        },
        cc._RF.pop()
    }
    , {
        "polyglot.min": "polyglot.min"
    }],
    LocalizedLabel: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "744dcs4DCdNprNhG0xwq6FK", "LocalizedLabel");
        var s = t("LanguageData");
        cc.Class({
            extends: cc.Component,
            editor: {
                executeInEditMode: !0,
                menu: "i18n/LocalizedLabel"
            },
            properties: {
                dataID: {
                    get: function() {
                        return this._dataID
                    },
                    set: function(t) {
                        this._dataID !== t && (this._dataID = t,
                        this.updateLabel())
                    }
                },
                _dataID: ""
            },
            onLoad: function() {
                s.inst || s.init(),
                this.fetchRender()
            },
            fetchRender: function() {
                var t = this.getComponent(cc.Label);
                if (t)
                    return this.label = t,
                    void this.updateLabel()
            },
            updateLabel: function() {
                this.label ? s.t(this.dataID) && (this.label.string = s.t(this.dataID)) : cc.error("Failed to update localized label, label component is invalid!")
            }
        }),
        cc._RF.pop()
    }
    , {
        LanguageData: "LanguageData"
    }],
    LocalizedSprite: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "f34ac2GGiVOBbG6XlfvgYP4", "LocalizedSprite");
        var s = t("SpriteFrameSet");
        cc.Class({
            extends: cc.Component,
            editor: {
                executeInEditMode: !0,
                inspector: "packages://i18n/inspector/localized-sprite.js",
                menu: "i18n/LocalizedSprite"
            },
            properties: {
                spriteFrameSet: {
                    default: [],
                    type: s
                }
            },
            onLoad: function() {
                this.fetchRender()
            },
            fetchRender: function() {
                var t = this.getComponent(cc.Sprite);
                if (t)
                    return this.sprite = t,
                    void this.updateSprite(window.i18n.curLang)
            },
            getSpriteFrameByLang: function(t) {
                for (var e = 0; e < this.spriteFrameSet.length; ++e)
                    if (this.spriteFrameSet[e].language === t)
                        return this.spriteFrameSet[e].spriteFrame
            },
            updateSprite: function(t) {
                if (this.sprite) {
                    var e = this.getSpriteFrameByLang(t);
                    !e && this.spriteFrameSet[0] && (e = this.spriteFrameSet[0].spriteFrame),
                    this.sprite.spriteFrame = e
                } else
                    cc.error("Failed to update localized sprite, sprite component is invalid!")
            }
        }),
        cc._RF.pop()
    }
    , {
        SpriteFrameSet: "SpriteFrameSet"
    }],
    MyDoll: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "d29d9t+KWlMMq8tmuYqNuKI", "MyDoll");
        var s = t("../UI/GameView");
        cc.Class({
            extends: cc.Component,
            properties: {
                gameView: s
            },
            onLoad: function() {
                cc.director.getCollisionManager().enabled = !0
            },
            onCollisionEnter: function(t, e) {
                this.gameView.CollisionEnter(t, e)
            },
            onCollisionStay: function(t, e) {
                this.gameView.CollisionStay(t, e)
            },
            onCollisionExit: function(t, e) {
                this.gameView.CollisionExit(t, e)
            }
        }),
        cc._RF.pop()
    }
    , {
        "../UI/GameView": "GameView"
    }],
    SoundManager: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "d05ddwJ5xlNZ6ru8KzJttiV", "SoundManager"),
        cc.Class({
            extends: cc.Component,
            properties: {
                audioSource: {
                    type: cc.AudioSource,
                    default: null
                },
                dead: {
                    url: cc.AudioClip,
                    default: null
                },
                girlDead: {
                    url: cc.AudioClip,
                    default: null
                },
                reward: {
                    url: cc.AudioClip,
                    default: null
                },
                jump: {
                    url: cc.AudioClip,
                    default: null
                },
                progress: {
                    url: cc.AudioClip,
                    default: null
                },
                isOpen: !0,
                isVoiceOpen: !0
            },
            playSound: function(t) {
                if (this.isOpen)
                    switch (t) {
                    case "dead":
                        cc.audioEngine.play(this.dead, !1, 1);
                        break;
                    case "reward":
                        cc.audioEngine.play(this.reward, !1, 1);
                        break;
                    case "jump":
                        cc.audioEngine.play(this.jump, !1, 1);
                        break;
                    case "girlDead":
                        cc.audioEngine.play(this.girlDead, !1, 1);
                        break;
                    case "progress":
                        cc.audioEngine.play(this.progress, !1, 1)
                    }
            },
            playBg: function() {
                this.isOpen && this.audioSource.play()
            },
            setVoiceIsOpen: function(t) {
                if (this.isVoiceOpen = t)
                    try {
                        null != str && HiboGameJs.enableMic(0)
                    } catch (t) {}
                else
                    try {
                        null != str && HiboGameJs.enableMic(1)
                    } catch (t) {}
            },
            setIsOpen: function(t) {
                if (this.isOpen = t,
                this.isOpen) {
                    this.playBg();
                    try {
                        null != str && HiboGameJs.mute(0)
                    } catch (t) {}
                } else {
                    this.audioSource.pause();
                    try {
                        null != str && HiboGameJs.mute(1)
                    } catch (t) {}
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    SpriteAnimation: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "516ffO2ljRCZZTyfHSXAOJ2", "SpriteAnimation"),
        cc.Class({
            extends: cc.Component,
            properties: {
                isPlay: !1,
                loop: !0,
                sprite: {
                    default: null,
                    type: cc.Sprite
                },
                shadow: {
                    default: null,
                    type: cc.Sprite
                },
                itemId: {
                    default: -1,
                    type: cc.Integer
                },
                animCount: {
                    default: 0,
                    type: cc.Integer
                },
                sprites: {
                    default: [],
                    type: [cc.SpriteFrame]
                },
                fps: {
                    default: 5,
                    type: cc.Integer
                },
                delta: {
                    default: 0,
                    type: cc.Integer,
                    visible: !1
                },
                index: {
                    default: 0,
                    type: cc.Integer
                },
                wait: {
                    default: 0,
                    type: cc.Integer
                },
                waitDelta: {
                    default: 0,
                    type: cc.Integer,
                    visible: !1
                },
                dollsAtlas: {
                    default: null,
                    type: cc.SpriteAtlas
                },
                isInited: !1,
                isRotat: !0,
                oPoint: {
                    default: cc.v2(0, 0)
                },
                callback: {
                    default: null
                }
            },
            playRun: function(t, e) {
                if (this.animCount = 8,
                this.fps = 10,
                this.wait = 0,
                this.waitDelta = 0,
                this.loop = !0,
                this.isRotat = !1,
                this.isInited && this.itemId == t)
                    this.play();
                else {
                    this.itemId = t;
                    this.sprites = [];
                    for (var i = 7; 0 <= i; i -= 1) {
                        var s = this.dollsAtlas.getSpriteFrame("doll_" + this.itemId + "Run_" + i);
                        this.sprites.push(s)
                    }
                    this.isInited = !0,
                    this.play()
                }
            },
            playJump: function(t, e) {
                this.sprite.spriteFrame = this.sprites[1],
                this.isPlay = !1
            },
            playDead: function(t, e) {
                this.sprite.spriteFrame = this.dollsAtlas.getSpriteFrame("doll_" + t + "Dead"),
                this.isPlay = !1
            },
            play: function(t) {
                this.isPlay = !0,
                this.node.active = !0,
                null != this.shadow && (this.shadow.node.active = !0),
                null != t && (this.callback = t)
            },
            reSet: function() {
                this.index = 0,
                null != this.sprite && (this.sprite.spriteFrame = this.sprites[this.index]),
                this.isPlay = !1,
                this.node.active = !1,
                this.node.setRotation(0),
                null != this.shadow && (this.shadow.node.active = !1,
                this.shadow.node.setRotation(0)),
                null != this.callback && this.callback()
            },
            update: function(t) {
                if (null != this.shadow) {
                    var e = this.shadow.node.position
                      , i = cc.v2(this.node.position.x + 10, this.node.position.y - 10);
                    e != i && (this.shadow.node.position = i)
                }
                if (0 < this.wait && this.waitDelta < this.wait)
                    this.waitDelta += t;
                else if (this.isPlay && 0 < this.fps && 0 < this.sprites.length) {
                    this.delta += t;
                    var s = 1 / this.fps;
                    s < this.delta && (this.delta = 0 < s ? this.delta - s : 0,
                    this.sprite.spriteFrame = this.sprites[this.index],
                    null != this.shadow && (this.shadow.spriteFrame = this.sprites[this.index]),
                    this.index + 1 == this.sprites.length && (this.waitDelta = 0,
                    this.loop || this.reSet()),
                    this.index = this.index + 1 >= this.sprites.length ? 0 : this.index + 1)
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    SpriteFrameSet: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "97019Q80jpE2Yfz4zbuCZBq", "SpriteFrameSet");
        var s = cc.Class({
            name: "SpriteFrameSet",
            properties: {
                language: "",
                spriteFrame: cc.SpriteFrame
            }
        });
        e.exports = s,
        cc._RF.pop()
    }
    , {}],
    Utils: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "3748203j2dJ4L66h81x01LW", "Utils");
        var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
          , a = {}
          , h = Math.sqrt(3);
        a.offsetToAxial = function(t) {
            return t.x = t.x - Math.floor(t.y / 2),
            t
        }
        ,
        a.axialToScreen = function(t, e) {
            var i = e * t.y + .5 * e - t.y * lineWidth
              , s = e * t.x + .5 * e - t.x * lineWidth;
            return cc.v2(s, i)
        }
        ,
        a.screenToAxial = function(t, e) {
            var i = cc.v2(0, 0);
            i.y = t.x / (1.5 * e),
            i.x = (t.y - t.x / h) / (h * e);
            var s = this.calculateCubicZ(i)
              , a = Math.round(i.x)
              , o = Math.round(i.y)
              , n = Math.round(s);
            if (a + o + n == 0)
                t.x = a,
                t.y = o;
            else {
                var l = Math.abs(i.x - a)
                  , c = Math.abs(i.y - o)
                  , r = Math.abs(s - n);
                c < l && r < l ? (t.x = -o - n,
                t.y = o) : l < c && r < c ? (t.x = a,
                t.y = -a - n) : l < r && c < r && (t.x = a,
                t.y = o)
            }
            return t
        }
        ,
        a.calculateCubicZ = function(t) {
            return -t.x - t.y
        }
        ,
        a.axialToOffset = function(t) {
            return t.x = t.x + Math.floor(t.y / 2),
            t
        }
        ,
        a.getNeighbors = function(t) {
            var e = cc.v2(0, 0)
              , i = [];
            return e.x = t.x + 1,
            e.y = t.y,
            i.push(cc.v2(e.x, e.y)),
            e.x = t.x - 1,
            e.y = t.y,
            i.push(cc.v2(e.x, e.y)),
            e.x = t.x,
            e.y = t.y - 1,
            i.push(cc.v2(e.x, e.y)),
            e.x = t.x,
            e.y = t.y + 1,
            i.push(cc.v2(e.x, e.y)),
            i
        }
        ,
        a.getNeighborsOBJ = function(t) {
            var e = cc.v2(0, 0)
              , i = {};
            return e.x = t.x + 1,
            e.y = t.y,
            i.r = cc.v2(e.x, e.y),
            e.x = t.x - 1,
            e.y = t.y,
            i.l = cc.v2(e.x, e.y),
            e.x = t.x,
            e.y = t.y - 1,
            i.b = cc.v2(e.x, e.y),
            e.x = t.x,
            e.y = t.y + 1,
            i.t = cc.v2(e.x, e.y),
            i
        }
        ,
        a.isNeighbors = function(t, e) {
            for (var i = this.getNeighbors(t), s = !1, a = 0; a < i.length; a++)
                i[a].equals(e) && (s = !0);
            return s
        }
        ,
        a.cloneObj = function(t) {
            var e = t && t.constructor === Array ? [] : {};
            for (var i in t)
                if (t.hasOwnProperty(i)) {
                    if (!t[i]) {
                        e[i] = t[i];
                        continue
                    }
                    e[i] = "object" === s(t[i]) ? a.cloneObj(t[i]) : t[i]
                }
            return e
        }
        ,
        a.GetRandomNum = function(t, e) {
            switch (arguments.length) {
            case 1:
                return parseInt(Math.random() * t + 1, 10);
            case 2:
                return parseInt(Math.random() * (e - t + 1) + t, 10);
            default:
                return 0
            }
        }
        ,
        a.inArray = function(t, e) {
            for (var i = e.length; i--; )
                if (parseInt(e[i]) === parseInt(t))
                    return !0;
            return !1
        }
        ,
        e.exports = a,
        cc._RF.pop()
    }
    , {}],
    ViewManager: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "da875Ci6i1B0b9963JeSh51", "ViewManager"),
        cc.Class({
            extends: cc.Component,
            properties: {
                viewList: {
                    default: [],
                    visible: !1
                },
                viewBtns: {
                    default: [],
                    visible: !1
                },
                curView: {
                    default: null,
                    type: cc.Node,
                    visible: !1
                }
            },
            onLoad: function() {
                this.viewList = []
            },
            showView: function(t, e, i) {
                for (var s, a = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3], o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0, n = arguments[5], l = !0, c = 0; c < this.viewList.length; c += 1)
                    t == this.viewList[c] ? (l = !1,
                    s = c) : this.viewList[c].active && i && a && (this.viewList[c].stopAllActions(),
                    this.showAnim(this.viewList[c], .1, c, !1));
                if (l) {
                    s = this.viewList.length,
                    this.viewList[s] = t,
                    this.viewBtns[s] = [];
                    var r = [];
                    r = t.getChildren();
                    for (c = 0; c < r.length; c += 1) {
                        var h = r[c].getComponent(cc.Button);
                        if (null != h)
                            this.viewBtns[s][this.viewBtns[s].length] = h;
                        else {
                            var u = [];
                            u = r[c].getChildren();
                            for (var p = 0; p < u.length; p += 1) {
                                var d = u[p].getComponent(cc.Button);
                                if (null != d)
                                    this.viewBtns[s][this.viewBtns[s].length] = d;
                                else {
                                    var m = [];
                                    m = u[p].getChildren();
                                    for (var f = 0; f < m.length; f += 1) {
                                        var g = m[f].getComponent(cc.Button);
                                        null != g && (this.viewBtns[s][this.viewBtns[s].length] = g)
                                    }
                                }
                            }
                        }
                    }
                }
                this.showAnim(this.viewList[s], e, s, i, o, n)
            },
            showAnim: function(e, t, i, s, a, o) {
                if (s && 0 == e.active)
                    e.active = !0,
                    (this.curView = e).runAction(cc.sequence(cc.fadeIn(t), cc.callFunc(function() {
                        if (0 < a)
                            this.scheduleOnce(function() {
                                if (e.active)
                                    for (var t = 0; t < this.viewBtns[i].length; t += 1)
                                        this.viewBtns[i][t].interactable = !0
                            }
                            .bind(this), a);
                        else
                            for (var t = 0; t < this.viewBtns[i].length; t += 1)
                                this.viewBtns[i][t].interactable = !0;
                        null != o && o()
                    }
                    .bind(this), this)));
                else if (!s && 1 == e.active) {
                    for (var n = 0; n < this.viewBtns[i].length; n += 1)
                        this.viewBtns[i][n].interactable = !1;
                    var l = cc.sequence(cc.fadeOut(t), cc.callFunc(function() {
                        e.active = !1,
                        null != o && o()
                    }
                    .bind(this)));
                    e.runAction(l)
                }
            },
            CloseCurView: function() {
                this.curView.active && this.showView(this.curView, .3, !1)
            },
            GetUIPosition: function(t, e, i) {
                var s = e.convertToWorldSpaceAR(t.getPosition())
                  , a = i.convertToNodeSpaceAR(s);
                t.parent = i,
                t.position = a
            }
        }),
        cc._RF.pop()
    }
    , {}],
    facebook: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "6542a5UC9RCqLxrtQE6lpYc", "facebook");
        var s, a = t("../Utils/Utils"), o = t("./script/sdk_ad"), n = "https://haiwai.31home.com:8003/games.recommend", l = "AD_LOADING", c = "AD_LOAD_SUCCESS", r = "AD_COMPLETE", h = [0x5b7d1cf0050f3, 0x63feaccfa70df], u = "1858947080793267", p = 2, d = 1, m = 1, f = 0, g = function() {
            this.cb = null,
            this.videoAd = null,
            this.videoAdState = null,
            this.InterstitialAd = null,
            this.InterstitialAdState = null,
            this.sdk_ad = null
        };
        g.prototype.getGameId = function() {
            return u
        }
        ,
        g.prototype.openVideoAd = function() {
            return 1 <= d
        }
        ,
        g.prototype.openinterstitialAd = function() {
            return 1 <= m
        }
        ,
        g.prototype.getInterstitialCount = function() {
            return console.log("__interstitialCount", p),
            p
        }
        ,
        g.prototype.isPlayOpAD = function() {
            return 10 * cc.random0To1() <= f
        }
        ,
        g.prototype.setUp = function(t, e, i, s) {
            if (console.log("setUp__interstitialCount", i),
            console.log("interstitialCount", p),
            p = i,
            d = t,
            f = s,
            1 <= (m = e) && 1 <= f) {
                var a = cc.find("Canvas/sdk_ad");
                null != a && (this.sdk_ad = a.getComponent(o)),
                this.reLoadOpAd()
            }
        }
        ,
        g.prototype.switchGameAsync = function(t) {
            if ("undefined" == typeof FBInstant)
                return !1;
            FBInstant.switchGameAsync(t).catch(function(t) {})
        }
        ,
        g.prototype.reLoadOpAd = function() {
            if (cc.log("reLoadOpAd:"),
            null != this.sdk_ad && 1 <= m && 1 <= f) {
                var a = this
                  , o = new XMLHttpRequest;
                o.onreadystatechange = function() {
                    if (4 == o.readyState && 200 == o.status) {
                        var t = JSON.parse(o.responseText);
                        if (console.log("______________response", t),
                        500 != t.code) {
                            var e = t.data.rows[0];
                            if (null != e) {
                                var i = e.pic3
                                  , s = e.game_id;
                                a.sdk_ad.setAd(i, s)
                            }
                        }
                    }
                }
                ,
                o.open("GET", n + "?game_id=" + u + "&amount=1", !0),
                o.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
                o.send(),
                console.log(n + "?game_id=" + u + "&amount=1")
            }
        }
        ,
        g.prototype.init = function() {
            (this.initOP(),
            "undefined" != typeof FBInstant) && (this.loadVideoAd(),
            this.loadInterstitialAd(),
            "zh_CN" == FBInstant.getLocale() && t("LanguageData").init("en"))
        }
        ,
        g.prototype.initOP = function() {
            var n = this
              , l = new XMLHttpRequest;
            l.onreadystatechange = function() {
                if (4 == l.readyState && 200 == l.status) {
                    var t = JSON.parse(l.responseText);
                    if (console.log("response", t),
                    500 != t.code) {
                        var e = t.data
                          , i = e.interstitial_op
                          , s = e.interstitial_count
                          , a = e.video_on
                          , o = e.interstitial_on;
                        n.setUp(a, o, s, i)
                    }
                }
            }
            ,
            l.open("GET", "https://haiwai.31home.com:8003/games.detail?game_id=" + SDK().getGameId(), !0),
            l.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
            l.send()
        }
        ,
        g.prototype.isGM = function() {
            if ("undefined" == typeof FBInstant)
                return !1;
            var t = FBInstant.player.getID();
            return a.inArray(t, h)
        }
        ,
        g.prototype.clearData = function() {
            if ("undefined" == typeof FBInstant)
                return !1;
            SDK().setScore({
                all: 0
            }, null),
            SDK().setScore({
                my_help: 0
            }, null);
            for (var t = 1; t <= 6; t++) {
                for (var e = 1; e <= 100; e++) {
                    var i = {};
                    i["1_" + t + "_" + e] = 0,
                    this.setScore(i, null);
                    var s = {};
                    s["1_" + t + "_" + e + "_moves"] = 0,
                    this.setScore(s, null)
                }
                var a = {};
                a["1_" + t] = 0,
                this.setScore(a, null);
                var o = {};
                o["unlock_1_" + t] = 0,
                SDK().setScore(o, null)
            }
        }
        ,
        g.prototype.getLocale = function() {
            if ("undefined" != typeof FBInstant)
                return FBInstant.getLocale()
        }
        ,
        g.prototype.share = function(t, e) {
            if ("undefined" != typeof FBInstant) {
                var i = this;
                FBInstant.context.chooseAsync().then(function() {
                    i.doShare(t),
                    null != e && e(!0)
                }).catch(function(t) {
                    null != t.code && "SAME_CONTEXT" == t.code && null != e && e(!1)
                })
            } else
                null != e && e(!0)
        }
        ,
        g.prototype.doShare = function(t) {
            var n = this.getName() + " finish " + t + " missions,Can you beat me?";
            this.getName();
            cc.loader.loadRes("Texture2d/game_icon", cc.Texture2D, function(t, e) {
                var i = document.createElement("canvas")
                  , s = i.getContext("2d");
                i.width = 600,
                i.height = 420;
                var a = e.getHtmlElementObj();
                s.drawImage(a, 0, 0);
                var o = i.toDataURL("image/png");
                FBInstant.updateAsync({
                    action: "CUSTOM",
                    cta: "Play Game",
                    template: "join_fight",
                    image: o,
                    text: n,
                    data: {
                        myReplayData: "..."
                    },
                    strategy: "IMMEDIATE",
                    notification: "NO_PUSH"
                }).then(function() {})
            })
        }
        ,
        g.prototype.loadInterstitialAd = function() {
            "undefined" != typeof FBInstant && this.openinterstitialAd() && FBInstant.getInterstitialAdAsync("1858947080793267_1858948357459806").then(function(t) {
                return this.InterstitialAd = t,
                this.InterstitialAdState = l,
                this.InterstitialAd.loadAsync()
            }
            .bind(this)).catch(function(t) {}
            .bind(this)).then(function() {
                this.InterstitialAdState = c
            }
            .bind(this))
        }
        ,
        g.prototype.stat = function(t, e) {
            var i = new XMLHttpRequest;
            i.onreadystatechange = function() {
                if (4 == i.readyState && 200 == i.status)
                    JSON.parse(i.responseText)
            }
            ,
            i.open("GET", "https://haiwai.31home.com:8003/games.stat?game_id=" + e + "&type=" + t, !0),
            i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
            i.send()
        }
        ,
        g.prototype.showInterstitialAd = function(e) {
            "undefined" != typeof FBInstant ? m < 1 || (null != this.sdk_ad && 1 <= f && a.GetRandomNum(1, 10) <= f || null == this.InterstitialAd ? (this.sdk_ad.show(),
            this.stat(1, this.sdk_ad.game_id)) : null != this.InterstitialAd ? this.InterstitialAd.showAsync().then(function() {
                this.InterstitialAdState = r,
                e && e(!0),
                this.loadInterstitialAd()
            }
            .bind(this)).catch(function(t) {
                this.InterstitialAdState = r,
                e && e(!1)
            }
            .bind(this)) : (e && e(!1),
            this.loadInterstitialAd())) : e && e(!1)
        }
        ,
        g.prototype.loadVideoAd = function() {
            "undefined" != typeof FBInstant && this.openVideoAd() && FBInstant.getRewardedVideoAsync("1858947080793267_1858949390793036").then(function(t) {
                return this.videoAd = t,
                this.videoAdState = l,
                this.videoAd.loadAsync()
            }
            .bind(this)).then(function() {
                this.videoAdState = c
            }
            .bind(this))
        }
        ,
        g.prototype.hasVideoAd = function() {
            return "undefined" != typeof FBInstant && null != this.videoAd
        }
        ,
        g.prototype.showVideoAd = function(e) {
            "undefined" != typeof FBInstant ? null != this.videoAd ? this.videoAd.showAsync().then(function() {
                this.videoAdState = r,
                e && e(!0),
                this.loadVideoAd()
            }
            .bind(this)).catch(function(t) {
                this.videoAdState = r,
                e && e(!1),
                this.loadVideoAd()
            }
            .bind(this)) : (e && e(!1),
            this.loadVideoAd()) : e && e(!0)
        }
        ,
        g.prototype.getName = function() {
            return "undefined" == typeof FBInstant ? "undefined" : FBInstant.player.getName()
        }
        ,
        g.prototype.getItem = function(e, i) {
            if ("undefined" == typeof FBInstant) {
                void 0 !== (s = JSON.parse(cc.sys.localStorage.getItem(e))) && null != s || (s = 0),
                i(s, e)
            } else {
                var s = 0;
                FBInstant.player.getDataAsync(["" + e]).then(function(t) {
                    s = void 0 === t[e] ? 0 : t[e],
                    i(s, e)
                })
            }
        }
        ,
        g.prototype.setItem = function(t, e) {
            if ("undefined" == typeof FBInstant) {
                for (var i in t)
                    cc.sys.localStorage.setItem(i, t[i]);
                null != e && e()
            } else
                FBInstant.player.setDataAsync(t).then(function() {
                    null != e && e()
                })
        }
        ,
        e.exports = function() {
            return s || (s = new g),
            s
        }
        ,
        cc._RF.pop()
    }
    , {
        "../Utils/Utils": "Utils",
        "./script/sdk_ad": "sdk_ad",
        LanguageData: "LanguageData"
    }],
    globals: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "584b6PBfxhHNrqWmAI2zmIJ", "globals"),
        window.DEFAULT_IP = "120.27.143.15",
        window.DEFAULT_PORT = 7500,
        window.SDK = t("../SDK/facebook"),
        cc._RF.pop()
    }
    , {
        "../SDK/facebook": "facebook"
    }],
    "polyglot.min": [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "e26fd9yy65A4q3/JkpVnFYg", "polyglot.min");
        var s, a, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ;
        s = void 0,
        a = function(e) {
            function t(t) {
                t = t || {},
                this.phrases = {},
                this.extend(t.phrases || {}),
                this.currentLocale = t.locale || "en",
                this.allowMissing = !!t.allowMissing,
                this.warn = t.warn || i
            }
            function a(t, e, i) {
                var s, a, o, n, l, c, r;
                return null != i && t ? (o = (a = t.split(h))[(n = e,
                l = i,
                u[(c = n,
                r = function(t) {
                    var e, i, s, a = {};
                    for (e in t)
                        if (t.hasOwnProperty(e))
                            for (s in i = t[e])
                                a[i[s]] = e;
                    return a
                }(p),
                r[c] || r.en)](l))] || a[0],
                s = o.replace(/^\s+|\s+$/g, "")) : s = t,
                s
            }
            function i(t) {
                e.console && e.console.warn && e.console.warn("WARNING: " + t)
            }
            t.VERSION = "0.4.3",
            t.prototype.locale = function(t) {
                return t && (this.currentLocale = t),
                this.currentLocale
            }
            ,
            t.prototype.extend = function(t, e) {
                var i;
                for (var s in t)
                    t.hasOwnProperty(s) && (i = t[s],
                    e && (s = e + "." + s),
                    "object" == (void 0 === i ? "undefined" : o(i)) ? this.extend(i, s) : this.phrases[s] = i)
            }
            ,
            t.prototype.clear = function() {
                this.phrases = {}
            }
            ,
            t.prototype.replace = function(t) {
                this.clear(),
                this.extend(t)
            }
            ,
            t.prototype.t = function(t, e) {
                var i, s;
                return "number" == typeof (e = null == e ? {} : e) && (e = {
                    smart_count: e
                }),
                "string" == typeof this.phrases[t] ? i = this.phrases[t] : "string" == typeof e._ ? i = e._ : this.allowMissing ? i = t : (this.warn('Missing translation for key: "' + t + '"'),
                s = t),
                "string" == typeof i && (e = function(t) {
                    var e = {};
                    for (var i in t)
                        e[i] = t[i];
                    return e
                }(e),
                s = function(t, e) {
                    for (var i in e)
                        "_" !== i && e.hasOwnProperty(i) && (t = t.replace(new RegExp("%\\{" + i + "\\}","g"), e[i]));
                    return t
                }(s = a(i, this.currentLocale, e.smart_count), e)),
                s
            }
            ,
            t.prototype.has = function(t) {
                return t in this.phrases
            }
            ;
            var h = "||||"
              , u = {
                chinese: function(t) {
                    return 0
                },
                german: function(t) {
                    return 1 !== t ? 1 : 0
                },
                french: function(t) {
                    return 1 < t ? 1 : 0
                },
                russian: function(t) {
                    return t % 10 == 1 && t % 100 != 11 ? 0 : 2 <= t % 10 && t % 10 <= 4 && (t % 100 < 10 || 20 <= t % 100) ? 1 : 2
                },
                czech: function(t) {
                    return 1 === t ? 0 : 2 <= t && t <= 4 ? 1 : 2
                },
                polish: function(t) {
                    return 1 === t ? 0 : 2 <= t % 10 && t % 10 <= 4 && (t % 100 < 10 || 20 <= t % 100) ? 1 : 2
                },
                icelandic: function(t) {
                    return t % 10 != 1 || t % 100 == 11 ? 1 : 0
                }
            }
              , p = {
                chinese: ["fa", "id", "ja", "ko", "lo", "ms", "th", "tr", "zh"],
                german: ["da", "de", "en", "es", "fi", "el", "he", "hu", "it", "nl", "no", "pt", "sv"],
                french: ["fr", "tl", "pt-br"],
                russian: ["hr", "ru"],
                czech: ["cs"],
                polish: ["pl"],
                icelandic: ["is"]
            };
            return t
        }
        ,
        "function" == typeof define && define.amd ? define([], function() {
            return a(s)
        }) : "object" == (void 0 === i ? "undefined" : o(i)) ? e.exports = a(s) : s.Polyglot = a(s),
        cc._RF.pop()
    }
    , {}],
    sdk_ad: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "7bbceGVbB9GqazOzZL48/et", "sdk_ad"),
        cc.Class({
            extends: cc.Component,
            properties: {
                adSprite: {
                    default: null,
                    type: cc.Sprite
                },
                pic: {
                    default: ""
                },
                game_id: {
                    default: ""
                },
                hasAd: !1
            },
            onLoad: function() {},
            show: function() {
                this.node.setPosition(cc.v2(0, 0))
            },
            setAd: function(t, e) {
                this.pic = t,
                this.game_id = e,
                console.log("setAd:", this.pic, this.game_id);
                var i = this
                  , s = this.pic;
                console.log("remoteUrl:", s),
                cc.loader.load(s, function(t, e) {
                    console.log("err:", t),
                    console.log("texture:", e),
                    i.adSprite.spriteFrame = new cc.SpriteFrame(e)
                }),
                this.hasAd = !0
            },
            onCloseBtnClicked: function() {
                this.node.setPosition(cc.v2(1500, 1500)),
                SDK().reLoadOpAd(),
                SDK().stat(2, this.game_id)
            },
            onPlayBtnClicked: function() {
                this.onCloseBtnClicked(),
                SDK().switchGameAsync(this.game_id)
            }
        }),
        cc._RF.pop()
    }
    , {}]
}, {}, ["globals", "GameApplication", "SoundManager", "ViewManager", "facebook", "sdk_ad", "GameView", "MyDoll", "SpriteAnimation", "Utils", "LanguageData", "LocalizedLabel", "LocalizedSprite", "SpriteFrameSet", "polyglot.min"]);
