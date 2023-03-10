import Footer from "~/components/Footer";
import Header from "~/components/Header";

export default function Layout(props) {
  const { children } = props;

  return (
    <>
      <Header />
      <div className="container mx-auto p-4 lg:p-12">{children}</div>
      <Footer />
    </>
  );
}
