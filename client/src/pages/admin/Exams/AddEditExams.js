import React, { useEffect } from 'react';
import PageTitle from '../../../components/PageTitle';
import { Col, Form, message, Row, Select, Table } from "antd";

function AddEditExam(){

    const onFinish = (values) => {

    }

    return (
        <div>
            <PageTitle title="Add exam" />
            <Form layout = "vertical" onFinish={onFinish}>
                <Row gutter={[10, 10]}>
                    <Col span = {8}>
                        <Form.Item label = "Exam Name" name = "name">
                            <input type = "text" />
                        </Form.Item>
                    </Col>
                    <Col span = {8}>
                        <Form.Item label = "Exam Duration" name = "duration">
                            <input type = "number" />
                        </Form.Item>
                    </Col>
                    <Col span = {8}>
                        <Form.Item label = "Category" name = "category">
                            <input type = "text" />
                        </Form.Item>
                    </Col>
                    <Col span = {8}>
                        <Form.Item label = "Total Marks" name = "totalMarks">
                            <input type = "number" />
                        </Form.Item>
                    </Col>
                    <Col span = {8}>
                        <Form.Item label = "Passing Marks" name = "passMarks">
                            <input type = "number" />
                        </Form.Item>
                    </Col>
                </Row>
                <div className='flex justify-end'>
                    <button className='primary-contained-btn' type="submit">Save</button>
                </div>
            </Form>
        </div>
    )
}

export default AddEditExam