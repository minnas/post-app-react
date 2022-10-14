import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEventHandler, ReactNode, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "@tools/Button";
import { ButtonOptions, ButtonType } from "@tools/settings";
import { pages } from "@dataTypes/pages";
import "./styles/layout.scss";

const Layout = ({
  children,
  icon,
  showSignature,
}: {
  children: ReactNode;
  icon: IconProp;
  showSignature?: boolean;
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentPage = pages.findIndex((p) => p == location.pathname);
  const [page, setPage] = useState(currentPage > -1 ? currentPage : 0);

  const prevClick: MouseEventHandler = (event) => {
    if (page > 0) {
      setPage(page - 1);
    } else {
      setPage(pages.length - 1);
    }
  };

  const nextClick: MouseEventHandler = (event) => {
    if (page < pages.length - 1) {
      setPage(page + 1);
    } else {
      setPage(0);
    }
  };

  useEffect(() => {
    const path = pages[page];
    navigate(path);
  }, [page]);

  useEffect(() => {
    const cPage = pages.findIndex((p) => p == location.pathname);
    if (cPage != page) {
      setPage(cPage);
    }
  }, [location.pathname]);

  const options = {
    color: "rgba(255, 255, 255, .8)",
  } as ButtonOptions;

  return (
    <div>
      <Button
        btnClass="nav-button go-prev"
        onClick={prevClick}
        icon={faChevronCircleLeft}
        type={ButtonType.ICON_ONLY}
        options={options}
      />
      <Button
        btnClass="nav-button go-next"
        onClick={nextClick}
        icon={faChevronCircleRight}
        type={ButtonType.ICON_ONLY}
        options={options}
      />
      <div>
        <div className="content">
          <span className="view-icon">
            <FontAwesomeIcon icon={icon} size="lg" />
          </span>
          <div className="content-inner">{children}</div>
          {showSignature ? <span className="some-test">Minna.</span> : ""}
        </div>
      </div>
    </div>
  );
};

export default Layout;
