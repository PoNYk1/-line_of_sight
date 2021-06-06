import App from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "../redux/store";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <Head>
          <title>Home Page</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
        <style jsx global>
          {`
            body,
            html,
            #__next {
              width: 100%;
              height: 100%;
              user-select: none;
              margin: 0;
              padding: 0;
              font-family: Roboto, sans-serif;
            }
          `}
        </style>
      </Provider>
    );
  }
}

export default MyApp;
