import { useLazyGetHomeListQuery } from "@/features/home/homeApiSlice";
import { Button, Flex, Input, Tooltip, type ConfigProviderProps } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHeaderController } from "./header_controller";
import "./header_style.css";
type SizeType = ConfigProviderProps["componentSize"];

function Header() {
  const [size] = useState<SizeType>("large");
  const { handleClick, getColor2 } = useHeaderController();
  const navigate = useNavigate();
  const [fetchHome] = useLazyGetHomeListQuery();
  const handleLogoClick = () => {
    navigate("/");
    fetchHome({ limit: 10, offset: 0 });
  };

  return (
    <Flex align="center" className="header">
      <div className="logo-search">
        <span>
          <img
            src="../src/assets/logo-piepme-header.png"
            alt="Logo"
            style={{ height: 22 }}
            onClick={handleLogoClick}
          />
        </span>
        <div className="search-header">
          <Input placeholder="Tìm kiếm" className="input-header" />
        </div>
      </div>

      <div className="menu-text">
        <p className={`text-header ${getColor2("/")}`}  onClick={handleLogoClick}>Cộng đồng</p>
        <p
          className={`text-header ${getColor2("piepAudio")}`}
          onClick={() => handleClick("/piepAudio")}
        >
          PiepAUDIO
        </p>
        <p className={`text-header ${getColor2("vietnam")}`} onClick={() => handleClick("/vietnam")}>
          Việt Nam Bây Giờ
        </p>
      </div>

      <div className="button-icons-header">
        <Button
          icon={<span className="fpme-plus"></span>}
          size={size}
          className="button-create"
        >
          Tạo bài Piep
        </Button>
        <Tooltip>
          <Button
            shape="circle"
            icon={<span className="fpme-piep-and-call"></span>}
            onClick={() => handleClick("/chat")}
            className={`button-chat ${getColor2("chat")}`}
          />
        </Tooltip>
        <Tooltip>
          <Button
            shape="circle"
            icon={<span className="fpme-ring"></span>}
            onClick={() => handleClick("ring")}
            className={`button-notification ${getColor2("ring")}`}
          />
        </Tooltip>
      </div>
    </Flex>
  );
}

export default Header;
