import Script from 'next/script';

function MyApp({ Component, pageProps }) {
    return (
        <>
            {/* Google Tag Manager */}
            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=AW-16959905803"
            />
            <Script
                id="google-tag"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16959905803');
          `,
                }}
            />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
