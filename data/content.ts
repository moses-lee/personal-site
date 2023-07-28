export type CellContent = {
  header?: string;
  subheader?: string;
  paragraph?: string;
  image?: string;
  link?: string;
};

export type TabTitle = "about" | "experience" | "skills";

export type Socials = Record<
  string,
  {
    url: string;
    icon: string;
  }
>;

export type Content = {
  tabs: Record<TabTitle, CellContent[]>;
  socials: Socials;
};

export const content: Content = {
  tabs: {
    about: [
      {
        header: "Hi, I'm moses.",
        paragraph: `I am a self-taught developer who loves tackling important and difficult problems.
        I graduated from University of Southern California with a B.S. in Computer Science, and I am currently a Software Engineer at Courtyard.io.
        Although I specialize in fullstack development, I am always striving to learn new cutting edge technologies.`,
        image:
          "https://pbs.twimg.com/profile_images/1623458254436302849/3Dpd5W0T_400x400.jpg",
      },
    ],

    experience: [
      {
        header: "Courtyard.io",
        subheader: "Software Engineer | Feb. 2022 - Present",
        link: "https://www.courtyard.io",
        paragraph: "YC W22",
      },

      {
        header: "Snap Inc.",
        subheader:
          "Software Engineer Intern (AR Business) | May 2022 - Aug 2022",
        link: "https://www.snap.com",
      },
      {
        header: "Genie",
        subheader: "Co-Founder + Lead Mobile Developer | June 2020 - June 2022",
        link: "https://geniewebsite.vercel.app/",
        paragraph: "Pre-Seed",
      },
      {
        header: "cloaked",
        subheader: "Software Engineer Contractor | Oct 2021 - Jan 2022",
        link: "https://www.cloaked.app",
      },
      {
        header: "Amazon",
        subheader:
          "Software Development Engineer Intern (Alexa AI) | May 2021 - Aug 2021",
        link: "https://www.amazon.com",
      },
    ],

    skills: [
      // {
      //   header: "Languages",
      //   subheader: "TypeScript, Python, Golang, Java, C++, C, SQL, HTML/CSS",
      // },
      // {
      //   header: "Frameworks and Tools",
      //   subheader:
      //     "React, Next.js, Fiber, Cypress, Jest, Node.js, Three.js, PostgreSQL, GraphQL, Android, iOS, Flask, MYSQL, AWS, Google Cloud, Docker",
      // },
      // {
      //   header: "Interests",
      //   subheader:
      //     "artificial Intelligence, Quantum, entrepreneurship, philosophy, travel",
      // },
    ],
  },
  socials: {
    linkedin: {
      url: "https://www.linkedin.com/in/moseslee97",
      icon: "/icons/linkedin-white.png",
    },

    github: {
      url: "https://www.github.com/moses-lee",
      icon: "/icons/github.png",
    },
    twitter: {
      url: "https://www.twitter.com/_moseslee",
      icon: "/icons/twitter.png",
    },
    email: {
      url: "mailto:moseslee9750@gmail.com",
      icon: "/icons/email.png",
    },
    resume: {
      url: "/moses_lee_resume.pdf",
      icon: "/icons/paperclip.png",
    },
  },
};
