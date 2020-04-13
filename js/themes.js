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
                    var t = Date.now();
                    var bgImgUrl = `url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDAwcHgiIGhlaWdodD0iNDAwcHgiIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1Ny4xICg4MzA4OCkgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+YmctYmxpc3M8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjgwLjE3MzUxNiUiIHkxPSIwJSIgeDI9IjM2LjY4MDM2NTMlIiB5Mj0iNjMuMzIxOTE3OCUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzFDNzdGRSIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjOThDNkZEIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxwYXRoIGQ9Ik0xNCwyMzUgQzk2LjY2NjY2NjcsMjA2LjMzMzMzMyAxNjguNjY2NjY3LDE5MiAyMzAsMTkyIEMzMjIsMTkyIDM0OC4xOTM0MjYsMjE1LjA5Mzk4OSA0MjAsMjI0IEM0OTEuODA2NTc0LDIzMi45MDYwMTEgNTYwLjkxNDg0NSwyMjcuNDkzNDk1IDYzMywyMjQgTDU4OCw0NzAgTDAsNDcwIEwxNCwyMzUgWiIgaWQ9InBhdGgtMiI+PC9wYXRoPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNi44ODU4NDQ3NSUiIHkxPSIxMDAlIiB4Mj0iMTIuMjc2MjU1NyUiIHkyPSI1Ni4yNzYyNTU3JSIgaWQ9ImxpbmVhckdyYWRpZW50LTQiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzk1RTAzIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNBRkQ2MzQiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iYmctYmxpc3MiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJHcm91cC0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTE5LjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgeD0iMTE5IiB5PSIwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCI+PC9yZWN0PgogICAgICAgICAgICA8bWFzayBpZD0ibWFzay0zIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTIiPjwvdXNlPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDxnIGlkPSJNYXNrIj48L2c+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtNCkiIG1hc2s9InVybCgjbWFzay0zKSIgeD0iMTE5IiB5PSIwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCI+PC9yZWN0PgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+')`;
                    bgImgUrl = `url(https://neruthes.xyz/web-misc/img/bliss.jpg)`; // Used with permission from Microsoft (https://www.microsoft.com/en-us/legal/intellectualproperty/Permissions/default.aspx)
                    if (location.host !== 'neruthes.xyz' && location.host !== 'neruthes.github.io') { // Thisis a mirror site
                        bgImgUrl = `url(https://neruthes.github.io/web-misc/img/bliss.jpg)`; // Used with permission from Microsoft (https://www.microsoft.com/en-us/legal/intellectualproperty/Permissions/default.aspx)
                    };

                    // Insert
                    if (document.body.offsetWidth < 700 ||
                        navigator.userAgent.indexOf('iPhone') > -1 ||
                        navigator.userAgent.indexOf('iPad') > -1
                    ) {
                        var bg = document.createElement('div');
                        bg.setAttribute('style', `
                            position: fixed;
                            top: -170px;
                            left: -50px;
                            width: ${window.innerWidth + 100}px;
                            height: ${window.innerHeight + 400}px;
                            background: #FFF ${bgImgUrl} scroll center no-repeat;
                            background-size: cover;
                            z-index: -1;
                        `);
                        document.body.appendChild(bg);
                    };
                    // Style
                    var st = document.createElement('style');
                    var styleText = `
                        @import url('https://neruthes.xyz/web-misc/fonts/free-pixel.css');
                        @import url('https://neruthes.github.io/web-misc/fonts/free-pixel.css');
                        @import url('https://neruthes.now.sh/web-misc/fonts/free-pixel.css');
                        header .section-content {
                            color: #FFF !important;
                            text-shadow: rgba(0, 0, 0, 0.4) 0 1px 3px;
                        }
                        body {
                            background: none;
                            background: #FFF ${bgImgUrl} fixed center no-repeat;
                            background-size: cover;
                        }
                        html, body, h1, h2, h3, h4, h5, h6, div, article, section, header, footer, nav, p, pre, code, span, strong, em, button, label, input, textarea, form {
                            font-family: "Free Pixel", "Calibri", "Tahoma", "Trebuchet", "Open Sans", "Helvetica", "Arial", "Songti SC", "Yuppy SC", "PingFang SC", "Hiragino Sans GB", sans-serif !important;
                        }
                        #avatar.avatar {
                            background-image: url(/neruthes_pixelart-forceCircle-padded.png) !important;
                        }
                        body > * {
                            color: #FFF;
                        }
                    `;
                    if (location.pathname.indexOf('/blog/') === 0) {
                        styleText += `
                            .global * {
                                color: #FFF;
                            }
                            header.global h1, header.global h2 {
                                color: #FFF !important;
                                text-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px;
                            }
                            .post {
                                font-family: "Arial", "Helvetica", "SimSun", "Songti SC", "Yuppy SC", "PingFang SC", "Hiragino Sans GB", sans-serif !important;
                                color: #000;
                                background: #ECE8D9;
                                background: #F5F3EB;
                                text-shadow: rgba(255, 255, 255, 0.6) 0 1px 2px;
                                border: 3px solid #005CF9;
                                border-top: none;
                                background-size: 100% 40px;
                                background-repeat: no-repeat;
                                box-shadow: rgba(0, 0, 0, 0.2) 0 8px 24px 2px;
                                position: relative;
                                padding-top: 70px;
                                padding: 70px 20px 40px;
                            }
                            .post * {
                                font-family: "Arial", "Helvetica", "SimSun", "Songti SC", "Yuppy SC", "PingFang SC", "Hiragino Sans GB", sans-serif !important;
                            }
                            .post::before {
                                content: "Neruthes Blog Post";
                                display: block;
                                position: absolute;
                                top: 0;
                                left: 0;
                                box-sizing: border-box;
                                width: calc(100% + 6px);
                                height: 40px;
                                padding: 12px 10px 0;
                                margin: 0 -3px;
                                font-size: 17px;
                                color: #FFF;
                                background-image: linear-gradient(180deg, #0B6CFD 0%, #0877FD 8%, #026AF5 15%, #0053E2 27%, #0155E5 47%, #0162FB 77%, #026AFE 88%, #005CF9 100%);
                                border-radius: 4px 4px 0 0;
                                text-shadow: none;
                            }
                            .post::after {
                                content: " ";
                                position: absolute;
                                top: 7px;
                                right: 5px;
                                width: 26px;
                                height: 26px;
                                background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjhweCIgaGVpZ2h0PSIyOHB4IiB2aWV3Qm94PSIwIDAgMjggMjgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5jbG9zZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNzcyNjEiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0Q0NTgzMCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8cmVjdCBpZD0icGF0aC0yIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIHJ4PSIzIj48L3JlY3Q+CiAgICAgICAgPGZpbHRlciB4PSItMTEuNSUiIHk9Ii0xMS41JSIgd2lkdGg9IjEyMy4xJSIgaGVpZ2h0PSIxMjMuMSUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImZpbHRlci0zIj4KICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd0JsdXJJbm5lcjEiPjwvZmVHYXVzc2lhbkJsdXI+CiAgICAgICAgICAgIDxmZU9mZnNldCBkeD0iMCIgZHk9Ii0yIiBpbj0ic2hhZG93Qmx1cklubmVyMSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRJbm5lcjEiPjwvZmVPZmZzZXQ+CiAgICAgICAgICAgIDxmZUNvbXBvc2l0ZSBpbj0ic2hhZG93T2Zmc2V0SW5uZXIxIiBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0iYXJpdGhtZXRpYyIgazI9Ii0xIiBrMz0iMSIgcmVzdWx0PSJzaGFkb3dJbm5lcklubmVyMSI+PC9mZUNvbXBvc2l0ZT4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuMTQgMCIgdHlwZT0ibWF0cml4IiBpbj0ic2hhZG93SW5uZXJJbm5lcjEiIHJlc3VsdD0ic2hhZG93TWF0cml4SW5uZXIxIj48L2ZlQ29sb3JNYXRyaXg+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dCbHVySW5uZXIyIj48L2ZlR2F1c3NpYW5CbHVyPgogICAgICAgICAgICA8ZmVPZmZzZXQgZHg9IjAiIGR5PSIyIiBpbj0ic2hhZG93Qmx1cklubmVyMiIgcmVzdWx0PSJzaGFkb3dPZmZzZXRJbm5lcjIiPjwvZmVPZmZzZXQ+CiAgICAgICAgICAgIDxmZUNvbXBvc2l0ZSBpbj0ic2hhZG93T2Zmc2V0SW5uZXIyIiBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0iYXJpdGhtZXRpYyIgazI9Ii0xIiBrMz0iMSIgcmVzdWx0PSJzaGFkb3dJbm5lcklubmVyMiI+PC9mZUNvbXBvc2l0ZT4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDEgICAwIDAgMCAwIDEgICAwIDAgMCAwIDEgIDAgMCAwIDAuMyAwIiB0eXBlPSJtYXRyaXgiIGluPSJzaGFkb3dJbm5lcklubmVyMiIgcmVzdWx0PSJzaGFkb3dNYXRyaXhJbm5lcjIiPjwvZmVDb2xvck1hdHJpeD4KICAgICAgICAgICAgPGZlTWVyZ2U+CiAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeElubmVyMSI+PC9mZU1lcmdlTm9kZT4KICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0ic2hhZG93TWF0cml4SW5uZXIyIj48L2ZlTWVyZ2VOb2RlPgogICAgICAgICAgICA8L2ZlTWVyZ2U+CiAgICAgICAgPC9maWx0ZXI+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iY2xvc2UiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS4wMDAwMDAsIDEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJSZWN0YW5nbGUiPgogICAgICAgICAgICAgICAgPHVzZSBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHhsaW5rOmhyZWY9IiNwYXRoLTIiPjwvdXNlPgogICAgICAgICAgICAgICAgPHVzZSBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIxIiBmaWx0ZXI9InVybCgjZmlsdGVyLTMpIiB4bGluazpocmVmPSIjcGF0aC0yIj48L3VzZT4KICAgICAgICAgICAgICAgIDxyZWN0IHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIxIiB4PSItMC41IiB5PSItMC41IiB3aWR0aD0iMjciIGhlaWdodD0iMjciIHJ4PSIzIj48L3JlY3Q+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iI0ZGRkZGRiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTMuMDAwMDAwLCAxMy4wMDAwMDApIHJvdGF0ZSgtNDUuMDAwMDAwKSB0cmFuc2xhdGUoLTEzLjAwMDAwMCwgLTEzLjAwMDAwMCkgIiB4PSIxMiIgeT0iMyIgd2lkdGg9IjIiIGhlaWdodD0iMjAiIHJ4PSIxIj48L3JlY3Q+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9IiNGRkZGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzLjAwMDAwMCwgMTMuMDAwMDAwKSByb3RhdGUoNDUuMDAwMDAwKSB0cmFuc2xhdGUoLTEzLjAwMDAwMCwgLTEzLjAwMDAwMCkgIiB4PSIxMiIgeT0iMyIgd2lkdGg9IjIiIGhlaWdodD0iMjAiIHJ4PSIxIj48L3JlY3Q+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=');
                                background-size: cover;
                            }
                            .post-text {
                                font-size: 18px;
                            }
                            .post-text code, .post-text pre {
                                color: #000;
                                background: rgba(0, 0, 0, 0.08);
                                box-shadow: rgba(0, 0, 0, 0.08) 0 0 0 2px;
                            }
                        `;
                    };
                    st.innerHTML = styleText;
                    document.head.appendChild(st);

                    var msCopyrightNotice = document.createElement('div');
                    msCopyrightNotice.setAttribute('style', `
                        font-size: 14px;
                        text-align: center;
                        padding: 40px 10px 80px;
                    `);
                    msCopyrightNotice.innerHTML = 'The background image "Bliss" is used with permission from Microsoft.'
                    document.body.appendChild(msCopyrightNotice);
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
