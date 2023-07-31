
let user = {
  nombre: "Martin Barreiro",
  tipoDeAlarma: "Corte",
  fase: "(R)",
  fechaYhora: "22/11/2022"
}

const contentEmail =
  `
  <html>

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>Powermate</title>
  <style>
    body {
      background-color: #f6f6f6;
      font-family: sans-serif;
      -webkit-font-smoothing: antialiased;
      font-size: 14px;
      /* line-height: 1.4; */
      margin: 0;
      padding: 0;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    }

    table td {
      vertical-align: top;
    }

    /* -------------------------------------
              BODY & CONTAINER
          ------------------------------------- */
    .body {
      background-color: #f6f6f6;
      width: 100%;
    }

    /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
    .container {
      display: block;
      margin: 0 auto !important;
      /* makes it centered */
    }

    /* This should also be a block element, so that it will fill 100% of the .container */
    .content {
      box-sizing: border-box;
      display: block;
      margin: 0 auto;
    }

    /* -------------------------------------
              HEADER, FOOTER, MAIN
          ------------------------------------- */
    .main {
      border-radius: 3px;
      width: 40vw;
      height: 200px;
      margin: auto;
      margin-top: 40px;
    }

    .wrapper {
      box-sizing: border-box;
      padding: 20px;
    }

    .nav-container {
      display: flex;
      width: 100%;
      height: 94px;
      background-size: cover;
    }

    .container-footer {
      display: flex;
      width: 100%;
      height: 94px;
      background-size: cover;
    }

    .container-title-nav {
      display: flex;
      align-items: center;
    }

    .title {
      font-size: 41px;
      color: #0b5aa7e6;
      font-family: sans-serif;
      font-weight: bold;
      margin-left: 40px;
    }

    .container-center {
      border-top: 2px solid #0b5aa7;
      border-bottom: 2px solid #0b5aa7;
      width: 100%;
    }

    .corner-white {
      background-color: #f6f6f6;
      width: 110px;
      height: 148px;
      transform: rotate(205deg);
      position: relative;
      left: 699px;
      top: 160px;
    }

    /* -------------------------------------
              RESPONSIVE AND MOBILE FRIENDLY STYLES
          ------------------------------------- */
    @media only screen and (max-width: 620px) {
      table.body .main {
        border-left-width: 0 !important;
        border-radius: 0 !important;
        border-right-width: 0 !important;
        width: 90vw;
      }
    }
  </style>
</head>

<body>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
    <tr>
      <td class="container">
        <div class="content">
          <!-- START CONTAINER -->
          <table role="presentation" class="main">
            <tr>
              <td>
                <!-- START NAV -->
                <table style="padding: 0 280px 0 40px; margin-top: 20px" class="nav-container"
                  background="https://img.freepik.com/fotos-premium/fondo-textura-suave-borrosa-hermosa-abstraccion-azul_97567-606.jpg">
                  <tr>
                    <td style="margin-top: 9px" class="container-title-nav">
                      <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                        <tr>
                          <img src="https://powermate-testing.powermeter.com.ar/images/logo-horizontal-fondo-oscuro.png"
                            alt="power" style="
                                height: 65px;
                                padding-right: 22px;
                                width: 200px;
                                display: block;
                                border: 0;
                                border-right: 1px solid white;
                              " />
                        </tr>
                      </table>
                      <p style="                           
                            color: aliceblue;
                            margin-left: 15px;
                            font-size: 20px;
                          ">
                        by
                      </p>
                      <p style="                          
                            color: aliceblue;
                            margin-left: 10px;
                            font-weight: bold;
                            font-size: 20px;
                          ">
                        Powermeter
                      </p>
                    </td>
                  </tr>
                </table>
                <!-- END NAV  -->

                <!-- START TITLE -->
                <table class="container-title">
                  <tr>
                    <td>
                      <h1 class="title">Envío de reportes automáticos Powermate</h1>
                    </td>
                  </tr>
                </table>
                <!-- END TITLE  -->

                <!-- START CONTAINER CENTER-->
                <table class="container-center">
                  <tr>
                    <td>
                      <table>
                        <tr>
                          <td>
                            <div style="
                                  padding: 0 0 0 40px;
                                  margin: 0;
                                  display: flex;
                                ">
                              <!-- 
                              <img style="width: 52px;height: 76px;margin-top: 7px;"
                                src="https://power-meter-pwa.netlify.app/images/balloonCut.png" alt="ballonText" /> -->

                              <p style="
                                    color: #2586bc;
                                    font-family: sans-serif;
                                    font-size: 26px;
                                  ">
                                Detalles
                              </p>
                            </div>

                            <!-- START DATOS-->
                            <div style="
                                  padding: 0 0 0 40px;
                                  margin: 0;
                                  display: flex;
                                ">
                              <table class="container-data">
                                <tr style="font-size: 20px">

                                  <td style="display: flex">
                                    <p style="
                                          font-weight: bold;
                                          color: #6e6f70;
                                          margin-right: 8px;
                                        ">
                                      Cuenta:
                                    </p>
                                    <p>{{from_email}}</p>
                                  </td>

                                  <td style="display: flex">
                                    <p style="
                                          font-weight: bold;
                                          color: #6e6f70;
                                          margin-right: 8px;
                                        ">
                                      Fecha de generación del reporte:
                                    </p>
                                    <p>{{date_start}}</p>
                                  </td>

                                  <td style="display: flex">
                                    <p style="
                                          font-weight: bold;
                                          color: #6e6f70;
                                          margin-right: 8px;
                                        ">
                                      Dispositivos:
                                    </p>
                                    <p>{{nodes}}</p>
                                  </td>

                                  <td style="display: flex">
                                    <p style="
                                          font-weight: bold;
                                          color: #6e6f70;
                                          margin-right: 8px;
                                        ">
                                      Variable procesada:
                                    </p>
                                    <p>{{Variable}}</p>
                                  </td>

                                  <td style="display: flex">
                                    <p style="
                                          font-weight: bold;
                                          color: #6e6f70;
                                          margin-right: 8px;
                                        ">
                                      Estado del reporte:
                                    </p>
                                    <p>{{report_state}}</p>
                                  </td>

                                </tr>
                              </table>
                            </div>
                            <!-- END DATOS  -->
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <!-- END CONTAINER CENTER  -->

                <!-- STAR FOOTER -->
                <table class="container-footer" style="margin-top: 30px; margin-bottom: 40px"
                  background="https://powermate.powermeter.com.ar/images/foot-mail-min.png"></table>
                <!-- END FOOTER -->
              </td>
            </tr>
          </table>

          <!-- END CONTAINER -->
        </div>
      </td>
    </tr>
  </table>
</body>

</html>
`


module.exports = { contentEmail }