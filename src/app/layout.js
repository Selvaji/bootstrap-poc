"use client"
import '../../public/assets/css/style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../public/assets/vendor/bootstrap/css/bootstrap.min.css';
import Script from 'next/script';
import Head from 'next/head';



export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <title>Bootstrap 5 Website Example</title>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js" ></Script>
      <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></Script>
      {/* <Script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></Script> */}

      <body>{children}</body>
    </html>
  );
}
