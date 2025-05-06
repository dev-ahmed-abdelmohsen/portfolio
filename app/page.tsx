import Navbar from "../components/navbar/Navbar";
import HomeComponent from "../components/home/Home";
import Footer from "../components/home/footer";
import SchemaOrg from "../components/SEO/SchemaOrg";

export default function Home() {
  return (
    <main>
      <SchemaOrg 
        url="https://ahmedabdelmohsen.com"
        title="Ahmed Adb Elmohsen | Software Engineer"
        description="Professional portfolio showcasing my work as a Software Engineer with expertise in frontend and backend technologies."
      />
      <Navbar />
      <HomeComponent />
      <Footer />
    </main>
  );
}
