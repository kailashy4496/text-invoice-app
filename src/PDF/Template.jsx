import ReactPrint from "react-to-print";
import { useRef, useState } from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { Close } from "@mui/icons-material";
const PdfTemplate = (props) => {
  const ref = useRef();
  const [openAirPopup, setAirPopup] = useState(false);
  const [SNumber, setSNumber] = useState("");
  const [Item, setItem] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [Amount, setAmount] = useState(0);
  const [Name, setName] = useState("");
  const [Mobile, setMobile] = useState("");

  const [displayData, setDisplayData] = useState("");
  const [gstAmount, setGstAmount] = useState(0);

  const [List, setList] = useState([]);

  const addData = () => {
    List.push({
      number: SNumber,
      product: Item,
      quantity: Quantity,
      amount: Amount,
      name: Name,
      mobile: Mobile,
    });
    console.log(List);
    setSNumber(1);
    setItem("");
    setQuantity("");
    setAmount("");
    setDisplayData(Name);
    setMobile("");
    setAirPopup(false);
    if (!isNaN(Amount) && Amount !== "") {
      const price = parseFloat(Amount);
      const gst = (price * 18) / 100;
      setGstAmount(gst);
    } else {
      setGstAmount(0);
    }
  };

  let sum = 0;
  List.forEach((amount) => {
    sum += parseInt(amount.amount);
  });

  let number = "";
  List.forEach((mobile) => {
    number += parseInt(mobile.mobile);
  });

  return (
    <div style={{ marginBottom: "250px" }}>
      <div className="container" ref={ref}>
        <div className="container">
          <div className="row">
            <div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4 mb-4">
                    <img
                      src="https://www.bestdiapers.in/cdn/shop/files/Logo_transparent.png?v=1687412510"
                      alt=""
                      width="150px"
                    />
                  </div>
                  <div className="">
                    <h4 style={{ color: "#F81D2D", fontSize: "30px" }}>
                      <strong>TANU SUPARI</strong>
                    </h4>
                    <b>
                      Plot no 4/F/5, Road no 8, Baiganwadi, <br></br> Govandi,
                      Mumbai-40043
                    </b>
                    <p>
                      <b>Mobile : </b>{" "}
                      <span style={{ color: "#325aa8" }}>(+91) 9833640656</span>
                    </p>
                    <p>
                      <b>Email : </b>{" "}
                      <span style={{ color: "#325aa8" }}>
                        pramodyadav1987@gmail.com
                      </span>
                    </p>
                    <p>
                      <b>GSTIN : </b>
                      <span style={{ color: "#325aa8" }}>27AELPY1190G1Z3</span>
                    </p>
                  </div>
                </div>
                <div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>
                          <h5>S.No.</h5>
                        </th>
                        <th>
                          <h5>Products</h5>
                        </th>
                        <th>
                          <h5>Quantity</h5>
                        </th>
                        <th>
                          <h5>Amount</h5>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {List.length
                        ? List.map((items, index) => {
                            return (
                              <tr key={index}>
                                <td className="col-md-3">{items.number}</td>
                                <td className="col-md-3">{items.product}</td>
                                <td className="col-md-3">{items.quantity}</td>
                                <td className="col-md-3">
                                  <i
                                    className="fas fa-rupee-sign"
                                    area-hidden="true"
                                  ></i>{" "}
                                  ₹ {items.amount}{" "}
                                </td>
                              </tr>
                            );
                          })
                        : null}
                      <tr>
                        <td className="text-right">
                          <p>
                            <strong>Total Amount: </strong>
                          </p>
                          <p>
                            <strong>Include GST: </strong>
                          </p>
                          <p>
                            <strong>Payable Amount: </strong>
                          </p>
                        </td>
                        <td></td>
                        <td></td>
                        <td>
                          <p className="col-md-8">
                            <strong>
                              <i
                                className="fas fa-rupee-sign"
                                area-hidden="true"
                              ></i>{" "}
                              ₹ {sum}
                            </strong>
                          </p>
                          <p>
                            <strong>
                              <i
                                className="fas fa-rupee-sign"
                                area-hidden="true"
                              ></i>{" "}
                              ₹ {gstAmount}{" "}
                            </strong>
                          </p>
                          <p>
                            <strong>
                              <i
                                className="fas fa-rupee-sign"
                                area-hidden="true"
                              ></i>{" "}
                              ₹ {sum + gstAmount}
                            </strong>
                          </p>
                        </td>
                      </tr>
                      <tr style={{ color: "#F81D2D" }}>
                        <td className="text-right">
                          <h4>
                            <strong>Total:</strong>
                          </h4>
                        </td>
                        <td></td>
                        <td></td>
                        <td className="text-left">
                          <h4>
                            <strong>
                              <i
                                className="fas fa-rupee-sign"
                                area-hidden="true"
                              ></i>{" "}
                              ₹ {sum + gstAmount}{" "}
                            </strong>
                          </h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <div className="col-md-12">
                    <p>
                      <b>Date :</b> {props.date}{" "}
                    </p>
                    <p>
                      <b>
                        Name :{" "}
                        <span style={{ color: "#325aa8" }}>{displayData}</span>
                      </b>
                    </p>
                    <p>
                      <b>
                        Contact :{" "}
                        <span style={{ color: "#325aa8" }}>{number}</span>
                      </b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <>
        <ReactPrint
          trigger={() => (
            <button
              style={{
                background: "red",
                color: "white",
                width: "60px",
                height: "30px",
                position: "absolute",
                left: "130px",
                borderRadius: "2px",
              }}
            >
              Print
            </button>
          )}
          content={() => ref.current}
        />

        <button
          onClick={() => setAirPopup(true)}
          style={{
            background: "red",
            color: "white",
            position: "absolute",
            left: "210px",
            borderRadius: "2px",
          }}
        >
          Add Product
        </button>
      </>

      <Dialog open={openAirPopup}>
        <DialogTitle>
          <div className="title">
            <div className="hed">New product</div>
            <div className="icon-cross" onClick={() => setAirPopup(false)}>
              <Close />
            </div>
          </div>
        </DialogTitle>
        <DialogContent>
          <div className="container">
            <div className="forms">
              <input
                type="text"
                value={SNumber}
                onChange={(e) => setSNumber(e.target.value)}
                placeholder="S.No."
              />
              <input
                type="text"
                value={Item}
                onChange={(e) => setItem(e.target.value)}
                placeholder="PR Name"
              />
              <input
                type="text"
                value={Quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="QTY"
              />
              <input
                type="text"
                value={Amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount ₹"
              />
              <input
                type="text"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Customer name"
              />
              <input
                type="text"
                value={Mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Mobile no..."
              />
            </div>
            <div className="buttons">
              <button onClick={addData}>Add</button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PdfTemplate;
