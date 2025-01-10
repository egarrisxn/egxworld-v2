import styles from './resume.module.css'

export const metadata = {
  title: 'Resume Page',
  description: 'Here is my resume.',
  alternates: {
    canonical: 'https://egxo.dev/resume',
  },
}

export default function ResumePage() {
  return (
    <>
      <header>
        <h1>My resume _</h1>
      </header>
      <p>Standard US Letter Format</p>
      <iframe
        src='other/EG-LETTER-RESUME-2024.pdf'
        title='EG US Letter Resume 2024'
        className={styles.iframe}
      ></iframe>
      <br />
      <br />
      <p>Standard A4 Format</p>
      <iframe
        src='other/EG-A4-RESUME-2024.pdf'
        title='EG A4 RESUME 2024'
        className={styles.iframe}
      ></iframe>
    </>
  )
}
