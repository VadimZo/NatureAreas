import "./index.scss";
import PDF_ICON from "../../../assets/pdf-icon.png";
import { File } from "../../../types";

export const FilesTable = ({ files }: { files: File[] }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <tbody>
          <tr>
            <th></th>
            <th>Название документа</th>

            <th>Дата</th>

            <th> Номер</th>
          </tr>
          {files.map(({ url, title, desc, date, number }, i) => {
            return (
              <tr key={i}>
                <td>
                  <a title="Скачать документ в формате PDF" href={url}>
                    <img className="pdf-icon" alt="PDF" src={PDF_ICON} />
                  </a>
                </td>
                <td style={{ textAlign: "left" }}>
                  <b>{title}</b>
                  <div>{desc}</div>
                </td>
                <td>{date}</td>

                <td>{number}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
