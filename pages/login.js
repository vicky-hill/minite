import { useEffect, useState } from 'react'
import logo from '@/public/images/logo.png'
import Form, { Heading, Input, SubmitButton } from '@/components/elements/Form';

const login = ({ }) => {
    const [error, setError] = useState(null)
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const onChange = e => {
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = () => {
        console.log(values)
    }

    return (
        <div className="auth-card">
            <img className="auth-icon" src={logo.src} alt="logo" />
            <Heading>Sign into your account</Heading>
            {error && <Alert message={error} type='danger' />}
            <Form onSubmit={onSubmit}>
                <Input placeholder="Username" name="name" id="name" value={values.email} onChange={onChange} />
                <Input placeholder="Password" name="password" id="password" value={values.password} onChange={onChange} type="password" />

                <SubmitButton title="Log In" />
            </Form>
        </div>
    )
}

export default login;
