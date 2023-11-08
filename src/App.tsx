import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/navbar";

function App() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <main className="flex-1">
      <Navbar />
      <Footer/>
      </main>
      
    </div>
  );
}

export default App;
