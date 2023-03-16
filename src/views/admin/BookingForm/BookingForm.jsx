import React, { useState } from "react";
import "./BookingForm.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { v4 as uuidv4 } from "uuid";

const BookingForm = () => {
  const [Cardtype, setCardtype] = useState("");
  // console.log(Cardtype);
  const [country, setCountry] = useState("");
  // console.log(country);
  const [region, setRegion] = useState("");
  // console.log(typeof passangerCount);
  const [user, setUser] = useState({
    username: "",
    email: "",
    price: "",
    Cardtype: "",
    CardNumber: "",
    telephone: "",
    cardHolderName: "",
    date: "",
    firstName: "",
    middelName: "",
    lastName: "",
    street_address: "",
    city_address: "",
    postel_code: "",
    cell_phone_no: "",
    Country: "",
    region: "",
    Description: "",
    amount: "",
  });
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), pfirstName: "", pmiddelName: "", plastName: "" },
  ]);
  console.log(inputFields);
  console.log(inputFields.id);
  const inputField = {
    cmastercard: "",
    cvisa: "",
    cdiscover: "",
    camericanexpress: "",
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      // console.log(i);
      return i;
    });

    setInputFields(newInputFields);
    //console.log(newInputFields);
  };
  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { id: uuidv4(), pfirstName: "", pmiddelName: "", plastName: "" },
    ]);
  };
  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };
  let name, value;
  const handleInput = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const sendData = async (e) => {
    e.preventDefault();
    const {
      username,
      email,
      price,
      CardNumber,
      telephone,
      cardHolderName,
      date,
      firstName,
      middelName,
      lastName,
      street_address,
      city_address,
      postel_code,
      cell_phone_no,
      Description,
      amount,
    } = user;

    //const { cmastercard, cvisa, cdiscover, camericanexpress } = inputField;

    const passangers = inputFields;

    // console.log(pfirstName);
    const res = await fetch("/register/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        price,
        Cardtype,
        CardNumber,
        telephone,
        cardHolderName,
        date,
        passangers,
        firstName,
        middelName,
        lastName,
        street_address,
        city_address,
        postel_code,
        cell_phone_no,
        country,
        region,
        Description,
        amount,
      }),
    });

    if (res.status === 400) {
      window.alert("invalid creation");
      console.log(" cannot  created");
    } else {
      window.alert("From submiteed succsesfully");
      console.alert("From submiteed succsesfully");
    }
  };
  return (
    <>
      <div className="mt-4 mb-2 rounded-lg shadow-xl dark:bg-navy-800 ">
        <div className="mx-auto w-[70%]  ">
          {/* <h2>Add new User</h2> */}
          <form action="" method="POST" className="">
            {/* <div className="user-image-wrapper">
								<div className="user-image"><img src="#" alt="" /> <ImCamera /></div>
								<div className="user-image-upload"> </div>
							</div> */}
            <div className="">
              <div className="field w-[100%]">
                <div className="input w-[100%]">
                  <label htmlFor="name">Customer Name</label>
                  <input
                    type="text"
                    placeholder="Enter Customer Name"
                    name="username"
                    value={user.username}
                    onChange={handleInput}
                  />
                </div>
                <div className="input">
                  <label htmlFor="username">Customer Email</label>
                  <input
                    type="text"
                    placeholder="Enter Customer Email"
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="field">
                <div className="input">
                  <label htmlFor="Price(USD) ">Price(USD) </label>
                  <input
                    type="text"
                    placeholder="$"
                    name="price"
                    value={user.price}
                    onChange={handleInput}
                  />
                </div>
                <div className="input"></div>
              </div>
              <div>
                <h2 className=" px-2">Card type:</h2>
                <div className="flex gap-5  py-2 px-3">
                  <div className=" flex gap-1">
                    <input
                      type="radio"
                      id="html"
                      name="Cardtype"
                      value={user.Cardtype}
                      onChange={() => {
                        setCardtype("Mastercard");
                      }}
                    />
                    <label for="html">Mastercard</label>
                  </div>
                  <div className=" flex gap-1">
                    <input
                      type="radio"
                      id="css"
                      name="Cardtype"
                      value={user.Cardtype}
                      onChange={() => {
                        setCardtype("Visa");
                      }}
                    />
                    <label for="css">Visa</label>
                  </div>
                  <div className=" flex gap-1">
                    <input
                      type="radio"
                      id="javascript"
                      name="Cardtype"
                      value={user.Cardtype}
                      onChange={() => {
                        setCardtype("Discover");
                      }}
                    />
                    <label for="javascript">Discover</label>
                  </div>
                  <div className=" flex gap-1">
                    <input
                      type="radio"
                      id="language"
                      name="Cardtype"
                      value={user.Cardtype}
                      onChange={() => {
                        setCardtype("American Express");
                      }}
                    />
                    <label for="american">American Express</label>
                  </div>
                </div>
              </div>

              <div className="field">
                <div className="input">
                  <label htmlFor="address">
                    Enter Credit card number (last 4 Digits only)
                  </label>
                  <input
                    type="text"
                    placeholder="Credit card number"
                    name="CardNumber"
                    value={user.CardNumber}
                    onChange={handleInput}
                  />
                </div>
                <div className="input">
                  <label htmlFor="country">
                    Cardholder's Tel (please indicate with area code)
                  </label>
                  <input
                    type="text"
                    placeholder="Telephone"
                    name="telephone"
                    value={user.telephone}
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="field">
                <div className="input">
                  <label htmlFor="Price(USD) ">Card Holder Name </label>
                  <input
                    type="text"
                    placeholder="Enter Name as it Appears on the Card"
                    name="cardHolderName"
                    value={user.cardHolderName}
                    onChange={handleInput}
                  />
                </div>
                <div className="input">
                  <label htmlFor="Price(USD) ">Expiry date </label>
                  <input
                    type="date"
                    placeholder=""
                    name="date"
                    value={user.date}
                    onChange={handleInput}
                  />
                </div>
              </div>
              <h2 className="mb-[-40px]">Amount Authorized(USD) </h2>
              <div className="field flex flex-col">
                <div className=" flex">
                  <div className="input">
                    <input
                      type="Number"
                      placeholder=""
                      name="amount"
                      value={user.amount}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="input">
                    <input
                      type="text"
                      placeholder="Description (optional)"
                      name="Description"
                      value={user.Description}
                      onChange={handleInput}
                    />
                  </div>

                  <div className="input">
                    <input
                      type="text"
                      placeholder=""
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="input">
                    <input
                      type="text"
                      placeholder="Description (optional)"
                      name="Description"
                      value={user.Description}
                      onChange={handleInput}
                    />
                  </div>
                </div>
              </div>
              <h2 className="mb-[-10px] ">
                Please Mention Passenger Details below
              </h2>
              {inputFields.map((inputField) => (
                <div key={inputField.id}>
                  <div className={`${inputField.id} field`}>
                    <div className="input">
                      <input
                        type="text"
                        placeholder="First Name"
                        name="pfirstName"
                        value={inputField.pfirstName}
                        onChange={(event) =>
                          handleChangeInput(inputField.id, event)
                        }
                      />
                    </div>

                    <div className="input">
                      <input
                        type="text"
                        placeholder="Middle Name"
                        name="pmiddelName"
                        value={inputField.middelName}
                        onChange={(event) =>
                          handleChangeInput(inputField.id, event)
                        }
                      />
                    </div>

                    <div className="input">
                      <input
                        type="text"
                        placeholder="Last Name"
                        name="plastName"
                        value={inputField.lastName}
                        onChange={(event) =>
                          handleChangeInput(inputField.id, event)
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-2 px-3">
                <div
                  className="bg-slate-300 cursor-pointer rounded-md py-1  px-4 text-2xl "
                  disabled={inputFields.length === 1}
                  onClick={() => handleRemoveFields(inputField.id)}
                >
                  -
                </div>

                <div
                  className="bg-slate-300 cursor-pointer rounded-md py-1 px-4 text-xl  "
                  onClick={handleAddFields}
                >
                  +
                </div>
              </div>
              <h2 className="spacer-t20 mb-[-10px]">Billing Information</h2>
              <div className="field">
                <div className="input input-spacer0">
                  <label htmlFor="Price(USD) "> </label>
                  <input
                    type="text"
                    placeholder="Street Address"
                    name="street_address"
                    value={user.street_address}
                    onChange={handleInput}
                  />
                </div>

                <div className="input input-spacer0">
                  <label htmlFor="password"></label>
                  <input
                    type="text"
                    placeholder="City Address"
                    name="city_address"
                    value={user.city_address}
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="field">
                <div className="input">
                  <label htmlFor="Price(USD) "> </label>
                  <input
                    type="text"
                    placeholder="Zip/Postal Code"
                    name="postel_code"
                    value={user.postel_code}
                    onChange={handleInput}
                  />
                </div>
                <div className="input">
                  <label htmlFor="password"></label>
                  <input
                    type="text"
                    placeholder="Cell Phone No."
                    name="cell_phone_no"
                    value={user.cell_phone_no}
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className=" flex justify-start px-2 py-5">
                <div className=" flex w-[95%] gap-12">
                  <CountryDropdown
                    className=" w-[50%] rounded-md border-2 border-solid border-gray-400 font-semibold  "
                    value={country}
                    onChange={(val) => setCountry(val)}
                  />
                  <RegionDropdown
                    country={country}
                    className=" w-[50%] rounded-md border-2 border-solid border-gray-400 p-3 font-semibold"
                    value={region}
                    onChange={(val) => setRegion(val)}
                  />
                </div>
              </div>
              <div className="">
                <h2>Description</h2>
                <CKEditor
                  // className=""
                  // name="Description"
                  value={user.Description}
                  editor={ClassicEditor}
                  data="<p>Hello..</p>"
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(handleInput, editor) => {
                    const data = handleInput;
                    console.log({ data });
                  }}
                  onBlur={(event, editor) => {
                    console.log("Blur.", editor);
                  }}
                  onFocus={(event, editor) => {
                    console.log("Focus.", editor);
                  }}
                />
              </div>
              <div className="field">
                <div className="input">
                  <button onClick={sendData}>Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingForm;
