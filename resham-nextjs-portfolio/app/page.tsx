"use client";

import {
    ArrowDownRight,
    ArrowUpRight,
    ExternalLink,
    Github,
    Layers3,
    Moon,
    Smartphone,
    Sparkles,
    Sun,
    Workflow,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const shots = [
  {
    src: "/projects/nepshorts/IMG_1466.jpg",
    title: "NepShorts screen 1",
    note: "Mobile interface",
  },
  {
    src: "/projects/nepshorts/IMG_1467.jpg",
    title: "NepShorts screen 2",
    note: "Mobile interface",
  },
  {
    src: "/projects/nepshorts/IMG_1480.jpg",
    title: "NepShorts screen 3",
    note: "Mobile interface",
  },
  {
    src: "/projects/nepshorts/IMG_1481.jpg",
    title: "NepShorts screen 4",
    note: "Mobile interface",
  },
  {
    src: "/projects/nepshorts/IMG_1483.jpg",
    title: "NepShorts screen 5",
    note: "Mobile interface",
  },
  {
    src: "/projects/nepshorts/IMG_1484.jpg",
    title: "NepShorts screen 6",
    note: "Mobile interface",
  },
  {
    src: "/projects/nepshorts/IMG_1485.jpg",
    title: "NepShorts screen 7",
    note: "Mobile interface",
  },
];
const skills = [
  {
    icon: Smartphone,
    title: "Mobile development",
    text: "Flutter, Dart, responsive interfaces and Android app delivery.",
  },
  {
    icon: Layers3,
    title: "Product integration",
    text: "REST APIs, Firebase, Supabase, authentication and data flows.",
  },
  {
    icon: Workflow,
    title: "Engineering workflow",
    text: "Provider, BLoC, Git, Postman, debugging and release workflows.",
  },
];
export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const preferredTheme = window.matchMedia("(prefers-color-scheme: light)")
      .matches
      ? "light"
      : "dark";
    const initialTheme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : preferredTheme;

    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("portfolio-theme", nextTheme);
  };

  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#home">
          Resham Parajuli<span></span>
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="navActions">
          <button
            className="themeToggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            <Sun className="sunIcon" size={16} />
            <span className="themeTrack">
              <span />
            </span>
            <Moon className="moonIcon" size={15} />
          </button>
          <a className="navCta" href="mailto:reshamparajuli9@gmail.com">
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
        </div>
      </header>
      <section className="hero shell" id="home">
        <div>
          <div className="availability">
            <i /> AVAILABLE FOR OPPORTUNITIES
          </div>
          <p className="eyebrow">SOFTWARE ENGINEER · FLUTTER DEVELOPER</p>
          <h1>
            Building useful
            <br />
            <em>digital experiences.</em>
          </h1>
          <p className="intro">
            I&apos;m Resham Parajuli, a software engineer focused on creating
            thoughtful mobile applications with Flutter and Dart.
          </p>
          <div className="actions">
            <a className="button primary" href="#work">
              Explore my work <ArrowDownRight size={17} />
            </a>
            <a
              className="textLink"
              href="https://github.com/Reshamparajuli"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={17} /> GitHub <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="meta">
            BASED IN JAPAN <i /> WORKING WORLDWIDE
          </div>
        </div>
        <div className="art">
          <div className="ring r1" />
          <div className="ring r2" />
          <div className="orb" />
          <div className="float f1">
            <small>CURRENT FOCUS</small>
            <b>
              Flutter
              <br />
              Development
            </b>
          </div>
          <div className="float f2">
            <small>SELECTED PROJECT</small>
            <b>NepShorts</b>
            <span>News · Lifestyle · Finance</span>
          </div>
        </div>
      </section>
      <div className="ticker">
        FLUTTER　✳　DART　✳　ANDROID　✳　REST APIS　✳　PYTHON ✳ JAVASCRIPT ✳
        JAVA ✳ PRODUCT THINKING
      </div>
      <section className="section shell" id="about">
        <div className="label">
          <span>01 / ABOUT</span>
          <span>A LITTLE INTRODUCTION</span>
        </div>
        <div className="twoCol">
          <h2>
            I turn ideas into
            <br />
            <span>working products.</span>
          </h2>
          <div className="bodyCopy">
            <p>
              I enjoy shaping ideas into practical products, creating intuitive
              interfaces, and learning through building. My main toolkit is
              Flutter and Dart, and I work across the mobile development
              process—from interface implementation to API integration and app
              releases.
            </p>
            <p>
              I value clear communication, maintainable code, and experiences
              that solve real problems for people.
            </p>
            <a
              className="underLink"
              href="https://github.com/Reshamparajuli"
              target="_blank"
              rel="noreferrer"
            >
              More on GitHub <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>
      <section className="experience section shell" id="experience">
        <div className="label">
          <span>02 / EXPERIENCE</span>
          <span>WHERE I&apos;VE WORKED</span>
        </div>
        <div className="experienceHeader">
          <h2>
            Building products
            <br />
            <span>at real scale.</span>
          </h2>
          <p>
            Two years of professional Flutter development, turning recruitment
            and employment experiences into intuitive mobile products.
          </p>
        </div>
        <article className="experienceCard">
          <div className="experienceTimeline">
            <span>2023</span>
            <div>
              <i />
            </div>
            <span>2025</span>
          </div>
          <div className="experienceContent">
            <div className="experienceTop">
              <div>
                <small>FLUTTER DEVELOPER · 2 YEARS</small>
                <h3>Merojob Limited</h3>
                <p>Kathmandu, Nepal</p>
              </div>
              <span className="experienceStatus">PROFESSIONAL EXPERIENCE</span>
            </div>
            <p className="experienceDescription">
              Developed and maintained mobile experiences for leading Nepali
              recruitment platforms, collaborating with product and engineering
              teams to deliver reliable features for job seekers and employers.
            </p>
            <div className="experienceProjects">
              <div>
                <span>01</span>
                <div>
                  <b>Merojob App</b>
                  <p>
                    Job search, employer discovery and application experiences.
                  </p>
                </div>
              </div>
              <div>
                <span>02</span>
                <div>
                  <b>Rojgari App</b>
                  <p>
                    Find the right work. Opportunities are now available across
                    Nepal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className="work" id="work">
        <div className="shell">
          <div className="label">
            <span>03 / SELECTED WORK</span>
            <span>PRODUCTS & EXPERIMENTS</span>
          </div>
          <div className="heading">
            <h2>
              Digital products
              <br />
              <span>built with purpose.</span>
            </h2>
            <p>
              A selection of thoughtful products, useful interfaces and ideas
              brought to life.
            </p>
          </div>
          <article className="project">
            <div className="projectVisual">
              <div className="device">
                <Image
                  src={shots[0].src}
                  alt="NepShorts mobile news feed screenshot"
                  fill
                  sizes="(max-width:800px) 70vw, 340px"
                  className="deviceImage"
                  priority
                />
              </div>
              <span className="stamp">
                NEPALI NEWS
                <br />
                IN YOUR POCKET
              </span>
            </div>
            <div className="projectInfo">
              <div className="projectKicker">
                <span>01 / MOBILE APPLICATION</span>
                <span className="status">● FEATURED PROJECT</span>
              </div>
              <h3>
                <a
                  href="https://nepshorts.kishmat.com.np"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit the NepShorts website"
                >
                  NepShorts <span>↗</span>
                </a>
              </h3>
              <p className="developerCredit">
                Developed by Resham Parajuli · Flutter Developer
              </p>
              <p className="desc">
                A Nepali news and lifestyle app bringing quick updates,
                personalised content, and useful everyday tools into one place.
              </p>
              <div className="feature">
                <Sparkles size={18} />
                <div>
                  <b>Paisa Lenden</b>
                  <p>
                    A money lending and borrowing tracker for recording
                    transactions, repayments, outstanding balances, and multiple
                    currencies.
                  </p>
                </div>
              </div>
              <div className="credits">
                <div>
                  <small>APP DEVELOPMENT</small>
                  <b>RESHAM PARAJULI · FLUTTER DEVELOPER</b>
                </div>
              </div>
              <div className="tags">
                <span>Flutter</span>
                <span>Dart</span>
                <span>Android</span>

                <span>Personal Finance</span>
              </div>
              <div className="projectActions">
                <a
                  className="button playStoreButton"
                  href="https://play.google.com/store/apps/details?id=com.nepshorts.nepshorts"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Play <ExternalLink size={15} />
                </a>
                <a
                  className="button websiteButton"
                  href="https://nepshorts.kishmat.com.np"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Website <ExternalLink size={15} />
                </a>
              </div>
            </div>
          </article>
          <div className="promoSection">
            <div className="promoCopy">
              <small>APP DEMO</small>
              <h3>
                NepShorts in motion<span>.</span>
              </h3>
              <p>
                Explore the NepShorts experience through a cinematic walkthrough
                of the app.
              </p>
            </div>
            <div className="promoPlayer">
              <video
                controls
                playsInline
                poster={shots[0].src}
                preload="metadata"
              >
                <source src="/videos/nepshorts-promo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="galleryHead">
            <div>
              <small>APP PREVIEW</small>
              <h3>
                Inside NepShorts<span>.</span>
              </h3>
            </div>
            <p>Selected screens from the news experience and Paisa Lenden.</p>
          </div>
          <div className="gallery">
            {shots.map((shot, i) => (
              <a
                className={`shot shot${i + 1}`}
                href={shot.src}
                target="_blank"
                rel="noreferrer"
                key={shot.src}
              >
                <div className="shotImg">
                  <Image
                    src={shot.src}
                    alt={shot.title}
                    fill
                    sizes="(max-width:700px) 80vw, 30vw"
                  />
                </div>
                <div className="shotCaption">
                  <div>
                    <b>{shot.title}</b>
                    <small>{shot.note}</small>
                  </div>
                  <ArrowUpRight size={16} />
                </div>
              </a>
            ))}
          </div>
          <div className="note">
            <span>✳</span>
            <p>More ideas, experiments and projects are always in progress.</p>
            <a
              href="https://github.com/Reshamparajuli"
              target="_blank"
              rel="noreferrer"
            >
              Explore GitHub <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>
      <section className="section shell" id="skills">
        <div className="label">
          <span>04 / TOOLKIT</span>
          <span>WHAT I WORK WITH</span>
        </div>
        <div className="heading">
          <h2>
            My everyday
            <br />
            <span>toolkit.</span>
          </h2>
          <p>
            Tools and practices I use to build, connect and ship mobile
            products.
          </p>
        </div>
        <div className="skills">
          {skills.map(({ icon: Icon, title, text }, i) => (
            <article className="skill" key={title}>
              <small>0{i + 1}</small>
              <Icon size={25} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="contact" id="contact">
        <div className="shell contactInner">
          <div>
            <small>05 / GET IN TOUCH</small>
            <h2>
              Have a good idea?
              <br />
              <em>Let&apos;s build it.</em>
            </h2>
          </div>
          <a href="mailto:reshamparajuli9@gmail.com">
            Start a conversation <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
      <footer className="footer shell">
        <a className="brand" href="#home">
          Resham Parajuli<span>.</span>
        </a>
        <p>Designed & built by Resham Parajuli</p>
        <div>
          <a
            href="https://github.com/Reshamparajuli"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:reshamparajuli9@gmail.com">Email</a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </main>
  );
}
