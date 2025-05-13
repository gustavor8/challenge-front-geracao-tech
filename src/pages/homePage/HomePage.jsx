import Carousel from "../../components/carousel/carousel";
import { productsPromotion } from "../../../arquivos_testes/test";

export default function HomePage() {
  return (
    <>
      <Carousel products={productsPromotion}></Carousel>
    </>
  );
}
