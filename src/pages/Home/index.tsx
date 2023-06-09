import Navigation from "../../components/Navigation";
import ListArea from "../../components/ListArea";
import HomeImage from "../../assets/main-img.jpg";
import "./index.scss";

export default function Home() {
  return (
    <>
      <Navigation />
      <h1 className="tac">
        Особо охраняемые природные территории и объекты Калмыкии (ООПТ)
      </h1>
      <h2 className="tac">
        Рассказываем, что такое особо охраняемые природные территории, где
        расположены в республике Калмыкия, как защищены,какими бывают и
        насколько важны для жизни
      </h2>
      <img className="home-img logo-spin" src={HomeImage} />
      <p>
        <i>{"\t"}ООПТ, или особо охраняемые природные территории</i> - это
        участки земли, воды и воздушного пространства, где находятся природные
        комплексы и объекты, имеющие особое значение для сохранения природы,
        науки, культуры, эстетики, отдыха и здоровья людей. Эти территории
        изъяты из хозяйственного использования и имеют особый режим охраны,
        определенный государственными органами. Одна из главных целей ООПТ -
        сохранение природного биоразнообразия, поддержание естественных
        экологических процессов, видов и сообществ, находящихся на этой
        территории. Важно понимать, что заповедники не являются единственной
        формой охраны природы, и современная охрана природы подразумевает также
        разумное использование природных ресурсов для сохранения их для будущих
        поколений.
      </p>
      <p>{"\t"}В Республике Калмыкия расположены следующие ООПТ</p>
      <ListArea />
    </>
  );
}
