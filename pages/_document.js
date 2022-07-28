import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

    static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx);
      return { ...initialProps };
    }

  render() {    
    return (
      <Html>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              const domainName = window.location.hostname;
              const trackingId = () => {
                switch (true) {
                  case domainName.toLowerCase().indexOf("df") > -1:
                    return "UA-218478574-3";
                  case domainName.toLowerCase().indexOf("dev") > -1:
                  case domainName.toLowerCase().indexOf("localhost") > -1:
                    return "UA-218478574-1";
                  default:
                    return "UA-214031198-1";
                }
              };
                const gaid = trackingId();
                window.dataLayer = window.dataLayer || [];
                var script = document.createElement('script');
               
                script.src = 'https://www.googletagmanager.com/gtag/js?id='+gaid;
          
                document.head.appendChild(script);
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', gaid, {
                    page_path: window.location.pathname,
                });

                if (window.location.pathname.includes("start.norebase.com")) {
                  gtag('config', 'AW-10927189749');
                }`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument