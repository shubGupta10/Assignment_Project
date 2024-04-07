import nodemailer from 'nodemailer';



const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    auth: {
        user: process.env.USER,
        pass: process.env.PASS,
    },
});

export const sendThankYouEmail = async (userEmail) => {
    try {
        if (!userEmail) {
            throw new Error('No recipient email provided');
        }

        await transporter.sendMail({
            from: {
                name: "Shubham Gupta",
                address: process.env.USER
            },
            to: userEmail, // Ensure userEmail is not empty
            subject: 'Thank You for Signing Up',
            html: '<p>Thank you for signing up to our platform!</p>'
        });

        console.log('Thank you email sent successfully!');
    } catch (error) {
        console.error('Error sending thank you email:', error);
    }
};

