import {
  faSignsPost,
  faTools,
  faBookmark,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEventHandler, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { search } from "@api/api";
import Spinner from "@tools/Spinner";
import { RootState } from "@store/store";
import { Post, Bookmark } from "@dataTypes/types";
import Button from "@tools/Button";
import {
  ButtonOptions,
  ButtonType,
  TooltipType,
  ToastType,
} from "@tools/settings";
import Toast from "@tools/Toast";
import "./styles/home.scss";
import "./styles/posts.scss";
import { useDispatch, useSelector } from "react-redux";
import Tooltip from "@tools/Tooltip";
import { addBookmark } from "@store/dataSlices";

const Posts = () => {
  const [posts, setPosts] = useState([] as Post[]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastErrorVisible, setToastErrorVisible] = useState(false);
  const [toastErrorMessage, setToastErrorMessage] = useState("");
  const dispatch = useDispatch();
  const bookmarks = useSelector((state: RootState) => state.bookmarks);

  useEffect(() => {
    setLoading(true);
    search()
      .then((items) => {
        setPosts(items as Post[]);
        setCount(items.length);
      })
      .catch((e: Error) => {
        setToastErrorMessage(e.message);
        setToastErrorVisible(true);
        setTimeout(() => {
          setToastErrorVisible(false);
        }, 1500);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const copyToBoookmarks: MouseEventHandler = (event) => {
    const btn = event.currentTarget as HTMLButtonElement;
    const id = btn.id;
    const post = posts.find((t) => t.id.toString() === id.toString());
    if (post) {
      dispatch(
        addBookmark({
          postId: id,
          title: post.title,
          body: post.body,
        } as Bookmark)
      );
      setToastVisible(true);
      setTimeout(() => {
        setToastVisible(false);
      }, 500);
    }
  };

  const copyDisabled = (id: string) => {
    return (
      bookmarks.find((t: Bookmark) => t.postId === id.toString()) != undefined
    );
  };

  const btnOptions = {
    padding: "0",
    margin: "0",
  } as ButtonOptions;

  const tooltip = "You can copy post to Bookmarks by clicking bookmark icon";

  return (
    <>
      <div className="posts-toolbar">
        <h1>Some Awesome Posts.</h1>
        <FontAwesomeIcon icon={faSignsPost} size="lg" />
      </div>
      <div className="post-list-header-container">
        <h3 className="post-list-header">Current {count} posts in the list</h3>
        <Tooltip
          type={TooltipType.RIGHT}
          label={<FontAwesomeIcon icon={faLightbulb} size="lg" />}
          content={tooltip}
        ></Tooltip>
      </div>
      {toastVisible ? <Toast content="Post added to Bookmarks" /> : ""}
      {toastErrorVisible ? (
        <Toast content={toastErrorMessage} type={ToastType.ERROR} />
      ) : (
        ""
      )}
      <div className="awesome-post-list">
        {loading ? (
          <div className="post-item-container posts-loading">
            <Spinner />
          </div>
        ) : (
          posts.map((post: Post) => (
            <div
              className="post-item-container"
              key={posts.indexOf(post).toString()}
            >
              <div className="post-content title">{post.title}</div>
              <div className="post-content">{post.body}</div>
              <div className="post-content actions">
                <Button
                  id={post.id as string}
                  icon={faBookmark}
                  type={ButtonType.ICON_ONLY}
                  label="bookmark"
                  disabled={copyDisabled(post.id as string)}
                  onClick={copyToBoookmarks}
                  options={btnOptions}
                />
              </div>
            </div>
          ))
        )}
      </div>
      <div className="footer posts-footer">
        <NavLink className="footer-link home-link" to="/tools">
          <FontAwesomeIcon icon={faTools} size="lg" />
          Back to Tools
        </NavLink>
        <NavLink className="footer-link post-link" to="/bookmarks">
          <FontAwesomeIcon icon={faBookmark} size="lg" />
          Goto Bookmarks
        </NavLink>
      </div>
    </>
  );
};

export default Posts;
