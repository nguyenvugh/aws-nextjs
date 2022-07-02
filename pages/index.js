import axios from "axios";

export default function Home({ cateData }) {
  return (
    <div className="container">
      <main>
        {cateData.map((cate) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                borderBottom: "1px solid #ccc",
              }}
            >
              <img
                src={cate.image?.url}
                style={{ width: "200px", height: "150px" }}
              />
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                {cate.name}
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const apiCate =
    "http://13.229.158.165:1000/v1/customer/product-category/sitemap";
  const cateData = (await (await axios.get(apiCate)).data?.results) || [];

  return {
    props: {
      cateData,
    },
  };
}
