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
            'macosxtiger': {
                paths: [
                    /.+/
                ],
                preventedPaths: [],
                dateRange: [ 'Apr 28', 'Apr 30' ],
                action: function () {
                    var t = Date.now();
                    bgImgUrl = `url(/album/img/0000201302250001.svg)`;

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
                        * {
                            text-transform: initial !important;
                        }
                        #title p {
                            font-size: 16px;
                            font-weight: 300 !important;
                        }
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
                            font-family: "Lucida Grande", "Lucida Sans Unicode", "Helvetica Neue", "Helvetica", "Arial", sans-serif !important;
                        }
                        body > * {
                            color: #FFF;
                        }
                        @media screen and (max-width: 700px) {
                            .uuid_c2ec00beadf342f0987dcef09146084e {
                                display: none;
                            }
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
                                font-family: "Lucida Grande", "Lucida Sans Unicode", "Helvetica Neue", "Helvetica", "Arial", sans-serif !important;
                                color: #000;
                                background: #EDEDED;
                                text-shadow: rgba(255, 255, 255, 0.6) 0 1px 1px;
                                border: 3px solid rgba(0, 0, 0, 0);
                                border-top: none;
                                background-size: 100% 40px;
                                background-repeat: no-repeat;
                                box-shadow: rgba(0, 0, 0, 0.4) 0 8px 35px 4px;
                                position: relative;
                                padding-top: 70px;
                                padding: 70px 20px 40px;
                            }
                            .post * {
                                font-family: "Lucida Grande", "Lucida Sans Unicode", "Helvetica Neue", "Helvetica", "Arial", sans-serif !important;
                            }
                            .post::before {
                                content: "Neruthes Blog Post";
                                font-size: 13px;
                                color: #2E2D2E;
                                text-align: center;
                                background: rgb(186,186,186);
                                background-image: linear-gradient(180deg, #EBEBEB 0%, #C9C9C9 100%);
                                border-bottom: 1px solid #B0AFB0;
                                border-radius: 4px 4px 0 0;
                                text-shadow: rgba(255, 255, 255, 0.5) 0 1px 1px;
                                display: block;
                                position: absolute;
                                top: 0;
                                left: 0;
                                box-sizing: border-box;
                                width: calc(100% + 6px);
                                height: 22px;
                                padding: 3px 10px 0;
                                margin: 0 -3px;
                            }
                            .post::after {
                                content: " ";
                                position: absolute;
                                top: 5px;
                                left: 5px;
                                width: 120px;
                                height: 12px;
                                background: url('data:image/png;base64,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') no-repeat left scroll;
                                background-size: contain;
                            }
                            .post-text, .post-date {
                                font-size: 16px;
                            }
                            .post-text code, .post-text pre {
                                font-size: 14px;
                                font-family: "Menlo", "Courier", "Consolas", "Inconsolata", monospace !important;
                                color: #000;
                                background: rgba(0, 0, 0, 0.08);
                                box-shadow: rgba(0, 0, 0, 0.08) 0 0 0 2px;
                            }
                        `;
                    };
                    st.innerHTML = styleText;
                    document.head.appendChild(st);

                    var mockDockArea = document.createElement('div');
                    mockDockArea.setAttribute('class', 'uuid_c2ec00beadf342f0987dcef09146084e');
                    mockDockArea.setAttribute('style', `
                        position: fixed;
                        bottom: 0px;
                        left: 0px;
                        width: 100vw;
                        height: 80px;
                        background: url(/assets/themes/mac-dock-mockup.png) bottom no-repeat scroll;
                        background-size: contain;
                    `);
                    document.body.appendChild(mockDockArea);

                    var wpLinkFooter = document.createElement('div');
                    wpLinkFooter.setAttribute('style', `
                        font-size: 14px;
                        text-align: center;
                        padding: 40px 10px 120px;
                    `);
                    wpLinkFooter.innerHTML = '<a href="https://en.wikipedia.org/wiki/Mac_OS_X_Tiger" target="_blank">RIP, Mac OS X Tiger.</a>'
                    document.body.appendChild(wpLinkFooter);
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
