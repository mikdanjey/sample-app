import * as Yup from "yup";

export const schema = Yup.object().shape({
  friends: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required("Required"), // these constraints take precedence
        age: Yup.string().required("Required"), // these constraints take precedence
      })
    )
    .required("Must have friends") // these constraints are shown if and only if inner constraints are satisfied
    .min(1, "Minimum of 1 friends"),
});
