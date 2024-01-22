import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <b>SYDNEY PAINTING SERVICE</b>
        <nav>
          <ul className={styles.headerList}>
            <li>Services</li>
            <li>About</li>
            <li>Portfolios</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <div className={styles.banner}>banner</div>
      <div className={styles.container}><h2>Services</h2>
        <ul>
          <li>Various outdoor paints,</li>
          <li>indoor paints,</li>
          <li>tile spray paint</li>
          <li>bathtub spray paint</li>
          <li>aluminum alloy window spray paint</li>
          <li>Vkitchen cabinet spray paint</li>
          <li>various wood paints</li>
          <li>high-end furniture varnish</li>
          <li>garage driveway floor paint</li>
        </ul>
      </div>
      <div className={styles.container}><h2>About</h2>
        <p>XX PAINTING COMPANTY has been running in Sydney for more than 20 years, perfect quality and good price. At the same time, we pay attention to timeliness in our work, the construction progress is fast, and we will complete the work on time.</p></div>
      <div className={styles.container}><h2>Portfolios</h2>
        <iframe width="673" height="1196" src="https://www.youtube.com/embed/gjcL2a-9SuI" title="test5" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
      <div className={styles.container}>Contact</div>
      <footer className={styles.footer}>
        footer infomation
      </footer>
    </main>
  );
}
