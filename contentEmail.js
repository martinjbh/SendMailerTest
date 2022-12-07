
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
          /* background: #b74d4d; */
          border-radius: 3px;
          width: 40vw;
          height: 200px;
          margin: auto;
          /* padding-left: 60px; */
          margin-top: 40px;
    
        }
    
        .wrapper {
          box-sizing: border-box;
          padding: 20px;
        }
    
        .nav-container {
          /* padding: 0 280px 0 40px; */
          display: flex;
          align-items: center;
          width: 100%;
          height: 110px;
          background: linear-gradient(90deg, rgba(0, 10, 69, 0.9360119047619048) 0%, rgba(9, 9, 121, 0.8827906162464986) 24%, rgba(9, 96, 175, 1) 100%);
    
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
          /* color: #0b5aa7; */
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
                    <table style='padding: 0 280px 0 40px;margin-top:20px' class="nav-container">
                      <tr>
                        <td style='margin-top:16px' class="container-title-nav">
                          <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
    
                            <tr>
                              <img src="https://powermate-testing.powermeter.com.ar/images/logo-horizontal-fondo-oscuro.png"
                                alt="power"
                                style="padding-right: 32px;width:200px;display:block;border:0;border-right:1px solid white">
                            </tr>
                          </table>
    
    
                          <p style="margin-top:22px;color:aliceblue;margin-left:20px;font-size: large;">
                            by
                          </p>
                          <p style="margin-top:22px;color:aliceblue;margin-left:10px;font-weight: bold;font-size: large;">
                            Powermeter
                          </p>
    
    
    
                        </td>
                        <!-- 
                          <div class="corner-white"> </div> -->
                      </tr>
                    </table>
                    <!-- END NAV  -->
    
                    <!-- START TITLE -->
                    <table class="container-title">
                      <tr>
                        <td>
                          <h1 class="title">
                            Alta de Equipamiento
                          </h1>
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
    
                                <div style="padding:0 0 0 40px;Margin:0;display:flex">
    
                                  <img style="width: 52px;height: 76px;margin-top: 7px;"
                                    src="https://power-meter-pwa.netlify.app/images/balloonCut.png" alt="ballonText" />
    
                                  <p style="margin-left: 20px; color:#2586bc;font-family: sans-serif ; font-size: 26px;">
                                    Estás por activar un medidor
                                  </p>
                                </div>
    
                                <!-- START DATOS-->
                                <div style="padding:0 0 0 40px;Margin:0;display:flex">
                                  <table class="container-data">
                                    <tr style="font-size: 20px">
    
                                      <td style="display:flex">
                                        <p style="font-weight: bold;color:#6e6f70;margin-right: 8px">Nombre:</p>
                                        <p>${user.nombre}</p>
                                      </td>
    
                                      <td style="display:flex">
                                        <p style="font-weight: bold;color:#6e6f70;margin-right: 8px">Tipo de alarma:</p>
                                        <p>${user.tipoDeAlarma}</p>
                                      </td>
    
                                      <td style="display:flex">
                                        <p style="font-weight: bold;color:#6e6f70;margin-right: 8px">Fase:</p>
                                        <p>${user.fase}</p>
                                      </td>
    
                                      <td style="display:flex">
                                        <p style="font-weight: bold;color:#6e6f70;margin-right: 8px">Fecha y hora:</p>
                                        <p>${user.fechaYhora}</p>
                                      </td>
    
                                    </tr>
                                  </table>
                                </div>
                                <!-- END DATOS  -->
    
                              </td>
                            </tr>
                          </table>
                        </td>
                    </table>
                    <!-- END CONTAINER CENTER  -->
    
                    <!-- START TITLE BUTTON -->
                    <table class="container-button">
                      <tr>
                        <td>
                          <p style="margin-left: 70px; color:#2586bc;font-family: sans-serif ; font-size: 26px;">
                            Hacé click en el siguiente link para darlo de alta.
                          </p>
                        </td>
                      </tr>
                    </table>
                    <!-- END TITLE BUTTON   -->
    
                    <!-- START BUTTON -->
                    <table style="margin:auto">
                      <tr>
                        <td>
                          <span
                            style="border-style:solid;border-color:#837CA2;background:#2586bc;border-width:0px;display:inline-block;border-radius:10px;width:auto;mso-hide:all"><a
                              href="https://powermate.powermeter.com.ar/" target="_blank"
                              style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFBEC;font-size:28px;border-style:solid;border-color:#2586bc;border-width:10px 35px 10px 35px;display:inline-block;background:#2586bc;border-radius:25px;font-family:Nunito, Roboto, sans-serif;font-weight:normal;font-style:normal;line-height:29px;width:auto;text-align:center">
                              Activar medidor
                            </a></span>
                        </td>
                    </table>
                    <!-- END BUTTON   -->
    
                    <!-- STAR FOOTER -->
                    <table class="nav-container" style="margin-top:30px">
    
                      <tr>
                        <td class="container-title-nav">
    
    
                        </td>
                      </tr>
    
                    </table>
                    <!-- END FOOTER -->
    
              </table>
              <!-- END CONTAINER -->
            </div>
          </td>
        </tr>
      </table>
    </body>
    
    </html>`









module.exports = { contentEmail }