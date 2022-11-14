import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Denwin | a Software Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Main/>
    <About/>
    <Skills/>
    <Contact/>
  
    
    </div>
  )
}
