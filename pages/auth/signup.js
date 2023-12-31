// import React from "react";
// import Link from 'next/link';
// import { useFormik } from "formik";
// import * as yup from "yup";
// import { authentication } from "@/settings/firebase.setting";
// import { createUserWithEmailAndPassword } from "firebase/auth";

// //validation rules

//   const validationRules = yup.object().shape({
//     email: yup
//       .string()
//       .required("This field is compulsory")
//       .max(4, "This mustn't be more than 36"),
//     password: yup
//       .string()
//       .required()
//       .min(8)
//       .max(36, "This mustn't be more than 36")
//       .oneOf(
//         [yup.ref("passwordConfirmation"), null],
//         "Your password must match"
//       ),
//   });

// export default function SignUp() {
//   const handleGoogleEmailPasswordCreateAccount = async (authentication, userEmail, Password) = {
//     createUserWithEmailAndPassword(authentication, uPassword)
//     .then((user) => {
//       console.log(user)
//     })
//     .catch((error) => console.error(error))
//   }

//   const { handleBlur, handleSubmit, handleChange, errors, touched, values } =
//     useFormik({
//       initialValues: { email: "", password: "", passwordConfirmation: "" },
//       onSubmit: (values) => {
//         //create user account

//         handleGoogleEmailPasswordCreateAccount(values.email, values.password)

//         console.log(values.email);
//         console.log(values.password);
//       },
//       validationSchema: validationRules,
//     });
//   return (
//     <>
//       <main className="h-screen container flex justify-center items-center ">
//         <div className="w-[500px] sm:min-h-[480px] flex flex-col gap-5">
//           <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
//             <input
//               id="email"
//               type="email"
//               value={values.email}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               placeholder="Email address"
//               className="py-3 sm:py-5 px-2 border border-indigo-400 rounded-lg bg-white/60"
//             />
//             {errors.email && touched.email ? (
//               <span className="text-red-500">{errors.email}</span>
//             ) : null}
//             <input
//               id="password"
//               type="password"
//               value={values.password}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               placeholder="Password"
//               className="py-3 sm:py-5 px-2 border border-indigo-400 rounded-lg bg-white/60"
//             />
//             {errors.password && touched.password ? (
//               <span className="text-red-500">{errors.password}</span>
//             ) : null}

//             <input
//               id="passwordConfirmation"
//               type="password"
//               value={values.passwordConfirmation}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               placeholder="confirm Password"
//               className="py-3 sm:py-5 px-2 border border-indigo-400 rounded-lg bg-white/60"
//             />
//             <button className="max-w-[160px] h-12 bg-indigo-800 rounded-lg text-white font-bold">
//               Create Account
//             </button>
//           </form>

//           <div className="w-full grid grid-cols-2 gap-3">
//             <button
//               type="submit"
//               className="w-full h-12 bg-green-600 rounded-lg text-white font-bold"
//             >
//               Google
//             </button>
//             <button className="w-full h-12 bg-sky-600 rounded-lg text-white font-bold">
//               Twitter
//             </button>
//           </div>

//           <p className="text-2xl text-white">
//             New to facepal?{" "}
//             <Link href="#" className="underline">
//               create account
//             </Link>
//           </p>
//         </div>
//       </main>
//     </>
//   );
// }
