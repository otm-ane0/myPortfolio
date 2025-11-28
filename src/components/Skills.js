import React from 'react';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiJavascript, 
  SiNodedotjs, 
  SiPython, 
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiSqlite,
  SiGit,
  SiGithub,
  SiVscodium,
  SiDocker,
  SiFigma
} from 'react-icons/si';
import LogoLoop from './LogoLoop';
import './Skills.css';

const Skills = () => {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiBootstrap />, title: "Bootstrap", href: "https://getbootstrap.com" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiPython />, title: "Python", href: "https://python.org" },
    { node: <SiPhp />, title: "PHP", href: "https://php.net" },
    { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com" },
    { node: <SiMysql />, title: "MySQL", href: "https://mysql.com" },
    { node: <SiMongodb />, title: "MongoDB", href: "https://mongodb.com" },
    { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
    { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
    { node: <SiVscodium />, title: "VS Code", href: "https://code.visualstudio.com" },
    { node: <SiDocker />, title: "Docker", href: "https://docker.com" },
    { node: <SiFigma />, title: "Figma", href: "https://figma.com" }
  ];

  return (
    <section className="tech-showcase" id="skills">
      <div className="tech-showcase-container">
        <div className="tech-showcase-header">
          <h2 className="tech-showcase-title">
            <span className="title-gradient">Technical Skills</span>
          </h2>
          <p className="tech-showcase-subtitle">
            Technologies I work with
          </p>
        </div>
        
        <div className="tech-showcase-logos">
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="rgba(15, 23, 42, 0.9)"
            ariaLabel="Technology stack"
            className="white-logos"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;