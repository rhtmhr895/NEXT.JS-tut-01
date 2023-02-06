import Head from 'next/head'
import Image from 'next/image'
// import Script from 'next/script'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import axios from 'axios';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const data = {
    "name":"jhon",
    "surname":"doe"
  }

  const addData =  () =>{
    axios.post("https://crudcrud.com/api/1b88764a566d41379b46f27e022054a7",data).then((response)=>{
      console.log(response)
    }).catch((err)=>{
      console.log(err)
    })

  }
  return (
    <>
      <Head>
        <title>BloggerSpot</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="Coding blogs, next js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      
      </Head>
      {/* <Script src='/sc.js' strategy='lazyOnload'>

      </Script> */}
      <nav className={styles.mainnav}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blogs</li>
        </ul>
      </nav>
      <main className={styles.main}>
        <div className="blogs">
          <div className="blogItem">
            <h1>How to learn REACT.JS in 2023.</h1>
            <p>REACT.JS is a javascript library designed by meta for front-end single page web applications.</p>
            <button className="submit" onClick={addData}>submit</button>
          </div>
        </div>
      </main>
    </>
  )
}
