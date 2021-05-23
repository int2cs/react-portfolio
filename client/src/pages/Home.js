import React, { useEffect, useState } from "react";
import { Aside, AsideNavigation, MainNavigation, Card } from "../components";
// import { bdd } from "../bdd";
import axios from "axios";
import { Formik, isEmptyChildren } from "formik";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3050/").then((res) => {
      setData(res.data);
    });
  }, []);

  const submit = (values) => {
    //Ici on envoit le resultata dans la base de donnée !
    console.log(values);
  };
  const validate = (values) => {
    console.log(values.description.length);
    let errors = {};
    if (values.title && values.title.length < 3) {
      errors.title = "Le titre doit comporter 3 charactères minimum";
    }
    if (values.description && values.description.length < 5) {
      errors.description = "Un petit effort sur la déscription stp...";
    }
    return errors;
  };
  return (
    <div>
      <MainNavigation />
      <div className="container">
        <AsideNavigation />
        <div className="main">
          <Formik
            onSubmit={submit}
            validateOnChange={false}
            initialValues={{ title: "", description: "" }}
            validate={validate}
          >
            {({
              values,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              errors,
            }) => (
              <form className="form_addPost" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="title">Titre</label>
                  <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                  />
                  {errors.title ? (
                    <div className="errMsg">{errors.title}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <label htmlFor="description">Déscription</label>
                  <textarea
                    type="text"
                    name="description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                  />
                  {errors.description ? (
                    <div className="errMsg">{errors.description}</div>
                  ) : null}
                </div>
                <button type="submit" disabled={isSubmitting}>
                  Valider
                </button>
              </form>
            )}
          </Formik>

          {data.map((entrie, index) => (
            <Card
              key={index}
              title={entrie.name}
              content={entrie.description}
              img={entrie.image}
              link={entrie.link}
              nbrLikes={entrie.like}
              comments={entrie.comments}
            />
          ))}
        </div>
        <Aside />
      </div>
    </div>
  );
};

export default Home;
