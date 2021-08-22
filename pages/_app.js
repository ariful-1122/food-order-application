import "../styles/main.scss";
import Layout from "../components/Layouts/Layout";
import { Provider } from "react-redux";
import store from "../redux/store";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
            integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
