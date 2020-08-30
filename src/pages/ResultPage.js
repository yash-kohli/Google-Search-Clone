import React from "react";
import "./ResultPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import Response from "./response";
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function ResultPage() {
  const [{ term }, dispatch] = useStateValue();

  //Live API CALL
  //const { data } = useGoogleSearch(term);

  const data = Response;
  console.log(data);
  return (
    <div className="resultPage">
      <div className="resultPage__header">
        <Link to="/">
          <img
            className="resultPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
        <div className="resultPage__headerBody">
          <Search hideButtons />
          <div className="resultPage__options">
            <div className="resultPage__optionsLeft">
              <div className="resultPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="resultPage__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="resultPage__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="resultPage__option">
                <LocalOfferIcon />
                <Link to="/shopping">shopping</Link>
              </div>

              <div className="resultPage__option">
                <RoomIcon />
                <Link to="/maps">maps</Link>
              </div>
              <div className="resultPage__option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>

              <div className="resultPage__option">
                <MoreVertIcon />
                <Link to="/more">more</Link>
              </div>
            </div>
            <div className="resultPage__optionRight">
              <div className="resultPage__option">
                <Link to="/setting">Setting</Link>
              </div>
              <div className="resultPage__option">
                <Link to="/tool">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="resultPage__results"></div>
    </div>
  );
}

export default ResultPage;
