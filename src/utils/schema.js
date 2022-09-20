import * as Yup from "yup";

export const signUpModel = Yup.object().shape({
  name: Yup.string().label("Name").required("This field is required."),
  email: Yup.string()
    .label("Email")
    .required("This field is required.")
    .email("Please enter a valid email address."),
  phone: Yup.string()
    .label("Phone number")
    .min(11, "The minimum character length is 11")
    .max(13, "The maximum character length is 13"),
  password: Yup.string()
    .label("Password")
    .required("This field is required.")
    .min(8, "Password must be at least 8 characters long."),
  repeatPassword: Yup.string()
    .label("Repeat password")
    .required("This field is required.")
    .min(8, "Password must be at least 8 characters long.")
    .when("password", {
      is: (value) => (value && value.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Passwords do not match."
      ),
    }),
});

export const signInModel = Yup.object().shape({
  email: Yup.string()
    .label("Email")
    .required("This field is required.")
    .email("Email address format is incorrect."),
  password: Yup.string()
    .label("Password")
    .required("This field is required.")
    .min(8, "Password must be at least 8 characters long."),
});

export const changePasswordModel = Yup.object().shape({
  password: Yup.string()
    .label("Password")
    .required("This field is required.")
    .min(8, "Password must be at least 8 characters long."),
  repeatPassword: Yup.string()
    .label("Repeat password")
    .required("This field is required.")
    .min(8, "Password must be at least 8 characters long.")
    .when("password", {
      is: (value) => !!(value && value.length > 0),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Passwords do not match."
      ),
    }),
});

export const recipeModel = Yup.object().shape({
  title: Yup.string().label("Title").required("This field is required."),
  ingredient: Yup.string()
    .label("Ingredient")
    .required("This field is required."),
});

export const videoPostModel = Yup.object().shape({
  title: Yup.string().label("Title").required("This field is required."),
  recipe_id: Yup.string()
    .label("Recipe ID")
    .required("This field is required."),
});

export const videoEditModel = Yup.object().shape({
  title: Yup.string().label("Title").required("This field is required."),
});

export const profileModel = Yup.object().shape({
  name: Yup.string().label("Name").required("This field is required."),
  phone: Yup.string()
    .label("Phone number")
    .min(11, "The minimum character length is 11")
    .max(13, "The maximum character length is 13"),
});

export const likerPostModel = Yup.object().shape({
  recipe_id: Yup.number()
    .label("Recipe ID")
    .required("This field is required."),
});

export const bookmarkPostModel = Yup.object().shape({
  recipe_id: Yup.number()
    .label("Recipe ID")
    .required("This field is required."),
});
