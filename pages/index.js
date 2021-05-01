import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  return { props: { allPostsData: getSortedPostsData() } }
}

export default function Home(props) {
  const { allPostsData } = props
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>👋 Hi, I’m @bmdalex
        👀 I’m interested in Web with Vue and React and Mobile with Flutter
        🌱 I’m currently learning Dart and Flutter
        📫 How to reach me:
        </p>
        <ul>
          <li><a href="https://twitter.com/bugaaa92">Twitter</a></li>
          <li><a href="https://www.instagram.com/bmdalex/">Instagram</a></li>
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}