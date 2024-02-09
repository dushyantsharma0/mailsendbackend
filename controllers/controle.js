const nodemailer=require('nodemailer')

const Something=async(req,resp)=>{
     resp.status(200).json({msg:"hello"})
}
const testing=async(req,resp)=>{
    resp.status(200).json({msg:"i am testing"})
}

const sendMail=async(req,resp)=>{
    const transporter = await nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'al.satterfield37@ethereal.email',
            pass: 'XUXPSWAWECpvZb3jHc'
        }
    });
 let info= await  transporter.sendMail({
        from: "dushyantbhaman89@gmail.com",
        to: 'meammakerds@gmail.com',
        subject: 'hello thapa',
        text: 'aman sharma',
        html:"my name is aman "
    });
    console.log("message sent:%s",info.messageId)
resp.json(info)
  
}
module.exports={Something,testing,sendMail}
