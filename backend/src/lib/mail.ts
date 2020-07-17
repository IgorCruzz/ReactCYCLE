import { createTransport } from 'nodemailer';
import { resolve } from 'path';
import nodemailerhbs from 'nodemailer-express-handlebars';
import { create } from 'express-handlebars';

class Mail {
  transporter: any;

  constructor() {
    this.transporter = createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: 'da344a12e15959',
        pass: '6164ee97c889a2',
      },
    });

    this.configureTemplates();
  }

  configureTemplates() {
    const viewPath = resolve('src', 'views', 'emails');

    this.transporter.use(
      'compile',
      nodemailerhbs({
        viewEngine: create({
          layoutsDir: resolve(viewPath, 'layouts'),
          partialsDir: resolve(viewPath, 'partials'),
          defaultLayout: 'default',
          extname: '.hbs',
        }),
        viewPath,
        extName: '.hbs',
      }),
    );
  }

  sendMail(message: any) {
    return this.transporter.sendMail(message);
  }
}

export default new Mail();
