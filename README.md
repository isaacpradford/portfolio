## Overview

This project is a personal portfolio that showcases me, Isaac Radford, and my work as a Full-Stack Web Developer. The site features one main page that includes a **Home**, **Skills**, **Experience**, **Projects**, **Testimonials**, and **Contact** page. It also generates sub-project pages with info it fetches about each project from Mongodb. It's built with React with a lot of Framer Motion, which was used for things like the parallax scrolling effects. It also has a built in dark mode with a spooky addition for the halloween season.

## Creating New Pages

To create a new page in the portfolio, here's a quick tutorial:
1. **Add a New Component**: Create a new React component inside the src/pages directory. Each page should be a separate component!

2. **Add the new component page to the AllPages page** where you think it should go in the list. If you wrap it in the <Page/> component, it should set the page sizing and basic CSS for you!

3. **Create a SCSS file to go with it** and make sure to include it in the _index.scss file!

## Adding new projects
I thought I'd give a quick example of what the projects look like in the DB as well, just in case anybody wants to clone the repo and make their own. Here's what the objects look like:\


  title: String,\
  color: String,\
  demo_link: String,\
  project_url: String,\
  date_created: String,\
  description1: String,\
  description2: String,\
  description3: String,\
  frontend_stack: [String], \
  backend_stack: [String], \
  demo_picture: String, \
  header_picture: String, \
  subtitle: String, \
\
And **here's** an example of what a full insert looks like: \
{\
  "_id": {\
    "$oid": "65273579ce4068e5c20f4bd0"\
  },\
  "title": "Raft",\
  "color": "#ff0066",\
  "demo_link": "tango-ten.vercel.app/",\
  "project_url": "https://github.com/isaacpradford/tango", \
  "date_created": "04/24", \
  "description1": "Raft is a Twitter-like social media...",\
  "description2": "Raft was created...",\
  "description3": "Currently, it’s under maintenance...",\
  "frontend_stack": [\
    "React",\
    "Typescript",\
    "Tailwind"\
  ],\
  "backend_stack": [\
    "MySQL",\
    "NextJS",\
    "NextAuth",\
    "tRPC",\
    "Prisma"\
  ],\
  "demo_picture": "base64 string",\
  "header_picture": "base64 string", // shoutout to https://base64.guru/converter/encode/image/png \
  "subtitle": "Social Media clone"\
}"\

## Credentials
If you clone and set up your own repo, you'll obviously have to get your own credentials. The PW is one I made myself, so you can easily make your own password and throw it in your env. As for the other 3, they are for the contact form on the frontend, so if you want to clone this, you'll need to sign up for EmailJS to get your own credentials.

REACT_APP_API_PASSWORD = ___\
REACT_APP_SERVICE_ID = ___\
REACT_APP_PUBLIC_KEY = ___\
REACT_APP_TEMPLATE_ID = ____\

## That's it!
That's all for now, if you have any questions or want to chat, you can email me at isaacpradford@gmail.com or reach out to me through the form on my own website!
https://iradford.onrender.com/
