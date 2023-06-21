import React from "react";
import { Form } from "antd";

function Login(){
    return(
        <div className="flex justify-center item-center h-screen w-screen">
            <div className="card w-400 p-3">
                <div className="flex flex-col">
                    <h1 className="text-2xl">
                        Login
                    </h1>
                    <div className="divider"></div>
                    <Form layout = "vertical">
                        <Form.Item name = 'email' label = 'email'>
                            <input type = "text" />
                        </Form.Item>
                        <Form.Item name = 'password' label = 'password'>
                            <input type = "password" />
                        </Form.Item>
                        <button type="submit" className="primary-contained-btn mt-2">Login</button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login