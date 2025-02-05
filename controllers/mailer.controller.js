const nodemailer = require('nodemailer')
const ejs = require('ejs')
const mailMan = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
})

exports.sendMessageThroughEmail = async (req, res, next) => {
    const {to, subject, content, template} = req.body;

    const templatePath = path.join(__dirname, 'templates', template + '.ejs');
    
    ejs.renderFile(templatePath, {content}, async (err, html)=>{

        if (err){
            return res.send('Error rendering email template!');
        }

        const mailOptions = {
            from: '"Szállásfoglaló App" <' + process.env.SMTP_USER + '>',
            to: to,
            subject: subject,
            html: html
        }

        try {
            result = await transporter.sendMail(mailOptions);
            res.send({ message: 'Az e-mail elküldve!' });
        } catch(error){
            res.send({ message: error });
            
        }
    });
}