import React from "react";
import FolderIcon from "@material-ui/icons/Folder";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
class Lnb extends React.Component {
  render() {
    return (
      <div className="Lnb">
        <div className="Lnb__title">
          <FolderIcon /> {this.props.title}
        </div>
        <div className="Lnb__column">
          <CheckCircleOutlineIcon /> {this.props.column}
        </div>
      </div>
    );
  }
}

export default Lnb;
