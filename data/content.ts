export type CellContent = {
  header?: string;
  subtitle?: string;
  bullets?: string[];
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
  intro: string[];
  tabs: Record<TabTitle, CellContent[]>;
  socials: Socials;
};

export const content: Content = {
  intro: ["moses lee.", "fullstack engineer."],
  tabs: {
    about: [
      {
        header: "hi, i'm moses.",
        subtitle: "i majored in CS at USC.",
      },
    ],

    experience: [{}],

    skills: [{}],
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
