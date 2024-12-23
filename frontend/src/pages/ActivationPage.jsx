import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../server";

const ActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (activation_token) {
      const sendRequest = async () => {
        await axios
          .post(`${server}/user/activation`, {
            activation_token,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            setError(true);
          });
      };
      sendRequest();
    }
  }, []);

  // return (
  //   <div
  //     style={{
  //       width: "100%",
  //       height: "100vh",
  //       display: "flex",
  //       justifyContent: "center",
  //       alignItems: "center",
  //     }}
  //   >
  //     {error ? (
  //       <p>Your token is expired!</p>
  //     ) : (
  //       <p>Your account has been created suceessfully!</p>
  //     )}
  //   </div>
  // );
  //////////////////////////////////////////////////////////////////
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Arial', sans-serif",
      }}
    >
      {error ? (
        <div
          style={{
            padding: "20px 30px",
            backgroundColor: "#f8d7da",
            color: "#721c24",
            border: "1px solid #f5c6cb",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            fontSize: "18px",
            fontWeight: "bold",
            textAlign: "center",
            animation: "fadeIn 1s ease-in-out",
          }}
        >
          Your token is expired!
        </div>
      ) : (
        <div
          style={{
            padding: "20px 30px",
            backgroundColor: "#d4edda",
            color: "#155724",
            border: "1px solid #c3e6cb",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            fontSize: "18px",
            fontWeight: "bold",
            textAlign: "center",
            animation: "fadeIn 1s ease-in-out",
          }}
        >
          Your account has been created successfully!
        </div>
      )}
    </div>
  );
  
  //////////////////////////////////////////////////////////////////
};

export default ActivationPage;
