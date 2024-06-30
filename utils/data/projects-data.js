import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'AI Powered Financial App',
        description: "Me and my team built an AI-powered financial mobile application. I have developed API using Express, Typescript, OpenAI, AWS, and MongoDB. Used OTP via AWS SES, Google, and Facebook for the authentication system. Built AI assistants using OpenAI's latest model and trained using our dataset. Voice messages are converted to text using AWS Transcribe. The app fetches data from Google Sheets and generates a PDF term sheet, sent via AWS SES.",
        tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'CGC Admin App & CGC College App',
        description: 'I have designed and developed two Android applications, CGC Admin App and CGC College App, aimed at enhancing administrative and academic functionalities within the college ecosystem. I created the UI using Android Studio, Java, XML, and Material UI. The apps include features such as notice sections, faculty management, ebook repositories, video lecture repositories, and payment gateways. I utilized Firebase for Storage Buckets, Realtime Database, and the Login System',
        tools: ['Java', 'Xml', "Google Maps", "Material UI", "Firebase", "Card View", "Gmail Passkey"],
        role: 'Android  Developer',
        code: '',
        demo: '',
        image: travel,
    },
   
    {
        id: 3,
        name: 'Newsroom Management',
        description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 4,
        name: 'CGC Ebooks',
        description: 'CGC Ebooks App is a tailored ebook application designed to meet the academic demands of college students. It boasts a robust library of ebooks alongside a collection of previous year and MST (Most Significant Topics) questions. Developed using Java, XML, and integrated with Firebase, the app is currently available on Play, offering students a convenient and comprehensive resource for their studies.',
        tools: ['Java', 'Xml', "Google Maps", "Material UI", "Firebase", "Card View"],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },