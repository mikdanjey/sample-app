import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { schema } from "./validationSchema";
import { ErrorMessage } from "./ErrorMessage";

export const App = () => (
  <div>
    <h1>Nested Form</h1>
    <Formik
      initialValues={{ friends: [{ name: "", age: "" }] }}
      validationSchema={schema}
      onSubmit={(values) =>
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500)
      }
      render={({ values, errors }) => (
        <Form>
          <FieldArray
            name="friends"
            render={(arrayHelpers) => (
              <div>
                {values.friends.map((friend, index) => (
                  <div key={index}>
                    <b>Name: </b>
                    <Field name={`friends[${index}].name`} />
                    <ErrorMessage name={`friends[${index}].name`} />

                    <label> Age: </label>
                    <Field name={`friends[${index}].age`} />
                    <ErrorMessage name={`friends[${index}].age`} />
{" "}
                    <button
                      type="button"
                      onClick={() => arrayHelpers.remove(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <br/>
                <button
                  type="button"
                  onClick={() => arrayHelpers.push({ name: "", age: "" })}
                >
                  Add
                </button>
                <div>
                  <br />
                  <button type="submit">Submit</button>
                </div>
              </div>
            )}
          />
        </Form>
      )}
    />
  </div>
);
export default App;
