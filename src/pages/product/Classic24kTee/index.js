import Header from "../../../components/header";
import Footer from "../../../components/footer";
import RelatedViewCollection from "../../../components/home/relatedViewCollection";
import Customize from "../../../components/customize/Customize";

const Classic24kTee = () => {
  let imgDataArr = [
    {
      name_: "Classic 24k Tee",
      price_: "$27.98",
      colors_: "white, black, yellow, gray, pink, beige, gold, purple, blue",
      sizes_: ["S", "M", " L"],
      dtImgArr: [
        {
          src: `/img/customize/Classsic24ktTee/1.jpg`,
        },
        {
          src: `/img/customize/Classsic24ktTee/2.jpg`,
        },
      ],
    },
  ];

  return (
    <>
      <main>
        <Header />
        {imgDataArr &&
          imgDataArr.map((itm, i) => <Customize itm={itm} key={i} />)}
        <RelatedViewCollection />
        <Footer />
      </main>
    </>
  );
};

export default Classic24kTee;
