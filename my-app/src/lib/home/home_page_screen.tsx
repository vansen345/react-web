import { Masonry } from "antd";
import { getDecryptedTitle, type HomeItem } from "../../../model/home_type";
import { useGetHomeListQuery } from "../../features/home/homeApiSlice";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import "./home_style.css";

function HomePageScreen() {
  useDocumentTitle("APP");
  const { data, isLoading } = useGetHomeListQuery({ limit: 10, offset: 0 });

  if (isLoading) return <div>Loading...</div>;

  const list: HomeItem[] = (data as any)?.elements ?? [];

  return (
    <section id="home-page">
      <div className="home-page-container">
        <Masonry
          columns={3}
          gutter={8}
          items={list.map((item, index) => ({
            key: `item-${index}`,
            data: item,
          }))}
          itemRender={({ data }) => (
            <div className="content-item">
              <div className="content-item-img">
                <img src={data.PV307} alt="" loading="lazy" />
              </div>
              <div className="title-content">
                <p className="title">{getDecryptedTitle(data.PV301)}</p>
                <p className="content">{data.PV305}</p>
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
}

{
  /* <Masonry
          columns={3}
          gutter={8}
          items={list.map((img, index) => ({
            key: `item-${index}`,
            data: img,
          }))}
          itemRender={({ data }) => (
            <div className="content-item">
              <div className="content-item-img">
                <img src={data.PV307} alt="" loading="lazy" />
              </div>
              <div className="title-content">
                <p className="title">{getDecryptedTitle(data.PV301)}</p>
                <p className="content">{data.PV305}</p>
              </div>
            </div>
          )}
        /> */
}

export default HomePageScreen;
