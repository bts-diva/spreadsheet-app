import '../styles/globals.css'; // Import your main global CSS file here
import '../Components/Grid.module.css'; 
import '../styles/styles.css'; 

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;