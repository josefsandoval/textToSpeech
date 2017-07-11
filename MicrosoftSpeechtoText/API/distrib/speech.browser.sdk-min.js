var __extends = this && this.__extends || function () {
    var e = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function (e, t) {
        e.__proto__ = t
    } || function (e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
    };
    return function (t, n) {
        function r() {
            this.constructor = t
        }
        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
    }
}();
define("src/common/Guid", ["require", "exports"], function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function () {
        var e = (new Date).getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
            var n = (e + 16 * Math.random()) % 16 | 0;
            return e = Math.floor(e / 16), ("x" === t ? n : 3 & n | 8).toString(16)
        })
    };
    t.CreateGuid = n;
    var r = function () {
        return n().replace(new RegExp("-", "g"), "").toUpperCase()
    };
    t.CreateNoDashGuid = r
}), define("src/common/IDictionary", ["require", "exports"], function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}), define("src/common/PlatformEvent", ["require", "exports", "src/common/Guid"], function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    ! function (e) {
        e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warning = 2] = "Warning", e[e.Error = 3] = "Error"
    }(t.EventType || (t.EventType = {}));
    var r = function () {
        function e(e, t) {
            this.name = e, this.eventId = n.CreateNoDashGuid(), this.eventTime = (new Date).toISOString(), this.eventType = t, this.metadata = {}
        }
        return Object.defineProperty(e.prototype, "Name", {
            get: function () {
                return this.name
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "EventId", {
            get: function () {
                return this.eventId
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "EventTime", {
            get: function () {
                return this.eventTime
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "EventType", {
            get: function () {
                return this.eventType
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "Metadata", {
            get: function () {
                return this.metadata
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.PlatformEvent = r
}), define("src/common/AudioSourceEvents", ["require", "exports", "src/common/PlatformEvent"], function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function (e) {
        function t(t, r, o) {
            void 0 === o && (o = n.EventType.Info);
            var i = e.call(this, t, o) || this;
            return i.audioSourceId = r, i
        }
        return __extends(t, e), Object.defineProperty(t.prototype, "AudioSourceId", {
            get: function () {
                return this.audioSourceId
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(n.PlatformEvent);
    t.AudioSourceEvent = r;
    var o = function (e) {
        function t(t) {
            return e.call(this, "AudioSourceInitializingEvent", t) || this
        }
        return __extends(t, e), t
    }(r);
    t.AudioSourceInitializingEvent = o;
    var i = function (e) {
        function t(t) {
            return e.call(this, "AudioSourceReadyEvent", t) || this
        }
        return __extends(t, e), t
    }(r);
    t.AudioSourceReadyEvent = i;
    var s = function (e) {
        function t(t) {
            return e.call(this, "AudioSourceOffEvent", t) || this
        }
        return __extends(t, e), t
    }(r);
    t.AudioSourceOffEvent = s;
    var c = function (e) {
        function t(t, r) {
            var o = e.call(this, "AudioSourceErrorEvent", t, n.EventType.Error) || this;
            return o.error = r, o
        }
        return __extends(t, e), Object.defineProperty(t.prototype, "Error", {
            get: function () {
                return this.error
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(r);
    t.AudioSourceErrorEvent = c;
    var u = function (e) {
        function t(t, n, r) {
            var o = e.call(this, t, n) || this;
            return o.audioNodeId = r, o
        }
        return __extends(t, e), Object.defineProperty(t.prototype, "AudioNodeId", {
            get: function () {
                return this.audioNodeId
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(r);
    t.AudioStreamNodeEvent = u;
    var a = function (e) {
        function t(t, n) {
            return e.call(this, "AudioStreamNodeAttachingEvent", t, n) || this
        }
        return __extends(t, e), t
    }(u);
    t.AudioStreamNodeAttachingEvent = a;
    var d = function (e) {
        function t(t, n) {
            return e.call(this, "AudioStreamNodeAttachedEvent", t, n) || this
        }
        return __extends(t, e), t
    }(u);
    t.AudioStreamNodeAttachedEvent = d;
    var f = function (e) {
        function t(t, n) {
            return e.call(this, "AudioStreamNodeDetachedEvent", t, n) || this
        }
        return __extends(t, e), t
    }(u);
    t.AudioStreamNodeDetachedEvent = f;
    var l = function (e) {
        function t(t, n, r) {
            var o = e.call(this, "AudioStreamNodeErrorEvent", t, n) || this;
            return o.error = r, o
        }
        return __extends(t, e), Object.defineProperty(t.prototype, "Error", {
            get: function () {
                return this.error
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(u);
    t.AudioStreamNodeErrorEvent = l
}), define("src/common/Error", ["require", "exports"], function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function (e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.name = "ArgumentNull", n.message = t, n
        }
        return __extends(t, e), t
    }(Error);
    t.ArgumentNullError = n;
    var r = function (e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.name = "InvalidOperation", n.message = t, n
        }
        return __extends(t, e), t
    }(Error);
    t.InvalidOperationError = r;
    var o = function (e) {
        function t(t, n) {
            var r = e.call(this, n) || this;
            return r.name = t + "ObjectDisposed", r.message = n, r
        }
        return __extends(t, e), t
    }(Error);
    t.ObjectDisposedError = o
}), define("src/common/ConnectionMessage", ["require", "exports", "src/common/Error", "src/common/Guid"], function (e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o;
    ! function (e) {
        e[e.Text = 0] = "Text", e[e.Binary = 1] = "Binary"
    }(o = t.MessageType || (t.MessageType = {}));
    var i = function () {
        function e(e, t, i, s) {
            if (this.body = null, e === o.Text && t && "string" != typeof t) throw new n.InvalidOperationError("Payload must be a string");
            if (e === o.Binary && t && !(t instanceof ArrayBuffer)) throw new n.InvalidOperationError("Payload must be ArrayBuffer");
            this.messageType = e, this.body = t, this.headers = i || {}, this.id = s || r.CreateNoDashGuid()
        }
        return Object.defineProperty(e.prototype, "MessageType", {
            get: function () {
                return this.messageType
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "Headers", {
            get: function () {
                return this.headers
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "Body", {
            get: function () {
                return this.body
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "TextBody", {
            get: function () {
                if (this.messageType === o.Binary) throw new n.InvalidOperationError("Not supported for binary message");
                return this.body
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "BinaryBody", {
            get: function () {
                if (this.messageType === o.Text) throw new n.InvalidOperationError("Not supported for text message");
                return this.body
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "Id", {
            get: function () {
                return this.id
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.ConnectionMessage = i
}), define("src/common/ConnectionEvents", ["require", "exports", "src/common/PlatformEvent"], function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function (e) {
        function t(t, r, o) {
            void 0 === o && (o = n.EventType.Info);
            var i = e.call(this, t, o) || this;
            return i.connectionId = r, i
        }
        return __extends(t, e), Object.defineProperty(t.prototype, "ConnectionId", {
            get: function () {
                return this.connectionId
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(n.PlatformEvent);
    t.ConnectionEvent = r;
    var o = function (e) {
        function t(t, n, r) {
            var o = e.call(this, "ConnectionStartEvent", t) || this;
            return o.uri = n, o.headers = r, o
        }
        return __extends(t, e), Object.defineProperty(t.prototype, "Uri", {
            get: function () {
                return this.uri
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "Headers", {
            get: function () {
                return this.headers
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(r);
    t.ConnectionStartEvent = o;
    var i = function (e) {
        function t(t, n) {
            return e.call(this, "ConnectionEstablishedEvent", t) || this
        }
        return __extends(t, e), t
    }(r);
    t.ConnectionEstablishedEvent = i;
    var s = function (e) {
        function t(t, r, o) {
            var i = e.call(this, "ConnectionClosedEvent", t, n.EventType.Warning) || this;
            return i.reason = o, i.statusCode = r, i
        }
        return __extends(t, e), Object.defineProperty(t.prototype, "Reason", {
            get: function () {
                return this.reason
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "StatusCode", {
            get: function () {
                return this.statusCode
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(r);
    t.ConnectionClosedEvent = s;
    var c = function (e) {
        function t(t, r, o) {
            var i = e.call(this, "ConnectionEstablishErrorEvent", t, n.EventType.Error) || this;
            return i.statusCode = r, i.reason = o, i
        }
        return __extends(t, e), Object.defineProperty(t.prototype, "Reason", {
            get: function () {
                return this.reason
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "StatusCode", {
            get: function () {
                return this.statusCode
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(r);
    t.ConnectionEstablishErrorEvent = c;
    var u = function (e) {
        function t(t, n, r) {
            var o = e.call(this, "ConnectionMessageReceivedEvent", t) || this;
            return o.networkReceivedTime = n, o.message = r, o
        }
        return __extends(t, e), Object.defineProperty(t.prototype, "NetworkReceivedTime", {
            get: function () {
                return this.networkReceivedTime
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "Message", {
            get: function () {
                return this.message
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(r);
    t.ConnectionMessageReceivedEvent = u;
    var a = function (e) {
        function t(t, n, r) {
            var o = e.call(this, "ConnectionMessageSentEvent", t) || this;
            return o.networkSentTime = n, o.message = r, o
        }
        return __extends(t, e), Object.defineProperty(t.prototype, "NetworkSentTime", {
            get: function () {
                return this.networkSentTime
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "Message", {
            get: function () {
                return this.message
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(r);
    t.ConnectionMessageSentEvent = a
}), define("src/common/ConnectionOpenResponse", ["require", "exports"], function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function () {
        function e(e, t) {
            this.statusCode = e, this.reason = t
        }
        return Object.defineProperty(e.prototype, "StatusCode", {
            get: function () {
                return this.statusCode
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "Reason", {
            get: function () {
                return this.reason
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.ConnectionOpenResponse = n
}), define("src/common/IDetachable", ["require", "exports"], function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}), define("src/common/IDisposable", ["require", "exports"], function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}), define("src/common/IEventSource", ["require", "exports"], function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}), define("src/common/EventSource", ["require", "exports", "src/common/Error", "src/common/Guid"], function (e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function () {
        function e(e) {
            var t = this;
            this.eventListeners = {}, this.isDisposed = !1, this.OnEvent = function (e) {
                if (t.IsDisposed()) throw new n.ObjectDisposedError("EventSource");
                if (t.Metadata)
                    for (var r in t.Metadata) r && e.Metadata && (e.Metadata[r] || (e.Metadata[r] = t.Metadata[r]));
                for (var o in t.eventListeners) o && t.eventListeners[o] && t.eventListeners[o](e)
            }, this.Attach = function (e) {
                var n = r.CreateNoDashGuid();
                return t.eventListeners[n] = e, {
                    Detach: function () {
                        delete t.eventListeners[n]
                    }
                }
            }, this.AttachListener = function (e) {
                return t.Attach(e.OnEvent)
            }, this.IsDisposed = function () {
                return t.isDisposed
            }, this.Dispose = function () {
                t.eventListeners = null, t.isDisposed = !0
            }, this.metadata = e
        }
        return Object.defineProperty(e.prototype, "Metadata", {
            get: function () {
                return this.metadata
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.EventSource = o
}), define("src/common/Events", ["require", "exports", "src/common/Error", "src/common/EventSource"], function (e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function () {
        function e() {}
        return Object.defineProperty(e, "Instance", {
            get: function () {
                return e.instance
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    o.instance = new r.EventSource, o.SetEventSource = function (e) {
        if (!e) throw new n.ArgumentNullError("eventSource");
        o.instance = e
    }, t.Events = o
}), define("src/common/Promise", ["require", "exports", "src/common/Error"], function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r;
    ! function (e) {
        e[e.None = 0] = "None", e[e.Resolved = 1] = "Resolved", e[e.Rejected = 2] = "Rejected"
    }(r = t.PromiseState || (t.PromiseState = {}));
    var o = function () {
        function e(e) {
            var t = this;
            this.ThrowIfError = function () {
                if (t.IsError) throw t.Error
            }, e.On(function (e) {
                t.isCompleted || (t.isCompleted = !0, t.isError = !1, t.result = e)
            }, function (e) {
                t.isCompleted || (t.isCompleted = !0, t.isError = !0, t.error = e)
            })
        }
        return Object.defineProperty(e.prototype, "IsCompleted", {
            get: function () {
                return this.isCompleted
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "IsError", {
            get: function () {
                return this.isError
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "Error", {
            get: function () {
                return this.error
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "Result", {
            get: function () {
                return this.result
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.PromiseResult = o;
    var i = function () {
        function e() {
            var e = this;
            this.SetResult = function (t) {
                e.onSetResult(t)
            }, this.SetError = function (t) {
                e.onSetError(t)
            }, this.On = function (t, n) {
                e.onSetResult = t, e.onSetError = n
            }
        }
        return e
    }();
    t.PromiseResultEventSource = i;
    var s = function () {
        function e() {}
        return e
    }();
    s.WhenAll = function (e) {
        if (!e || 0 === e.length) throw new n.ArgumentNullError("promises");
        for (var t = new u, r = [], o = 0, i = function () {
                ++o === e.length && (0 === r.length ? t.Resolve(!0) : t.Reject(r.join(", ")))
            }, s = 0, c = e; s < c.length; s++) {
            c[s].On(function (e) {
                i()
            }, function (e) {
                r.push(e), i()
            })
        }
        return t.Promise()
    }, s.FromResult = function (e) {
        var t = new u;
        return t.Resolve(e), t.Promise()
    }, s.FromError = function (e) {
        var t = new u;
        return t.Reject(e), t.Promise()
    }, t.PromiseHelper = s;
    var c = function () {
        function e(e) {
            var t = this;
            this.Result = function () {
                return t.sink.Result
            }, this.ContinueWith = function (e) {
                if (!e) throw new n.ArgumentNullError("continuationCallback");
                var r = new u;
                return t.sink.on(function (n) {
                    try {
                        var o = e(t.sink.Result);
                        r.Resolve(o)
                    } catch (e) {
                        r.Reject("'Unhandled callback error: " + e + "'")
                    }
                }, function (n) {
                    try {
                        var o = e(t.sink.Result);
                        r.Resolve(o)
                    } catch (e) {
                        r.Reject("'Unhandled callback error: " + e + ". InnerError: " + n + "'")
                    }
                }), r.Promise()
            }, this.OnSuccessContinueWith = function (e) {
                if (!e) throw new n.ArgumentNullError("continuationCallback");
                var r = new u;
                return t.sink.on(function (t) {
                    try {
                        var n = e(t);
                        r.Resolve(n)
                    } catch (e) {
                        r.Reject("'Unhandled callback error: " + e + "'")
                    }
                }, function (e) {
                    r.Reject("'Unhandled callback error: " + e + "'")
                }), r.Promise()
            }, this.ContinueWithPromise = function (e) {
                if (!e) throw new n.ArgumentNullError("continuationCallback");
                var r = new u;
                return t.sink.on(function (n) {
                    try {
                        var o = e(t.sink.Result);
                        if (!o) throw new Error("'Contuniation callback did not return promise'");
                        o.On(function (e) {
                            r.Resolve(e)
                        }, function (e) {
                            r.Reject(e)
                        })
                    } catch (e) {
                        r.Reject("'Unhandled callback error: " + e + "'")
                    }
                }, function (n) {
                    try {
                        var o = e(t.sink.Result);
                        if (!o) throw new Error("Contuniation callback did not return promise");
                        o.On(function (e) {
                            r.Resolve(e)
                        }, function (e) {
                            r.Reject(e)
                        })
                    } catch (e) {
                        r.Reject("'Unhandled callback error: " + e + ". InnerError: " + n + "'")
                    }
                }), r.Promise()
            }, this.OnSuccessContinueWithPromise = function (e) {
                if (!e) throw new n.ArgumentNullError("continuationCallback");
                var r = new u;
                return t.sink.on(function (t) {
                    try {
                        var n = e(t);
                        if (!n) throw new Error("Contuniation callback did not return promise");
                        n.On(function (e) {
                            r.Resolve(e)
                        }, function (e) {
                            r.Reject(e)
                        })
                    } catch (e) {
                        r.Reject("'Unhandled callback error: " + e + "'")
                    }
                }, function (e) {
                    r.Reject("'Unhandled callback error: " + e + ".'")
                }), r.Promise()
            }, this.On = function (e, r) {
                if (!e) throw new n.ArgumentNullError("successCallback");
                if (!r) throw new n.ArgumentNullError("errorCallback");
                return t.sink.on(e, r), t
            }, this.Finally = function (e) {
                if (!e) throw new n.ArgumentNullError("callback");
                var r = function (t) {
                    e()
                };
                return t.On(r, r)
            }, this.sink = e
        }
        return e
    }();
    t.Promise = c;
    var u = function () {
        function e() {
            var e = this;
            this.State = function () {
                return e.sink.State
            }, this.Promise = function () {
                return e.promise
            }, this.Resolve = function (t) {
                return e.sink.Resolve(t), e
            }, this.Reject = function (t) {
                return e.sink.Reject(t), e
            }, this.sink = new a, this.promise = new c(this.sink)
        }
        return e
    }();
    t.Deferred = u;
    var a = function () {
        function e() {
            var e = this;
            this.state = r.None, this.promiseResult = null, this.promiseResultEvents = null, this.successHandlers = [], this.errorHandlers = [], this.Resolve = function (t) {
                if (e.state !== r.None) throw new Error("'Cannot resolve a completed promise'");
                e.state = r.Resolved, e.promiseResultEvents.SetResult(t);
                for (var n = 0; n < e.successHandlers.length; n++) e.ExecuteSuccessCallback(t, e.successHandlers[n], e.errorHandlers[n]);
                e.DetachHandlers()
            }, this.Reject = function (t) {
                if (e.state !== r.None) throw new Error("'Cannot reject a completed promise'");
                e.state = r.Rejected, e.promiseResultEvents.SetError(t);
                for (var n = 0, o = e.errorHandlers; n < o.length; n++) {
                    var i = o[n];
                    e.ExecuteErrorCallback(t, i)
                }
                e.DetachHandlers()
            }, this.on = function (t, n) {
                null == t && (t = function (e) {}), e.state === r.None ? (e.successHandlers.push(t), e.errorHandlers.push(n)) : (e.state === r.Resolved ? e.ExecuteSuccessCallback(e.promiseResult.Result, t, n) : e.state === r.Rejected && e.ExecuteErrorCallback(e.promiseResult.Error, n), e.DetachHandlers())
            }, this.ExecuteSuccessCallback = function (t, n, r) {
                try {
                    n(t)
                } catch (t) {
                    e.ExecuteErrorCallback("'Unhandled callback error: " + t + "'", r)
                }
            }, this.ExecuteErrorCallback = function (e, t) {
                if (!t) throw new Error("'Unhandled error: " + e + "'");
                try {
                    t(e)
                } catch (t) {
                    throw new Error("'Unhandled callback error: " + t + ". InnerError: " + e + "'")
                }
            }, this.DetachHandlers = function () {
                e.errorHandlers = [], e.successHandlers = []
            }, this.promiseResultEvents = new i, this.promiseResult = new o(this.promiseResultEvents)
        }
        return Object.defineProperty(e.prototype, "State", {
            get: function () {
                return this.state
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "Result", {
            get: function () {
                return this.promiseResult
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.Sink = a
}), define("src/common/List", ["require", "exports", "src/common/Error"], function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function () {
        function e(t) {
            var r = this;
            if (this.subscriptionIdCounter = 0, this.addSubscriptions = {}, this.removeSubscriptions = {}, this.disposedSubscriptions = {}, this.disposeReason = null, this.Get = function (e) {
                    return r.ThrowIfDisposed(), r.list[e]
                }, this.First = function () {
                    return r.Get(0)
                }, this.Last = function () {
                    return r.Get(r.Length() - 1)
                }, this.Add = function (e) {
                    r.ThrowIfDisposed(), r.InsertAt(r.list.length, e)
                }, this.InsertAt = function (e, t) {
                    r.ThrowIfDisposed(), 0 === e ? r.list.unshift(t) : e === r.list.length ? r.list.push(t) : r.list.splice(e, 0, t), r.TriggerSubscriptions(r.addSubscriptions)
                }, this.RemoveFirst = function () {
                    return r.ThrowIfDisposed(), r.RemoveAt(0)
                }, this.RemoveLast = function () {
                    return r.ThrowIfDisposed(), r.RemoveAt(r.Length() - 1)
                }, this.RemoveAt = function (e) {
                    return r.ThrowIfDisposed(), r.Remove(e, 1)[0]
                }, this.Remove = function (e, t) {
                    r.ThrowIfDisposed();
                    var n = r.list.splice(e, t);
                    return r.TriggerSubscriptions(r.removeSubscriptions), n
                }, this.Clear = function () {
                    r.ThrowIfDisposed(), r.Remove(0, r.Length())
                }, this.Length = function () {
                    return r.ThrowIfDisposed(), r.list.length
                }, this.OnAdded = function (e) {
                    r.ThrowIfDisposed();
                    var t = r.subscriptionIdCounter++;
                    return r.addSubscriptions[t] = e, {
                        Detach: function () {
                            delete r.addSubscriptions[t]
                        }
                    }
                }, this.OnRemoved = function (e) {
                    r.ThrowIfDisposed();
                    var t = r.subscriptionIdCounter++;
                    return r.removeSubscriptions[t] = e, {
                        Detach: function () {
                            delete r.removeSubscriptions[t]
                        }
                    }
                }, this.OnDisposed = function (e) {
                    r.ThrowIfDisposed();
                    var t = r.subscriptionIdCounter++;
                    return r.disposedSubscriptions[t] = e, {
                        Detach: function () {
                            delete r.disposedSubscriptions[t]
                        }
                    }
                }, this.Join = function (e) {
                    return r.ThrowIfDisposed(), r.list.join(e)
                }, this.ToArray = function () {
                    var e = Array();
                    return r.list.forEach(function (t) {
                        e.push(t)
                    }), e
                }, this.Any = function (e) {
                    return r.ThrowIfDisposed(), e ? r.Where(e).Length() > 0 : r.Length() > 0
                }, this.All = function (e) {
                    return r.ThrowIfDisposed(), r.Where(e).Length() === r.Length()
                }, this.ForEach = function (e) {
                    r.ThrowIfDisposed();
                    for (var t = 0; t < r.Length(); t++) e(r.list[t], t)
                }, this.Select = function (t) {
                    r.ThrowIfDisposed();
                    for (var n = [], o = 0; o < r.list.length; o++) n.push(t(r.list[o], o));
                    return new e(n)
                }, this.Where = function (t) {
                    r.ThrowIfDisposed();
                    for (var n = new e, o = 0; o < r.list.length; o++) t(r.list[o], o) && n.Add(r.list[o]);
                    return n
                }, this.OrderBy = function (t) {
                    return r.ThrowIfDisposed(), new e(r.ToArray().sort(t))
                }, this.OrderByDesc = function (e) {
                    return r.ThrowIfDisposed(), r.OrderBy(function (t, n) {
                        return e(n, t)
                    })
                }, this.Clone = function () {
                    return r.ThrowIfDisposed(), new e(r.ToArray())
                }, this.Concat = function (t) {
                    return r.ThrowIfDisposed(), new e(r.list.concat(t.ToArray()))
                }, this.ConcatArray = function (t) {
                    return r.ThrowIfDisposed(), new e(r.list.concat(t))
                }, this.IsDisposed = function () {
                    return null == r.list
                }, this.Dispose = function (e) {
                    r.IsDisposed() || (r.disposeReason = e, r.list = null, r.addSubscriptions = null, r.removeSubscriptions = null, r.TriggerSubscriptions(r.disposedSubscriptions))
                }, this.ThrowIfDisposed = function () {
                    if (r.IsDisposed()) throw new n.ObjectDisposedError("List", r.disposeReason)
                }, this.TriggerSubscriptions = function (e) {
                    if (e)
                        for (var t in e) t && e[t]()
                }, this.list = [], t)
                for (var o = 0, i = t; o < i.length; o++) {
                    var s = i[o];
                    this.list.push(s)
                }
        }
        return e
    }();
    t.List = r
}), define("src/common/Queue", ["require", "exports", "src/common/Error", "src/common/List", "src/common/Promise"], function (e, t, n, r, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i;
    ! function (e) {
        e[e.Dequeue = 0] = "Dequeue", e[e.Peek = 1] = "Peek"
    }(i || (i = {}));
    var s = function () {
        function e(e) {
            var t = this;
            this.promiseStore = new r.List, this.isDrainInProgress = !1, this.isDisposing = !1, this.disposeReason = null, this.Enqueue = function (e) {
                t.ThrowIfDispose(), t.EnqueueFromPromise(o.PromiseHelper.FromResult(e))
            }, this.EnqueueFromPromise = function (e) {
                t.ThrowIfDispose(), t.promiseStore.Add(e), e.Finally(function () {
                    for (; t.promiseStore.Length() > 0 && t.promiseStore.First().Result().IsCompleted;) {
                        var e = t.promiseStore.RemoveFirst();
                        e.Result().IsError || t.list.Add(e.Result().Result)
                    }
                })
            }, this.Dequeue = function () {
                t.ThrowIfDispose();
                var e = new o.Deferred;
                return t.subscribers.Add({
                    deferral: e,
                    type: i.Dequeue
                }), t.Drain(), e.Promise()
            }, this.Peek = function () {
                t.ThrowIfDispose();
                var e = new o.Deferred;
                return t.subscribers.Add({
                    deferral: e,
                    type: i.Peek
                }), t.Drain(), e.Promise()
            }, this.Length = function () {
                return t.ThrowIfDispose(), t.list.Length()
            }, this.IsDisposed = function () {
                return null == t.subscribers
            }, this.DrainAndDispose = function (e, n) {
                if (!t.IsDisposed() && !t.isDisposing) {
                    for (t.disposeReason = n, t.isDisposing = !0; t.subscribers.Length() > 0;) {
                        t.subscribers.RemoveFirst().deferral.Reject("Disposed")
                    }
                    for (var r = 0, i = t.detachables; r < i.length; r++) {
                        i[r].Detach()
                    }
                    if (t.promiseStore.Length() > 0 && e) return o.PromiseHelper.WhenAll(t.promiseStore.ToArray()).ContinueWith(function () {
                        return t.subscribers = null, t.list.ForEach(function (t, n) {
                            e(t)
                        }), t.list = null, !0
                    });
                    t.subscribers = null, t.list = null
                }
                return o.PromiseHelper.FromResult(!0)
            }, this.Dispose = function (e) {
                t.DrainAndDispose(null, e)
            }, this.Drain = function () {
                if (!t.isDrainInProgress && !t.isDisposing) {
                    for (t.isDrainInProgress = !0; t.list.Length() > 0 && t.subscribers.Length() > 0 && !t.isDisposing;) {
                        var e = t.subscribers.RemoveFirst();
                        if (e.type === i.Peek) e.deferral.Resolve(t.list.First());
                        else {
                            var n = t.list.RemoveFirst();
                            e.deferral.Resolve(n)
                        }
                    }
                    t.isDrainInProgress = !1
                }
            }, this.ThrowIfDispose = function () {
                if (t.IsDisposed()) {
                    if (t.disposeReason) throw new n.InvalidOperationError(t.disposeReason);
                    throw new n.ObjectDisposedError("Queue")
                }
                if (t.isDisposing) throw new n.InvalidOperationError("Queue disposing")
            }, this.list = e || new r.List, this.detachables = [], this.subscribers = new r.List, this.detachables.push(this.list.OnAdded(this.Drain))
        }
        return e
    }();
    t.Queue = s
}), define("src/common/Stream", ["require", "exports", "src/common/Error", "src/common/Guid", "src/common/Queue"], function (e, t, n, r, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function () {
        function e(e) {
            var t = this;
            this.readerIdCounter = 1, this.isEnded = !1, this.Write = function (e) {
                t.ThrowIfClosed(), t.WriteStreamChunk({
                    Buffer: e,
                    IsEnd: !1
                })
            }, this.GetReader = function () {
                var e = t.readerIdCounter;
                t.readerIdCounter++;
                var n = new o.Queue,
                    r = t.streambuffer.length;
                t.readerQueues[e] = n;
                for (var i = 0; i < r; i++) n.Enqueue(t.streambuffer[i]);
                return new s(t.id, n, function () {
                    delete t.readerQueues[e]
                })
            }, this.Close = function () {
                t.isEnded || (t.WriteStreamChunk({
                    Buffer: null,
                    IsEnd: !0
                }), t.isEnded = !0)
            }, this.WriteStreamChunk = function (e) {
                t.ThrowIfClosed(), t.streambuffer.push(e);
                for (var n in t.readerQueues)
                    if (!t.readerQueues[n].IsDisposed()) try {
                        t.readerQueues[n].Enqueue(e)
                    } catch (e) {}
            }, this.ThrowIfClosed = function () {
                if (t.isEnded) throw new n.InvalidOperationError("Stream closed")
            }, this.id = e || r.CreateNoDashGuid(), this.streambuffer = [], this.readerQueues = {}
        }
        return Object.defineProperty(e.prototype, "IsClosed", {
            get: function () {
                return this.isEnded
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "Id", {
            get: function () {
                return this.id
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.Stream = i;
    var s = function () {
        function e(e, t, r) {
            var o = this;
            this.isClosed = !1, this.Read = function () {
                if (o.IsClosed) throw new n.InvalidOperationError("StreamReader closed");
                return o.readerQueue.Dequeue().OnSuccessContinueWith(function (e) {
                    return e.IsEnd && o.readerQueue.Dispose("End of stream reached"), e
                })
            }, this.Close = function () {
                o.isClosed || (o.isClosed = !0, o.readerQueue.Dispose("StreamReader closed"), o.onClose())
            }, this.readerQueue = t, this.onClose = r, this.streamId = e
        }
        return Object.defineProperty(e.prototype, "IsClosed", {
            get: function () {
                return this.isClosed
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "StreamId", {
            get: function () {
                return this.streamId
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.StreamReader = s
}), define("src/common/IAudioSource", ["require", "exports"], function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}), define("src/common/IConnection", ["require", "exports"], function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    ! function (e) {
        e[e.None = 0] = "None", e[e.Connected = 1] = "Connected", e[e.Connecting = 2] = "Connecting", e[e.Disconnected = 3] = "Disconnected"
    }(t.ConnectionState || (t.ConnectionState = {}))
}), define("src/common/IKeyValueStorage", ["require", "exports"], function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}), define("src/common/InMemoryStorage", ["require", "exports", "src/common/Error"], function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function () {
        function e() {
            var e = this;
            this.store = {}, this.Get = function (t) {
                if (!t) throw new n.ArgumentNullError("key");
                return e.store[t]
            }, this.GetOrAdd = function (t, r) {
                if (!t) throw new n.ArgumentNullError("key");
                return void 0 === e.store[t] && (e.store[t] = r), e.store[t]
            }, this.Set = function (t, r) {
                if (!t) throw new n.ArgumentNullError("key");
                e.store[t] = r
            }, this.Remove = function (t) {
                if (!t) throw new n.ArgumentNullError("key");
                void 0 !== e.store[t] && delete e.store[t]
            }
        }
        return e
    }();
    t.InMemoryStorage = r
}), define("src/common/ITimer", ["require", "exports"], function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}), define("src/common/RawWebsocketMessage", ["require", "exports", "src/common/ConnectionMessage", "src/common/Error", "src/common/Guid"], function (e, t, n, r, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function () {
        function e(e, t, i) {
            if (this.payload = null, !t) throw new r.ArgumentNullError("payload");
            if (e === n.MessageType.Binary && !(t instanceof ArrayBuffer)) throw new r.InvalidOperationError("Payload must be ArrayBuffer");
            if (e === n.MessageType.Text && "string" != typeof t) throw new r.InvalidOperationError("Payload must be a string");
            this.messageType = e, this.payload = t, this.id = i || o.CreateNoDashGuid()
        }
        return Object.defineProperty(e.prototype, "MessageType", {
            get: function () {
                return this.messageType
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "Payload", {
            get: function () {
                return this.payload
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "TextContent", {
            get: function () {
                if (this.messageType === n.MessageType.Binary) throw new r.InvalidOperationError("Not supported for binary message");
                return this.payload
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "BinaryContent", {
            get: function () {
                if (this.messageType === n.MessageType.Text) throw new r.InvalidOperationError("Not supported for text message");
                return this.payload
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "Id", {
            get: function () {
                return this.id
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.RawWebsocketMessage = i
}), define("src/common/IWebsocketMessageFormatter", ["require", "exports"], function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}), define("src/common/RiffPcmEncoder", ["require", "exports"], function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function () {
        function e(e, t) {
            var n = this;
            this.channelCount = 1, this.Encode = function (e, t) {
                var r = n.DownSampleAudioFrame(t, n.actualSampleRate, n.desiredSampleRate),
                    o = 2 * r.length;
                if (!e) {
                    var i = new ArrayBuffer(o),
                        s = new DataView(i);
                    return n.FloatTo16BitPCM(s, 0, r), i
                }
                var c = new ArrayBuffer(44 + o),
                    u = new DataView(c);
                return n.SetString(u, 0, "RIFF"), u.setUint32(4, 0, !0), n.SetString(u, 8, "WAVEfmt "), u.setUint32(16, 16, !0), u.setUint16(20, 1, !0), u.setUint16(22, n.channelCount, !0), u.setUint32(24, n.desiredSampleRate, !0), u.setUint32(28, n.desiredSampleRate * n.channelCount * 2, !0), u.setUint16(32, 2 * n.channelCount, !0), u.setUint16(34, 16, !0), n.SetString(u, 36, "data"), u.setUint32(40, 0, !0), n.FloatTo16BitPCM(u, 44, r), c
            }, this.SetString = function (e, t, n) {
                for (var r = 0; r < n.length; r++) e.setUint8(t + r, n.charCodeAt(r))
            }, this.FloatTo16BitPCM = function (e, t, n) {
                for (var r = 0; r < n.length; r++, t += 2) {
                    var o = Math.max(-1, Math.min(1, n[r]));
                    e.setInt16(t, o < 0 ? 32768 * o : 32767 * o, !0)
                }
            }, this.DownSampleAudioFrame = function (e, t, n) {
                if (n === t || n > t) return e;
                for (var r = t / n, o = Math.round(e.length / r), i = new Float32Array(o), s = 0, c = 0; s < i.length;) {
                    for (var u = Math.round((s + 1) * r), a = 0, d = 0, f = c; f < u && f < e.length; f++) a += e[f], d++;
                    i[s] = a / d, s++, c = u
                }
                return i
            }, this.actualSampleRate = e, this.desiredSampleRate = t
        }
        return e
    }();
    t.RiffPcmEncoder = n
}), define("src/common/Storage", ["require", "exports", "src/common/Error", "src/common/InMemoryStorage"], function (e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function () {
        function e() {}
        return Object.defineProperty(e, "Session", {
            get: function () {
                return e.sessionStorage
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "Local", {
            get: function () {
                return e.localStorage
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    o.sessionStorage = new r.InMemoryStorage, o.localStorage = new r.InMemoryStorage, o.SetSessionStorage = function (e) {
        if (!e) throw new n.ArgumentNullError("sessionStorage");
        o.sessionStorage = e
    }, o.SetLocalStorage = function (e) {
        if (!e) throw new n.ArgumentNullError("localStorage");
        o.localStorage = e
    }, t.Storage = o
}), define("src/common/Exports", ["require", "exports", "src/common/AudioSourceEvents", "src/common/ConnectionEvents", "src/common/ConnectionMessage", "src/common/ConnectionOpenResponse", "src/common/Error", "src/common/Events", "src/common/EventSource", "src/common/Guid", "src/common/IConnection", "src/common/InMemoryStorage", "src/common/List", "src/common/PlatformEvent", "src/common/Promise", "src/common/Queue", "src/common/RawWebsocketMessage", "src/common/RiffPcmEncoder", "src/common/Storage", "src/common/Stream"], function (e, t, n, r, o, i, s, c, u, a, d, f, l, h, p, m, v, g, b, y) {
    "use strict";

    function E(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), E(n), E(r), E(o), E(i), E(s), E(c), E(u), E(a), E(d), E(f), E(l), E(h), E(p), E(m), E(v), E(g), E(b), E(y)
}), define("src/common.browser/ConsoleLoggingListener", ["require", "exports", "src/common/Exports"], function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function () {
        function e(e) {
            void 0 === e && (e = n.EventType.Warning);
            var t = this;
            this.OnEvent = function (e) {
                if (e.EventType >= t.logLevelFilter) {
                    var r = t.ToString(e);
                    switch (e.EventType) {
                        case n.EventType.Debug:
                            console.debug(r);
                            break;
                        case n.EventType.Info:
                            console.info(r);
                            break;
                        case n.EventType.Warning:
                            console.warn(r);
                            break;
                        case n.EventType.Error:
                            console.error(r);
                            break;
                        default:
                            console.log(r)
                    }
                }
            }, this.ToString = function (e) {
                var t = ["" + e.EventTime, "" + e.Name];
                for (var n in e)
                    if (n && e.hasOwnProperty(n) && "eventTime" !== n && "eventType" !== n && "eventId" !== n && "name" !== n && "constructor" !== n) {
                        var r = e[n],
                            o = "<NULL>";
                        void 0 !== r && null !== r && (o = "number" == typeof r || "string" == typeof r ? r.toString() : JSON.stringify(r)), t.push(n + ": " + o)
                    }
                return t.join(" | ")
            }, this.logLevelFilter = e
        }
        return e
    }();
    t.ConsoleLoggingListener = r
}), define("src/common.browser/IRecorder", ["require", "exports"], function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}), define("src/common.browser/LocalStorage", ["require", "exports", "src/common/Exports"], function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function () {
        function e() {
            this.Get = function (e) {
                if (!e) throw new n.ArgumentNullError("key");
                return localStorage.getItem(e)
            }, this.GetOrAdd = function (e, t) {
                if (!e) throw new n.ArgumentNullError("key");
                var r = localStorage.getItem(e);
                return null !== r && void 0 !== r || localStorage.setItem(e, t), localStorage.getItem(e)
            }, this.Set = function (e, t) {
                if (!e) throw new n.ArgumentNullError("key");
                localStorage.setItem(e, t)
            }, this.Remove = function (e) {
                if (!e) throw new n.ArgumentNullError("key");
                localStorage.removeItem(e)
            }
        }
        return e
    }();
    t.LocalStorage = r
}), define("src/common.browser/MicAudioSource", ["require", "exports", "src/common/Exports"], function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function () {
        function e(e, t) {
            var r = this;
            this.streams = {}, this.TurnOn = function () {
                if (r.initializeDeferral) return r.initializeDeferral.Promise();
                r.initializeDeferral = new n.Deferred;
                window.navigator;
                if (window.navigator.getUserMedia = window.navigator.getUserMedia || window.navigator.webkitGetUserMedia || window.navigator.mozGetUserMedia || window.navigator.msGetUserMedia, window.navigator.getUserMedia) r.OnEvent(new n.AudioSourceInitializingEvent(r.id)), window.navigator.getUserMedia({
                    audio: !0
                }, function (e) {
                    r.mediaStream = e, r.OnEvent(new n.AudioSourceReadyEvent(r.id)), r.initializeDeferral.Resolve(!0)
                }, function (e) {
                    var t = "Error occured processing the user media stream. " + e;
                    r.initializeDeferral.Reject(t), r.OnEvent(new n.AudioSourceErrorEvent(r.id, t))
                });
                else {
                    var e = "Browser doesnot support getUserMedia.";
                    r.initializeDeferral.Reject(e), r.OnEvent(new n.AudioSourceErrorEvent(e, ""))
                }
                return r.initializeDeferral.Promise()
            }, this.Id = function () {
                return r.id
            }, this.Attach = function (e) {
                return r.OnEvent(new n.AudioStreamNodeAttachingEvent(r.id, e)), r.Listen(e).OnSuccessContinueWith(function (t) {
                    return r.OnEvent(new n.AudioStreamNodeAttachedEvent(r.id, e)), {
                        Detach: function () {
                            t.Close(), delete r.streams[e], r.OnEvent(new n.AudioStreamNodeDetachedEvent(r.id, e)), r.TurnOff()
                        },
                        Id: function () {
                            return e
                        },
                        Read: function () {
                            return t.Read()
                        }
                    }
                })
            }, this.Detach = function (e) {
                e && r.streams[e] && (r.streams[e].Close(), delete r.streams[e], r.OnEvent(new n.AudioStreamNodeDetachedEvent(r.id, e)))
            }, this.TurnOff = function () {
                for (var e in r.streams)
                    if (e) {
                        var t = r.streams[e];
                        t && t.Close()
                    }
                return r.recorder.ReleaseMediaResources(), r.OnEvent(new n.AudioSourceOffEvent(r.id)), r.initializeDeferral = null, n.PromiseHelper.FromResult(!0)
            }, this.Listen = function (e) {
                return r.TurnOn().OnSuccessContinueWith(function (t) {
                    var o = new n.Stream(e);
                    r.streams[e] = o;
                    try {
                        r.recorder.Record(r.mediaStream, o)
                    } catch (t) {
                        var i = "Error occured processing the user media stream. " + t;
                        r.initializeDeferral.Reject(i), r.OnEvent(new n.AudioStreamNodeErrorEvent(r.id, e, t))
                    }
                    return o.GetReader()
                })
            }, this.OnEvent = function (e) {
                r.events.OnEvent(e), n.Events.Instance.OnEvent(e)
            }, this.id = t || n.CreateNoDashGuid(), this.events = new n.EventSource, this.recorder = e
        }
        return Object.defineProperty(e.prototype, "Events", {
            get: function () {
                return this.events
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.MicAudioSource = r
}), define("src/common.browser/OpusRecorder", ["require", "exports"], function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function () {
        function e(e) {
            var t = this;
            this.Record = function (e, n) {
                var r = new MediaRecorder(e, t.mediaRecorderOptions);
                r.ondataavailable = function (e) {
                    if (n) {
                        var t = new FileReader;
                        t.readAsArrayBuffer(e.data), t.onloadend = function (e) {
                            n.Write(t.result)
                        }
                    }
                }, t.mediaResources = {
                    recorder: r,
                    stream: e
                }, r.start(100)
            }, this.ReleaseMediaResources = function () {
                "inactive" !== t.mediaResources.recorder.state && t.mediaResources.recorder.stop(), t.mediaResources.stream.getTracks().forEach(function (e) {
                    return e.stop()
                })
            }, this.mediaRecorderOptions = e
        }
        return e
    }();
    t.OpusRecorder = n
}), define("src/common.browser/PCMRecorder", ["require", "exports", "src/common/Exports"], function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function () {
        function e() {
            var e = this;
            this.Record = function (t, r) {
                var o = new AudioContext,
                    i = o.createMediaStreamSource(t),
                    s = 2048,
                    c = !1;
                64e3 <= i.context.sampleRate ? s = 8192 : 32e3 <= i.context.sampleRate && (s = 4096);
                var u = i.context.createScriptProcessor(s, 1, 1),
                    a = new n.RiffPcmEncoder(i.context.sampleRate, 16e3);
                u.onaudioprocess = function (e) {
                    var t, n, o = e.inputBuffer.getChannelData(0);
                    r && (c ? (n || (n = a.Encode(!1, o)), r.Write(n)) : (t || (t = a.Encode(!0, o)), r.Write(t), c = !0))
                }, e.mediaResources = {
                    context: o,
                    scriptProcessorNode: u,
                    source: i,
                    stream: t
                }, i.connect(u), u.connect(i.context.destination)
            }, this.ReleaseMediaResources = function () {
                e.mediaResources && (e.mediaResources.scriptProcessorNode && (e.mediaResources.scriptProcessorNode.disconnect(), e.mediaResources.scriptProcessorNode = null), e.mediaResources.source && (e.mediaResources.source.disconnect(), e.mediaResources.stream.getTracks().forEach(function (e) {
                    return e.stop()
                }), e.mediaResources.source = null), e.mediaResources.context && "closed" !== e.mediaResources.context.state && e.mediaResources.context.close())
            }
        }
        return e
    }();
    t.PcmRecorder = r
}), define("src/common.browser/SessionStorage", ["require", "exports", "src/common/Exports"], function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function () {
        function e() {
            this.Get = function (e) {
                if (!e) throw new n.ArgumentNullError("key");
                return sessionStorage.getItem(e)
            }, this.GetOrAdd = function (e, t) {
                if (!e) throw new n.ArgumentNullError("key");
                var r = sessionStorage.getItem(e);
                return null !== r && void 0 !== r || sessionStorage.setItem(e, t), sessionStorage.getItem(e)
            }, this.Set = function (e, t) {
                if (!e) throw new n.ArgumentNullError("key");
                sessionStorage.setItem(e, t)
            }, this.Remove = function (e) {
                if (!e) throw new n.ArgumentNullError("key");
                sessionStorage.removeItem(e)
            }
        }
        return e
    }();
    t.SessionStorage = r
}), define("src/common.browser/Timer", ["require", "exports"], function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function () {
        function e(e, t) {
            var n = this;
            this.start = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                n.timerId && n.stop(), n.timerId = setTimeout(n.successCallback, n.delayInMillisec, e)
            }, this.stop = function () {
                clearTimeout(n.timerId)
            }, this.delayInMillisec = e, this.successCallback = t
        }
        return e
    }();
    t.Timer = n
}), define("src/common.browser/WebsocketMessageAdapter", ["require", "exports", "src/common/Exports"], function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function () {
        function e(e, t, r) {
            var o = this;
            if (this.Open = function () {
                    return o.connectionState === n.ConnectionState.Disconnected ? n.PromiseHelper.FromError("Cannot open a connection that is in " + o.connectionState + " state") : o.connectionEstablishDeferral ? o.connectionEstablishDeferral.Promise() : (o.connectionEstablishDeferral = new n.Deferred, o.connectionState = n.ConnectionState.Connecting, o.websocketClient = new WebSocket(o.uri), o.receivingMessageQueue = new n.Queue, o.disconnectDeferral = new n.Deferred, o.sendMessageQueue = new n.Queue, o.ProcessSendQueue(), o.OnEvent(new n.ConnectionStartEvent(o.connectionId, o.uri)), o.websocketClient.onopen = function (e) {
                        o.connectionState = n.ConnectionState.Connected, o.OnEvent(new n.ConnectionEstablishedEvent(o.connectionId)), o.connectionEstablishDeferral.Resolve(new n.ConnectionOpenResponse(200, ""))
                    }, o.websocketClient.onerror = function (e) {
                        o.connectionState, n.ConnectionState.Connecting
                    }, o.websocketClient.onclose = function (e) {
                        o.connectionState === n.ConnectionState.Connecting ? (o.connectionState = n.ConnectionState.Disconnected, o.OnEvent(new n.ConnectionEstablishErrorEvent(o.connectionId, e.code, e.reason)), o.connectionEstablishDeferral.Resolve(new n.ConnectionOpenResponse(e.code, e.reason))) : o.OnEvent(new n.ConnectionClosedEvent(o.connectionId, e.code, e.reason)), o.OnClose(e.code, e.reason)
                    }, o.websocketClient.onmessage = function (e) {
                        var t = (new Date).toISOString();
                        if (o.connectionState === n.ConnectionState.Connected) {
                            var r = new n.Deferred;
                            if (o.receivingMessageQueue.EnqueueFromPromise(r.Promise()), e.data instanceof Blob) {
                                var i = new FileReader;
                                i.onload = function (e) {
                                    var s = new n.RawWebsocketMessage(n.MessageType.Binary, i.result);
                                    o.messageFormatter.ToConnectionMessage(s).On(function (e) {
                                        o.OnEvent(new n.ConnectionMessageReceivedEvent(o.connectionId, t, e)), r.Resolve(e)
                                    }, function (e) {
                                        r.Reject("Invalid binary message format. Error: " + e)
                                    })
                                }, i.onerror = function (e) {
                                    r.Reject("Binary message parse error")
                                }, i.readAsArrayBuffer(e.data)
                            } else {
                                var s = new n.RawWebsocketMessage(n.MessageType.Text, e.data);
                                o.messageFormatter.ToConnectionMessage(s).On(function (e) {
                                    o.OnEvent(new n.ConnectionMessageReceivedEvent(o.connectionId, t, e)), r.Resolve(e)
                                }, function (e) {
                                    r.Reject("Invalid text message format. Error: " + e)
                                })
                            }
                        }
                    }, o.connectionEstablishDeferral.Promise())
                }, this.Send = function (e) {
                    if (o.connectionState !== n.ConnectionState.Connected) return n.PromiseHelper.FromError("Cannot send on connection that is in " + o.connectionState + " state");
                    var t = new n.Deferred,
                        r = new n.Deferred;
                    return o.sendMessageQueue.EnqueueFromPromise(r.Promise()), o.messageFormatter.FromConnectionMessage(e).On(function (n) {
                        r.Resolve({
                            Message: e,
                            RawWebsocketMessage: n,
                            SendStatusDeferral: t
                        })
                    }, function (e) {
                        r.Reject("Error formatting the message. " + e)
                    }), t.Promise()
                }, this.Read = function () {
                    return o.connectionState !== n.ConnectionState.Connected ? n.PromiseHelper.FromError("Cannot read on connection that is in " + o.connectionState + " state") : o.receivingMessageQueue.Dequeue()
                }, this.Close = function (e) {
                    if (!o.websocketClient) {
                        var t = new n.Deferred;
                        return t.Resolve(!0), t.Promise()
                    }
                    return o.connectionState !== n.ConnectionState.Connected && o.websocketClient.close(1e3, e || "Normal closure by client"), o.disconnectDeferral.Promise()
                }, this.SendRawMessage = function (e) {
                    try {
                        return o.OnEvent(new n.ConnectionMessageSentEvent(o.connectionId, (new Date).toISOString(), e.Message)), o.websocketClient.send(e.RawWebsocketMessage.Payload), n.PromiseHelper.FromResult(!0)
                    } catch (e) {
                        return n.PromiseHelper.FromError("websocket send error: " + e)
                    }
                }, this.OnClose = function (e, t) {
                    var r = "Connection closed. " + e + ": " + t;
                    o.connectionState = n.ConnectionState.Disconnected, o.disconnectDeferral.Resolve(!0), o.receivingMessageQueue.Dispose(t), o.receivingMessageQueue.DrainAndDispose(function (e) {}, r), o.sendMessageQueue.DrainAndDispose(function (e) {
                        e.SendStatusDeferral.Reject(r)
                    }, r)
                }, this.ProcessSendQueue = function () {
                    o.sendMessageQueue.Dequeue().On(function (e) {
                        o.SendRawMessage(e).On(function (t) {
                            e.SendStatusDeferral.Resolve(t), o.ProcessSendQueue()
                        }, function (t) {
                            e.SendStatusDeferral.Reject(t), o.ProcessSendQueue()
                        })
                    }, function (e) {})
                }, this.OnEvent = function (e) {
                    o.connectionEvents.OnEvent(e), n.Events.Instance.OnEvent(e)
                }, !e) throw new n.ArgumentNullError("uri");
            if (!r) throw new n.ArgumentNullError("messageFormatter");
            this.connectionEvents = new n.EventSource, this.connectionId = t, this.messageFormatter = r, this.connectionState = n.ConnectionState.None, this.uri = e
        }
        return Object.defineProperty(e.prototype, "State", {
            get: function () {
                return this.connectionState
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "Events", {
            get: function () {
                return this.connectionEvents
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.WebsocketMessageAdapter = r
}), define("src/common.browser/WebsocketConnection", ["require", "exports", "src/common/Exports", "src/common.browser/WebsocketMessageAdapter"], function (e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function () {
        function e(e, t, o, i, s) {
            var c = this;
            if (this.isDisposed = !1, this.Dispose = function () {
                    c.isDisposed = !0, c.connectionMessageAdapter && c.connectionMessageAdapter.Close()
                }, this.IsDisposed = function () {
                    return c.isDisposed
                }, this.State = function () {
                    return c.connectionMessageAdapter.State
                }, this.Open = function () {
                    return c.connectionMessageAdapter.Open()
                }, this.Send = function (e) {
                    return c.connectionMessageAdapter.Send(e)
                }, this.Read = function () {
                    return c.connectionMessageAdapter.Read()
                }, !e) throw new n.ArgumentNullError("uri");
            if (!i) throw new n.ArgumentNullError("messageFormatter");
            this.messageFormatter = i;
            var u = "",
                a = 0;
            if (t)
                for (var d in t)
                    if (d) {
                        u += 0 === a ? "?" : "&";
                        var f = encodeURIComponent(t[d]);
                        u += d + "=" + f, a++
                    }
            if (o)
                for (var l in o)
                    if (l) {
                        u += 0 === a ? "?" : "&";
                        var f = encodeURIComponent(o[l]);
                        u += l + "=" + f, a++
                    }
            this.uri = e + u, this.id = s || n.CreateNoDashGuid(), this.connectionMessageAdapter = new r.WebsocketMessageAdapter(this.uri, this.Id, this.messageFormatter)
        }
        return Object.defineProperty(e.prototype, "Id", {
            get: function () {
                return this.id
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "Events", {
            get: function () {
                return this.connectionMessageAdapter.Events
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.WebsocketConnection = o
}), define("src/common.browser/Exports", ["require", "exports", "src/common.browser/ConsoleLoggingListener", "src/common.browser/LocalStorage", "src/common.browser/MicAudioSource", "src/common.browser/OpusRecorder", "src/common.browser/PCMRecorder", "src/common.browser/SessionStorage", "src/common.browser/Timer", "src/common.browser/WebsocketConnection", "src/common.browser/WebsocketMessageAdapter"], function (e, t, n, r, o, i, s, c, u, a, d) {
    "use strict";

    function f(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), f(n), f(r), f(o), f(i), f(s), f(c), f(u), f(a), f(d)
}), define("src/sdk/speech/IAuthentication", ["require", "exports"], function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function () {
        function e(e, t) {
            this.headerName = e, this.token = t
        }
        return Object.defineProperty(e.prototype, "HeaderName", {
            get: function () {
                return this.headerName
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "Token", {
            get: function () {
                return this.token
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.AuthInfo = n
}), define("src/sdk/speech/CognitiveSubscriptionKeyAuthentication", ["require", "exports", "src/common/Exports", "src/sdk/speech/IAuthentication"], function (e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = "Ocp-Apim-Subscription-Key",
        i = function () {
            function e(e) {
                var t = this;
                if (this.Fetch = function (e) {
                        return n.PromiseHelper.FromResult(t.authInfo)
                    }, this.FetchOnExpiry = function (e) {
                        return n.PromiseHelper.FromResult(t.authInfo)
                    }, !e) throw new n.ArgumentNullError("subscriptionKey");
                this.authInfo = new r.AuthInfo(o, e)
            }
            return e
        }();
    t.CognitiveSubscriptionKeyAuthentication = i
}), define("src/sdk/speech/CognitiveTokenAuthentication", ["require", "exports", "src/common/Exports", "src/sdk/speech/IAuthentication"], function (e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = "Authorization",
        i = function () {
            function e(e, t) {
                var i = this;
                if (this.Fetch = function (e) {
                        return i.fetchCallback(e).OnSuccessContinueWith(function (e) {
                            return new r.AuthInfo(o, e)
                        })
                    }, this.FetchOnExpiry = function (e) {
                        return i.fetchOnExpiryCallback(e).OnSuccessContinueWith(function (e) {
                            return new r.AuthInfo(o, e)
                        })
                    }, !e) throw new n.ArgumentNullError("fetchCallback");
                if (!t) throw new n.ArgumentNullError("fetchOnExpiryCallback");
                this.fetchCallback = e, this.fetchOnExpiryCallback = t
            }
            return e
        }();
    t.CognitiveTokenAuthentication = i
}), define("src/sdk/speech/RecognizerConfig", ["require", "exports"], function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n;
    ! function (e) {
        e[e.Interactive = 0] = "Interactive", e[e.Conversation = 1] = "Conversation", e[e.Dictation = 2] = "Dictation"
    }(n = t.RecognitionMode || (t.RecognitionMode = {}));
    var r;
    ! function (e) {
        e[e.Simple = 0] = "Simple", e[e.Detailed = 1] = "Detailed"
    }(r = t.SpeechResultFormat || (t.SpeechResultFormat = {}));
    var o = function () {
        function e(e, t, o, c) {
            void 0 === t && (t = n.Interactive), void 0 === o && (o = "en-us"), void 0 === c && (c = r.Simple), this.recognitionMode = n.Interactive, this.speechConfig = e || new i(new s(null, null)), this.recognitionMode = t, this.language = o, this.format = c, this.recognitionActivityTimeout = t === n.Interactive ? 8e3 : 25e3
        }
        return Object.defineProperty(e.prototype, "RecognitionMode", {
            get: function () {
                return this.recognitionMode
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "Language", {
            get: function () {
                return this.language
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "Format", {
            get: function () {
                return this.format
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "SpeechConfig", {
            get: function () {
                return this.speechConfig
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "RecognitionActivityTimeout", {
            get: function () {
                return this.recognitionActivityTimeout
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "IsContinuousRecognition", {
            get: function () {
                return this.recognitionMode !== n.Interactive
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.RecognizerConfig = o;
    var i = function () {
        function e(e) {
            var t = this;
            this.Serialize = function () {
                return JSON.stringify(t, function (e, t) {
                    if (t && "object" == typeof t) {
                        var n = {};
                        for (var r in t) Object.hasOwnProperty.call(t, r) && (n[r && r.charAt(0).toLowerCase() + r.substring(1)] = t[r]);
                        return n
                    }
                    return t
                })
            }, this.context = e
        }
        return Object.defineProperty(e.prototype, "Context", {
            get: function () {
                return this.context
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.SpeechConfig = i;
    var s = function () {
        function e(e, t) {
            this.system = new c, this.os = e, this.device = t
        }
        return Object.defineProperty(e.prototype, "System", {
            get: function () {
                return this.system
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "OS", {
            get: function () {
                return this.os
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "Device", {
            get: function () {
                return this.device
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.Context = s;
    var c = function () {
        function e() {
            this.version = "1.0.00000"
        }
        return Object.defineProperty(e.prototype, "Version", {
            get: function () {
                return this.version
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.System = c;
    var u = function () {
        function e(e, t, n) {
            this.platform = e, this.name = t, this.version = n
        }
        return Object.defineProperty(e.prototype, "Platform", {
            get: function () {
                return this.platform
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "Name", {
            get: function () {
                return this.name
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "Version", {
            get: function () {
                return this.version
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.OS = u;
    var a = function () {
        function e(e, t, n) {
            this.manufacturer = e, this.model = t, this.version = n
        }
        return Object.defineProperty(e.prototype, "Manufacturer", {
            get: function () {
                return this.manufacturer
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "Model", {
            get: function () {
                return this.model
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "Version", {
            get: function () {
                return this.version
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.Device = a
}), define("src/sdk/speech/IConnectionFactory", ["require", "exports"], function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}), define("src/sdk/speech/SpeechResults", ["require", "exports"], function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    ! function (e) {
        e[e.Success = 0] = "Success", e[e.NoMatch = 1] = "NoMatch", e[e.InitialSilenceTimeout = 2] = "InitialSilenceTimeout", e[e.BabbleTimeout = 3] = "BabbleTimeout", e[e.Error = 4] = "Error", e[e.EndOfDictation = 5] = "EndOfDictation"
    }(t.RecognitionStatus || (t.RecognitionStatus = {}))
}), define("src/sdk/speech/RecognitionEvents", ["require", "exports", "src/common/Exports"], function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function (e) {
        function t(t, r, o) {
            void 0 === o && (o = n.EventType.Info);
            var i = e.call(this, t, o) || this;
            return i.requestId = r, i
        }
        return __extends(t, e), Object.defineProperty(t.prototype, "RequestId", {
            get: function () {
                return this.requestId
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(n.PlatformEvent);
    t.SpeechRecognitionEvent = r;
    var o = function (e) {
        function t(t, n, r) {
            var o = e.call(this, t, n) || this;
            return o.result = r, o
        }
        return __extends(t, e), Object.defineProperty(t.prototype, "Result", {
            get: function () {
                return this.result
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(r);
    t.SpeechRecognitionResultEvent = o;
    var i = function (e) {
        function t(t, n, r) {
            var o = e.call(this, "RecognitionTriggeredEvent", t) || this;
            return o.audioSourceId = n, o.audioNodeId = r, o
        }
        return __extends(t, e), Object.defineProperty(t.prototype, "AudioSourceId", {
            get: function () {
                return this.audioSourceId
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "AudioNodeId", {
            get: function () {
                return this.audioNodeId
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(r);
    t.RecognitionTriggeredEvent = i;
    var s = function (e) {
        function t(t, n, r) {
            var o = e.call(this, "ListeningStartedEvent", t) || this;
            return o.audioSourceId = n, o.audioNodeId = r, o
        }
        return __extends(t, e), Object.defineProperty(t.prototype, "AudioSourceId", {
            get: function () {
                return this.audioSourceId
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "AudioNodeId", {
            get: function () {
                return this.audioNodeId
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(r);
    t.ListeningStartedEvent = s;
    var c = function (e) {
        function t(t, n, r) {
            var o = e.call(this, "ConnectingToServiceEvent", t) || this;
            return o.authFetchEventid = n, o.connectionId = r, o
        }
        return __extends(t, e), Object.defineProperty(t.prototype, "AuthFetchEventid", {
            get: function () {
                return this.authFetchEventid
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "ConnectionId", {
            get: function () {
                return this.connectionId
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(r);
    t.ConnectingToServiceEvent = c;
    var u = function (e) {
        function t(t, n, r, o, i) {
            var s = e.call(this, "RecognitionStartedEvent", t) || this;
            return s.audioSourceId = n, s.audioNodeId = r, s.authFetchEventId = o, s.connectionId = i, s
        }
        return __extends(t, e), Object.defineProperty(t.prototype, "AudioSourceId", {
            get: function () {
                return this.audioSourceId
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "AudioNodeId", {
            get: function () {
                return this.audioNodeId
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "AuthFetchEventId", {
            get: function () {
                return this.authFetchEventId
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "ConnectionId", {
            get: function () {
                return this.connectionId
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(r);
    t.RecognitionStartedEvent = u;
    var a = function (e) {
        function t(t, n) {
            return e.call(this, "SpeechStartDetectedEvent", t, n) || this
        }
        return __extends(t, e), t
    }(o);
    t.SpeechStartDetectedEvent = a;
    var d = function (e) {
        function t(t, n) {
            return e.call(this, "SpeechHypothesisEvent", t, n) || this
        }
        return __extends(t, e), t
    }(o);
    t.SpeechHypothesisEvent = d;
    var f = function (e) {
        function t(t, n) {
            return e.call(this, "SpeechEndDetectedEvent", t, n) || this
        }
        return __extends(t, e), t
    }(o);
    t.SpeechEndDetectedEvent = f;
    var l = function (e) {
        function t(t, n) {
            return e.call(this, "SpeechSimplePhraseEvent", t, n) || this
        }
        return __extends(t, e), t
    }(o);
    t.SpeechSimplePhraseEvent = l;
    var h = function (e) {
        function t(t, n) {
            return e.call(this, "SpeechDetailedPhraseEvent", t, n) || this
        }
        return __extends(t, e), t
    }(o);
    t.SpeechDetailedPhraseEvent = h;
    var p;
    ! function (e) {
        e[e.Success = 0] = "Success", e[e.AudioSourceError = 1] = "AudioSourceError", e[e.AudioSourceTimeout = 2] = "AudioSourceTimeout", e[e.AuthTokenFetchError = 3] = "AuthTokenFetchError", e[e.AuthTokenFetchTimeout = 4] = "AuthTokenFetchTimeout", e[e.UnAuthorized = 5] = "UnAuthorized", e[e.ConnectTimeout = 6] = "ConnectTimeout", e[e.ConnectError = 7] = "ConnectError", e[e.ClientRecognitionActivityTimeout = 8] = "ClientRecognitionActivityTimeout", e[e.UnknownError = 9] = "UnknownError"
    }(p = t.RecognitionCompletionStatus || (t.RecognitionCompletionStatus = {}));
    var m = function (e) {
        function t(t, r, o, i, s, c, u, a) {
            var d = e.call(this, "RecognitionEndedEvent", t, u === p.Success ? n.EventType.Info : n.EventType.Error) || this;
            return d.audioSourceId = r, d.audioNodeId = o, d.connectionId = s, d.authFetchEventId = i, d.serviceTag = c, d
        }
        return __extends(t, e), Object.defineProperty(t.prototype, "AudioSourceId", {
            get: function () {
                return this.audioSourceId
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "AudioNodeId", {
            get: function () {
                return this.audioNodeId
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "AuthFetchEventId", {
            get: function () {
                return this.authFetchEventId
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "ConnectionId", {
            get: function () {
                return this.connectionId
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "ServiceTag", {
            get: function () {
                return this.serviceTag
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "Status", {
            get: function () {
                return this.status
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "Error", {
            get: function () {
                return this.error
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(r);
    t.RecognitionEndedEvent = m
}), define("src/sdk/speech/ServiceTelemetryListener.Internal", ["require", "exports", "src/common/Exports", "src/sdk/speech/RecognitionEvents"], function (e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function () {
        function e(e, t, o) {
            var i = this;
            this.isDisposed = !1, this.listeningTriggerMetric = null, this.micMetric = null, this.connectionEstablishMetric = null, this.OnEvent = function (e) {
                i.isDisposed || (e instanceof r.RecognitionTriggeredEvent && e.RequestId === i.requestId && (i.listeningTriggerMetric = {
                    End: e.EventTime,
                    Name: "ListeningTrigger",
                    Start: e.EventTime
                }), e instanceof n.AudioStreamNodeAttachingEvent && e.AudioSourceId === i.audioSourceId && e.AudioNodeId === i.audioNodeId && (i.micStartTime = e.EventTime), e instanceof n.AudioStreamNodeAttachedEvent && e.AudioSourceId === i.audioSourceId && e.AudioNodeId === i.audioNodeId && (i.micStartTime = e.EventTime), e instanceof n.AudioSourceErrorEvent && e.AudioSourceId === i.audioSourceId && (i.micMetric || (i.micMetric = {
                    End: e.EventTime,
                    Error: e.Error,
                    Name: "Microphone",
                    Start: i.micStartTime
                })), e instanceof n.AudioStreamNodeErrorEvent && e.AudioSourceId === i.audioSourceId && e.AudioNodeId === i.audioNodeId && (i.micMetric || (i.micMetric = {
                    End: e.EventTime,
                    Error: e.Error,
                    Name: "Microphone",
                    Start: i.micStartTime
                })), e instanceof n.AudioStreamNodeDetachedEvent && e.AudioSourceId === i.audioSourceId && e.AudioNodeId === i.audioNodeId && (i.micMetric || (i.micMetric = {
                    End: e.EventTime,
                    Name: "Microphone",
                    Start: i.micStartTime
                })), e instanceof r.ConnectingToServiceEvent && e.RequestId === i.requestId && (i.connectionId = e.ConnectionId), e instanceof n.ConnectionStartEvent && e.ConnectionId === i.connectionId && (i.connectionStartTime = e.EventTime), e instanceof n.ConnectionEstablishedEvent && e.ConnectionId === i.connectionId && (i.connectionEstablishMetric || (i.connectionEstablishMetric = {
                    End: e.EventTime,
                    Id: i.connectionId,
                    Name: "Connection",
                    Start: i.connectionStartTime
                })), e instanceof n.ConnectionEstablishErrorEvent && e.ConnectionId === i.connectionId && (i.connectionEstablishMetric || (i.connectionEstablishMetric = {
                    End: e.EventTime,
                    Error: i.GetConnectionError(e.StatusCode),
                    Id: i.connectionId,
                    Name: "Connection",
                    Start: i.connectionStartTime
                })), e instanceof n.ConnectionMessageReceivedEvent && e.ConnectionId === i.connectionId && e.Message && e.Message.Headers && e.Message.Headers.path && (i.receivedMessages[e.Message.Headers.path] || (i.receivedMessages[e.Message.Headers.path] = new Array), i.receivedMessages[e.Message.Headers.path].push(e.NetworkReceivedTime)))
            }, this.GetTelemetry = function () {
                var e = new Array;
                i.listeningTriggerMetric && e.push(i.listeningTriggerMetric), i.micMetric && e.push(i.micMetric), i.connectionEstablishMetric && e.push(i.connectionEstablishMetric);
                var t = {
                        Metrics: e,
                        ReceivedMessages: i.receivedMessages
                    },
                    n = JSON.stringify(t);
                return i.receivedMessages = {}, i.listeningTriggerMetric = null, i.micMetric = null, i.connectionEstablishMetric = null, n
            }, this.Dispose = function () {
                i.isDisposed = !0
            }, this.GetConnectionError = function (e) {
                switch (e) {
                    case 400:
                    case 1002:
                    case 1003:
                    case 1005:
                    case 1007:
                    case 1008:
                    case 1009:
                        return "BadRequest";
                    case 401:
                        return "Unauthorized";
                    case 403:
                        return "Forbidden";
                    case 503:
                    case 1001:
                        return "ServerUnavailable";
                    case 500:
                    case 1011:
                        return "ServerError";
                    case 408:
                    case 504:
                        return "Timeout";
                    default:
                        return "statuscode:" + e.toString()
                }
            }, this.requestId = e, this.audioSourceId = t, this.audioNodeId = o, this.receivedMessages = {}
        }
        return e
    }();
    t.ServiceTelemetryListener = o
}), define("src/sdk/speech/SpeechConnectionMessage.Internal", ["require", "exports", "src/common/Exports"], function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = "path",
        o = "content-type",
        i = "x-requestid",
        s = "x-timestamp",
        c = function (e) {
            function t(t, c, u, a, d, f, l) {
                var h = this;
                if (!c) throw new n.ArgumentNullError("path");
                if (!u) throw new n.ArgumentNullError("requestId");
                var p = {};
                if (p[r] = c, p[i] = u, p[s] = (new Date).toISOString(), a && (p[o] = a), f)
                    for (var m in f) m && (p[m] = f[m]);
                return h = l ? e.call(this, t, d, p, l) || this : e.call(this, t, d, p) || this, h.path = c, h.requestId = u, h.contentType = a, h.additionalHeaders = f, h
            }
            return __extends(t, e), Object.defineProperty(t.prototype, "Path", {
                get: function () {
                    return this.path
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "RequestId", {
                get: function () {
                    return this.requestId
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "ContentType", {
                get: function () {
                    return this.contentType
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "AdditionalHeaders", {
                get: function () {
                    return this.additionalHeaders
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(n.ConnectionMessage);
    c.FromConnectionMessage = function (e) {
        var t = null,
            n = null,
            u = null,
            a = {};
        if (e.Headers)
            for (var d in e.Headers) d && (d.toLowerCase() === r.toLowerCase() ? t = e.Headers[d] : d.toLowerCase() === i.toLowerCase() ? n = e.Headers[d] : d.toLowerCase() === s.toLowerCase() ? e.Headers[d] : d.toLowerCase() === o.toLowerCase() ? u = e.Headers[d] : a[d] = e.Headers[d]);
        return new c(e.MessageType, t, n, u, e.Body, a, e.Id)
    }, t.SpeechConnectionMessage = c
}), define("src/sdk/speech/Recognizer", ["require", "exports", "src/common/Exports", "src/sdk/speech/RecognitionEvents", "src/sdk/speech/RecognizerConfig", "src/sdk/speech/ServiceTelemetryListener.Internal", "src/sdk/speech/SpeechConnectionMessage.Internal"], function (e, t, n, r, o, i, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = function () {
        function e(e, t, r, i) {
            var c = this;
            if (this.Recognize = function (e, t) {
                    var r = new u(c.audioSource.Id(), e);
                    return r.ListenForServiceTelemetry(c.audioSource.Events), c.audioSource.Attach(r.AudioNodeId).ContinueWithPromise(function (e) {
                        if (e.IsError) throw r.OnAudioSourceAttachCompleted(null, !0, e.Error), new Error(e.Error);
                        r.OnAudioSourceAttachCompleted(e.Result, !1);
                        var o = e.Result;
                        return c.FetchConnection(r).OnSuccessContinueWith(function (e) {
                            var i = c.ReceiveMessage(e, r),
                                s = c.SendSpeechConfig(r.RequestId, e, c.recognizerConfig.SpeechConfig.Serialize()).OnSuccessContinueWithPromise(function (n) {
                                    return c.SendSpeechContext(r.RequestId, e, t).OnSuccessContinueWithPromise(function (t) {
                                        return c.SendAudio(r.RequestId, e, o, r)
                                    })
                                }),
                                u = n.PromiseHelper.WhenAll([i, s]);
                            return u.On(function (t) {
                                r.Dispose(), c.SendTelemetryData(r.RequestId, e, r.GetTelemetry())
                            }, function (t) {
                                r.Dispose(t), c.SendTelemetryData(r.RequestId, e, r.GetTelemetry())
                            }), u
                        }), r.CompletionPromise
                    })
                }, this.FetchConnection = function (e, t) {
                    if (void 0 === t && (t = !1), c.connectionFetchPromise) return c.connectionFetchPromise.Result().IsError || c.connectionFetchPromise.Result().Result.State() === n.ConnectionState.Disconnected ? (c.connectionId = null, c.connectionFetchPromise = null, c.FetchConnection(e)) : (e.OnPreConnectionStart(c.authFetchEventId, c.connectionId), e.OnConnectionEstablishCompleted(200), e.ListenForServiceTelemetry(c.connectionFetchPromise.Result().Result.Events), c.connectionFetchPromise);
                    c.authFetchEventId = n.CreateNoDashGuid(), c.connectionId = n.CreateNoDashGuid(), e.OnPreConnectionStart(c.authFetchEventId, c.connectionId);
                    var r = t ? c.authentication.FetchOnExpiry(c.authFetchEventId) : c.authentication.Fetch(c.authFetchEventId);
                    return c.connectionFetchPromise = r.ContinueWithPromise(function (r) {
                        if (r.IsError) throw e.OnAuthCompleted(!0, r.Error), new Error(r.Error);
                        e.OnAuthCompleted(!1);
                        var o = c.connectionFactory.Create(c.recognizerConfig, r.Result, c.connectionId);
                        return e.ListenForServiceTelemetry(o.Events), o.Open().OnSuccessContinueWithPromise(function (r) {
                            return 200 === r.StatusCode ? (e.OnConnectionEstablishCompleted(r.StatusCode), n.PromiseHelper.FromResult(o)) : 403 !== r.StatusCode || t ? (e.OnConnectionEstablishCompleted(r.StatusCode, r.Reason), n.PromiseHelper.FromError("Unable to contact server. StatusCode: " + r.StatusCode + ", Reason: " + r.Reason)) : c.FetchConnection(e, !0)
                        })
                    }), c.connectionFetchPromise
                }, this.ReceiveMessage = function (e, t) {
                    return e.Read().OnSuccessContinueWithPromise(function (r) {
                        var i = s.SpeechConnectionMessage.FromConnectionMessage(r);
                        if (i.RequestId.toLowerCase() === t.RequestId.toLowerCase()) switch (i.Path.toLowerCase()) {
                            case "turn.start":
                                t.OnServiceTurnStartResponse(JSON.parse(i.TextBody));
                                break;
                            case "speech.startDetected":
                                t.OnServiceSpeechStartDetectedResponse(JSON.parse(i.TextBody));
                                break;
                            case "speech.hypothesis":
                                t.OnServiceSpeechHypothesisResponse(JSON.parse(i.TextBody));
                                break;
                            case "speech.enddetected":
                                t.OnServiceSpeechEndDetectedResponse(JSON.parse(i.TextBody));
                                break;
                            case "speech.phrase":
                                c.recognizerConfig.IsContinuousRecognition && c.SendTelemetryData(t.RequestId, e, t.GetTelemetry()),
                                    c.recognizerConfig.Format === o.SpeechResultFormat.Simple ? t.OnServiceSimpleSpeechPhraseResponse(JSON.parse(i.TextBody)) : t.OnServiceDetailedSpeechPhraseResponse(JSON.parse(i.TextBody));
                                break;
                            case "turn.end":
                                return t.OnServiceTurnEndResponse(), n.PromiseHelper.FromResult(!0)
                        }
                        return c.ReceiveMessage(e, t)
                    })
                }, this.SendSpeechConfig = function (e, t, r) {
                    return r && c.connectionId !== c.speechConfigConnectionId ? (c.speechConfigConnectionId = c.connectionId, t.Send(new s.SpeechConnectionMessage(n.MessageType.Text, "speech.config", e, "application/json", r))) : n.PromiseHelper.FromResult(!0)
                }, this.SendSpeechContext = function (e, t, r) {
                    return r ? t.Send(new s.SpeechConnectionMessage(n.MessageType.Text, "speech.context", e, "application/json", r)) : n.PromiseHelper.FromResult(!0)
                }, this.SendTelemetryData = function (e, t, r) {
                    return t.Send(new s.SpeechConnectionMessage(n.MessageType.Text, "telemetry", e, "application/json", r))
                }, this.SendAudio = function (e, t, r, o) {
                    return r.Read().OnSuccessContinueWithPromise(function (i) {
                        return o.IsSpeechEnded ? n.PromiseHelper.FromResult(!0) : i.IsEnd ? t.Send(new s.SpeechConnectionMessage(n.MessageType.Binary, "audio", e, null, null)) : t.Send(new s.SpeechConnectionMessage(n.MessageType.Binary, "audio", e, null, i.Buffer)).OnSuccessContinueWithPromise(function (n) {
                            return c.SendAudio(e, t, r, o)
                        })
                    })
                }, !e) throw new n.ArgumentNullError("authentication");
            if (!t) throw new n.ArgumentNullError("connectionFactory");
            if (!r) throw new n.ArgumentNullError("audioSource");
            if (!i) throw new n.ArgumentNullError("recognizerConfig");
            this.authentication = e, this.connectionFactory = t, this.audioSource = r, this.recognizerConfig = i
        }
        return Object.defineProperty(e.prototype, "AudioSource", {
            get: function () {
                return this.audioSource
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.Recognizer = c;
    var u = function () {
        function e(e, t) {
            var o = this;
            this.isDisposed = !1, this.detachables = new Array, this.isAudioNodeDetached = !1, this.isCompleted = !1, this.OnAudioSourceAttachCompleted = function (e, t, n) {
                o.audioNode = e, t ? o.OnComplete(r.RecognitionCompletionStatus.AudioSourceError, n) : o.OnEvent(new r.ListeningStartedEvent(o.requestId, o.audioSourceId, o.audioNodeId))
            }, this.OnPreConnectionStart = function (e, t) {
                o.authFetchEventId = e, o.connectionId = t, o.OnEvent(new r.ConnectingToServiceEvent(o.requestId, o.authFetchEventId, o.connectionId))
            }, this.OnAuthCompleted = function (e, t) {
                e && o.OnComplete(r.RecognitionCompletionStatus.AuthTokenFetchError, t)
            }, this.OnConnectionEstablishCompleted = function (e, t) {
                if (200 === e) return void o.OnEvent(new r.RecognitionStartedEvent(o.RequestId, o.audioSourceId, o.audioNodeId, o.authFetchEventId, o.connectionId));
                403 === e ? o.OnComplete(r.RecognitionCompletionStatus.UnAuthorized, t) : o.OnComplete(r.RecognitionCompletionStatus.ConnectError, t)
            }, this.OnServiceTurnStartResponse = function (e) {
                e && e.context && e.context.serviceTag && (o.serviceTag = e.context.serviceTag)
            }, this.OnServiceSpeechStartDetectedResponse = function (e) {
                o.OnEvent(new r.SpeechStartDetectedEvent(o.RequestId, e))
            }, this.OnServiceSpeechHypothesisResponse = function (e) {
                o.OnEvent(new r.SpeechHypothesisEvent(o.RequestId, e))
            }, this.OnServiceSpeechEndDetectedResponse = function (e) {
                o.DetachAudioNode(), o.OnEvent(new r.SpeechEndDetectedEvent(o.RequestId, e))
            }, this.OnServiceSimpleSpeechPhraseResponse = function (e) {
                o.OnEvent(new r.SpeechSimplePhraseEvent(o.RequestId, e))
            }, this.OnServiceDetailedSpeechPhraseResponse = function (e) {
                o.OnEvent(new r.SpeechDetailedPhraseEvent(o.RequestId, e))
            }, this.OnServiceTurnEndResponse = function () {
                o.OnComplete(r.RecognitionCompletionStatus.Success)
            }, this.OnConnectionError = function (e) {
                o.OnComplete(r.RecognitionCompletionStatus.UnknownError, e)
            }, this.Dispose = function (e) {
                if (!o.isDisposed) {
                    o.OnComplete(r.RecognitionCompletionStatus.UnknownError, e), o.isDisposed = !0;
                    for (var t = 0, n = o.detachables; t < n.length; t++) {
                        n[t].Detach()
                    }
                    o.serviceTelemetryListener.Dispose()
                }
            }, this.GetTelemetry = function () {
                return o.serviceTelemetryListener.GetTelemetry()
            }, this.OnComplete = function (e, t) {
                o.isCompleted || (o.isCompleted = !0, o.DetachAudioNode(), o.OnEvent(new r.RecognitionEndedEvent(o.RequestId, o.audioSourceId, o.audioNodeId, o.authFetchEventId, o.connectionId, o.serviceTag, e, t || "")))
            }, this.DetachAudioNode = function () {
                o.isAudioNodeDetached || (o.isAudioNodeDetached = !0, o.audioNode && o.audioNode.Detach())
            }, this.OnEvent = function (e) {
                o.serviceTelemetryListener.OnEvent(e), n.Events.Instance.OnEvent(e), o.onEventCallback && o.onEventCallback(e)
            }, this.audioSourceId = e, this.onEventCallback = t, this.requestId = n.CreateNoDashGuid(), this.audioNodeId = n.CreateNoDashGuid(), this.requestCompletionDeferral = new n.Deferred, this.serviceTelemetryListener = new i.ServiceTelemetryListener(this.requestId, this.audioSourceId, this.audioNodeId), this.OnEvent(new r.RecognitionTriggeredEvent(this.RequestId, this.audioSourceId, this.audioNodeId))
        }
        return Object.defineProperty(e.prototype, "RequestId", {
            get: function () {
                return this.requestId
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "AudioNodeId", {
            get: function () {
                return this.audioNodeId
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "CompletionPromise", {
            get: function () {
                return this.requestCompletionDeferral.Promise()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "IsSpeechEnded", {
            get: function () {
                return this.isAudioNodeDetached
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "IsCompleted", {
            get: function () {
                return this.isCompleted
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.ListenForServiceTelemetry = function (e) {
            this.detachables.push(e.AttachListener(this.serviceTelemetryListener))
        }, e
    }()
}), define("src/sdk/speech/WebsocketMessageFormatter", ["require", "exports", "src/common/Exports"], function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = "\r\n",
        o = function () {
            function e() {
                var e = this;
                this.ToConnectionMessage = function (t) {
                    var r = new n.Deferred;
                    try {
                        if (t.MessageType === n.MessageType.Text) {
                            var o = t.TextContent,
                                i = {},
                                s = null;
                            if (o) {
                                var c = o.split("\r\n\r\n");
                                c && c.length > 0 && (i = e.ParseHeaders(c[0]), c.length > 1 && (s = c[1]))
                            }
                            r.Resolve(new n.ConnectionMessage(t.MessageType, s, i, t.Id))
                        } else if (t.MessageType === n.MessageType.Binary) {
                            var u = t.BinaryContent,
                                i = {},
                                s = null;
                            if (!u || u.byteLength < 2) throw new Error("Invalid binary message format. Header length missing.");
                            var a = new DataView(u),
                                d = a.getInt16(0);
                            if (u.byteLength < d + 2) throw new Error("Invalid binary message format. Header content missing.");
                            for (var f = "", l = 0; l < d; l++) f += String.fromCharCode(a.getInt8(l + 2));
                            i = e.ParseHeaders(f), u.byteLength > d + 2 && (s = u.slice(2 + d)), r.Resolve(new n.ConnectionMessage(t.MessageType, s, i, t.Id))
                        }
                    } catch (e) {
                        r.Reject("Error formatting the message. Error: " + e)
                    }
                    return r.Promise()
                }, this.FromConnectionMessage = function (t) {
                    var o = new n.Deferred;
                    try {
                        if (t.MessageType === n.MessageType.Text) {
                            var i = "" + e.MakeHeaders(t) + r + (t.TextBody ? t.TextBody : "");
                            o.Resolve(new n.RawWebsocketMessage(n.MessageType.Text, i, t.Id))
                        } else if (t.MessageType === n.MessageType.Binary) {
                            var s = e.MakeHeaders(t),
                                c = t.BinaryBody,
                                u = new FileReader;
                            u.onload = function () {
                                var e = new Int8Array(u.result),
                                    r = new ArrayBuffer(2 + e.byteLength + (c ? c.byteLength : 0)),
                                    i = new DataView(r);
                                i.setInt16(0, e.length);
                                for (var s = 0; s < e.byteLength; s++) i.setInt8(2 + s, e[s]);
                                if (c)
                                    for (var a = new Int8Array(c), s = 0; s < a.byteLength; s++) i.setInt8(2 + e.byteLength + s, a[s]);
                                o.Resolve(new n.RawWebsocketMessage(n.MessageType.Binary, r, t.Id))
                            }, u.onerror = function () {
                                o.Reject("failed to load headers into file reader")
                            }, u.readAsArrayBuffer(new Blob([s]))
                        }
                    } catch (e) {
                        o.Reject("Error formatting the message. " + e)
                    }
                    return o.Promise()
                }, this.MakeHeaders = function (e) {
                    var t = "";
                    if (e.Headers)
                        for (var n in e.Headers) n && (t += n + ": " + e.Headers[n] + r);
                    return t
                }, this.ParseHeaders = function (e) {
                    var t = {};
                    if (e) {
                        var n = e.match(/[^\r\n]+/g);
                        if (t)
                            for (var r = 0, o = n; r < o.length; r++) {
                                var i = o[r];
                                if (i) {
                                    var s = i.indexOf(":"),
                                        c = s > 0 ? i.substr(0, s).trim().toLowerCase() : i,
                                        u = s > 0 && i.length > s + 1 ? i.substr(s + 1).trim() : "";
                                    t[c] = u
                                }
                            }
                    }
                    return t
                }
            }
            return e
        }();
    t.WebsocketMessageFormatter = o
}), define("src/sdk/speech/Exports", ["require", "exports", "src/sdk/speech/CognitiveSubscriptionKeyAuthentication", "src/sdk/speech/CognitiveTokenAuthentication", "src/sdk/speech/IAuthentication", "src/sdk/speech/RecognitionEvents", "src/sdk/speech/Recognizer", "src/sdk/speech/RecognizerConfig", "src/sdk/speech/SpeechResults", "src/sdk/speech/WebsocketMessageFormatter"], function (e, t, n, r, o, i, s, c, u, a) {
    "use strict";

    function d(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), d(n), d(r), d(o), d(i), d(s), d(c), d(u), d(a)
}), define("src/sdk/speech.browser/SpeechConnectionFactory", ["require", "exports", "src/common.browser/Exports", "src/common/Exports", "src/sdk/speech/Exports"], function (e, t, n, r, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = "testhooks",
        s = "X-ConnectionId",
        c = function () {
            function e() {
                var e = this;
                this.Create = function (t, r, c) {
                    var u = "";
                    switch (t.RecognitionMode) {
                        case o.RecognitionMode.Conversation:
                            u = e.Host + e.ConversationRelativeUri;
                            break;
                        case o.RecognitionMode.Dictation:
                            u = e.Host + e.DictationRelativeUri;
                            break;
                        default:
                            u = e.Host + e.InteractiveRelativeUri
                    }
                    var a = {
                        format: o.SpeechResultFormat[t.Format].toString().toLowerCase(),
                        language: t.Language
                    };
                    e.IsDebugModeEnabled && (a[i] = "1");
                    var d = {};
                    return d[r.HeaderName] = r.Token, d[s] = c, new n.WebsocketConnection(u, a, d, new o.WebsocketMessageFormatter, c)
                }
            }
            return Object.defineProperty(e.prototype, "Host", {
                get: function () {
                    return r.Storage.Local.GetOrAdd("Host", "wss://speech.platform.bing.com")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "InteractiveRelativeUri", {
                get: function () {
                    return r.Storage.Local.GetOrAdd("InteractiveRelativeUri", "/speech/recognition/interactive/cognitiveservices/v1")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "ConversationRelativeUri", {
                get: function () {
                    return r.Storage.Local.GetOrAdd("ConversationRelativeUri", "/speech/recognition/conversation/cognitiveservices/v1")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "DictationRelativeUri", {
                get: function () {
                    return r.Storage.Local.GetOrAdd("DictationRelativeUri", "/speech/recognition/dictation/cognitiveservices/v1")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "IsDebugModeEnabled", {
                get: function () {
                    return "true" === r.Storage.Local.GetOrAdd("IsDebugModeEnabled", "false").toLowerCase()
                },
                enumerable: !0,
                configurable: !0
            }), e
        }();
    t.SpeechConnectionFactory = c
}), define("src/sdk/speech.browser/Recognizer", ["require", "exports", "src/common.browser/Exports", "src/sdk/speech/Exports", "src/sdk/speech.browser/SpeechConnectionFactory"], function (e, t, n, r, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function (e, t) {
        return s(e, t)
    };
    t.CreateRecognizer = i;
    var s = function (e, t) {
        return c(e, t, new n.MicAudioSource(new n.PcmRecorder))
    };
    t.CreateRecognizerWithPcmRecorder = s;
    var c = function (e, t, n) {
        return new r.Recognizer(t, new o.SpeechConnectionFactory, n, e)
    };
    t.CreateRecognizerWithCustomAudioSource = c
}), define("src/sdk/speech.browser/Exports", ["require", "exports", "src/sdk/speech.browser/Recognizer", "src/sdk/speech.browser/SpeechConnectionFactory"], function (e, t, n, r) {
    "use strict";

    function o(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o(n), o(r)
}), define("Speech.Browser.Sdk", ["require", "exports", "src/common.browser/Exports", "src/common/Exports", "src/common/Exports", "src/common.browser/Exports", "src/sdk/speech/Exports", "src/sdk/speech.browser/Exports"], function (e, t, n, r, o, i, s, c) {
    "use strict";

    function u(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r.Events.Instance.AttachListener(new n.ConsoleLoggingListener), u(o), u(i), u(s), u(c)
});