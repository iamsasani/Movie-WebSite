import Content from "../components/Content";
import Header from "../components/Header";
import Nav from "../components/Nav";


function Main() {
  return (
    <main className="bg-linear-to-r from-slate-900/60 via-black to-slate-900/60 ">
      <Nav/>
        <Header/>
        <Content/>
    </main>
  );
}

export default Main;
