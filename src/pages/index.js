import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.heroBackground}></div>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <div className={styles.titleContainer}>
              <div className={styles.siteTitle}>{siteConfig.title}</div>
              <div className={styles.siteSlogan}>{siteConfig.tagline}</div>
            </div>
            <p className={styles.leadText}>
              Wampoon provides a simple and elegant way to manage your WAMP stack.
              Start, stop, and configure Apache, MariaDB, and PHP with ease.
            </p>
            <div className={styles.buttons}>
              <Link
                className={clsx("button button--primary button--lg", styles.primaryButton)}
                to="/docs/intro">
                Get Started
              </Link>
              <Link
                className={clsx("button button--outline button--lg", styles.secondaryButton)}
                to="/blog">
                Learn More
              </Link>
            </div>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.logoContainer}>
              <img 
                src={require('@site/static/img/wampoon-logo.png').default} 
                alt="WAMPoon - WAMP Stack Manager" 
                className={styles.logoImage}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
