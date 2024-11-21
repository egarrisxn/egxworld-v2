import styles from './techlist.module.css'

export default function TechList() {
  return (
    <>
      <ul className={styles.techList}>
        <li>
          <span>Languages:</span> MySQL, Markdown
        </li>
        <li>
          <span>Frontend:</span> Angular, Astro, Alpine.js, HTMX, jQuery
        </li>
        <li>
          <span>Backend:</span> Hono
        </li>
        <li>
          <span>CSS & UI Libraries:</span> Bootstrap, React Aria, NextUI, daisyUI
        </li>
        <li>
          <span>Templating Engines:</span> Pug, Handlebars
        </li>
        <li>
          <span>Database & Platforms:</span> MySQL, Supabase, Prisma
        </li>
        <li>
          <span>Package Managers:</span> npm
        </li>
        <li>
          <span>Testing:</span> Vitest, Insomnia
        </li>
        <li>
          <span>Authentication & Authorization:</span> Auth.js
        </li>
        <li>
          <span>Hosting:</span> Netlify, Heroku, AWS, GitHub Pages
        </li>
        <li>
          <span>Various Tools:</span> Vite, Sequelize, Inquirer, Adobe Suite
        </li>
      </ul>
    </>
  )
}
