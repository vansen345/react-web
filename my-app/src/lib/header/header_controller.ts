// useHeaderController.ts
import { useLocation, useNavigate } from "react-router-dom";

export const useHeaderController = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (path: string) => {
    // Nếu click vào route đang active thì về home
    if (location.pathname === `/${path}`) {
      navigate("/");
    } else {
      navigate(`/${path}`);
    }
  };

  const getColor2 = (path: string): string => {
    const current = location.pathname;
    if (path === "/") return current === "/" ? "button-active" : "button-inactive";
    return current === `/${path}` ? "button-active" : "button-inactive";
  };

  return { handleClick, getColor2 };
};