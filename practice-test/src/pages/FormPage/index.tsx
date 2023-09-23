import { TextInput } from "@/components/TextInput";
import requiredSchema from "@/utils/validation/requiredSchema";
import strAcctSchema from "@/utils/validation/strAcctSchema";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  twId: "",
};

export const FormPage = () => {
  const handleSubmit = (
    values: typeof initialValues,
    { resetForm }: FormikHelpers<typeof initialValues>
  ) => {
    alert(JSON.stringify(values));
    resetForm();
  };

  return (
    <div>
      <h2>Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          firstName: requiredSchema().max(5, "不可大於 5 個字"),
          lastName: requiredSchema().max(10, "不可大於 10 個字"),
          twId: requiredSchema().concat(strAcctSchema()),
        })}
        onSubmit={handleSubmit}
      >
        <Form>
          <TextInput name='firstName' label='firstName' type='text' />
          <TextInput name='lastName' label='lastName' type='text' />
          <TextInput name='twId' label='taiwan id' type='text' />
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
