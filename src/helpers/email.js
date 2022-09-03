import nodemailer from 'nodemailer'



const emailHelper = () => {

const transport = nodemailer.createTransport({
    // service: "hotmail",
    host: "smtp.mail.ee",
    // "aliases": ["Outlook", "Outlook.com", "Hotmail.com"],
    // "domains": ["hotmail.com", "outlook.com"],
    // "host": "smtp.live.com",
    // "port": 587,
    
    auth:{
        user:"murukarifb666",
        pass:"qraft@mail.ee"
    }
    
})

const options = {
    from:"Qraft-store",
    to:"robertishimwe0@gmail.com",
    subject:"tesssssssssssssssst",
    text: "woooooooooo",
    html: '<b>Hey there! </b><br> This is our first message sent with outNodemailer'
}

transport.sendMail(options, function(err, info){
    if(err){
        console.log(err)
        return
    }
    console.log(info.response)
})
}

export default emailHelper;