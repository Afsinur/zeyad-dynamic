//Cassis24kLongSleave
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import RelatedViewCollection from "../../../components/home/relatedViewCollection";
import Customize from "../../../components/customize/Customize";

const Classic24kLongSleave = () => {
  let imgDataArr = [
    {
      name_: "Classic 24k Long Sleave",
      price_: "$48.98",
      colors_: "white, black, yellow, gray, pink, beige, gold, purple, blue",
      sizes_: ["S", "M", " L"],
      dtImgArr: [
        {
          src: `/img/customize/Cassis24kLongSleave/1.jpg`,
        },
        {
          src: `/img/customize/Cassis24kLongSleave/2.jpg`,
        },
      ],
    },
  ];

  return (
    <>
      <main>
        <Header />
        {imgDataArr.map((itm, i) => (
          <Customize itm={itm} key={i} />
        ))}
        <RelatedViewCollection />
        <Footer />
      </main>
    </>
  );
};

export default Classic24kLongSleave;
