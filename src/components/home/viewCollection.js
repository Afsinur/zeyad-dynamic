import styled from "@emotion/styled";
import PrintOneImgBox from "../collections/PrintOneImgBox";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { TopHeaderProduct } from "../../api/TopHeaderProduct";
import { useState } from "react";
const CatalogContentDivForViewCollection = styled.div`
  width: 100%;

  .sm-right {
    @media screen and (max-width: 600px) {
      text-align: right;
    }
  }

  .view-collection-txt {
    text-align: right;
  }

  h4 {
    position: relative;
    font-weight: 500;
    font-size: 0.75rem;
    cursor: pointer;
    text-transform: uppercase;

    .fixed-bracket {
      position: relative;
      margin-left: 10px;
    }
  }

  .dynamic-bracket {
    position: relative;
  }

  .top-div {
    padding: 20px 10px 0px 10px;
    display: flex;
    justify-content: space-between;
  }

  .img-arr-container {
    width: 98.5%;
    margin: auto;
  }

  .dynamic-img-title-container {
    flex-direction: row !important;
    align-items: flex-start;
    justify-content: space-between;

    li {
      margin-top: unset;
      margin-right: 16px;
    }
  }

  .single-img-container {
    margin-bottom: 30px;
    @media screen and (max-width: 900px) {
      margin-bottom: 0px;
    }
  }
`;

const ViewCollection = () => {
  const [productData, setProductData] = useState(TopHeaderProduct);

  return (
    <CatalogContentDivForViewCollection>
      <div className="top-div">
        <Grid container spacing={1.3}>
          <Grid item xs={6} sm={3}>
            <div>
              <h4>24k 2023</h4>
            </div>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box
              sx={{
                display: {
                  sm: "none",
                  md: "inherit",
                },
              }}
            >
              <div>
                <h4 className="sm-right">NEW ARRIVALS</h4>
              </div>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <div></div>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box
              sx={{
                display: {
                  sm: "none",
                  md: "inherit",
                },
              }}
            >
              <div>
                {/* <h4 className="view-collection-txt-related">
                  <span>PREV</span>
                  <span>NEXT</span>
                </h4> */}
              </div>
            </Box>
          </Grid>
        </Grid>
      </div>

      <div className="img-arr-container">
        <Grid container spacing={1.3}>
          {productData.map((obj, i) => {
            return (
              <Grid item sm={6} xs={6} md={3} key={i}>
                <Link to={`/product/${obj.customize}`}>
                  <div className="single-img-container">
                    <PrintOneImgBox obj={obj} />
                  </div>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </CatalogContentDivForViewCollection>
  );
};

export default ViewCollection;
