import Header from "../../../components/header";
import Footer from "../../../components/footer";
import RelatedViewCollection from "../../../components/home/relatedViewCollection";
import Customize from "../../../components/customize/Customize";

const ClassicMafiaHoodie = () => {
  let imgDataArr = [
    {
      name_: "Classic Mafia Hoodie",
      price_: "$77.74",
      colors_: "white, black, yellow, gray, pink, beige, gold, purple, blue",
      sizes_: ["S", "M", " L"],
      dtImgArr: [
        {
          src: `/img/customize/ClassicMafiaHoddie/1.jpg`,
        },
        {
          src: `/img/customize/ClassicMafiaHoddie/2.jpg`,
        },
        {
          src: `/img/customize/ClassicMafiaHoddie/3.jpg`,
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

export default ClassicMafiaHoodie;
