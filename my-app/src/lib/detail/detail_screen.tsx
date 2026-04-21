import { Image } from "antd";
import Modal from "antd/es/modal/Modal";
import {
  getDecryptedContent,
  getDecryptedTitle,
  type HomeItem,
} from "../../../model/home_type";
import { useDetailController } from "../../features/detail/detail_controller";
import "./detail.css";

interface DetailScreenProps {
  isModalOpen: boolean;
  item: HomeItem | undefined;
  handleOk: () => void;
  handleCancel: () => void;
}

function DetailScreen({
  isModalOpen,
  item,
  handleOk,
  handleCancel,
}: DetailScreenProps) {
  // useDocumentTitle("Detail");

  const { detail, isLoading } = useDetailController(item);

  return (
    <Modal
      width={680}
      closeIcon={false}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      style={{ outline: "none" }}
      styles={{
        body: {
          overflowY: "auto",
          maxHeight: "80vh",
          paddingRight: "12px",
        },
      }}
    >
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="detail-body">
          <div className="detail-title">
            <h1 className="text-title">{getDecryptedTitle(detail?.PV301)}</h1>
          </div>
          <div className="detail-content">
            {getDecryptedContent(detail?.PV305)}
          </div>
          {detail?.PO322.image.map((img, index) => (
            <div key={index} style={{ aspectRatio: `1/${img.RATIO}` }}>
              <Image
                src={img.IMG}
                alt={img.DES}
                width="100%"
                height="100%"
                style={{ objectFit: "cover" }}
                preview={false}
              />
            </div>
          ))}
        </div>
      )}
    </Modal>
  );
}

export default DetailScreen;
