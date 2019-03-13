import React, { StatelessComponent } from "react";
import Head from "next/head";
import Base from "../components/base-layout";

const homepage: StatelessComponent = () => {
  return (
    <Base>
      <div
        className="Homepage"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden"
        }}
      >
        <Head>
          <meta charSet="utf-8" />
          <title>Oxford Foods Official Website</title>

          <meta
            name="description"
            content="Locally run grocery store located in the heart of Cook St. Village in Victoria BC, Canada."
          />
          <meta
            name="keywords"
            content="oxford foods, official, victoria, british columbia, canada, cook st, 271 cook st, fairfield, low prices"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          {/* <link href="/static/css/style.css" rel="stylesheet" media="screen" /> */}
        </Head>
        <header
          style={{
            padding: "1em",
            flex: "0",
            background: "#333",
            color: "#f7f7f7"
          }}
        >
          Oxford Foods
        </header>
        <div
          className="body"
          style={{
            flex: "1",
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-between"
          }}
        >
          <div
            className="main"
            style={{
              flex: "2 1 448px",
              height: "100%",
              overflow: "scroll"
            }}
          >
            <h1
              style={{
                color: "#B20000",
                fontSize: "500%",
                fontFamily: `'Helvetica Neue',Helvetica,Arial,sans-serif`,
                textAlign: "center"
              }}
            >
              Oxford Foods
            </h1>
            <p class="work">
              Celebrating 3 Generations of Locally Run Business
            </p>
            <hr />
            <section
              className="about"
              style={{ display: "flex", flexFlow: "row wrap" }}
            >
              <div className="location" style={{ flex: "1 1 15em" }}>
                <h2>Location</h2>
                <b>271 COOK ST. VICTORIA BC, V8V 3X4</b>
                <p>
                  At the corner of Oxford & Cook St. In the heart of Cook Street
                  Village Customer parking available
                </p>
              </div>
              <div className="hours" style={{ flex: "1 1 15em" }}>
                <h2>Hours</h2>
                <table style={{ width: "100%" }}>
                  <tbody>
                    {[
                      ["Weekdays", "9:00AM - 8:15PM"],
                      ["Saturday", "9:00AM - 5:15PM"],
                      ["Sunday & Holidays", "10:00AM - 5:15PM"],
                      ["Closed", "Christmas & New Years Day"]
                    ].map(([day, time]) => (
                      <tr key={day}>
                        <th align="left">{day}</th>
                        <td>{time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            <p>
              Gift Certificates available. In denominations of $25, $50, or
              $100.
            </p>
            <hr />
            <section className="banking">
              <h2>Banking Services</h2>
              <div
                className="services"
                style={{ display: "flex", flexFlow: "row wrap" }}
              >
                <figure>
                  <img src="/static/img/logos/rbc.svg" alt="RBC" />
                  <figcaption>In Store Full Service RBC ATM</figcaption>
                </figure>
                <figure>
                  <div
                    className="logos"
                    style={{
                      display: "flex",
                      flexFlow: "row wrap",
                      justifyContent: "space-around"
                    }}
                  >
                    <img src="/static/img/logos/visa.svg" alt="Visa" />
                    <img
                      src="/static/img/logos/mastercard.svg"
                      alt="MasterCard"
                    />
                  </div>
                  <figcaption>Now Accepting VISA & MasterCard</figcaption>
                </figure>
              </div>
            </section>
          </div>
          <div className="flyer" style={{ flex: "1 1 320px" }}>
            <iframe
              src="https://docs.google.com/gview?url=https://www.oxfordfoods.ca/flyer.pdf&embedded=true"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>
      </div>
    </Base>
  );
};

export default homepage;
