import Navbar from "../components/navbar/Navbar";
import HomeComponent from "../components/home/Home";
import Footer from "../components/home/footer";
import SchemaOrg from "../components/SEO/SchemaOrg";

export default function Home() {
  return (
    <main>
      <SchemaOrg 
        url="https://ahmedabdelmohsen.com"
        title="Ahmed Abd Elmohsen | Software Engineer"
        description="Professional portfolio showcasing my work as a Software Engineer with expertise in backend development and DevOps practices."
      />
      <Navbar />
      <HomeComponent />
      <Footer />
    </main>
  );
}
