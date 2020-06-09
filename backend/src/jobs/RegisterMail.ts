import Mail from '../lib/mail'

class RegisterMail {
   async handle(data: any){

     Mail.sendMail({
       from: 'try@gmail.com',
       to: 'teste@gmail.com',
       subject: 'TITULO',
       template: 'register',
       context: {
         token: data.token
       }
     })
   }
}
export default new RegisterMail()