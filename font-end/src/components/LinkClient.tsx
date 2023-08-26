import { Helmet } from "react-helmet";

const LinkClient = () => {
  return (
    <Helmet>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
        rel="stylesheet"
      />
      <link href="lib/animate/animate.min.css" rel="stylesheet" />
      <link
        href="lib/owlcarousel/assets/owl.carousel.min.css"
        rel="stylesheet"
      />
      <link
        href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css"
        rel="stylesheet"
      />
      <link href="/assets/css/bootstrap.min.css" rel="stylesheet" />
      <link href="/assets/css/style.css" rel="stylesheet" />
    </Helmet>
  );
};

export default LinkClient;
