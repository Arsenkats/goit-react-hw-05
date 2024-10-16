import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMoviesByQuery } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isEmpty, setisEmpty] = useState(false);

  const initialValues = {
    query: "",
  };
  const FeedbackSchema = Yup.object().shape({
    query: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values) => {
    handleChangeQuery(values.query);
  };

  const query = searchParams.get("query") ?? "";
  const handleChangeQuery = (newQuery) => {
    if (!newQuery) {
      return setSearchParams({});
    }
    searchParams.set("query", newQuery);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setisEmpty(false);
        setIsError(false);
        setIsLoading(true);
        if (!query) return;
        const data = await fetchMoviesByQuery(query);
        setSearchMovies(data);
        if (data.length === 0) {
          setisEmpty(true);
        }
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={s.searchForm}>
          <div className={s.searchFieldWrapper}>
            <Field name='query' className={s.searchField} />

            <button type='submit' className={s.searchBtn}>
              Search
            </button>
          </div>
          <ErrorMessage name='query'>
            {(msg) => <div className={s.error}>{msg}</div>}
          </ErrorMessage>
        </Form>
      </Formik>
      {isEmpty && (
        <h2 style={{ textAlign: "center" }}>
          Sorry, we could not find such movie!
        </h2>
      )}
      <MovieList
        movies={searchMovies}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
};

export default MoviesPage;
