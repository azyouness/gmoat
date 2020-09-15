import React, { useEffect, useState } from "react";
import { loadRawDataFromCsvFile } from "api";
import { useDispatch, loadMoviesAction } from "storeProvider/actions";
import Routes from "Routes";
import { Header, Footer } from "layout";
import { Loader } from "common";
import styles from "./App.module.scss";

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Load, parse & prepare movies from csv
  useEffect(loadMovies, []);

  function loadMovies() {
    setLoading(true);
    loadRawDataFromCsvFile()
    .then(movies => dispatch(loadMoviesAction(movies)))
    .catch((error) => setError(error))
    .finally(() => setLoading(false));
  };

  if (loading) return (<Loader text="Loading App ..." />);
  if (error) return (<p style={{ padding: "2rem" }}>Something wrong please try later :/</p>);

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header />
      </div>
      <main className={styles.main}>
        <Routes />
      </main>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default App;
