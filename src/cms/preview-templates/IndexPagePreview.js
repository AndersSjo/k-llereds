import React from "react";
import PropTypes from "prop-types";
import { StartpageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <StartpageTemplate
        rubrik={data.rubrik}
        underrubrik={data.underrubrik}
        left={data.left}
        center={data.center}
        right={data.beskrivning}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;
