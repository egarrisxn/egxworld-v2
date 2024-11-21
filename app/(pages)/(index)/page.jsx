import styles from './page.module.css'
import Image from 'next/image'
import Link from '../../components/link'
import {Arrow} from '../../components/icons/other'
import TimeOfDay from '../../components/timer'
import Socials from '../../components/socials'
import ProjectList from '../../components/projects'
import {SpotifyNowPlaying} from '../../components/spotify'
import {ContentList} from '../../components/content-list'
import {getProjects} from '../../lib/get-projects'

const PROJECT_COUNT = 4

export default async function HomePage() {
  const projects = await getProjects()
  return (
    <>
      <header className={styles.header}>
        <TimeOfDay />
        <nav>
          <Link href='/about'>about</Link>|<Link href='/projects'>projects</Link>|
          <Link href='/posts'>posts</Link>|<Link href='/thoughts'>thoughts</Link>|
          <Link href='/contact'>contact</Link>|
          <Link external href='https://egxworld.vercel.app'>
            v1
          </Link>
        </nav>
        <h2>
          Full Stack Developer & Digital Product Designer with a passion for learning and growth.
          Constantly challenging myself to step out of my comfort zone and tackle new challenges.{' '}
          <Link href='/about'>Learn more</Link>.
        </h2>
        <h3>
          Available for work //{' '}
          <Link href='/resume' target='_blank' rel='noopener noreferrer'>
            Resume <Arrow />
          </Link>
        </h3>
        <SpotifyNowPlaying />
      </header>
      <section className={styles.projects}>
        <div style={{position: 'relative'}}>
          <Image
            src='/design/purplelines.svg'
            alt='Purple Lines'
            width={110}
            height={75}
            style={{position: 'absolute'}}
          />
          <h4>Projects</h4>
        </div>
        <ProjectList showYears={true} projects={projects.slice(0, PROJECT_COUNT)} seeMore={true} />
      </section>
      <section>
        <div className={styles.postandnotes}>
          <div style={{position: 'relative'}}>
            <Image
              src='/design/yellowlines.svg'
              alt='Yellow Lines'
              width={80}
              height={130}
              style={{position: 'absolute'}}
            />
            <h4>Posts&</h4>
          </div>
          <div style={{position: 'relative'}}>
            <Image
              src='/design/redlines.svg'
              alt='Red Lines'
              width={125}
              height={130}
              style={{position: 'absolute'}}
            />
            <h4>Thoughts</h4>
          </div>
        </div>
        <ContentList />
      </section>
      <hr />
      <footer>
        <Socials />
      </footer>
    </>
  )
}
