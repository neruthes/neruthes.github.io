window.addEventListener('load', function () {
    (function () {
        if (location.href.match(/[?&]theme=(\w+?)/)) {
            window.mandatoryTheme = location.href.match(/[?&]theme=(\w+?)/)[1];
        } else {
            window.mandatoryDate = false;
        };
        if (location.href.match(/[?&]date=(\d{8})/)) {
            window.mandatoryDate = location.href.match(/[?&]date=(\d{8})/)[1];
            var d = (new Date(`${mandatoryDate.slice(0,4)}/${mandatoryDate.slice(4,6)}/${mandatoryDate.slice(6,8)} 12:31:00`));
        } else {
            window.mandatoryDate = false;
            var d = new Date();
        };
        var yyyy = d.getFullYear();

        window.themes = {
            'aprilfool': {
                paths: [
                    /.+/
                ],
                preventedPaths: [],
                dateRange: [ 'Mar 31', 'Apr 04' ],
                action: function () {
                    var st = document.createElement('style');
                    st.innerHTML = `
                        body {
                            background: #A5B8F8 url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDAwcHgiIGhlaWdodD0iNDAwcHgiIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1Ny4xICg4MzA4OCkgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+YmctYmxpc3M8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjgwLjE3MzUxNiUiIHkxPSIwJSIgeDI9IjM2LjY4MDM2NTMlIiB5Mj0iNjMuMzIxOTE3OCUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzFDNzdGRSIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjOThDNkZEIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxwYXRoIGQ9Ik0xNCwyMzUgQzk2LjY2NjY2NjcsMjA2LjMzMzMzMyAxNjguNjY2NjY3LDE5MiAyMzAsMTkyIEMzMjIsMTkyIDM0OC4xOTM0MjYsMjE1LjA5Mzk4OSA0MjAsMjI0IEM0OTEuODA2NTc0LDIzMi45MDYwMTEgNTYwLjkxNDg0NSwyMjcuNDkzNDk1IDYzMywyMjQgTDU4OCw0NzAgTDAsNDcwIEwxNCwyMzUgWiIgaWQ9InBhdGgtMiI+PC9wYXRoPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNi44ODU4NDQ3NSUiIHkxPSIxMDAlIiB4Mj0iMTIuMjc2MjU1NyUiIHkyPSI1Ni4yNzYyNTU3JSIgaWQ9ImxpbmVhckdyYWRpZW50LTQiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzk1RTAzIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNBRkQ2MzQiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iYmctYmxpc3MiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJHcm91cC0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTE5LjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgeD0iMTE5IiB5PSIwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCI+PC9yZWN0PgogICAgICAgICAgICA8bWFzayBpZD0ibWFzay0zIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTIiPjwvdXNlPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDxnIGlkPSJNYXNrIj48L2c+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtNCkiIG1hc2s9InVybCgjbWFzay0zKSIgeD0iMTE5IiB5PSIwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCI+PC9yZWN0PgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+') no-repeat fixed center;
                            background-size: cover;
                        }
                        html, body, h1, h2, h3, h4, h5, h6, div, article, section, header, footer, nav, p, pre, code, span, strong, em, button, label, input, textarea, form {
                            font-family: "Calibri", "Tahoma", "Trebuchet", "Open Sans", "Helvetica", "Arial", "Songti SC", "Yuppy SC", "PingFang SC", "Hiragino Sans GB", cursive !important;
                        }
                        #avatar.avatar {
                            background-image: url(/neruthes_pixelart-forceCircle-padded.png) !important;
                        }
                    `;
                    if (location.pathname.indexOf('/blog/') === 0) {
                        st.innerHTML += `
                            .post {
                                color: #000;
                                background: #ECE8D9;
                                background: #F5F3EB;
                                text-shadow: rgba(255, 255, 255, 0.6) 0 1px 2px;
                                border: 3px solid #0A5CD6;
                                background-size: 100% 40px;
                                background-repeat: no-repeat;
                                box-shadow: rgba(0, 0, 0, 0.2) 0 8px 24px 2px;
                                position: relative;
                                padding-top: 70px;
                                padding: 70px 20px 40px;
                            }
                            .post::before {
                                content: "Neruthes Blog Post";
                                display: block;
                                position: absolute;
                                top: 0;
                                left: 0;
                                box-sizing: border-box;
                                width: 100%;
                                height: 40px;
                                padding: 8px 10px 0;
                                font-size: 17px;
                                color: #FFF;
                                background-image: linear-gradient(180deg, #0A5CD6 0%, #0877FD 8%, #026AF5 15%, #0053E2 27%, #0155E5 47%, #0162FB 77%, #026AFE 88%, #005CF9 94%, #003ADB 100%);
                                text-shadow: none;
                            }
                            .post::after {
                                content: " ";
                                position: absolute;
                                top: 6px;
                                right: 5px;
                                width: 26px;
                                height: 26px;
                                background: url('data:image/png;base64,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');
                                background-size: cover;
                            }
                            .post-text code, .post-text pre {
                                font-family: Menlo, monospace;
                                color: #000;
                                background: rgba(0, 0, 0, 0.08);
                                box-shadow: rgba(0, 0, 0, 0.08) 0 0 0 2px;
                            }
                        `;
                    };
                    document.head.appendChild(st);
                }
            },
            'aprilfool_alt': {
                paths: [
                    /.+/
                ],
                preventedPaths: [],
                dateRange: [ 'Mar 31', 'Apr 04' ],
                action: function () {
                    var st = document.createElement('style');
                    st.innerHTML = `
                        @import url('https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap&subset=latin-ext');
                        html, body, h1, h2, h3, h4, h5, h6, div, article, section, header, footer, nav, p, pre, code, span, strong, em, button, label, input, textarea, form {
                            font-family: "123456", "Comic Sans MS", "Permanent Marker", "Open Sans", "Helvetica", "Arial", "Wawati SC", "Yuppy SC", "PingFang SC", "Hiragino Sans GB", cursive !important;
                        }
                        #avatar.avatar {
                            background-image: url(/neruthes_pixelart-forceCircle-padded.png) !important;
                        }
                    `;
                    document.head.appendChild(st);
                }
            },
            'piday': {
                paths: [
                    /.+/
                ],
                preventedPaths: [],
                dateRange: [ 'Mar 13', 'Mar 15' ],
                action: function () {
                    var st = document.createElement('style');
                    st.innerHTML = `
                        @import url('https://fonts.googleapis.com/css?family=VT323&display=swap&subset=latin-ext');
                        html, body, h1, h2, h3, h4, h5, h6, div, article, section, header, footer, nav, p, pre, code, span, strong, em, button, label, input, textarea, form {
                            font-family: "VT323", "Joystix", "Bitblox", "GB18030 Bitmap", "Wawati SC", "Yuppy SC", "PingFang SC", "Hiragino Sans GB", monosapce !important;
                        }
                        html, body { font-size: 24px !important; }
                        h1 { font-size: 2rem !important; }
                        h2 { font-size: 1.4rem !important; }
                        h3 { font-size: 1.2rem !important; }
                        h4, h5, h6, p { font-size: 1rem !important; }
                        #avatar.avatar {
                            background-image: url(/neruthes_pixelart-forceCircle-padded.png) !important;
                        }
                    `;
                    document.head.appendChild(st);
                }
            },
            'chunjie': {
                paths: [
                    /^\/$/,
                    /^\/blog\//,
                    /^\/album\//
                ],
                preventedPaths: [
                    /album.+?[?&]p=\d+/
                ],
                dateRange: [ 'Jan 01', 'Mar 01' ],
                action: function () {
                    if (location.pathname !== '/') {
                        document.body.setAttribute('data-should-always-hide-hengpi', 'true');
                    };

                    var linkTag = document.createElement('link');
                    linkTag.setAttribute('rel', 'stylesheet');
                    linkTag.setAttribute('href', '/css/chunjie.css');
                    document.head.appendChild(linkTag);

                    var makeElement = function (align) {
                        var div = document.createElement('div');
                        div.setAttribute('class', `desktop-only chunlian vertical ${align}`);
                        div.setAttribute('style', `position: fixed; top: 2vh; height: 96vh; ${align}: 2vh;`)
                        div.setAttribute('onclick', 'return false');
                        var img = document.createElement('img');
                        img.setAttribute('src', `/assets/other-images/kotomatsu-chunlian-${align}.jpg`);
                        img.setAttribute('style', `height: 100%; display: block; margin: 0 auto;`);
                        img.setAttribute('data-rotation', 'Y0');
                        img.setAttribute('data-scale', '1.00');
                        img.setAttribute('onclick', 'return false');
                        div.appendChild(img);
                        return div;
                    };
                    var shanglian = makeElement('right');
                    var xialian = makeElement('left');
                    var hengpi = (function () {
                        var div = document.createElement('div');
                        div.setAttribute('class', 'desktop-only chunlian hengpi');
                        div.setAttribute('style', `position: fixed; top: 2vh; width: calc(100vw - 42vh); height: 15.6vh; left: 21vh;`)
                        div.setAttribute('onclick', 'return false');
                        var img = document.createElement('img');
                        img.setAttribute('src', `/assets/other-images/kotomatsu-chunlian-hengpi.jpg`);
                        img.setAttribute('style', `height: 100%; display: block; margin: 0 auto;`);
                        img.setAttribute('data-rotation', 'X0');
                        img.setAttribute('data-scale', '1.00');
                        img.setAttribute('onclick', 'return false');
                        div.appendChild(img);
                        return div;
                    })();
                    document.body.appendChild(shanglian);
                    document.body.appendChild(xialian);
                    document.body.appendChild(hengpi);

                    var renderElementTransformStyle = function (img) {
                        img.style.transform = [
                            `rotate${img.getAttribute('data-rotation')[0]}(${img.getAttribute('data-rotation').slice(1)}deg)`,
                            `scale(${img.getAttribute('data-scale')})`
                        ].join(' ');
                    };

                    document.querySelectorAll('.chunlian > img').forEach(function (chunlian) {
                        chunlian.addEventListener('mouseover', function (e) {
                            e.target.setAttribute('data-scale', '1.00');
                            renderElementTransformStyle(e.target);
                            document.body.setAttribute('data-chunlian-hover', 'true');
                        });
                        chunlian.addEventListener('mouseleave', function (e) {
                            e.target.setAttribute('data-scale', '1.00');
                            renderElementTransformStyle(e.target);
                            document.body.setAttribute('data-chunlian-hover', 'false');
                        });
                    });

                    document.querySelectorAll('.chunlian.vertical > img').forEach(function (chunlian) {
                        chunlian.addEventListener('click', function (e) {
                            var currentRotation = Number(e.target.getAttribute('data-rotation').slice(1));
                            e.target.setAttribute('data-rotation', 'Y' + (currentRotation + 180));
                            renderElementTransformStyle(e.target);
                        });
                    });
                    document.querySelector('.chunlian.hengpi > img').addEventListener('click', function (e) {
                        var currentRotation = Number(e.target.getAttribute('data-rotation').slice(1));
                        e.target.setAttribute('data-rotation', 'X' + (currentRotation + 180));
                        renderElementTransformStyle(e.target);
                    });

                    document.addEventListener('scroll', function () {
                        if (window.pageYOffset > window.screen.availHeight * 0.8) {
                            document.body.setAttribute('data-should-hide-hengpi', 'true');
                        } else {
                            document.body.setAttribute('data-should-hide-hengpi', 'false');
                        };
                        var opacity = Math.max( 0, (1-(window.pageYOffset/window.screen.availHeight/0.8)) );
                        document.querySelector('.chunlian.hengpi').style.opacity = opacity;
                        renderElementTransformStyle(document.querySelector('.chunlian.hengpi > img'));
                    });
                }
            }
        };

        (function () {
            window.anyThemeApplied = false;
            Object.keys(themes).map(function (themeId) {
                console.log('paths: ' +
                    themes[themeId].paths.map(function (reg) {
                        return (location.pathname).match(reg)
                    }).join()
                );
                console.log('preventedPaths: ' +
                    themes[themeId].preventedPaths.map(function (reg) {
                        return (location.pathname + location.search).match(reg)
                    }).join()
                );
                if (
                    location.href.match(new RegExp('[?&]theme=' + themeId))
                    &&
                    themes[themeId].paths.map(function (reg) {
                        return (location.pathname).match(reg) ? true : false;
                    }).filter(function (x) { return x; }).length !== 0
                    &&
                    themes[themeId].preventedPaths.map(function (reg) {
                        return (location.pathname + location.search).match(reg) ? true : false;
                    }).filter(function (x) { return x; }).length === 0
                    &&
                    !window.anyThemeApplied
                ) {
                    window.anyThemeApplied = themeId;
                    themes[themeId].action();
                }
            });
            Object.keys(themes).map(function (themeId) {
                if (
                    (
                        d.getTime() > (new Date(themes[themeId].dateRange[0] + ' ' + d.getFullYear())).getTime()
                        &&
                        d.getTime() < (new Date(themes[themeId].dateRange[1] + ' ' + d.getFullYear())).getTime()
                    )
                    &&
                    themes[themeId].paths.map(function (reg) {
                        return (location.pathname).match(reg) ? true : false;
                    }).filter(function (x) { return x; }).length !== 0
                    &&
                    themes[themeId].preventedPaths.map(function (reg) {
                        return (location.pathname + location.search).match(reg) ? true : false;
                    }).filter(function (x) { return x; }).length === 0
                    &&
                    !window.anyThemeApplied
                ) {
                    anyThemeApplied = themeId;
                    themes[themeId].action();
                };
            });
            window.setInterval(function () {
                [...document.querySelectorAll('a')].filter(function (a) {
                    return a.href.match('' + location.host) ? true : false;
                }).map(function (a) {
                    if (a.getAttribute('data-theme-link-done') !== 'true' && window.mandatoryTheme) {
                        var qs = !!a.href.match(/\w+=[\w\d]+$/);
                        a.href += (qs ? '&' : '?') + 'theme=' + window.anyThemeApplied;
                        a.setAttribute('data-theme-link-done', 'true');
                    } else if (a.getAttribute('data-theme-link-done') !== 'true' && window.mandatoryDate) {
                        var qs = !!a.href.match(/\w+=[\w\d]+$/);
                        a.href += (qs ? '&' : '?') + 'date=' + window.mandatoryDate;
                        a.setAttribute('data-theme-link-done', 'true');
                    };
                });
            }, 500);
        })();
    })();
});
