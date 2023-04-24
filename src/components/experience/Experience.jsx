import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";
import techStack from "./Enumerators";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Let's get technical</h5>
      <h2>My Experience</h2>
      {techStack.map(({ category, details }) => {
        return (
          <MDBCard
            className="experience-container custom-card"
            sm="12"
            lg="6"
            xl="6"
          >
            <MDBCardBody className="card-body">
              <MDBCardTitle className="category-title">{category}</MDBCardTitle>
              <MDBCardText>
                <ul>
                  <li>
                    <BsPatchCheckFill className="experience__details-icon" />
                    {details.lang1}
                    <br />
                    <small>{details.exp1}</small>
                  </li>
                  <li>
                    <BsPatchCheckFill className="experience__details-icon" />
                    {details.lang2}
                    <br />
                    <small>{details.exp2}</small>
                  </li>
                  <li>
                    <BsPatchCheckFill className="experience__details-icon" />
                    {details.lang3}
                    <br />
                    <small>{details.exp3}</small>
                  </li>
                  <li>
                    <BsPatchCheckFill className="experience__details-icon" />
                    {details.lang4}
                    <br />
                    <small>{details.exp4}</small>
                  </li>
                </ul>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        );
      })}
    </section>
  );
};

export default Experience;
