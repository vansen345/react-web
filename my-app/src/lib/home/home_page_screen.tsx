import { Masonry } from "antd";
import { getDecryptedTitle } from "../../../model/home_type";
import { useHomePageController } from "../../features/home/home_controller";
import DetailScreen from "../detail/detail_screen";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import "./home_style.css";

function HomePageScreen() {
  useDocumentTitle("APP");

  const {
    list,
    isLoading,
    isModalOpen,
    selectedItem,
    handleItemClick,
    handleOk,
    handleCancel,
  } = useHomePageController();

  if (isLoading) return <div>Loading...</div>;

  return (
    <section id="home-page">
      <div className="home-page-container" >
        <Masonry
          columns={3}
          gutter={8}
          items={list.map((item, index) => ({
            key: `item-${index}`,
            data: item,
          }))}
          itemRender={({ data }) => (
            <div className="content-item" onClick={() => handleItemClick(data)}>
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

      <DetailScreen
        isModalOpen={isModalOpen}
        item={selectedItem}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </section>
  );
}

export default HomePageScreen;
