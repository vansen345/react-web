import Modal from "antd/es/modal/Modal";
import { getDecryptedTitle, type HomeItem } from "../../../model/home_type";
import "./detail.css";
import { useDetailController } from "./detail_controller";

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
  const { detail, isLoading } = useDetailController(item);

  return (
    <Modal
      closable={{ "aria-label": "Custom Close Button" }}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="detail-body">
          <div className="detail-title">
            <h1 className="text-title">{getDecryptedTitle(detail?.PV301)}</h1>
          </div>
        </div>
      )}
    </Modal>
  );
}

export default DetailScreen;
