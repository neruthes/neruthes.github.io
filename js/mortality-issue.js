(function () {
    var myDate = '2023-04-17';
    if (window.flag_d7b11a086afa420aae24bb5467e9765e === true) {
        return 1;
    };
    window.flag_d7b11a086afa420aae24bb5467e9765e = true;
    window.func_d7b11a086afa420aae24bb5467e9765e_close = function () {
        document.getElementById('node_d7b11a086afa420aae24bb5467e9765e').remove();
        document.getElementById('node_15c51a6bba1d48e6b5ec4b10fbafcaf0').remove();
        document.body.style.paddingTop = '0px';
    };
    if (location.search.slice(1).split('&').indexOf('mortality_notice=yes') > -1 || Date.now() > (new Date(`${myDate}T00:00:00.000Z`)).getTime()) {
        document.body.style.paddingTop = '80px';
        document.body.appendChild((function () {
            var tag = document.createElement('div');
            tag.setAttribute('id', 'node_d7b11a086afa420aae24bb5467e9765e');
            tag.setAttribute('style', `
                font-size: 16px;
                font-weight: 600;
                line-height: 25px;
                text-align: center;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 3000;
                box-sizing: border-box;
                width: 100vw;
                min-height: 80px;
                padding: 15px 16px;
                cursor: pointer;
            `);
            tag.innerHTML = `<style>#node_d7b11a086afa420aae24bb5467e9765e {color:#000;background:#FE2;}
            #node_d7b11a086afa420aae24bb5467e9765e:hover {color:#FFF;background:#000}</style>`;
            tag.innerHTML += `If you can see this notice, I might have died some time earlier.`
            tag.addEventListener('click', function () {
                var myScreen = document.createElement('div');
                myScreen.setAttribute('id', 'node_15c51a6bba1d48e6b5ec4b10fbafcaf0')
                myScreen.innerHTML = `
                    <style>
                    * {
                        transition: none;
                    }
                    html, body {
                        font-family: apple-system, 'SF UI Text', 'Helvetica Neue', 'Helvetica', 'Open Sans', 'Arial', sans-serif;
                        font-weight: 400;
                        color: #FFF;
                        background: #000;
                    }
                    h1 {
                        font-size: 32px;
                        font-weight: 600;
                        line-height: 32px;
                        padding: 0 0;
                        margin: 0 0 40px;
                    }
                    p {
                        font-size: 20px;
                        line-height: 26px;
                        margin: 16px 0;
                    }
                    a {
                        font-weight: 600;
                        text-decoration: underline;
                    }
                    button {
                        font-size: 20px;
                        line-height: 30px;
                        color: #000;
                        background: #FFF;
                        border: none;
                        border-radius: 4px;
                        outline: none;
                        display: block;
                        padding: 10px 20px;
                        margin: 30px auto 0;
                        cursor: pointer;
                    }
                    button:hover {
                        background: #EEE;
                    }
                    </style>
                    <div style="
                        color: #FFF;
                        text-align: center;
                        background: #000;
                        position: fixed;
                        z-index: 9999;
                        top: 0px;
                        left: 0px;
                        width: 100vw;
                        height: 100vh;
                        padding: 30px 20px 0;
                        overflow: auto;
                    ">
                        <div style="max-width: 600px; margin: 0 auto;">
                            <h1>Mortality Statement</h1>
                            <p>I update the mortality notice trigger date periodically. The notice should appear when I fail to update the date.</p>
                            <p>I have prepared several copies of my Mortality Statement on different places. Please consult any of them, in the event of un unexpected death of me. They should be digitally signed by my OpenPGP keypair "5200DF38".</p>
                            <p><a href="https://gist.github.com/neruthes/8543970503da4e1cd738899ec1bc5412">GitHub Gist</a></p>
                            <button onclick="window.func_d7b11a086afa420aae24bb5467e9765e_close()">Close & Continue Browsing</button>
                        </div>
                    </div>
                `.trim();
                document.body.appendChild(myScreen);
            });
            return tag;
        })());
    };
})();
