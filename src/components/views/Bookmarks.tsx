import {
  faBookmark,
  faInfo,
  faBook,
  faHome,
  faTimes,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle as faCircleRing} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEventHandler, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeBookmark, RootState } from "./../../store/store";
import { NavLink } from "react-router-dom";
import Button from "../tools/Button";
import {
  ButtonType,
  ButtonOptions,
  TooltipType,
  TooltipOptions,
} from "../tools/settings";
import { Bookmark } from "../types/types";
import "./styles/home.scss";
import "./styles/posts.scss";
import "./styles/bookmarks.scss";
import Tooltip from "../tools/Tooltip";

const Bookmarks = () => {
  const bookmarks = useSelector((state: RootState) => state.bookmarks);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const removeFromBookmarks: MouseEventHandler = (event) => {
    const btn = event.currentTarget as HTMLButtonElement;
    const id = btn.id;
    dispatch(removeBookmark({ id }));
  };

  useEffect(() => {
    setCount(bookmarks.length);
  }, [bookmarks]);

  const btnOptions = {
    padding: "0",
    margin: "0",
  } as ButtonOptions;

  const tooltipOptions = {
    fillBgColorMode: true,
  } as TooltipOptions;

  const tooltip = "Here are your bookmarked Posts";
  return (
    <>
      <div className="posts-toolbar">
        <h1>My Bookmarks</h1>
        <FontAwesomeIcon icon={faBookmark} size="lg" />
        <Tooltip
          options={tooltipOptions}
          type={TooltipType.LEFT}
          label={<FontAwesomeIcon icon={faInfo} size="lg" />}
          content={tooltip}
        ></Tooltip>
      </div>
      <h3 className="post-list-header">{count} Bookmarks added</h3>
      <div className="awesome-post-list">
        {bookmarks.map((bookmark: Bookmark) => (
          <div
            className="post-item-container"
            key={bookmarks.indexOf(bookmark).toString()}
          >
            <div className="post-item-content-inner">
              <div className="post-content title">{bookmark.title}</div>
              <div className="post-title actions bookmark-actions">
                <span className="fa-layers fa-fw">
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="bookmark-bg"
                    size="lg"
                  />
                  <FontAwesomeIcon
                    icon={faCircleRing}
                    className="bookmark-border"
                    size="lg"
                  />
                  <FontAwesomeIcon icon={faBookmark} transform="shrink-6" />
                </span>
                <Button
                  id={bookmark.id as string}
                  type={ButtonType.ICON_ONLY}
                  options={btnOptions}
                  icon={faTimes}
                  onClick={removeFromBookmarks}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="footer posts-footer">
        <NavLink className="footer-link post-link" to="/posts">
          <FontAwesomeIcon icon={faBook} size="lg" />
          Back to Posts
        </NavLink>
        <NavLink className="footer-link post-link" to="/">
          <FontAwesomeIcon icon={faHome} size="lg" />
          Goto to Home
        </NavLink>
      </div>
    </>
  );
};

export default Bookmarks;
