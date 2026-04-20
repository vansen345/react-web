import Modal from "antd/es/modal/Modal";
import { getDecryptedTitle, type HomeItem } from "../../../model/home_type";
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
