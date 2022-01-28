import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// import Head from 'next/head';

// export default function Home() {
//   return (
//     <div>
//       <Head>
//         <title>QuizApp</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main></main>
//       <footer></footer>
//     </div>
//   );
// }


export default function Home() {
  return (
    <div className={styles.container}>
       <Head>
       <title>QuizApp</title>
         <link rel="icon" href="/favicon.ico" />
       </Head>
       <main>Welcome to quiz</main>
       <footer></footer>
    </div>
  )
}
