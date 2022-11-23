import React from "react";
import Title from "../titleblock/title/Title";
import LoadingCard from "./LoadingCard";
import LoadingSearchBar from "./LoadingSearchBar";

const Loading = () => {
  const fakeArrayForDavid = ["david", "david1", "david2", "david3", "david4"];
  return (
    <div className="allcocktails_section-placeholder">
      <Title />
      <div className="list__allcocktails">
        <LoadingSearchBar />
        {fakeArrayForDavid.map((id) => (
          <LoadingCard key={id} />
        ))}
      </div>
    </div>
  );
};

export default Loading;
