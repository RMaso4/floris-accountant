// import { NextResponse } from 'next/server';
// import formData from 'form-data';
// import Mailgun from 'mailgun.js';

// const MAILGUN_API_KEY = 'f4c8b9673df861d7e18223120bdd4c4a-1654a412-2720765d';
// const MAILGUN_DOMAIN = 'sandboxf0f84e8de2994c8d8ac0a08f3e7767d3.mailgun.org';

// // Initialize Mailgun
// const mailgun = new Mailgun(formData);
// const mg = mailgun.client({ username: 'api', key: MAILGUN_API_KEY });

// export async function POST(req: Request) {
//   try {
//     const data = await req.json();
//     console.log('Received data:', data);

//     const { email, name, generalNewsletter, agroNewsletter } = data;

//     if (!email || !name) {
//       console.log('Missing required fields');
//       return NextResponse.json(
//         { error: 'Email and name are required' },
//         { status: 400 }
//       );
//     }

//     try {
//       console.log('Attempting to send welcome email...');
      
//       // Send welcome email
//       const emailResult = await mg.messages.create(MAILGUN_DOMAIN, {
//         from: `Floris Accountants <mailgun@${MAILGUN_DOMAIN}>`,
//         to: [email],
//         subject: "Welkom bij de Floris nieuwsbrief",
//         text: `Beste ${name},

// Bedankt voor uw aanmelding voor onze nieuwsbrief${generalNewsletter && agroNewsletter ? 'en' : ''}${generalNewsletter ? ' algemene nieuwsbrief' : ''}${agroNewsletter ? ' agro-nieuwsbrief' : ''}.

// U zult vanaf nu regelmatig updates van ons ontvangen over${generalNewsletter ? ' algemeen nieuws' : ''}${generalNewsletter && agroNewsletter ? ' en' : ''}${agroNewsletter ? ' agro-gerelateerd nieuws' : ''}.

// Met vriendelijke groet,
// Team Floris Accountants`
//       });

//       console.log('Email sent successfully:', emailResult);

//       // Add to mailing list(s)
//       const memberData = {
//         address: email,
//         name: name,
//         subscribed: true,
//         vars: JSON.stringify({
//           general: generalNewsletter,
//           agro: agroNewsletter,
//         })
//       };

//       if (generalNewsletter) {
//         console.log('Adding to general newsletter...');
//         await mg.lists.members.createMember(`general@${MAILGUN_DOMAIN}`, memberData);
//       }

//       if (agroNewsletter) {
//         console.log('Adding to agro newsletter...');
//         await mg.lists.members.createMember(`agro@${MAILGUN_DOMAIN}`, memberData);
//       }

//       console.log('Successfully completed all operations');
//       return NextResponse.json({ 
//         success: true,
//         message: 'Successfully subscribed to newsletter'
//       });
//     } catch (mailgunError: any) {
//       console.error('Mailgun error details:', mailgunError.message);
//       if (mailgunError.status === 401) {
//         return NextResponse.json(
//           { error: 'Authentication failed with email service.' },
//           { status: 500 }
//         );
//       }
//       throw mailgunError;
//     }
//   } catch (error: any) {
//     console.error('Newsletter error:', error);
//     // Include more error details in development
//     const errorMessage = process.env.NODE_ENV === 'development' 
//       ? `Error: ${error.message}`
//       : 'Er is iets misgegaan bij het aanmelden voor de nieuwsbrief.';
    
//     return NextResponse.json(
//       { error: errorMessage },
//       { status: 500 }
//     );
//   }
// }