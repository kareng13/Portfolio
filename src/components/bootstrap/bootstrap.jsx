import Head from "next/head";

const Bootstrap = (props) => {
  return (
    <div>
      <Head>
        <title>Karen G</title>
        <link rel="icon" href="/favicon.ico" sizes="32x32"  />        
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        />
        <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet" />
      </Head>
      <div>{props.children}</div>
    </div>
  );
};

export default Bootstrap;
