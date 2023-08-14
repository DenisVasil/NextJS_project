import Image from 'next/image'
import styles from './page.module.css'
import Hero from "public/hero.png"
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better future for the planet</h1>
        <p className={styles.desc}>We believe that people across the World by obtaining a clear understanding of the link between their health, safety, wellbeing and culture will become engaged in nature conservation this way saving our planet Earth from catastrophic consequences of current ignorance of ecosystem health in human activities.</p>
        <Button url="/portfolio" text="Our projects"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="Home" className={styles.img} />
      </div>
    </div>
  )
}
