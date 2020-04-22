const connection = require('../database/connection'); //string de conexão
const crypto = require('crypto');
var nodemailer = require('nodemailer');


module.exports = {

    SendMail (Email, Password){
console.log('Entrou no sendmail', Email, Password);
    var remetente = nodemailer.createTransport({
        host: 'smtp.live.com',
        secureConnection: false,
        //service: 'hotmail',
        port: 587,
        // secure: true,
        auth: {
            user: 'lrtorresi@hotmail.com',
            pass: 'Chrisrod123!'
        },
        tls: {
            ciphers: 'SSLv3'
        }
    });


    var emailASerEnviado = {
        from: '"MDC Software" <lrtorresi@hotmail.com>',
        to: Email,
        subject: 'Recuperação de Senha',
        text: '',
        html: `<div style="background-color:#f0f0f0">
        <div style="background:#f0f0f0;background-color:#f0f0f0;Margin:0px auto;max-width:600px">
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f0f0f0;background-color:#f0f0f0;width:100%">
            <tbody>
              <tr>
                <td style="direction:ltr;font-size:0px;padding:0px;text-align:center;vertical-align:top">
                </td>
              </tr>
            </tbody>
          </table>                  
        </div>
        <div style="background:#14103b;background-color:#14103b;Margin:0px auto;max-width:600px">                  
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#14103b;background-color:#14103b;width:100%">
                              <tbody>
              <tr>
                <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top">
        <div class="m_4831161380160611496mj-column-per-100" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">                  
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top" width="100%">                  
              <tbody><tr>
                <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word">                          
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px">
          <tbody>
            <tr>
              <td style="width:85px">                        
        <img height="auto" src="https://ci3.googleusercontent.com/proxy/xS_P6pb1xjsyHGFt_rPlfiTF1qGMmSELoWG9hWiHC5DGDrfMTPtto1WNqBm5pRWDP3sY6nSNuAzh2VvYXAOfpBV2l8xf5ZOi35frUL_usCQ=s0-d-e1-ft#https://mosaicstore.blob.core.windows.net/emails/mdc-logo.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%" width="85" class="CToWUd">              
              </td>
            </tr>
          </tbody>
        </table>              
                </td>
              </tr>                    
        </tbody></table>              
        </div>
                </td>
              </tr>
            </tbody>
          </table>                  
        </div>
        <div style="background:white;background-color:white;Margin:0px auto;max-width:600px">                  
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:white;background-color:white;width:100%">
                              <tbody>
              <tr>
                <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top">
        <div class="m_4831161380160611496mj-column-per-100" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">                  
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top" width="100%">                 
              <tbody><tr>
                <td align="center" style="font-size:0px;padding:0;word-break:break-word">                          
        <div style="font-family:Raleway,Roboto,Arial,Helvetica Neue,Helvetica,sans-serif;font-size:18px;line-height:20px;text-align:center;color:black">
          <strong>Esqueceu ou perdeu sua senha?!</strong>
        </div>              
                </td>
              </tr>                    
              <tr>
                <td align="center" style="font-size:0px;padding:0;word-break:break-word">
                  
        <div style="font-family:Raleway,Roboto,Arial,Helvetica Neue,Helvetica,sans-serif;font-size:14px;line-height:6px;text-align:center;color:black">
          <br><br>A gente te ajuda a recuperar.
        </div>
      
                </td>
              </tr>
            
        </tbody></table>
      
        </div>
      
            
                </td>
              </tr>
            </tbody>
          </table>
          
        </div>
        
        <div style="Margin:0px auto;max-width:600px">
          
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%">
            <tbody>
              <tr>
                <td style="direction:ltr;font-size:0px;padding:0 0 0 0;text-align:center;vertical-align:top">
                  
              
        <div class="m_4831161380160611496mj-column-per-100" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
          
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top" width="100%">
          
              <tbody><tr>
                <td align="center" style="background:white;font-size:0px;padding:10px 0 0 10px;word-break:break-word">
                  
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px">
          <tbody>
            <tr>
              <td style="width:400px">
                
        <img height="250" src="https://ci3.googleusercontent.com/proxy/qHcrCbKWDu1PsuPE-8lKwJh7RkRoyGSPXVk7a0WxOawyxr_ZbIdeNLSCbr7TYTfSPBJZhoIt32A9ctcZCAzvoWm4gG2DEnY1FbjW0tsQcbbOYJojnsa9OEGslw=s0-d-e1-ft#https://mosaicstore.blob.core.windows.net/emails/security_banner.png?v=2" style="border:0;display:block;outline:none;text-decoration:none;height:250px;width:100%" width="400" class="CToWUd a6T" tabindex="0"><div class="a6S" dir="ltr" style="opacity: 0.01; left: 937px; top: 389px;"><div id=":26f" class="T-I J-J5-Ji aQv T-I-ax7 L3 a5q" role="button" tabindex="0" aria-label="Fazer o download do anexo " data-tooltip-class="a1V" data-tooltip="Fazer o download"><div class="aSK J-J5-Ji aYr"></div></div></div>
      
              </td>
            </tr>
          </tbody>
        </table>
      
                </td>
              </tr>
            
        </tbody></table>
      
        </div>
      
            
                </td>
              </tr>
            </tbody>
          </table>
          
        </div>

        <div style="background:white;background-color:white;Margin:0px auto;max-width:600px">
          
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:white;background-color:white;width:100%">
            <tbody>
              <tr>
                <td style="direction:ltr;font-size:0px;padding:0px 4vw 20px 4vw;text-align:center;vertical-align:top">
                  
              
        <div class="m_4831161380160611496mj-column-per-100" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
          
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top" width="100%">
          
              <tbody><tr>
                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word">
                  
        <div style="font-family:Raleway,Roboto,Arial,Helvetica Neue,Helvetica,sans-serif;font-size:13px;line-height:22px;text-align:left;color:black">
          Olá, como vai?!<br><br>Estamos enviando esse email porque recebemos um pedido para recuperar a senha de acesso do login <strong><a href="mailto:`+ Email +`" target="_blank"></a></strong> ao serviço <strong>MDC Software - Controle de Estoque</strong>.<br>
        </div>              
                </td>
              </tr>                    
              <tr>
                <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word">                          
        <div style="font-family:Raleway,Roboto,Arial,Helvetica Neue,Helvetica,sans-serif;font-size:18px;line-height:22px;text-align:center;color:#000000">
         <strong> Senha: </strong> ` + Password +`
        </div>
                </td>
              </tr>                    
        </tbody></table>              
        </div>
                </td>
              </tr>
            </tbody>
          </table>                  
        </div>
        
        <div style="background:white;background-color:white;Margin:0px auto;max-width:600px">
          
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:white;background-color:white;width:100%">
            <tbody>
              <tr>
                <td style="direction:ltr;font-size:0px;padding:0px 4vw 0px 4vw;text-align:center;vertical-align:top">
                  
              
        <div class="m_4831161380160611496mj-column-per-100" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
          
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top" width="100%">
          
              <tbody><tr>
                <td style="font-size:0px;padding:10px 25px;word-break:break-word">
                  
        <p style="border-top:solid 1px lightgrey;font-size:1;margin:0px auto;width:100%">
        </p>

                </td>
              </tr>
            
              <tr>
                <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word">
                  
        <div style="font-family:Raleway,Roboto,Arial,Helvetica Neue,Helvetica,sans-serif;font-size:13px;line-height:22px;text-align:center;color:#000000">
          Se você não pediu para recuperar sua senha, avisa pra gente.<br><a href="mailto:meajuda@mdc.com.br?subject=mosaic-security" target="_blank">meajuda@mdc.com.br</a>.<br><br>
        </div>
      
                </td>
              </tr>
            
              <tr>
                <td align="center" style="font-size:0px;padding:0px 15px 0px 0px;word-break:break-word">
                  
        <div style="font-family:FontAwesome;font-size:30px;line-height:1;text-align:center;color:#000000">
          <a href="https://www.mdc.com.br/?utm_source=mosaic&amp;utm_medium=email&amp;utm_campaign=mosaic-resetpassword" style="color:#999999;padding-left:10px" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.mdc.com.br/?utm_source%3Dmosaic%26utm_medium%3Demail%26utm_campaign%3Dmosaic-resetpassword&amp;source=gmail&amp;ust=1587655808041000&amp;usg=AFQjCNHmefn78iWWXsBGFT8eqyfcriwWPw"><i></i></a>
              <a href="https://www.linkedin.com/company/1214615/" style="color:#999999;padding-left:10px" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.linkedin.com/company/1214615/&amp;source=gmail&amp;ust=1587655808041000&amp;usg=AFQjCNFXBZmjjTCRsjVOqqwh-sILAjsOZw"><i></i></a>
              <a href="https://www.facebook.com/mdcsoftware" style="color:#999999;padding-left:10px" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.facebook.com/mdcsoftware&amp;source=gmail&amp;ust=1587655808041000&amp;usg=AFQjCNEb8selzpQwo3s9w1xdVyXV7dsEDQ"><i></i></a>
              <a href="https://www.instagram.com/mdcsoftware" style="color:#999999;padding-left:10px" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.instagram.com/mdcsoftware&amp;source=gmail&amp;ust=1587655808041000&amp;usg=AFQjCNFGByY68QmTD6KpkTgZKWvCGIRGXQ"><i></i></a>
        </div>
      
                </td>
              </tr>
            
              <tr>
                <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word">
                  
        <div style="font-family:Raleway,Roboto,Arial,Helvetica Neue,Helvetica,sans-serif;font-size:13px;line-height:16px;text-align:center;color:#888888">
          © 2020 MDC Brasil&nbsp;<a href="https://www.mdc.com.br/?utm_source=mosaic&amp;utm_medium=email&amp;utm_campaign=mosaic-resetpassword" style="color:red;font-size:16px;text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.mdc.com.br/?utm_source%3Dmosaic%26utm_medium%3Demail%26utm_campaign%3Dmosaic-resetpassword&amp;source=gmail&amp;ust=1587655808041000&amp;usg=AFQjCNHmefn78iWWXsBGFT8eqyfcriwWPw">♥</a><br>Todos os direitos reservados.
        </div>
      
                </td>
              </tr>
            
              <tr>
                <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word">
                  
        <div style="font-family:Raleway,Roboto,Arial,Helvetica Neue,Helvetica,sans-serif;font-size:10px;line-height:16px;text-align:center;color:#999999">
          Você está recebendo esta mensagem porque, como nós, gosta de novidades e nos deu seu email.
        </div>
      
                </td>
              </tr>
            
        </tbody></table>
      
        </div>
                </td>
              </tr>
            </tbody>
          </table>          
        </div>
        
        <div style="background:white;background-color:white;Margin:0px auto;max-width:600px">
          
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:white;background-color:white;width:100%">
            <tbody>
              <tr>
                <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top">
                  
                </td>
              </tr>
            </tbody>
          </table>
          
        </div>
        </div>`
    };

remetente.sendMail(emailASerEnviado, function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email enviado com sucesso.');
        }
    });

}
}