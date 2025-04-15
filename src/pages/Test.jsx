import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

export default function Test() {
  const { sppc, companyCode, dealerRepCode } = useParams();

  const getdata = async () => {
    try {
      const response = await axios.get(
        "https://hdcs.hinodms.co.id/restapitest/frontend/web/index.php/packinglist/list",
        {
          CompanyCode: companyCode,
          DealerRepCode: dealerRepCode,
          PackListDocNo: sppc,
          LastUpdateDate: "2015-01-01",
          UserInfo: [
            {
              LoginID: "MYHINO001",
              Password: "password123",
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Id: "hmsi",
            Pwd: "hmsi:hmsipassword123",
            ProcFlag: "GetPackingListRegister",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Test</h1>
      <p>{sppc}</p>
      <p>{companyCode}</p>
      <p>{dealerRepCode}</p>
      <button onClick={getdata}>Test</button>
    </div>
  );
}
