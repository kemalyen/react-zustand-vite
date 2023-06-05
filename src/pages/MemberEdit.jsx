import { getMemberRequest, updateRequest } from "../api/members";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useFormik } from 'formik';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Required';
    } else if (values.name.length > 15) {
        errors.name = 'Must be 15 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};

function MemberEdit() {
    let { id } = useParams();
    const navigate = useNavigate();
    const {
        data: member,
        isLoading,
        error,
    } = useQuery(["member", id], getMemberRequest, id);
    
    const queryClient = useQueryClient();
    const mutation = useMutation(updateRequest, {
      onSuccess: () =>
        queryClient.setQueriesData(["member"], (old) =>
          //old.filter((n: Note) => n._id !== note._id)
          console.log(old)
        ),
    });    
    
    const [user, setUser] = useState('')

    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>Error: {error.message} </div>;

/* 
    useEffect(() => {
        return () => setUser(member)
    }, [member])
 */
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: member.id,
            name: member.name,
            email: member.email
        },
        validate,
        onSubmit: values => {
            mutation.mutate(values); 
            navigate(`/members/${values.id}`);
        },
    });


    return (
        <div className="row">
            <div className="col-10 col-md-8 col-lg-6">

                <form onSubmit={formik.handleSubmit}>
                    <label className="form-label" htmlFor="name">Name</label>
                    <input
                        className="form-control"
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div>{formik.errors.name}</div>
                    ) : null}

                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input
                        className="form-control"
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}

                    <button className="btn btn-sm btn-primary m-2" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default MemberEdit;