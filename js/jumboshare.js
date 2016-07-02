/* ##### FREE JUMBO SHARE COUNTERS ####### Developed by: www.MyBloggerTricks.com Dual licensed under the MIT license and GPL license. Copyright (c) 2015-2016 STCnetwork.org ###### PHP script ######################## Developed by http://donreach.com/, Optimized by STCnetwork.org ####### Animation ######################## Supported by: waypoints.js and Counterup.js Customized by STCnetwork.org Source: https://github.com/bfintal/Counter-Up #######################################*/
(function() {
    var _0xc846x0 = []["indexOf"] || function(_0xc846x0) {
            for (var _0xc846x1 = 0, _0xc846x2 = this["length"]; _0xc846x1 < _0xc846x2; _0xc846x1++) {
                if (_0xc846x1 in this && this[_0xc846x1] === _0xc846x0) {
                    return _0xc846x1
                }
            };
            return -1
        },
        _0xc846x1 = []["slice"];
    (function(_0xc846x0, _0xc846x1) {
        if (typeof define === "function" && define["amd"]) {
            return define("waypoints", ["jquery"], function(_0xc846x2) {
                return _0xc846x1(_0xc846x2, _0xc846x0)
            })
        } else {
            return _0xc846x1(_0xc846x0["jQuery"], _0xc846x0)
        }
    })(this, function(_0xc846x2, _0xc846x3) {
        var _0xc846x4, _0xc846x5, _0xc846x6, _0xc846x7, _0xc846x8, _0xc846x9, _0xc846xa, _0xc846xb, _0xc846xc, _0xc846xd, _0xc846xe, _0xc846xf, _0xc846x10, _0xc846x11, _0xc846x12, _0xc846x13;
        _0xc846x4 = _0xc846x2(_0xc846x3);
        _0xc846xb = _0xc846x0["call"](_0xc846x3, "ontouchstart") >= 0;
        _0xc846x7 = {
            horizontal: {},
            vertical: {}
        };
        _0xc846x8 = 1;
        _0xc846xa = {};
        _0xc846x9 = "waypoints-context-id";
        _0xc846xe = "resize.waypoints";
        _0xc846xf = "scroll.waypoints";
        _0xc846x10 = 1;
        _0xc846x11 = "waypoints-waypoint-ids";
        _0xc846x12 = "waypoint";
        _0xc846x13 = "waypoints";
        _0xc846x5 = function() {
            function _0xc846x0(_0xc846x0) {
                var _0xc846x1 = this;
                this["$element"] = _0xc846x0;
                this["element"] = _0xc846x0[0];
                this["didResize"] = false;
                this["didScroll"] = false;
                this["id"] = "context" + _0xc846x8++;
                this["oldScroll"] = {
                    x: _0xc846x0["scrollLeft"](),
                    y: _0xc846x0["scrollTop"]()
                };
                this["waypoints"] = {
                    horizontal: {},
                    vertical: {}
                };
                _0xc846x0["data"](_0xc846x9, this["id"]);
                _0xc846xa[this["id"]] = this;
                _0xc846x0["bind"](_0xc846xf, function() {
                    var _0xc846x0;
                    if (!(_0xc846x1["didScroll"] || _0xc846xb)) {
                        _0xc846x1["didScroll"] = true;
                        _0xc846x0 = function() {
                            _0xc846x1["doScroll"]();
                            return _0xc846x1["didScroll"] = false
                        };
                        return _0xc846x3["setTimeout"](_0xc846x0, _0xc846x2[_0xc846x13]["settings"]["scrollThrottle"])
                    }
                });
                _0xc846x0["bind"](_0xc846xe, function() {
                    var _0xc846x0;
                    if (!_0xc846x1["didResize"]) {
                        _0xc846x1["didResize"] = true;
                        _0xc846x0 = function() {
                            _0xc846x2[_0xc846x13]("refresh");
                            return _0xc846x1["didResize"] = false
                        };
                        return _0xc846x3["setTimeout"](_0xc846x0, _0xc846x2[_0xc846x13]["settings"]["resizeThrottle"])
                    }
                })
            }
            _0xc846x0["prototype"]["doScroll"] = function() {
                var _0xc846x0, _0xc846x1 = this;
                _0xc846x0 = {
                    horizontal: {
                        newScroll: this["$element"]["scrollLeft"](),
                        oldScroll: this["oldScroll"]["x"],
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this["$element"]["scrollTop"](),
                        oldScroll: this["oldScroll"]["y"],
                        forward: "down",
                        backward: "up"
                    }
                };
                if (_0xc846xb && (!_0xc846x0["vertical"]["oldScroll"] || !_0xc846x0["vertical"]["newScroll"])) {
                    _0xc846x2[_0xc846x13]("refresh")
                };
                _0xc846x2["each"](_0xc846x0, function(_0xc846x0, _0xc846x3) {
                    var _0xc846x4, _0xc846x5, _0xc846x6;
                    _0xc846x6 = [];
                    _0xc846x5 = _0xc846x3["newScroll"] > _0xc846x3["oldScroll"];
                    _0xc846x4 = _0xc846x5 ? _0xc846x3["forward"] : _0xc846x3["backward"];
                    _0xc846x2["each"](_0xc846x1["waypoints"][_0xc846x0], function(_0xc846x0, _0xc846x1) {
                        var _0xc846x2, _0xc846x4;
                        if (_0xc846x3["oldScroll"] < (_0xc846x2 = _0xc846x1["offset"]) && _0xc846x2 <= _0xc846x3["newScroll"]) {
                            return _0xc846x6["push"](_0xc846x1)
                        } else {
                            if (_0xc846x3["newScroll"] < (_0xc846x4 = _0xc846x1["offset"]) && _0xc846x4 <= _0xc846x3["oldScroll"]) {
                                return _0xc846x6["push"](_0xc846x1)
                            }
                        }
                    });
                    _0xc846x6["sort"](function(_0xc846x0, _0xc846x1) {
                        return _0xc846x0["offset"] - _0xc846x1["offset"]
                    });
                    if (!_0xc846x5) {
                        _0xc846x6["reverse"]()
                    };
                    return _0xc846x2["each"](_0xc846x6, function(_0xc846x0, _0xc846x1) {
                        if (_0xc846x1["options"]["continuous"] || _0xc846x0 === _0xc846x6["length"] - 1) {
                            return _0xc846x1["trigger"]([_0xc846x4])
                        }
                    })
                });
                return this["oldScroll"] = {
                    x: _0xc846x0["horizontal"]["newScroll"],
                    y: _0xc846x0["vertical"]["newScroll"]
                }
            };
            _0xc846x0["prototype"]["refresh"] = function() {
                var _0xc846x0, _0xc846x1, _0xc846x3, _0xc846x4 = this;
                _0xc846x3 = _0xc846x2["isWindow"](this["element"]);
                _0xc846x1 = this["$element"]["offset"]();
                this["doScroll"]();
                _0xc846x0 = {
                    horizontal: {
                        contextOffset: _0xc846x3 ? 0 : _0xc846x1["left"],
                        contextScroll: _0xc846x3 ? 0 : this["oldScroll"]["x"],
                        contextDimension: this["$element"]["width"](),
                        oldScroll: this["oldScroll"]["x"],
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: _0xc846x3 ? 0 : _0xc846x1["top"],
                        contextScroll: _0xc846x3 ? 0 : this["oldScroll"]["y"],
                        contextDimension: _0xc846x3 ? _0xc846x2[_0xc846x13]("viewportHeight") : this["$element"]["height"](),
                        oldScroll: this["oldScroll"]["y"],
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                };
                return _0xc846x2["each"](_0xc846x0, function(_0xc846x0, _0xc846x1) {
                    return _0xc846x2["each"](_0xc846x4["waypoints"][_0xc846x0], function(_0xc846x0, _0xc846x3) {
                        var _0xc846x4, _0xc846x5, _0xc846x6, _0xc846x7, _0xc846x8;
                        _0xc846x4 = _0xc846x3["options"]["offset"];
                        _0xc846x6 = _0xc846x3["offset"];
                        _0xc846x5 = _0xc846x2["isWindow"](_0xc846x3["element"]) ? 0 : _0xc846x3["$element"]["offset"]()[_0xc846x1["offsetProp"]];
                        if (_0xc846x2["isFunction"](_0xc846x4)) {
                            _0xc846x4 = _0xc846x4["apply"](_0xc846x3["element"])
                        } else {
                            if (typeof _0xc846x4 === "string") {
                                _0xc846x4 = parseFloat(_0xc846x4);
                                if (_0xc846x3["options"]["offset"]["indexOf"]("%") > -1) {
                                    _0xc846x4 = Math["ceil"](_0xc846x1["contextDimension"] * _0xc846x4 / 100)
                                }
                            }
                        };
                        _0xc846x3["offset"] = _0xc846x5 - _0xc846x1["contextOffset"] + _0xc846x1["contextScroll"] - _0xc846x4;
                        if (_0xc846x3["options"]["onlyOnScroll"] && _0xc846x6 != null || !_0xc846x3["enabled"]) {
                            return
                        };
                        if (_0xc846x6 !== null && _0xc846x6 < (_0xc846x7 = _0xc846x1["oldScroll"]) && _0xc846x7 <= _0xc846x3["offset"]) {
                            return _0xc846x3["trigger"]([_0xc846x1["backward"]])
                        } else {
                            if (_0xc846x6 !== null && _0xc846x6 > (_0xc846x8 = _0xc846x1["oldScroll"]) && _0xc846x8 >= _0xc846x3["offset"]) {
                                return _0xc846x3["trigger"]([_0xc846x1["forward"]])
                            } else {
                                if (_0xc846x6 === null && _0xc846x1["oldScroll"] >= _0xc846x3["offset"]) {
                                    return _0xc846x3["trigger"]([_0xc846x1["forward"]])
                                }
                            }
                        }
                    })
                })
            };
            _0xc846x0["prototype"]["checkEmpty"] = function() {
                if (_0xc846x2["isEmptyObject"](this["waypoints"]["horizontal"]) && _0xc846x2["isEmptyObject"](this["waypoints"]["vertical"])) {
                    this["$element"]["unbind"]([_0xc846xe, _0xc846xf]["join"](" "));
                    return delete _0xc846xa[this["id"]]
                }
            };
            return _0xc846x0
        }();
        _0xc846x6 = function() {
            function _0xc846x0(_0xc846x0, _0xc846x1, _0xc846x3) {
                var _0xc846x4, _0xc846x5;
                _0xc846x3 = _0xc846x2["extend"]({}, _0xc846x2["fn"][_0xc846x12]["defaults"], _0xc846x3);
                if (_0xc846x3["offset"] === "bottom-in-view") {
                    _0xc846x3["offset"] = function() {
                        var _0xc846x0;
                        _0xc846x0 = _0xc846x2[_0xc846x13]("viewportHeight");
                        if (!_0xc846x2["isWindow"](_0xc846x1["element"])) {
                            _0xc846x0 = _0xc846x1["$element"]["height"]()
                        };
                        return _0xc846x0 - _0xc846x2(this)["outerHeight"]()
                    }
                };
                this["$element"] = _0xc846x0;
                this["element"] = _0xc846x0[0];
                this["axis"] = _0xc846x3["horizontal"] ? "horizontal" : "vertical";
                this["callback"] = _0xc846x3["handler"];
                this["context"] = _0xc846x1;
                this["enabled"] = _0xc846x3["enabled"];
                this["id"] = "waypoints" + _0xc846x10++;
                this["offset"] = null;
                this["options"] = _0xc846x3;
                _0xc846x1["waypoints"][this["axis"]][this["id"]] = this;
                _0xc846x7[this["axis"]][this["id"]] = this;
                _0xc846x4 = (_0xc846x5 = _0xc846x0["data"](_0xc846x11)) != null ? _0xc846x5 : [];
                _0xc846x4["push"](this["id"]);
                _0xc846x0["data"](_0xc846x11, _0xc846x4)
            }
            _0xc846x0["prototype"]["trigger"] = function(_0xc846x0) {
                if (!this["enabled"]) {
                    return
                };
                if (this["callback"] != null) {
                    this["callback"]["apply"](this["element"], _0xc846x0)
                };
                if (this["options"]["triggerOnce"]) {
                    return this["destroy"]()
                }
            };
            _0xc846x0["prototype"]["disable"] = function() {
                return this["enabled"] = false
            };
            _0xc846x0["prototype"]["enable"] = function() {
                this["context"]["refresh"]();
                return this["enabled"] = true
            };
            _0xc846x0["prototype"]["destroy"] = function() {
                delete _0xc846x7[this["axis"]][this["id"]];
                delete this["context"]["waypoints"][this["axis"]][this["id"]];
                return this["context"]["checkEmpty"]()
            };
            _0xc846x0["getWaypointsByElement"] = function(_0xc846x0) {
                var _0xc846x1, _0xc846x3;
                _0xc846x3 = _0xc846x2(_0xc846x0)["data"](_0xc846x11);
                if (!_0xc846x3) {
                    return []
                };
                _0xc846x1 = _0xc846x2["extend"]({}, _0xc846x7["horizontal"], _0xc846x7["vertical"]);
                return _0xc846x2["map"](_0xc846x3, function(_0xc846x0) {
                    return _0xc846x1[_0xc846x0]
                })
            };
            return _0xc846x0
        }();
        _0xc846xd = {
            init: function(_0xc846x0, _0xc846x1) {
                var _0xc846x3;
                if (_0xc846x1 == null) {
                    _0xc846x1 = {}
                };
                if ((_0xc846x3 = _0xc846x1["handler"]) == null) {
                    _0xc846x1["handler"] = _0xc846x0
                };
                this["each"](function() {
                    var _0xc846x0, _0xc846x3, _0xc846x4, _0xc846x7;
                    _0xc846x0 = _0xc846x2(this);
                    _0xc846x4 = (_0xc846x7 = _0xc846x1["context"]) != null ? _0xc846x7 : _0xc846x2["fn"][_0xc846x12]["defaults"]["context"];
                    if (!_0xc846x2["isWindow"](_0xc846x4)) {
                        _0xc846x4 = _0xc846x0["closest"](_0xc846x4)
                    };
                    _0xc846x4 = _0xc846x2(_0xc846x4);
                    _0xc846x3 = _0xc846xa[_0xc846x4["data"](_0xc846x9)];
                    if (!_0xc846x3) {
                        _0xc846x3 = new _0xc846x5(_0xc846x4)
                    };
                    return new _0xc846x6(_0xc846x0, _0xc846x3, _0xc846x1)
                });
                _0xc846x2[_0xc846x13]("refresh");
                return this
            },
            disable: function() {
                return _0xc846xd._invoke(this, "disable")
            },
            enable: function() {
                return _0xc846xd._invoke(this, "enable")
            },
            destroy: function() {
                return _0xc846xd._invoke(this, "destroy")
            },
            prev: function(_0xc846x0, _0xc846x1) {
                return _0xc846xd["_traverse"]["call"](this, _0xc846x0, _0xc846x1, function(_0xc846x0, _0xc846x1, _0xc846x2) {
                    if (_0xc846x1 > 0) {
                        return _0xc846x0["push"](_0xc846x2[_0xc846x1 - 1])
                    }
                })
            },
            next: function(_0xc846x0, _0xc846x1) {
                return _0xc846xd["_traverse"]["call"](this, _0xc846x0, _0xc846x1, function(_0xc846x0, _0xc846x1, _0xc846x2) {
                    if (_0xc846x1 < _0xc846x2["length"] - 1) {
                        return _0xc846x0["push"](_0xc846x2[_0xc846x1 + 1])
                    }
                })
            },
            _traverse: function(_0xc846x0, _0xc846x1, _0xc846x4) {
                var _0xc846x5, _0xc846x6;
                if (_0xc846x0 == null) {
                    _0xc846x0 = "vertical"
                };
                if (_0xc846x1 == null) {
                    _0xc846x1 = _0xc846x3
                };
                _0xc846x6 = _0xc846xc["aggregate"](_0xc846x1);
                _0xc846x5 = [];
                this["each"](function() {
                    var _0xc846x1;
                    _0xc846x1 = _0xc846x2["inArray"](this, _0xc846x6[_0xc846x0]);
                    return _0xc846x4(_0xc846x5, _0xc846x1, _0xc846x6[_0xc846x0])
                });
                return this["pushStack"](_0xc846x5)
            },
            _invoke: function(_0xc846x0, _0xc846x1) {
                _0xc846x0["each"](function() {
                    var _0xc846x0;
                    _0xc846x0 = _0xc846x6["getWaypointsByElement"](this);
                    return _0xc846x2["each"](_0xc846x0, function(_0xc846x0, _0xc846x2) {
                        _0xc846x2[_0xc846x1]();
                        return true
                    })
                });
                return this
            }
        };
        _0xc846x2["fn"][_0xc846x12] = function() {
            var _0xc846x0, _0xc846x3;
            _0xc846x3 = arguments[0], _0xc846x0 = 2 <= arguments["length"] ? _0xc846x1["call"](arguments, 1) : [];
            if (_0xc846xd[_0xc846x3]) {
                return _0xc846xd[_0xc846x3]["apply"](this, _0xc846x0)
            } else {
                if (_0xc846x2["isFunction"](_0xc846x3)) {
                    return _0xc846xd["init"]["apply"](this, arguments)
                } else {
                    if (_0xc846x2["isPlainObject"](_0xc846x3)) {
                        return _0xc846xd["init"]["apply"](this, [null, _0xc846x3])
                    } else {
                        if (!_0xc846x3) {
                            return _0xc846x2["error"]("jQuery Waypoints needs a callback function or handler option.")
                        } else {
                            return _0xc846x2["error"]("The " + _0xc846x3 + " method does not exist in jQuery Waypoints.")
                        }
                    }
                }
            }
        };
        _0xc846x2["fn"][_0xc846x12]["defaults"] = {
            context: _0xc846x3,
            continuous: true,
            enabled: true,
            horizontal: false,
            offset: 0,
            triggerOnce: false
        };
        _0xc846xc = {
            refresh: function() {
                return _0xc846x2["each"](_0xc846xa, function(_0xc846x0, _0xc846x1) {
                    return _0xc846x1["refresh"]()
                })
            },
            viewportHeight: function() {
                var _0xc846x0;
                return (_0xc846x0 = _0xc846x3["innerHeight"]) != null ? _0xc846x0 : _0xc846x4["height"]()
            },
            aggregate: function(_0xc846x0) {
                var _0xc846x1, _0xc846x3, _0xc846x4;
                _0xc846x1 = _0xc846x7;
                if (_0xc846x0) {
                    _0xc846x1 = (_0xc846x4 = _0xc846xa[_0xc846x2(_0xc846x0)["data"](_0xc846x9)]) != null ? _0xc846x4["waypoints"] : void(0)
                };
                if (!_0xc846x1) {
                    return []
                };
                _0xc846x3 = {
                    horizontal: [],
                    vertical: []
                };
                _0xc846x2["each"](_0xc846x3, function(_0xc846x0, _0xc846x4) {
                    _0xc846x2["each"](_0xc846x1[_0xc846x0], function(_0xc846x0, _0xc846x1) {
                        return _0xc846x4["push"](_0xc846x1)
                    });
                    _0xc846x4["sort"](function(_0xc846x0, _0xc846x1) {
                        return _0xc846x0["offset"] - _0xc846x1["offset"]
                    });
                    _0xc846x3[_0xc846x0] = _0xc846x2["map"](_0xc846x4, function(_0xc846x0) {
                        return _0xc846x0["element"]
                    });
                    return _0xc846x3[_0xc846x0] = _0xc846x2["unique"](_0xc846x3[_0xc846x0])
                });
                return _0xc846x3
            },
            above: function(_0xc846x0) {
                if (_0xc846x0 == null) {
                    _0xc846x0 = _0xc846x3
                };
                return _0xc846xc._filter(_0xc846x0, "vertical", function(_0xc846x0, _0xc846x1) {
                    return _0xc846x1["offset"] <= _0xc846x0["oldScroll"]["y"]
                })
            },
            below: function(_0xc846x0) {
                if (_0xc846x0 == null) {
                    _0xc846x0 = _0xc846x3
                };
                return _0xc846xc._filter(_0xc846x0, "vertical", function(_0xc846x0, _0xc846x1) {
                    return _0xc846x1["offset"] > _0xc846x0["oldScroll"]["y"]
                })
            },
            left: function(_0xc846x0) {
                if (_0xc846x0 == null) {
                    _0xc846x0 = _0xc846x3
                };
                return _0xc846xc._filter(_0xc846x0, "horizontal", function(_0xc846x0, _0xc846x1) {
                    return _0xc846x1["offset"] <= _0xc846x0["oldScroll"]["x"]
                })
            },
            right: function(_0xc846x0) {
                if (_0xc846x0 == null) {
                    _0xc846x0 = _0xc846x3
                };
                return _0xc846xc._filter(_0xc846x0, "horizontal", function(_0xc846x0, _0xc846x1) {
                    return _0xc846x1["offset"] > _0xc846x0["oldScroll"]["x"]
                })
            },
            enable: function() {
                return _0xc846xc._invoke("enable")
            },
            disable: function() {
                return _0xc846xc._invoke("disable")
            },
            destroy: function() {
                return _0xc846xc._invoke("destroy")
            },
            extendFn: function(_0xc846x0, _0xc846x1) {
                return _0xc846xd[_0xc846x0] = _0xc846x1
            },
            _invoke: function(_0xc846x0) {
                var _0xc846x1;
                _0xc846x1 = _0xc846x2["extend"]({}, _0xc846x7["vertical"], _0xc846x7["horizontal"]);
                return _0xc846x2["each"](_0xc846x1, function(_0xc846x1, _0xc846x2) {
                    _0xc846x2[_0xc846x0]();
                    return true
                })
            },
            _filter: function(_0xc846x0, _0xc846x1, _0xc846x3) {
                var _0xc846x4, _0xc846x5;
                _0xc846x4 = _0xc846xa[_0xc846x2(_0xc846x0)["data"](_0xc846x9)];
                if (!_0xc846x4) {
                    return []
                };
                _0xc846x5 = [];
                _0xc846x2["each"](_0xc846x4["waypoints"][_0xc846x1], function(_0xc846x0, _0xc846x1) {
                    if (_0xc846x3(_0xc846x4, _0xc846x1)) {
                        return _0xc846x5["push"](_0xc846x1)
                    }
                });
                _0xc846x5["sort"](function(_0xc846x0, _0xc846x1) {
                    return _0xc846x0["offset"] - _0xc846x1["offset"]
                });
                return _0xc846x2["map"](_0xc846x5, function(_0xc846x0) {
                    return _0xc846x0["element"]
                })
            }
        };
        _0xc846x2[_0xc846x13] = function() {
            var _0xc846x0, _0xc846x2;
            _0xc846x2 = arguments[0], _0xc846x0 = 2 <= arguments["length"] ? _0xc846x1["call"](arguments, 1) : [];
            if (_0xc846xc[_0xc846x2]) {
                return _0xc846xc[_0xc846x2]["apply"](null, _0xc846x0)
            } else {
                return _0xc846xc["aggregate"]["call"](null, _0xc846x2)
            }
        };
        _0xc846x2[_0xc846x13]["settings"] = {
            resizeThrottle: 100,
            scrollThrottle: 30
        };
        return _0xc846x4["load"](function() {
            return _0xc846x2[_0xc846x13]("refresh")
        })
    })
})["call"](this);
(function(_0xc846x1) {
    "use strict";
    _0xc846x1["fn"]["counterUp"] = function(_0xc846x0) {
        var _0xc846x2 = _0xc846x1["extend"]({
            time: 400,
            delay: 10
        }, _0xc846x0);
        return this["each"](function() {
            var _0xc846x0 = _0xc846x1(this),
                _0xc846x3 = _0xc846x2,
                _0xc846x4 = function() {
                    var _0xc846x1 = [],
                        _0xc846x2 = _0xc846x3["time"] / _0xc846x3["delay"],
                        _0xc846x4 = _0xc846x0["text"](),
                        _0xc846x7 = /[0-9]+,[0-9]+/ ["test"](_0xc846x4);
                    _0xc846x4 = _0xc846x4["replace"](/,/g, "");
                    var _0xc846x5 = /^[0-9]+$/ ["test"](_0xc846x4),
                        _0xc846x9 = /^[0-9]+\.[0-9]+$/ ["test"](_0xc846x4),
                        _0xc846xa = _0xc846x9 ? (_0xc846x4["split"](".")[1] || [])["length"] : 0;
                    for (var _0xc846x8 = _0xc846x2; _0xc846x8 >= 1; _0xc846x8--) {
                        var _0xc846x6 = parseInt(_0xc846x4 / _0xc846x2 * _0xc846x8);
                        _0xc846x9 && (_0xc846x6 = parseFloat(_0xc846x4 / _0xc846x2 * _0xc846x8)["toFixed"](_0xc846xa));
                        if (_0xc846x7) {
                            while (/(\d+)(\d{3})/ ["test"](_0xc846x6.toString())) {
                                _0xc846x6 = _0xc846x6.toString()["replace"](/(\d+)(\d{3})/, "$1,$2")
                            }
                        };
                        _0xc846x1["unshift"](_0xc846x6)
                    };
                    _0xc846x0["data"]("counterup-nums", _0xc846x1);
                    _0xc846x0["text"]("0");
                    var _0xc846xb = function() {
                        var _0xc846x14 = parseFloat(_0xc846x0["data"]("counterup-nums")["shift"]());
                        if (_0xc846x14 >= 1000) {
                            _0xc846x14 = (_0xc846x14 / 1000)["toFixed"](1) + "k"
                        } else {
                            if (_0xc846x14 >= 100000) {
                                _0xc846x14 = (_0xc846x14 / 100000)["toFixed"](1) + "M"
                            }
                        };
                        _0xc846x0["text"](_0xc846x14);
                        if (_0xc846x0["data"]("counterup-nums")["length"]) {
                            setTimeout(_0xc846x0["data"]("counterup-func"), _0xc846x3["delay"])
                        } else {
                            delete _0xc846x0["data"]("counterup-nums");
                            _0xc846x0["data"]("counterup-nums", null);
                            _0xc846x0["data"]("counterup-func", null)
                        }
                    };
                    _0xc846x0["data"]("counterup-func", _0xc846xb);
                    setTimeout(_0xc846x0["data"]("counterup-func"), _0xc846x3["delay"])
                };
            _0xc846x0["waypoint"](_0xc846x4, {
                offset: "100%",
                triggerOnce: !0
            })
        })
    }
})(jQuery);
$(document)["ready"](function() {
        $(".mbtswitch")["click"](function() {
            $(".switchoff")["slideToggle"]();
            if ($(".mbtswitch i")["attr"]("class") === "active") {
                $(".mbtswitch i")["removeClass"]("active")["addClass"]("inactive")
            } else {
                if ($(".mbtswitch i")["attr"]("class") === "inactive") {
                    $(".mbtswitch i")["removeClass"]("inactive")["addClass"]("active")
                }
            }
        });
        $(".mbtswitch2")["click"](function() {
            $(".switchoff2")["slideToggle"]();
            if ($(".mbtswitch2 i")["attr"]("class") === "active") {
                $(".mbtswitch2 i")["removeClass"]("active")["addClass"]("inactive")
            } else {
                if ($(".mbtswitch2 i")["attr"]("class") === "inactive") {
                    $(".mbtswitch2 i")["removeClass"]("inactive")["addClass"]("active")
                }
            }
        })
    }) /*##########Plugin Settings#############*/ $(document).ready(function() {
            var shareUrl = $("link[rel=canonical]").attr("href");
            $.getJSON('http://share-counters.rhcloud.com/?url=' + encodeURIComponent(shareUrl) + "&callback=?", function(data) {
                shares = data.shares;
                $(".count").each(function(index, el) {
                    service = $(el).parents(".share-btn").attr("data-service");
                    count = shares[service];
                    $(el).text(count)
                });
            }); /*#########Animation Settings###########*/
            $(window).load(function() {
                        $('.anim').counterUp({
                                    delay: 20, //Smaller value gives more frames       time: 1000 //Higher value slows down animation     }); });});
