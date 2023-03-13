import { useParams } from "react-router-dom";

import Classic24kHoddieSignatureEditrion from "../../pages/product/Classic24kHoodieSignatureEdition";
import ClassicMafiaHoodie from "../../pages/product/ClassicMafiaHoodie";
import ClassicMafiaLongSleave from "../../pages/product/ClassicMafiaLongSleave";
import ClassicMafiaTee from "../../pages/product/ClassicMafiaTee";
import Classic24kLongSleave from "../../pages/product/Classic24kLongSleave";
import Classic24kTee from "../../pages/product/Classic24kTee";

const DynamicPages = () => {
  const params = useParams();

  if (params.page === "Classic24kHoodieSignatureEdition") {
    return <Classic24kHoddieSignatureEditrion />;
  }
  if (params.page === "ClassicMafiaHoodie") {
    return <ClassicMafiaHoodie />;
  }
  if (params.page === "ClassicMafiaLongSleave") {
    return <ClassicMafiaLongSleave />;
  }
  if (params.page === "ClassicMafiaTee") {
    return <ClassicMafiaTee />;
  }
  if (params.page === "Classic24kTee") {
    return <Classic24kTee />;
  }
  if (params.page === "Classic24KLongSleave") {
    return <Classic24kLongSleave />;
  }
};

export default DynamicPages;
