import * as React from "react";
import QRCode from "qrcode";

export const UserTaxData = ({ taxData, dataTable }) => {
  const canvas = React.useRef();
  const opt = {
    errorCorrectionLevel: "H",
    type: "image/jpeg",
    quality: 0.3,
    width: 250,
    height: 250,
    margin: 1
  };
  React.useEffect(() => {
    QRCode.toCanvas(canvas.current, taxData.QR, opt, function(error) {
      if (error) console.error(error);
      // console.log("success!");
    });
  });
  return (
    <div id={taxData.date} key={taxData._id}>
      <h5>Место {taxData.place}</h5>
      <table>
        <thead>
          <tr>
            <th>Владелец</th>
            <th>Задолженность</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{taxData.owner}</td>
            <td>{taxData.debt} руб</td>
          </tr>
        </tbody>
      </table>
      <h5>Начислено за месяц</h5>
      <table>
        <thead>
          <tr>
            <th>Наименование</th>
            <th>Количество</th>
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{taxData.service.serviceName}</td>
            <td>{taxData.service.serviceAmount}</td>
            <td>{taxData.service.serviceAmountTotal} руб</td>
          </tr>
        </tbody>
      </table>
      <div>
        <canvas ref={canvas} id="canvas"></canvas>
        <p>оплатить не позднее 15 числа следующего месяца</p>
      </div>
      <hr />
    </div>
  );
};
export default UserTaxData;
