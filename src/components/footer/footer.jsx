import logoFooter from "../../assets/images/logo-footer.png";

export default function Footer() {
  return (
    <div className="flex bg-stone-900 " style={{padding:"75px"}}>
      <div className="w-[280px]">
        <div className="w-[170px]">
          <img src={logoFooter} alt="" />
        </div>

        <p className="text-white text-justify" style={{marginTop:"10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellat, omnis doloribus nihil odio itaque deleniti impedit magni nostrum rem porro distinctio atque voluptatem enim molestias quam consequatur illum quod.</p>
      </div>

      <div>
        <h3 className="text-white">Informação</h3>
        <ul>
            <li>Sobre Drip Store</li>
            <li>Segurança</li>
            <li>Whishlist</li>
            <li>Blog</li>
            <li>Teabalhe Conosco</li>
            <li>Meus Pedidos</li>
        </ul>
      </div>
    </div>
  );
}
