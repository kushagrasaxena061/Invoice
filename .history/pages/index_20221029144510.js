import Link from "next/link";
import { useRouter } from "next/router";
//import { MongoClient } from "mongodb";



const Home = (props) => {
  const router = useRouter();
  //const { data } = props;

  const navigatePage = () => router.push("/add-new");
  return (
    <div className="main__container">
      <div className="invoice__header">
        <div className="invoice__header-logo">
          <h3>Invoices</h3>
          <p>There are total 7 invoices</p>
        </div>

        <button className="btn" onClick={navigatePage}>
          Add New
        </button>
      </div>
    </div>
  );
};

export default Home;
