export type TabContentType = {};

export type TabTitle = "about" | "experience" | "skills";

export type TabType = {
  title: TabTitle;
  content: TabContentType[];
};

export type SocialType = Record<
  string,
  {
    url: string;
    icon: string;
  }
>;

export type ContentType = {
  intro: string[];
  tabs: TabType[];
  socials: SocialType;
};

export const content: ContentType = {
  intro: ["moses lee.", "fullstack engineer."],
  tabs: [
    {
      title: "about",
      content: [{}],
    },
    {
      title: "experience",
      content: [{}],
    },
    {
      title: "skills",
      content: [{}],
    },
  ],
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
    resume: {
      url: "/moses_lee_resume.pdf",
      icon: "/icons/paperclip.png",
    },
  },
};
