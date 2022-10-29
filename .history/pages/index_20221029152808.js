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
        <Link href={`/invoices/id`} >
          <div className="invoice__item">
            <div>
              <h5 className="invoice__id">
                FBGCVHJJNB456YHGR 
              </h5>
            </div>

            <div>
              <h6 className="invoice__client">Kushagra Saxena</h6>
            </div>

            <div>
              <p className="invoice__created">20-09-22</p>
            </div>

            <div>
              <h3 className="invoice__total">$345</h3>
            </div>

            <div>
              <button
               
              >
                pending
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
