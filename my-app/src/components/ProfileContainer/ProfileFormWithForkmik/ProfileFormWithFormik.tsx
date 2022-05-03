import React from 'react';
import { Formik } from 'formik';
import { IUser } from '../../../features/users/types';

export interface ProfileState {
  name: string;
  username: string;
  email: string,
  street: string,
  city: string,
  zipcode: string,
  phone: string,
  website: string,
  textarea: string
}

interface ProfileFormProps  {
  data: IUser
}


const ProfileFormWithFormik: React.FC<ProfileFormProps> = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Formik
        initialValues={{ name: "", username: "" }}
        validate={values => {
          const errors:any = {};
          if (!values.name) {
            errors.name = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.name)
          ) {
            errors.name = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && errors.name}
            <input
              type="username"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />

            {errors.username && touched.username && errors.username}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default ProfileFormWithFormik;